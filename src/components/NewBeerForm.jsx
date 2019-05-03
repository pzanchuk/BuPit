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
    props.onNewBeerCreation({name: _name.value, alcohol: parseFloat(alcohol.value), price: parseFloat(_price.value), description: _description.value, id: v4()});
    _name.value = '';
    _alcohol.value = '';
    _price.value = '';
    _description.value = '';
    
  }

  return (
    <div>
      <style jsx>{`
        background: #3A4750;
        

        input{
          background: white;
          width: 200px;
          margin-top: 10px;
          padding: 10px;
        }

        textarea{
          resize: none;
          background: white;
          width: 200px;
          margin-top: 10px;
          padding: 10px;
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

        form{
          margin-left: 10px;
          margin-top: 5px;
        }

        h3{
          color: white;
          padding-top: 15px;
          margin: 0;
        }
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
          type='text'
          id='alcohol'
          placeholder='Alc. by vol.'
          ref={(input) => {_alcohol = input;}} />
          <br/>
        <input
          type='text'
          id='price'
          placeholder='Price per pint'
          ref={(input) => {_price = input;}} />
          <br/>
        <textarea
          id='description'
          placeholder='Beer description'
          ref={(textarea) => {_description = textarea;}}/>
          <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
};

export default NewBeerForm;