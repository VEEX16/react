import React, { Component } from 'react';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Team extends Component {

  render() {
    return (
      <div>
        <div className="row title">
          <div className="col-xl-3">
            <div className="card card-statistics">
              <div className="card-body team-logo">
                <img src={require("../../assets/images/teams/1.png")} alt="team" />
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="row">
              <div className="col">
                <div className="card card-statistics first-card">
                  <div className="card-body team-logo">
                    <h1>Erydan Esports</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card card-statistics">
                  <div className="card-body icon">
                    <i class="fa fa-facebook fb"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-statistics icon inactive">
                  <div className="card-body">
                    <i class="fa fa-twitter twitter"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-statistics icon">
                  <div className="card-body">
                    <i className="fa fa-instagram instagram"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-statistics icon">
                  <div className="card-body">
                    <i class="fa fa-youtube-play youtube"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-statistics icon">
                  <div className="card-body">
                    <i class="fa fa-twitch twitch"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-statistics icon inactive">
                  <div className="card-body">
                    <i class="fa fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="page-title"> Zawodnicy dywizji CS:GO </h3>
        <div className="row">
          <div className="col">
            <div className="card card-statistics icon">
              <div className="card-body player-img">
                <img src={require("../../assets/images/faces/player.png")} alt="player" />
                <h5>Imię "NICK" Nazwisko</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-statistics icon">
              <div className="card-body player-img">
                <img src={require("../../assets/images/faces/player.png")} alt="player" />
                <h5>Imię "NICK" Nazwisko</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-statistics icon">
              <div className="card-body player-img">
                <img src={require("../../assets/images/faces/player.png")} alt="player" />
                <h5>Imię "NICK" Nazwisko</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-statistics icon">
              <div className="card-body player-img">
                <img src={require("../../assets/images/faces/player.png")} alt="player" />
                <h5>Imię "NICK" Nazwisko</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-statistics icon">
              <div className="card-body player-img">
                <img src={require("../../assets/images/faces/player.png")} alt="player" />
                <h5>Imię "NICK" Nazwisko</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;