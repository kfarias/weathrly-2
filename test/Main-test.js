import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/Components/Main.js';
import Weatherly from '../lib/Components/Weatherly';
import SubmitInput from '../lib/Components/SubmitInput';
import WeatherCards from '../lib/Components/WeatherCards';
import CurrentWeatherCard from '../lib/Components/CurrentWeatherCard';
import HourlyCard from '../lib/Components/HourlyCard';
import Input from '../lib/Components/Input';
import DailyCard from '../lib/Components/DailyCard';
import MockData from './Helpers/fake-api-file';
// import ForecastData from './Helpers/fake-api-file';
// import TenDay from './Helpers/fake-api-file';
// import SevenHour from './Helpers/fake-api-file';
import sinon from 'sinon';
import locus from 'locus'


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


  it('should render a div in the main component', () => {
    const wrapper = shallow(<Main/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('Main should have a component Weatherly', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find(Weatherly)).to.have.length(1)
  });


  it('weather should update state of input on change ', () => {
    const onInputChange = sinon.spy();
    const wrapper = mount(<Input handleChange ={onInputChange}/>);
    expect(onInputChange.calledOnce).to.equal(false);
    wrapper.find('.user-input').simulate('change');
    expect(onInputChange.calledOnce).to.equal(true);
  });

  it('submit button is disabled when there is no location', () => {
    const wrapper = shallow(<SubmitInput disabled={true}/>)
    const inst = wrapper.instance();
    expect(inst.props.disabled).to.equal(true);
  });

  it('weatherly should handleClick of submit button', () => {
    const handleClick = sinon.spy();
    const wrapper = mount(<SubmitInput handleClick={handleClick}/>);
    expect(handleClick.calledOnce).to.equal(false);
    wrapper.find('.submit-btn').simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
  });

  it('TenDay renders nothing initaly', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('TenDay')).to.have.length(0);
  });

  it.skip('Input should have a prop of location', () => {
    const wrapper = shallow(<Input location=''/>);
    expect(wrapper.props().location).to.equal('');
  });

  it.only('should display no data if nothing is passed in', () => {
    const wrapper = shallow(<HourlyCard/>);
    expect(wrapper.find('div').text()).to.equal('');
  })



  // it('weather should update weather state on button click', () => {
  //   const wrapper = mount(<Weatherly/>);
  //   expect(wrapper.state().weather).to.deep.equal([])
  //   wrapper.find('location').simulate('change', {target: {value: 'denver, co'} } );
  //   wrapper.find('.submit'),simulate('click',1);
  //   expect(wrapper.state().weather).to.equal(['Denver,co']);
  // })

  // it.only('CurrentWeatherCard should render in a section', () => {
  //   const wrapper = shallow(<CurrentWeatherCard/>);
  //   assert.equal(wrapper.type(), 'section');
  // });


  // it('should have passed in prop for text', () => {
  //   const wrapper = mount(<input text ='text' />)
  //   expect(wrapper.props().type).to.equal('text');
  // })
});
