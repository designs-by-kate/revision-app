
//import React from 'react';
// import { Link } from "react-router-dom";
import './Home1.css'; // Importing the CSS module
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import img from './code-craft-home.jpg';

function HomePage() {
  return (
    <div className="homePage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <img src={img} alt="..." style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="card-body">
              <h2 className="card-title text-center">Welcome to Code Academy!</h2>
              <p >Here is your current progress.</p>
              <ProgressBar />
              <p>Utilize the provided tools to refresh your knowledge and take another QUIZ to assess your progress!</p>
              <p>Use our code snippets, watch the tutorials, and download the CheatSheet to revise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;



