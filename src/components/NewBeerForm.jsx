import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
// import Moment from 'moment';
// import buttonImage from '../assets/images/button.png';

function NewBeerForm(props){

  let _name = null;
  let _alcohol = null;
  let _price = null;
  let _description = null;
  

  function handleNewBeerForm(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: _name.value, alcohol: parseDouble(alcohol.value), price: parseDouble(_price.value), description: _description.value, id: v4()});
    _name.value = '';
    _alcohol.value = '';
    
  }

  return (
    <div>
      <hr/>
      <style jsx>{`

      `}</style>

      <form onSubmit={handleNewBeerForm}>
        <h3>Add new Beer</h3>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}} />
          <br/>
        <input
          type='number'
          id='alcohol'
          placeholder='Alc. by vol.'
          ref={(input) => {_alcohol = input;}} />
          <br/>
        <input
          type='number'
          id='price'
          placeholder='Price per pint'
          ref={(input) => {_price = input;}} />
          <br/>
        <textarea
          id='description'
          placeholder='Beer description'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
};

export default NewBeerForm;