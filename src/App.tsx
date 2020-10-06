import React, {useState, useEffect} from 'react';
import Moment from 'moment'
import './App.css';

function App() {

  const [timeStarted, setTimeStarted] = useState<number>();
  const [timeFinished, setTimeFinished] = useState<number>();
  const [timer, setTimer] = useState<string>("0.00");
  const [isTimerActive, setisTimerActive] = useState<boolean>(false);
  const [prevTimes, setPrevTimes] = useState<number[]>([]);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {

    var timerID = setInterval(() => tick()
    , 10);
    return function cleanup() {
      clearInterval(timerID);
    }
  });


  const tick = () => {
    if(isTimerActive){
    setTimer(displayTimer());
    }
  }

  const toggleTimer = () => {

    if(!isTimerActive){
      setTimeStarted(Moment().valueOf());
    }else{
      setTimeFinished(Moment().valueOf());
      setPrevTimes(addPrevTime(prevTimes))
    }


    setisTimerActive((timer: boolean) => !timer)
  };

  const displayTimer = () => {
    if(timeStarted === undefined){
      return "0.00"
    }else if(timeFinished === undefined){
      return (Moment().diff(Moment(timeStarted),'milliseconds')/1000).toFixed(2);
    }else if(timeFinished !== undefined){
      return ((Moment().diff(Moment(timeStarted),'milliseconds') + addupTimes())/1000).toFixed(2);
    }else{
      return ""
    }

  }

  const addupTimes = () => {
    let sum = 0;
    prevTimes.forEach(num => sum += num);
    return sum;
  }

  const addPrevTime = (arr: number[]) => {
    arr.push(Moment().diff(Moment(timeStarted),'milliseconds'));
    
    return arr;
  }

  const toggleButtonText = () => {
    if(isTimerActive)
    return "Pause Timer"
    else return "Start Timer"
  }

  const reset = () => {
    setTimer("0.00");
    setisTimerActive(false);
    setPrevTimes([]);
    setLaps([]);
  }

  const addLap = () => {
    if(isTimerActive){
      if(laps.length === 0){
        laps.push(Number.parseFloat(timer));
        setLaps(laps);
      }else{
        laps.push((Number.parseFloat(timer) - laps.reduce((total, num) => total + num)));
        setLaps(laps);
      }
    }
  }

  
  let displayLaps = laps.map((lap, index) => <div><p>lap {index + 1},   <span className="timerfont">{lap.toFixed(2)}</span></p></div>);

  let lapButton = () => {
    if(isTimerActive){
      return <button onClick={reset}>Reset</button>
    }else{
      return <button disabled onClick={reset}>Reset</button>
    }
  }

  return (
    <div className="timer_container">
      <p className="timer">{timer}</p>
      <button onClick={toggleTimer}>{toggleButtonText()}</button>
      <br/>
      <button onClick={reset}>Reset</button>
      <br/>
      <button disabled={!isTimerActive} onClick={addLap}>Lap</button>
      <div>{displayLaps}
      </div>
    </div>
  );
}

export default App;
