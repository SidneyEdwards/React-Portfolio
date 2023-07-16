import React from 'react';
import profilePic from '../../ProfilePickGreyscale.jpg'
import GithubPic from "../../Github.png"
import LinkedInPic from "../../LinkedIn.png"


function About() {
  return (
    <div>
      <h1>Sidney Edwards</h1>
      <p>
      With my background in IT Operations, software troubleshooting, project management, and upcoming certification in Full Stack Web Development, I am now seeking to further my experience as a Junior Developer.
I have a proven track record of success in collaborating with various levels of IT corporate management. In my current role as an I.T. Operations Buyer at International Paper, I have successfully worked with cross functional IT Teams to source IT business solutions. Additionally, I have worked with major IT vendors, learning their development processes.
In my previous role as a Business Process Specialist, I developed solutions to supply chain system and process failures, troubleshooting and diagnosing supply chain software issues. I also designed and monitored bots, enhancing operational efficiency. Through these experiences, I have developed a strong aptitude for problem-solving and critical thinking, which I believe will be valuable in a Junior Developer role.
What sets me apart is my willingness to learn and my aptitude for teamwork. I am currently pursuing a Full Stack Web Development Certification at Vanderbilt University, where I have maintained a perfect GPA. This program has equipped me with technical competencies in full-stack web development including HTML, CSS, JavaScript, Web APIs, NodeJS, SQL, NoSQL, Express, Handlebars, React, and importantly, IT project management skills. I am highly motivated to continue expanding my knowledge and skills, and I am eager to contribute.
I am confident that my skills, passion for learning, and collaborative mindset make me an excellent fit for a Junior Developer position. 
      </p>
<div className="head-shot">
<img src= {profilePic} alt= "Profile" />
</div>
<div className="Github">
<img src= {GithubPic} alt= "Github" />
</div>
<div className="LinkedIn">
<img src= {LinkedInPic} alt= "LinkedIn" />
</div>
      
    </div>
  );
}
export default About;

