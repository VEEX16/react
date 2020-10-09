import React, { Component } from 'react';
import ReactTooltip from "react-tooltip";
import GroupA from './GroupA';
import GroupB from './GroupB';
import GroupC from './GroupC';
import GroupD from './GroupD';


// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Groups extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  random = () => {
    const name = ['Bears', 'Tigers', 'Snakes', 'Eagles', 'Jaguar']
    const endName = ['Esport', 'Digital', 'Team', 'e-sports', 'Gaming']
    return name[Math.floor(Math.random() * 5)] + " " + endName[Math.floor(Math.random() * 5)];

  }

  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 1; i < 5; i++) {
      let children = []
      //Inner loop to create children
      children.push(<td>{i}</td>)
      children.push(<td>{this.random()}</td>)
      children.push(<td>{Math.floor(Math.random() * 4)}</td>)
      children.push(<td>{Math.floor(Math.random() * 4)}</td>)
      children.push(<td>{Math.floor(Math.random() * 20)}</td>)
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }



  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card flip">
              <GroupA />
            </div>
          </div>

          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card flip">
              <GroupB />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card flip">
              <GroupC />
            </div>
          </div>

          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card flip">
              <GroupD />
            </div>
          </div>
        </div>
        <ReactTooltip id="wins" place="top" effect="solid">
          Ilość zwycięstw
        </ReactTooltip>
        <ReactTooltip id="loses" place="top" effect="solid">
          Ilość porażek
        </ReactTooltip>
        <ReactTooltip id="points" place="top" effect="solid">
          Suma punktów
        </ReactTooltip>
      </div>
    );
  }
}

export default Groups;