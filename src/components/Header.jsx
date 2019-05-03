import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import headerImage from '../assets/images/beers-header.jpg';

function Header(){

  const link = {
    textDecoration: 'none'
  }

  return (
    <div>
      <style jsx>{`
        img{
          height: 230px;
        }

        .left-image{
          padding: 0;
          margin: 0;
          float: left;
        }

        .right-image{
          padding: 0;
          margin: 0;
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
          padding: 14px 28px;
          text-decoration: none;
        }

        li a:hover {
          color: #3A4750;
          background-color: #EA9215;
        }

        .admin{
          float: right;
        }

        .admin a:hover{
          background-color: #ea6d15;
        }


      `}</style>


      <div className="images">
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
          <li><Link to="/" style={link}><a>Home</a></Link></li>
          <li><Link to="/menu" style={link}><a>Menu</a></Link></li>
          <li><Link to="/contact" style={link}><a>Contact</a></Link></li>
          <li><Link to="/about" style={link}><a>About</a></Link></li>
          <li className="admin"><Link to="/newbeer" style={link}><a>Admin</a></Link></li>
        </ul>
      </div>
    </div>

  );
}

export default Header;
// #EA9215
