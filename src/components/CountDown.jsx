import Countdown from 'react-countdown';

var startstop;

function CountDown(props) {

  // Calculates if date has passed using JS getTime()
  var haspassed = hasPassed(props.start);

  // Count down to start or stop date depending on hasPassed
  var date = haspassed ? props.stop : props.start;
  startstop = haspassed ? "Stopp" : "Start";

  // If event is over
  if (hasPassed(props.stop)) {
    if (props.isnav) {
      return (
        <NavCountDown ended={true} />
      )
    }
    return( <HeroCountDown days="--" hours="--" minutes="--" seconds="--" ended={true} /> )
  }
  if (props.isnav) {
    return( <Countdown date={new Date(date)} renderer={NavCountDown}/> )
  }
  return( <Countdown date={new Date(date)} renderer={HeroCountDown}/> )
}

function NavCountDown(props) {

  var msg = props.ended ? "Sorry! Evenemanget är över." : "Tid kvar tills " + startstop;
  var time = props.ended ? "-- -- -- --" : `${props.days}d ${props.hours}h ${props.minutes}min ${props.seconds}s`;

  return (
      <div className="header-countdown">
          <div className="container">
              <div className="label">
                <span>{msg}</span>
              </div>
              <div className="time">
                 <span>{time}</span>
              </div>
          </div>
      </div>
  )
}

function HeroCountDown(props) {

  var msg = props.ended ? "Sorry! Evenemanget är över." : "Tid kvar tills " + startstop + "!";

  return (
    <div className="countdown">
      <div className="container inset">
        <div className="time">
          <span id="days">{props.days}</span>
          <span id="hours">{props.hours}</span>
          <span id="minutes">{props.minutes}</span>
          <span id="seconds">{props.seconds}</span>
        </div>
        <div className="label">
          <span>{msg}</span>
        </div>
      </div>
    </div>
  )
}

const hasPassed = (f) => {
  var date = new Date(f).getTime();
  var now = new Date().getTime();
  // If timestamp is bigger than current time stamp, date hasn't passed
  if (date - now >= 0) {
    return false
  }
  return true
}

export default CountDown