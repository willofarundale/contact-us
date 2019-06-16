import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createContact } from '../actions';

class ContactUs extends Component {

    renderError({error,touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ( {input, label, meta} ) => {
        const className= `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>  
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createContact(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field label="Enter Name:" name="name" component={this.renderInput}/>
                <Field label="Enter Email:" name="email" component={this.renderInput}/>
                <Field label="Enter Message:" name="message" component={this.renderInput}/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
   
    if (!formValues.name) {
      errors.name = "Please enter your name";
    }
   
    if (!formValues.email) {
      errors.email = "Please enter your email";
    }

    if(!formValues.message) {
      errors.message = "Please enter a message"
    }

    return errors;
  };

// "Connect" form Component to redux-form
const formWrapped = reduxForm({
    form: 'contactUs',
    validate
})(ContactUs);


export default connect(null, {createContact})(formWrapped);