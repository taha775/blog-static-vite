import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import { db, storage } from '../../Config/Firebase'; // Ensure your Firebase configuration is correctly imported
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const Post = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const categories = ['Technology', 'Health', 'Education', 'Entertainment','News','Sports','Buisness','AI'];
  const { uid } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userdata = query(collection(db, 'users'), where('uid', '==', uid)); // Query to fetch user document by uid
        const querySnapshot = await getDocs(userdata);

        querySnapshot.forEach((doc) => {
          setUser(doc.data()); // Set user state with document data
        });
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (uid) {
      fetchUserData();
    }
  }, [uid]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (value) => setContent(value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleImageChange = (e) => setImageUpload(e.target.files[0]);

  const uploadFile = async () => {
    if (!imageUpload) return;
    const storageRef = ref(storage, `images/${imageUpload.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      console.log('Image uploaded successfully:', url);
      setImageUrl(url);
      return url; // Return the URL after upload
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check required fields
    if (!title || !content || !category || !imageUpload) {
      console.error('Required fields are missing!');
      setError('All fields are required.');
      return;
    }

    try {
      setStatus('loading');

      // Upload image and get URL
      const uploadedImageUrl = await uploadFile();
      if (!uploadedImageUrl) {
        console.error('Image upload failed!');
        setError('Image upload failed.');
        setStatus('failed');
        return;
      }

      const postData = {
        uid: user?.uid, // Ensure the uid from the user document is used
        title,
        content,
        category,
        imageUrl: uploadedImageUrl, // Use the URL from the upload
        date: new Date().toISOString(),
      };

      await addDoc(collection(db, 'posts'), postData);

      setTitle('');
      setContent('');
      setCategory('');
      setImageUpload(null);
      setImageUrl('');

      setStatus('idle');
      setError(null);

      console.log('Post submitted successfully:', postData);
    } catch (error) {
      console.error('Error submitting post:', error);
      setStatus('failed');
      setError('Error submitting post');
    }
  };

  return (
    <div className="post-container">
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div className="field">
          <label>Content</label>
          <JoditEditor ref={editor} value={content} onChange={handleContentChange} />
        </div>
        <div className="field">
          <label>Category</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Image</label>
          <input type="file" onChange={handleImageChange} />
          <button type="button" onClick={uploadFile}>Upload Image</button>
        </div>
        <button type="submit">Submit</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      )}
    </div>
  );
};

export default Post;
