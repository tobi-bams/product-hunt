import React, { Component } from 'react';

import classes from './SignIn.module.css';
import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';


class SignIn extends Component {

    state = {
        signInForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                    required: true
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password',
                    required: true
                },
                value: ''
            }
        } 
    }

    onchangeHandler = (event, element) => {
        const copiedSignInForm = {...this.state.signInForm};

        const copiedchangedElement = {...copiedSignInForm[element]};

        copiedchangedElement.value = event.target.value;
        copiedSignInForm[element] = copiedchangedElement;
        this.setState({signInForm: copiedSignInForm});
    }

    render () {

        let formElements = [];

        for(let key in this.state.signInForm) {
            formElements.push({
                id: key,
                config: this.state.signInForm[key]
            });
        }

        let form = (
            <form className = {classes.SignInForm}>
                <h2>Sign In</h2>
                {formElements.map((formElement) => {
                    return <Input key = {formElement.id} 
                            elementType = {formElement.config.elementType}
                            elementConfig = {formElement.config.elementConfig}
                            value = {formElement.config.value}
                            label = {formElement.id}
                            changed = {(event) => this.onchangeHandler(event, formElement.id)}/>
                })}
                <div className = {classes.ButtonContainer}>
                    <Button >Sign In</Button>
                </div>
            </form>
        )
        return (
            <div className = {classes.FormContainer}>
                {form}
            </div>
        );
    }
}

export default SignIn;