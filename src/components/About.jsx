import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pl-4">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-8">
          Hello, I'm Sampada Kadam, currently working as a trainee at Ank IT Solution Pvt. Ltd. My primary focus is on developing websites using React.js and Tailwind CSS. With a solid foundation in SQL, Linux, GitLab, HTML, CSS, JavaScript, and Core Java, I bring a diverse skill set to my work.
        </p>
        <br/>
        <p className="text-xl">
          Prior to my current role, I served as an electrical estimation and design engineer, where I gained valuable experience in technical analysis and problem-solving. My transition into web development has allowed me to explore my passion for technology and creativity. In my free time, I indulge in drawing, finding it to be a fulfilling creative outlet. I am enthusiastic about learning new things and continuously expanding my knowledge and skills. I am excited about the opportunity to contribute to innovative projects and collaborate with talented professionals in the field of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
