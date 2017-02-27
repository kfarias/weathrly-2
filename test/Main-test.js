import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/Components/Main.js';
import Weatherly from '../lib/Components/Weatherly';
import Card from '../lib/Components/Card';
import WeatherCards from '../lib/Components/WeatherCards';
import sinon from 'sinon';



describe('testing with enzyme', () => {

  it('should have a component called Weatherly', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('Weatherly')).to.have.length(1);
  });
  it('Weatherly should have WeatherCards', () => {
    const wrapper = shallow(<Weatherly/>);
    expect(wrapper.find('WeatherCards')).to.have.length(1);
  });
  it('Weatherly should have a default state', () => {
    const wrapper = shallow(<Weatherly/>);
    const stateOfWeatherly = wrapper.state();

    expect(stateOfWeatherly.location).to.equal('');
    expect(stateOfWeatherly.weather).to.deep.equal([]);
  });

  it('weatherly should render WeatherCards to the dom', () => {
    const wrapper = shallow(<Weatherly/>);
    expect(wrapper.find(WeatherCards)).to.have.length(1);
  });

  it('should render a section to the dom', () => {
    const wrapper = shallow(<Weatherly/>);
    assert.equal(wrapper.type(), 'section');
  });

  it.skip('card should render in a div', () => {
    const wrapper = shallow(<Card currentWeather={ currentWeather }/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('should render a div in the main component', () => {
    const wrapper = shallow(<Main/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('Main should have a component Weatherly', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find(Weatherly)).to.have.length(1)
  });

  it.skip('Weatherly should have a prop of source', () => {
    const wrapper = shallow(<Weatherly/>);
    expect(wrapper.find(Weatherly)).to.have.prop(source)
  });

  it.only('weather should update state of input on change ', () => {
    const onInputChange = sinon.spy();
    const wrapper = mount(<Input updatelocation ={onInputChange}/>);
    expect(onInputChange.calledOnce).to.equal(false); 
    wrapper.find('.user-input').simulate('change');
    expect(onInputChange.calledOnce).to.equal(true);
  });

  // it('weather should update weather state on button click', () => {
  //   const wrapper = mount(<Weatherly/>);
  //   expect(wrapper.state().weather).to.deep.equal([])
  //   wrapper.find('location').simulate('change', {target: {value: 'denver, co'} } );
  //   wrapper.find('.submit'),simulate('click',1);
  //   expect(wrapper.state().weather).to.equal(['Denver,co']);
  // })



  // it('should have passed in prop for text', () => {
  //   const wrapper = mount(<input text ='text' />)
  //   expect(wrapper.props().type).to.equal('text');
  // })
});
