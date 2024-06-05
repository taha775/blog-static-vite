import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* About Content */}
            <div className="about-content">
                {/* About Main */}
                <div className="about-main">
                    <div className="about-heading">
                        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">About <span className="text-blue-500">Us</span></h1>
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris vel sapien tempus, eu dapibus magna molestie.</p>
                    </div>

                    {/* About Details */}
                    <hr className="my-8 border-b-2 border-blue-500" />
                    <div className="about-details">
                        <div className="container">
                            <div className="about-sections grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Section 1: Our Story */}
                                <div className="about-section">
                                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Our Story</h2>
                                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">We are a passionate team of bloggers dedicated to sharing valuable content with our audience. Our journey began in [year] with a mission to [mission statement].</p>
                                </div>

                                {/* Section 2: Our Values */}
                                <div className="about-section">
                                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Our Values</h2>
                                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">At [Website Name], we prioritize integrity, authenticity, and creativity in everything we do. We believe in fostering a community of [describe community] and empowering our readers to [describe empowerment goal].</p>
                                </div>

                                {/* Section 3: Meet Our Team */}
                                <div className="about-section">
                                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Meet Our Team</h2>
                                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">Our team consists of skilled writers, editors, and designers who are passionate about [topic]. Together, we strive to deliver engaging content that resonates with our audience.</p>
                                </div>

                                {/* Section 4: Contact Us */}
                                <div className="about-section">
                                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Contact Us</h2>
                                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">If you have any questions, suggestions, or collaboration inquiries, feel free to reach out to us at [contact email or form link]. We'd love to hear from you!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
