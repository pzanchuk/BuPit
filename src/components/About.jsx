import React from "react";

function About(){
  return (
    <div>
      <style jsx>{`
        .main-about {
          background: #3A4750;
          height: 750px;
          padding: 0 100px 0 100px;
        }

        .address{
          width: 50%;
          float: left;
        }

        .form{

          float: right;
        }

        input{
          text-size: 20px;
          padding:10px;
          margin: 0 10px 10px 0;
          width: 400px;
          height: 40px;
        }

        textarea{
          padding: 10px;
          resize: none;
          width: 400px;
          height: 180px;
        }

        .adr-and-form{
          margin-top: 50px;
        }

        h2{
          padding-top: 20px;
          margin-top: 5px;
        }

        button{
          padding: 12px 28px;
          background-color: #EA9215;
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      `}</style>

      <div className="main-about">
        <div>
          <h2>Where to find us</h2>
          <h3>Visit us today</h3>
          <p>We are Located in the heart of Bellevue in Lincoln Square North
          (NE 8th St. & Bellevue Way), street level location, easy access from nearby hotels, shopping and theaters.
           Parking is validated for the Lincoln Square North parking garage.</p>
        </div>
        <div className="adr-and-form">
          <div className="address">
            <p>700 Bellevue Way NE Suite 100 Bellevue, WA 98004</p>
            <p>(425) 773-8080</p>
            <p>bupit@gmail.com</p>
          </div>
          <div className="form">
            <input placeholder="Full Name"/><br/>
            <input placeholder="Email"/><br/>
            <input placeholder="Your Phone Number"/><br/>
            <textarea placeholder="Message"/><br/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
