import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import { useState } from 'react';

const Header = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const buttonData = [
      {
        id: 1,
      name: 'Skills',
        content: <div className='content'>
           <Table skillsData={skillsData} />
        </div>
      },
      {
        id: 2,
        name: 'Experience',
        content: <div className="experience-container"> 
        
        <h2>GuideOne Insurance Company | Software Developer Aug 2021– Present.</h2>
        <>Developed an integrated application providing a comprehensive environment for account management, policy
  changes/renewals, monthly premium dues alerts, and claims processing status. Leveraged a diverse technology stack
  to deliver a user-friendly and efficient solution.</>
  
        <li><h2>ADK Technologies pvt Ltd| AWS Cloud Engineer April 2019– July 2021</h2></li>
        <>Client: C.E.Info Systems is a leading company in providing the map services to the mobile platform and web
  applications. One message is the system that map my india uses to send communications to its customers. One
  message is the Enterprise-Wide application for all transactional customer communications. Achieved efficient
  business operations for shop owners by enabling CRUD operations for sales and purchase tracking, and reporting
  through a user-friendly interface.</>
        </div>
      },
      
      {
        id: 3,
        name: 'Certification',
        content: <div className="profile-container">
        <img src="/aws-academy-graduate-aws-academy-data-analytics (1).png" alt="Profile" className="certify" />
        <img src="/aws-certified-cloud-practitioner (1).png" alt="Profile" className="certify" />
        </div>
      }
    ];
  
    return (
      <header>
      <div className="header-background">
          <div className="profile-container">
            <img src="/IMG_6735.png" alt="Profile" className="profile-photo" />
            <div className="profile-info">
              <h2>Vijaya Rama Rao</h2>
              <p style={{ fontSize: '13px' }}>sunkaravijaya98@gmail.com |+1 (913) 206-0797</p>
                <p>Software Engineer</p>
            </div>
       </div> 
       <div className="about-container">
          <h2>About Me</h2>
          <p style={{ textAlign: 'center' }}>
          Experienced Java Developer with a strong background in web development, microservices architecture, and Agile
  methodologies. My expertise lies in React.js, JavaScript, and I can craft reusable components that work flawlessly
  across platforms. I prioritize code quality and efficient workflows. I'm a master of version control, accessibility,
  testing, and Agile practices, ensuring smooth sailing throughout the development cycle. Skilled in designing and
  implementing RESTful APIs, optimizing application performance, and ensuring robust data management.
  Collaboration is my jam! I thrive in team environments and constantly strive to improve deployment processes.
  Seeking a challenging role in a company where I can leverage my skills to build impactful web solutions.
          </p>
        </div>
        </div>
        <div className="button-container">
          {buttonData.map(button => (
            <button
              key={button.id}
              onClick={() => setSelectedButton(button.id)}
              className={selectedButton === button.id ? 'active' : ''}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className="display-container">
          {buttonData.map(button => (
            <div key={button.id} style={{ display: selectedButton === button.id ? 'block' : 'none' }}>
              {button.content}
            </div>
          ))}
        </div>
        
  
      </header>
      
    );
      }
        const Table = ({ skillsData }) => {
          const columns = [
            {
              Header: "Web Technologies",
              accessor: "name",
            },
            {
              Header: "HTML, CSS, JavaScript,, Java, Spring, GraphQL, JSON, DOM",
              accessor: "level",
            },
          ];
        
          return (
            <table>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.Header}>{column.Header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {skillsData.map((skill) => (
                  <tr key={skill.name}>
                    <td>{skill.name}</td>
                    <td>{skill.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        };
        
        const skillsData = [
          //{ name: "", level: "" },
          { name: "JS libraries / Frameworks", level: "ReactJS, Vue.js, JavaScript, AngularJS, Node.js, jQuery, Spring Boot" },
          { name: "Version Control/Project Management", level: "Git, Bitbucket, Jira" },
          { name: "Databases", level: "Jest, Junit, Cypress, Jasmine, Log4j" },
          { name: "Cloud", level: "AWS,Azure" },
        ];
      
export default Header;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header/>
);

