import React from "react";

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);  
  }

  handleClick() {  
    var i;
    var items = document.querySelectorAll("nav .container ul li a:not(.mobilemenu)");

    // Loop through all list elements and hide them/show them depending on state
    for (i = 0; i < items.length; i++) {
      items[i].style.display = this.state.isToggleOn ? "block" : "none";
    }
    this.setState(state => ({      
      isToggleOn: !state.isToggleOn    
    }));  
  }

  render() {
    // Return a li element that acts as a button, with onClick handle and title depending on state
    return (
      <li><a className="mobilemenu" onClick={this.handleClick}>{this.state.isToggleOn ? 'Meny' : 'Stäng meny'}</a></li>
    );
  }
}