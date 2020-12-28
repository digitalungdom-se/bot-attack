import React from "react";

export default class ListElement extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.place}</td>
                
                {/* Load icons only if needed, very unconventional way but works
                    Uses placement to load an icon called {placement}.png
                    Ex. props.place = 3, icon called 3.png */}
                <td><img src={require(`../assets/icons/${this.props.place.toString()}.png`).default} alt={this.props.place}/></td>
                
                <td>{this.props.name}</td>
                <td>{this.props.kills}</td>
            </tr>
        )
    }
}