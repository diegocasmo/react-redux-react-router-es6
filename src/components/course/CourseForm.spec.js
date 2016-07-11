import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';
import {mount, shallow} from 'enzyme';

function setup(saving=false) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via "React Test Utils"', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('labels save button as "Saving..." when it is saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });

  it('labels save button as "Save" when not saving', () => {
    const { output } = setup();
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });
});


function enzymeSetup(saving=false) {
  const props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via "Enzime"', () => {
  it('renders form and h1', () => {
    const wrapper = enzymeSetup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('labels save button as "Saving..." when it is saving', () => {
    const wrapper = enzymeSetup(true);
    expect(wrapper.find('input').props().value).toEqual('Saving...');
  });

  it('labels save button as "Save" when not saving', () => {
    const wrapper = enzymeSetup();
    expect(wrapper.find('input').props().value).toEqual('Save');
  });
});
