import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';


// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class GroupA extends Component {

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
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Grupa A</h4>
            <p className="card-description"><button type="button" onClick={this.handleClick} class="btn btn-outline-danger">Widok meczy</button>
            </p>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Drużyna</th>
                    <th><span data-tip data-for="wins">Z</span></th>
                    <th><span data-tip data-for="loses">P</span></th>
                    <th><span data-tip data-for="points">PKT</span></th>
                  </tr>
                </thead>
                <tbody>
                  {this.createTable()}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body round-name">
            <h4 className="card-title">Grupa A</h4><button type="button" onClick={this.handleClick} class="btn btn-outline-danger">Widok tabeli</button>
            <div className="col-lg-12 grid-margin stretch-card pause">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="table-responsive pause">
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <td>Herman Beck</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>Herman Beck</td>
                            <td>9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col">
                    <div className="table-responsive pause">
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <td>Herman Beck</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>Herman Beck</td>
                            <td>9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col">
                    <div className="table-responsive pause">
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <td>Herman Beck</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>Herman Beck</td>
                            <td>9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="table-responsive pause">
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <td>Herman Beck</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>Herman Beck</td>
                            <td>9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col">
                    <div className="table-responsive pause">
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <td>Herman Beck</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>Herman Beck</td>
                            <td>9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col">
                    <div className="table-responsive pause">
                      <table class="table table-dark">
                        <tbody>
                          <tr>
                            <td>Herman Beck</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>Herman Beck</td>
                            <td>9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>RUNDA 1</p>
                  </div>
                  <div className="col">
                    <p>RUNDA 2</p>
                  </div>
                  <div className="col">
                    <p>RUNDA 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip >
    )
  }
}

export default GroupA;