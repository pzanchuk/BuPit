import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import headerImage from '../assets/images/beers-header.jpg';

function Header(){
  return (
    <div>
      <style jsx>{`
        .main-header{
          background-color: #2f3a42;
          width: 1220px;
          margin: 0 auto;
        }

        .left-image img{
          height: 230px;
        }

        .right-image img{
          height: 230px;
        }

        .left-image{
          float: left;
        }

        .right-image{
          float:right;
        }

        .left-image > p{
          font-stretch: ultra-expanded;
          font-style: oblique;
          margin-top: 85px;
          margin-left: 135px;
          color: #3A4750;
          font-size: 13px;

          font-family: "Bodoni MT";
          position:absolute;
        }

        ul {
          margin: 0px;
          list-style-type: none;
          overflow: hidden;
          background-color: #3A4750;
        }

        li {
          float: left;
        }

        li a {
          display: block;
          color: #ffedd3;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        li a:hover {
          color: #3A4750;
          background-color: #EA9215;
        }
      `}</style>


      <div className="main-header">
        <div>
          <div className="left-image">
            <p>T h e &nbsp; S o u l &nbsp; of &nbsp; F r i e n d s h i p</p>
            <img src = {logo}/>
          </div>
          <div className="right-image">
            <img src = {headerImage}/>
          </div>
        </div>
        <div className="nav-bar">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Contact</a></li>
          <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Header;
// #EA9215
