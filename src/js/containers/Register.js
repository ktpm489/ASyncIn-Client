import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {registerRequest} from '../actions/actions';
import Feedback from './Feedback';
import { Field, reduxForm } from 'redux-form';

// RegisterForm = reduxForm({
//     form: 'register'
// })(RegisterForm)

class Register extends Component {
    state = {error: false}
    onSubmitRegister (event) {
        event.preventDefault();
        if (this.refs.passwordText.value === this.refs.confirmPasswordText.value){
            
       		this.props.onSubmitRegisterDispatch(this.refs.emailText.value, this.refs.displayNameText.value, this.refs.passwordText.value);
            this.refs.displayNameText.value = "";
            this.refs.passwordText.value = "";
            this.refs.confirmPasswordText.value = "";
            this.refs.emailText.value = "";
        }
        else {
            this.setState({error: true})
        }
    }
    
    renderFeedback() {
        if(this.state.error) {
            return  <Feedback feedback={'password do not match'} />
        } else {
            <div></div>
        }
    }
    
    render () {
        return (
            <div className="Register-page">
                <form className="Register-form">
                    <legend>Fill out the Form, Asshole.</legend>
                    
                    
                    <span className="email">Email Address:</span>

                    <input type="email" id="email-input" className="input" ref="emailText" required />

                    <span className="username">Create Display Name:</span>

                    <input type="text" id="displayName" className="input" ref="displayNameText" required />
                    
                    <span className="password">Create Password:</span>

                    <input type="password" className="input" name="password" ref="passwordText" required />

                    <span className="password">Verify Password:</span>

                    <input type="password" className="input" name="password" ref="confirmPasswordText" required />
                    
                    {this.renderFeedback()}

                    <button id="register-button" onClick={this.onSubmitRegister.bind(this)} className="register-button">Submit</button>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitRegisterDispatch: function(email, displayName, password) {
            console.log('inside')
            dispatch(registerRequest(email, displayName, password));
        }
    };
}


export default connect(null, mapDispatchToProps)(Register);
