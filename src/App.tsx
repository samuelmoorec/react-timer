import React, {useState, useEffect} from 'react';
import Moment from 'moment'
import './App.css';

function App() {

  const [timeStarted, setTimeStarted] = useState<number>();
  const [timeFinished, setTimeFinished] = useState<number>();
  const [timer, setTimer] = useState<string>("0.00s");
  const [isTimerActive, setisTimerActive] = useState<boolean>(false);
  const [prevTimes, setPrevTimes] = useState<number[]>([]);

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
      console.log("calling toggle");
      setPrevTimes(addPrevTime(prevTimes))
    }


    setisTimerActive((timer: boolean) => !timer)
  };

  const displayTimer = () => {
    if(timeStarted === undefined){
      return "0s"
    }else if(timeFinished === undefined){
      return (Moment().diff(Moment(timeStarted),'milliseconds')/1000).toFixed(2) + "s";
    }else if(timeFinished !== undefined){
      return ((Moment().diff(Moment(timeStarted),'milliseconds') + addupTimes())/1000).toFixed(2) + "s";
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
    console.log(arr);
    return arr;
  }

  const toggleButtonText = () => {
    if(isTimerActive)
    return "Stop Timer"
    else return "Start Timer"
  }

  const reset = () => {
    setTimer("0.00s");
    setisTimerActive(false);
    setPrevTimes([]);
  }




  return (
    <>
      <h3>{timer}</h3>
      <button onClick={toggleTimer}>{toggleButtonText()}</button>
      <br/>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
