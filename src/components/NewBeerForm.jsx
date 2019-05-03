import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
// import Moment from 'moment';
// import buttonImage from '../assets/images/button.png';

function NewBeertForm(props){

  let _name = null;
  let _alcohol = null;
  let _description = null;

  function handleNewBeerForm(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: _name.value, alcohol: _alcohol.value, description: _description, id: v4()});
    _name.value = '';
    _alcohol.value = '';
    _description.value = '';
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
          type='text'
          id='alcohol'
          placeholder='alcohol'
          ref={(input) => {_alcohol = input;}} />
          <br/>
        <textarea
          id='description'
          placeholder='Describe this beer.'
          ref={(textarea) => {_description = textarea;}} />
          <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;