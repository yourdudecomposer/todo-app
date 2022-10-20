import React, { useState, useEffect } from 'react';
import './Timer.css';
export default function Timer(props) {
  const { timer, isCompleted } = props;

  const [timeLeft, setTimeLeft] = useState(timer);
  const [isCounting, setIsCounting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;

  useEffect(() => {
    let timerId;
    if (isCounting && !isCompleted) {
      timerId = setInterval(() => {
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isCounting, isCompleted, timeLeft]);

  useEffect(() => {
    if (isCompleted || timeLeft === 0) {
      setIsDisabled(true);
    } else setIsDisabled(false);
  }, [isCompleted, timeLeft]);

  const play = () => {
    if (!isCompleted) {
      setIsCounting(true);
    }
  };

  const pause = () => {
    setIsCounting(false);
  };

  return (
    <span className="description">
      <button disabled={isDisabled} onClick={play} className="icon icon-play"></button>
      <button onClick={pause} className="icon icon-pause"></button>
      <div className="time">
        {min.toString().padStart(2, 0)}:{sec.toString().padStart(2, 0)}
      </div>
    </span>
  );
}
