import React, { Component } from 'react';
import './employeesquare.css';


export default class EmployeeSquare extends Component {
    render() {
        return (
            <div className="col-sm-1 col-lg-3">
                <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="member-image">
                        <img className="img-responsive" src={this.props.image} alt="" />
                    </div>
                    <div className="member-info">
                        <h3>{this.props.name}</h3>
                        <h4>{this.props.title}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
