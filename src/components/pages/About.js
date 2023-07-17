import React, {Component} from 'react';
import profilePic from '../../ProfilePickGreyscale.jpg'
import GithubPic from "../../Github.png"
import LinkedInPic from "../../LinkedIn.png"
import "../../styles/About.css"


class App extends Component {
  render(){
    const About={
  backgroundImage:`url(${process.env.PUBLIC_URL+ "Geometric.png"})`,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
    return (
    <div style = {About}>
      <h1 className= "text-center">Sidney Edwards</h1>
      <p>
      With my background in IT Operations, software troubleshooting, project management, and upcoming certification in Full Stack Web Development, I am now seeking to further my experience as a Junior Developer.
      In my current role as an I.T. Operations Buyer at International Paper, I have successfully worked with cross functional IT Teams to source IT business solutions. Additionally, I have worked with major IT vendors, learning their development processes. I have a proven track record of success in collaborating with various levels of IT corporate management.
      In my previous role as a Business Process Specialist, I developed solutions to supply chain system and process failures, troubleshooting and diagnosing supply chain software issues. I also designed and monitored bots, enhancing operational efficiency. Through these experiences, I have developed a strong aptitude for problem-solving and critical thinking, which I believe will be valuable in a Junior Developer role.
      I am currently pursuing a Full Stack Web Development Certification at Vanderbilt University. This program has equipped me with technical competencies in full-stack web development including HTML, CSS, SQL, NoSQL, Sequelize, JavaScript, React, Web APIs, Server-Side APIs, Server-Side APIs, Mongo DB, Express, Apollo Client, GraphQL, Workbox, VS Code, Object Relational Mapping, Node.js, Bootstrap, MUI UI Library, Insomnia, Handlebars, and importantly, IT project management skills. I am highly motivated to continue expanding my knowledge and skills, and I am eager to contribute.
      I am confident that my skills, passion for learning, and collaborative mindset make me an excellent fit for a Junior Developer position. 
      </p>

  <div className="head-shot">
      <img src= {profilePic} alt= "Profile" />
  </div>

  <h4 className= "Find-Me">Find me on GitHub and LinkedIn!</h4>

  <div className = "card-footer">
  <a href= "https://github.com/SidneyEdwards">
  <img class= "img" src= {GithubPic} alt= "Github" />
  </a>
<a href= "www.linkedin.com/in/sidney-edwards-48a0b2173">
<img src= {LinkedInPic} alt= "LinkedIn" />
</a>
</div>
</div>
  );
  }
};



export default App;


