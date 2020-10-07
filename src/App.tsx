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
    , 1);
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

  
  // let displayLaps = laps.map((lap, index) => <div><p>lap {index + 1},   <span className="timerfont">{lap.toFixed(2)}</span></p></div>);

  const calcLapDifference = (currentLap : number, lastLap : number) =>{
    let diff = currentLap - lastLap;
    if(diff > 0){
    return <span className="slower_lap">{diff.toFixed(2)}</span>
    }else{
    return <span className="faster_lap">{Math.abs(diff).toFixed(2)}</span>
    }
  }

  const lapAverage = () =>{
    if(laps.length > 0){
    let sum = laps.reduce((sum, num) => sum + num);
    return (sum/laps.length).toFixed(2);
    }else return "0.00"
  }

  const generateLaps = () => {
    let lastLapTime = 0;
    let html : JSX.Element;
    
    let toreturn = laps.map((lap, index) => {
      
    
      if(index > 0){
        html = <div><p>lap {index + 1},   <span className="timerfont">{lap.toFixed(2)}</span>   {calcLapDifference(lap,lastLapTime)}</p></div>
      }else{
        lastLapTime = lap;
        html = <div><p>lap {index + 1},   <span className="timerfont">{lap.toFixed(2)}</span></p></div>
      }

      lastLapTime = lap;
      return html;
      });

     return toreturn;
      
  }





  return (
    <div className="timer_container">
      <p className="timer">{timer}</p>
      <button onClick={toggleTimer}>{toggleButtonText()}</button>
      
      <button disabled={isTimerActive} onClick={reset}>Reset</button>
      
      <button disabled={!isTimerActive} onClick={addLap}>Lap</button>
  <p>Lap Average {lapAverage()}s</p>
      <div>{generateLaps()}</div>
    </div>
  );
}

export default App;
