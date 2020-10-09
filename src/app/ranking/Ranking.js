import React, { Component } from 'react'

export class Ranking extends Component {

  random = (type) => {
    const name = ['Bears', 'Tigers', 'Snakes', 'Eagles', 'Jaguar']
    const endName = ['Esport', 'Digital', 'Team', 'e-sports', 'Gaming']
    const players = ['VEEX', 'Vexon', 'mil3k', 'Qn3k', 'OszU', 'Nerex', 'sprout', 'Neo', 'TaZ', 'byali', 'Pasha', 'machete']
    const sign = ['+', '-']
    let x = '';
    switch (type) {
      case 'team':
        x = name[Math.floor(Math.random() * 5)] + " " + endName[Math.floor(Math.random() * 5)]
        break;
      case 'player':
        x = players[Math.floor(Math.random() * 12)] + ", " + players[Math.floor(Math.random() * 12)] + ", " + players[Math.floor(Math.random() * 12)] + ", " + players[Math.floor(Math.random() * 12)] + ", " + players[Math.floor(Math.random() * 12)];
        break;
      case 'points':
        x = Math.floor(Math.random() * 3001);
        break;
      case 'label':
        x = sign[Math.floor(Math.random() * 2)] + (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
        break;
      default:
    }
    return x;

  }

  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 1; i < 101; i++) {
      let children = []
      //Inner loop to create children
      children.push(<td>{i}</td>)
      children.push(<td><img className="center" src={require("../../assets/images/teams/" + Math.floor(Math.random() * 11) + ".png")} alt="user icon" /></td>)
      children.push(<td> {this.random('team')} </td>)
      children.push(<td>{this.random('player')}</td>)
      children.push(<td>{this.random('points')}</td>)
      let label = this.random('label')
      if (label.substring(0, 1) === '-') {
        children.push(<td><label className="badge badge-danger"> {label} <i class="mdi mdi-arrow-down"></i></label></td>)
      } else {
        children.push(<td><label className="badge badge-success">{label} <i class="mdi mdi-arrow-up"></i></label></td>)
      }
      //Create the parent and add the children
      if (i === 1) {
        table.push(<tr className="first">{children}</tr>)
      } else if (i > 1 && i < 11) {
        table.push(<tr className="top">{children}</tr>)
      } else {
        table.push(<tr className="next">{children}</tr>)
      }
    }
    return table
  }

  render() {
    return (
      <div>
        <div className="page-header">
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Ranking</h4>
                <p className="card-description"> Ostatnie notowanie: 21.09.2020 godz: 15:28</p>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th></th>
                        <th> Drużyna </th>
                        <th> Zawodnicy </th>
                        <th> Punkty </th>
                        <th> Różnica miejsc </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.createTable()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Ranking
