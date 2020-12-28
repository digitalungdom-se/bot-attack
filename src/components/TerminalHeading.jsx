// Dynamic title box
function TerminalHeading(props) {
    var stars = Array(props.heading.length).join('*')
  
    return (
      <pre><br /><br />
         /****{stars}*****/<br />
         /**  {props.heading}  **/<br />
         /****{stars}*****/<br />
      </pre>
    )
  }

  export default TerminalHeading