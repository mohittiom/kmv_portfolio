import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">Konatala Mohit Vinayak</h1>
        <p className="text-center text-gray-600 mt-2">Machine Learning Enthusiast | Software Developer</p>
        
        <div className="mt-6 border-t pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">About Me</h2>
          <p className="text-gray-600 mt-2">
            A recent B.Tech graduate skilled in C, C++, Java, and Python. Passionate about technology, networking, and machine learning. 
            Completed an internship as a Machine Learning Engineer at Appleton Innovations, gaining hands-on experience in AI model development.
          </p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">Mini Project</h2>
          <p className="text-gray-600 mt-2">
            <strong>Credit Card Approval Prediction</strong>
            <br />
            Developed a machine learning model to predict the approval of credit card applications based on applicant data. 
            Utilized Python, Scikit-learn, Pandas, and Flask for deployment.
          </p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">Contact</h2>
          <p className="text-gray-600 mt-2">
            📧 Email: <a href="mailto:kmohitvinayak2803@gmail.com" className="text-blue-600">kmohitvinayak2803@gmail.com</a>
            <br />📍 Visakhapatnam, India
            <br />📞 Phone: +91 9701250590
            <br />🔗 <a href="https://github.com/yourusername" className="text-blue-600">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
