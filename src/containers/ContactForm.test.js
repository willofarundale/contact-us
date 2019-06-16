import React from 'react';
import { mount } from 'enzyme';
import ContactForm from './ContactForm';

import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

describe('ContactForm', ()=> {

  let store = createStore(combineReducers({form:formReducer}))
  let onSubmit = jest.fn
  let props = { onSubmit }

  let wrapper = mount(
    <Provider store={store}>
        <ContactForm {...props}/>
    </Provider>
  )

  //Testing Errors
  it('shows error text when name is touched',()=> {
    const input = wrapper.find('input').at(0);
    input.simulate('blur')
    const nameError = wrapper.find('.header');
    expect(nameError.contains('Please enter your name')).toEqual(true)
  })

  it('shows error text when email is touched',()=> {
    const input = wrapper.find('input').at(1);
    input.simulate('blur')
    const nameError = wrapper.find('.header');
    expect(nameError.contains('Please enter your email')).toEqual(true)
  })

  it('shows error text when message is touched',()=> {
    const input = wrapper.find('input').at(2);
    input.simulate('blur')
    const nameError = wrapper.find('.header');
    expect(nameError.contains('Please enter a message')).toEqual(true)
  })

});