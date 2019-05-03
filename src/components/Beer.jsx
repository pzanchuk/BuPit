import React from "react";
import PropTypes from "prop-types";

function Beer(props){
  return (
    <div>
      <style jsx>{`

      `}</style>

      <h3>{props.name}</h3>
      <h2>{props.alcohol}</h2>
      <h2>{props.price}</h2>
      <h2>{props.description}</h2>
      
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