import React from "react";
import aboutImage from '../assets/images/about.jpg';

function About(){
  return (
    <div className="main-about">
      <style jsx>{`
        .main-about{
          margin-top: 5px;
          color: white;
          background: #3A4750;
          height: 400px;
        }
        .left{
          position: inline-box;
          margin-top: 50px;
          padding-left: 10px;
          float: left
        }

        .right{
          width:49%;
          position: inline-box;
          padding-left: 10px;
          margin-top: 50px;
          float: left;
        }

        p{
          margin 0;
        }
      `}</style>
      <div className="left">
        <img src = {aboutImage}/>
      </div>
      <div className="right">
      <p>Irish owned and operated we work to bring a “bit of Ireland” to Bellevue.
      We are a family owned, family friendly, full service restaurant featuring “made from scratch” Irish and American favorites.
      Along with an extensive whiskey collection, imported beers and local brews.
      Paddy Coyne’s Bellevue offers a full, varied drink menu including a “must experience” proper pint of Guinness.<br/><br/>
      Reservations are available for larger parties and outdoor seating available when the sun is out. Open for lunch and dinner seven days a week and breakfast every weekend.
      For a “Bit of Ireland” in the heart of Bellevue, visit Paddy Coyne’s Bellevue. </p>
      </div>
    </div>
  );
}

export default About;
