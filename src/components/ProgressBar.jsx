function ProgressBar(props) {
    var progr;

    // new Date needs to be called inside function
    var start = new Date(props.start);
    var stop = new Date(props.stop);

    // Customize toLocaleDateString
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    var startreadable = start.toLocaleDateString('sv-SE', options);
    var endreadable =  stop.toLocaleDateString('sv-SE', options);

    if (hasPassed(props.start) === false) {
      
      progr = "0%";

    } else if (hasPassed(props.stop) === false) {
      
      // Calulate percentage
      var total = stop.getTime() - start.getTime();
      var elapsed = new Date().getTime() - start.getTime();
      progr = ((elapsed / total)*100).toFixed(1) + "%";

    } else {
      progr = "100%";
    }
    
    // Pass value as a CSS root value
    document.documentElement.style.setProperty('--progress', progr);

    return (
      <div className="progressbar" s-date={startreadable} e-date={endreadable}>
        <div className="progress"></div>
      </div>
    )
  }

  const hasPassed = (f) => {
    var date = new Date(f).getTime();
    var now = new Date().getTime();
    if (date - now >= 0) {
      return false
    }
    return true
  }
  
  export default ProgressBar;