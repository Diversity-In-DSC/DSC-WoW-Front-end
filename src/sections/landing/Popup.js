import React from 'react';
import './popup.css';

class Popup extends React.Component {
  render() {
    return (
        <div className='popup'>
        <div className="login__container">
                <h1>Register Here</h1>

                <form>
                    <h5>Name</h5>
                    <input type='text' />
                    <h5>Email</h5>
                    <input type='text' />

                    <button className="login__signinbutton" type='submit' >Register now</button>

                   

                </form>
            </div>
             <button className="close" type='submit' onClick={this.props.closePopup}>X</button>
      </div>
    );
  }
}

export default Popup;