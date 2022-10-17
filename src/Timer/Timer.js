import React, { useState } from 'react';
import './Timer.css';
export default function Timer(props) {
  const [min, setMin] = useState(props.min);
  const [sec, setSec] = useState(props.sec);

  // state = {
  //   min: this.props.min,
  //   sec: this.props.sec,
  //   isPlaing: false,
  // };

  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  let timerId;
  const play = () => {
    if (!props.isCompleted) {
      timerId = setInterval(() => {
        if (sec > 0) setSec((sec) => sec - 1);
        if (sec === 0) {
          if (min === 0) {
            clearInterval(timerId);
          } else {
            setSec(59);
            setMin((min) => min - 1);
          }
        }
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(timerId);
  };

  return (
    <span className="description">
      <button onClick={play} className="icon icon-play"></button>
      <button onClick={pause} className="icon icon-pause"></button>
      {min.toString().padStart(2, 0)}:{sec.toString().padStart(2, 0)}
    </span>
  );
}
