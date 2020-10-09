import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export class Browsersource extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sec: 20,
      min: 0
    }
  }

  render() {
    let { sec } = this.state;
    let { min } = this.state;
    let timer = ""
    if (sec < 10) {
      sec = '0' + sec;
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (sec > 0 || min > 0) {
      timer = min + " : " + sec;
    } else {
      timer = "";
    }

    return (
      <div className="bs">
        <Helmet>;
          <style>{'body { background-color: #ffffff00 !important; }'}</style>
          <style>{'.content-wrapper { background-color: #ffffff00 !important;}'}</style>
          <title>My Title</title>
        </Helmet>
        <h1>Browsersource</h1>
        <div className="row justify-content-md-center">
          <div className="col-sm-10">
            <div className="card bs-title">
              <div className="card-body">
                <h1>UNDERGROUND ESPORT CUP</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center bs-content">
          <div className="col-sm-4">
            <div className="card bs-team logo logo-l">
              <div className="card-body">
                <img src={require("../../assets/images/teams/1.png")} alt="team" />
              </div>
            </div>
          </div>
          <div className="col-sm-2 vs">
            <h1>VS</h1>
          </div>
          <div className="col-sm-4">
            <div className="card bs-team logo logo-r">
              <div className="card-body">
                <h1>Logo prawe</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center bs-desc">
          <div className="col-sm-4">
            <div className="card bs-team left">
              <div className="card-body">
                <h1>TEAM LEWY</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-2 counter">
            <h1>{timer}</h1>
          </div>
          <div className="col-sm-4">
            <div className="card bs-team right">
              <div className="card-body">
                <h1>TEAM PRAWY</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-10">
            <div className="card bs-footer">
              <div className="card-body">
                <h1>NADCHODZĄCE SPOTKANIE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.sec === 0 && this.state.min === 0) {
      } else if (this.state.sec === 0) {
        this.setState(prevState => ({
          sec: 59,
          min: prevState.min - 1
        }))
      } else {
        this.setState(prevState => ({
          sec: prevState.sec - 1
        }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }


}



export default Browsersource
