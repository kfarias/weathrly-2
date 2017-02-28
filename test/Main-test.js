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
import Data from './Helpers/fake-api-file';
import DailyCard from '../lib/Components/DailyCard';
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

  it('should render one section in the HourlyCard', () => {
    const wrapper = shallow(<HourlyCard currentWeather={Data}/>);
    expect(wrapper.find('.hour-sect')).to.have.length(1);
  });

  it('HourlyCard should render seven hours in a div', () => {
    const wrapper = shallow(<HourlyCard currentWeather={Data}/>);
    expect(wrapper.find('div')).to.have.length(7);
  });

  it('CurrentWeatherCard should have six paragraphs rendered', () => {
    const wrapper = shallow(<CurrentWeatherCard currentWeather={Data}/>);
    expect(wrapper.find('p')).to.have.length(6);
  });
  //
  it('CurrentWeatherCard location city should return Denver', () => {
    const wrapper = shallow(<CurrentWeatherCard currentWeather={Data}/>);
    expect(wrapper.find('.location-city').text()).to.equal('Denver');
  });

  it('DailyCard should render 10 cards to the dom', () => {
    const wrapper = shallow(<DailyCard currentWeather={Data}/>);
    expect(wrapper.find('div')).to.have.length(10);
  });

  it.skip('DailyCard first day should return Friday', () => {
    const wrapper = shallow(<DailyCard currentWeather={Data}/>);
    expect(wrapper.find('.daily-date').text()).to.equal('Friday')
  })

  // it.only('Input should have a prop of location', () => {
  //   const wrapper = shallow(<Input location=''/>);
  //   expect(wrapper.props().location).text().to.equal('');
  // });

});
