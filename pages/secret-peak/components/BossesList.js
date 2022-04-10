import React from "react";

export default class BossesList extends React.Component {
    render() {
        return <>
            <ul className="list-group list-group-numbered">
                {this.props.bosses.map((boss, index) => (
                    <li key={index} className="list-group-item">{boss.name}</li>
                ))}
            </ul>
        </>
    }
}
