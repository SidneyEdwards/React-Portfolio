import React from 'react';
import QRYouPic from "../../Screenshot 2023-04-09 132046.png"
import GreenPagePic from "../../Screenshot 2023-06-05 115407.png";
import "../../styles/Work.css"

export default function MyWork() {
  return (
  <div class="card">
      <div class="card-body background-color: #e3f2fd">
        <h1 class="card-title text-center">Recent Work</h1>
      <h5 class="card-text lg text-center">
      Check Out What I Have Been Getting Into Lately!</h5>

      <h5 className= "mb-1 text-center">
    <a href= "https://frozen-castle-12259.herokuapp.com/"> Project Green Page</a>
</h5>
<div className="Book-Ends">
<img src= {GreenPagePic} alt= "Project Book-Ends Screen-Shot" />
</div>

<h5 className= "mb-1 text-center">
        <a href= "https://sidneyedwards.github.io/purple-moon-pie/"> Project QR You</a>
</h5>
<div className="QRYou">
<img src= {QRYouPic} alt= "Project QRYou Screen-Shot" />
</div>
<div>
            Github: https://github.com/SidneyEdwards
    </div>
    <div>
            LinkedIn: www.linkedin.com/in/sidney-edwards-48a0b2173
    </div>
      </div>
      </div>
)};