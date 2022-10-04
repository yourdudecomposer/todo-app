import React from 'react';

export default class Timer extends React.Component {
  render() {
    return (
      <span className="description">
        <button className="icon icon-play"></button>
        <button className="icon icon-pause"></button>
        12:25
      </span>
    );
  }
}
