import React from 'react';
import './Timer.css';
export default class Timer extends React.Component {
  state = {
    min: this.props.min,
    sec: this.props.sec,
    isPlaing: false,
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  play = () => {
    if (!this.state.isPlaing) {
      this.setState({
        isPlaing: true,
      });
      this.timerId = setInterval(() => {
        if (this.state.sec > 0) {
          this.setState(({ sec }) => ({
            sec: sec - 1,
          }));
        }
        if (this.state.sec === 0) {
          if (this.state.min === 0) {
            clearInterval(this.timerId);
          } else {
            this.setState(({ min }) => ({
              min: min - 1,
              sec: 59,
            }));
          }
        }
      }, 1000);
    }
  };
  pause = () => {
    clearInterval(this.timerId);
    this.setState({
      isPlaing: false,
    });
  };

  render() {
    const { min, sec } = this.state;
    return (
      <span className="description">
        <button onClick={this.play} className="icon icon-play"></button>
        <button onClick={this.pause} className="icon icon-pause"></button>
        {min.toString().padStart(2, 0)}:{sec.toString().padStart(2, 0)}
      </span>
    );
  }
}
