import React from 'react';

import { connect } from 'react-redux';

function Reverb (props) {

  const handleChange = (event) => {
    console.log('reverb component', props.reverb);
    switch (event.target.dataset.control){
      case "roomSize":
        props.roomSize(event.target.value / 100)
        break;
      case "dampening":
        props.dampening(event.target.value)
        break;
      case "wet":
        props.wet(event.target.value / 100)
        break;
      default:
    }
  }

  return (
    <span id="reverb-controller" className="effect-control">
      <div className="effect-label">Reverb</div>
      <label htmlFor="roomsize" className="slider-label">Room Size</label>
      <input
        type="range"
        name="roomsize"
        className="slider"
        onChange={handleChange}
        data-control="roomSize"
        value={props.reverb.roomSize * 100}
      />
      <label htmlFor="dampening" className="slider-label">Dampening</label>
      <input
        type="range"
        name="dampening"
        className="slider"
        onChange={handleChange}
        data-control="dampening"
        min='1'
        max='20000'
        value={props.reverb.dampening}
      />
      <label htmlFor="wet" className="slider-label">Wet/Dry</label>
      <input
        type="range"
        name="wet"
        className="slider"
        onChange={handleChange}
        data-control="wet"
        value={props.reverb.wet * 100}
      />
    </span>
  )

}

function mapStateToProps(state) {
  return {
    reverb: state.audioSettings.reverb
  }
}

export default connect(mapStateToProps)(Reverb)
