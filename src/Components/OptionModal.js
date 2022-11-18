import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   
   <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}//triggers if clic background or press esc
        contentLabel="Selected Option" //for accesibility users
        closeTimeoutMS={200}//property in Modal for closing animation 
        className='modal' //Modal with class name asign allows you to style it
   >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button'onClick={props.handleClearSelectedOption}>OK</button>
   </Modal>
);


export default OptionModal;