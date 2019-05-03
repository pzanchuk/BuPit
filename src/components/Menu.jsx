import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function Menu(props){
  // console.log("Menu"+props);
  
  return (
    <div>
      <style jsx>{`
        .main-menu {
          color: white;
        }
      `}</style>

      <div className="main-menu">
        {props.beerList.map((beer) =>
          <Beer name={beer.name}
            alcohol={beer.alcohol}
            price = {beer.price}
            description = {beer.description}
            key={beer.id}/>
        )}
      </div>
    </div>

  );
}

Menu.propTypes = {
  beerList: PropTypes.array,
};

export default Menu;
