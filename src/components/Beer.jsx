import React from "react";
import PropTypes from "prop-types";

function Beer(props){
  return (
    <div className="wrapper">
      <style jsx>{`
        .wrapper{
          padding-left: 10px;
          margin-top: 5px;
          background-color: #3A4750;
          
        }

        h1, h2{
          margin: 0;
          padding: 10px;
        }

    

      `}</style>
      <div>
        <h1>{props.name}</h1>
        <h2>Alc. by Vol.: {props.alcohol}%</h2>
        <h2>Price: ${props.price}</h2>
        <h2>Description: {props.description}</h2>
      </div> 
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  alcohol: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string
};

export default Beer;