import React, { Component } from 'react';

export class PlayOff extends Component {

  render() {
    return (
      <div className="playoff">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3>Ćwierćfinały</h3>
              </div>
            </div>
            <div className="col-8 center">
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
                <p>ĆWIERĆFINAŁ 1</p>
              </div>
            </div>
            <div className="col-8 center">
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
                <p>ĆWIERĆFINAŁ 2</p>
              </div>
            </div>
            <div className="col-8 center">
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
                <p>ĆWIERĆFINAŁ 3</p>
              </div>
            </div>
            <div className="col-8 center">
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
                <p>ĆWIERĆFINAŁ 4</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3>Półfinały</h3>
              </div>
            </div>
            <div className="col-8 center semifinal">
              <div className="table-responsive pause">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <td className="tba">Zwycięzca ćwierćfinału 1</td>
                      <td>---</td>
                    </tr>
                    <tr>
                      <td className="tba">Zwycięzca ćwierćfinału 2</td>
                      <td>---</td>
                    </tr>
                  </tbody>
                </table>
                <p>PÓFINAŁ 1</p>
              </div>
            </div>
            <div className="col-8 center semifinal">
              <div className="table-responsive pause">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <td className="tba">Zwycięzca ćwierćfinału 3</td>
                      <td>---</td>
                    </tr>
                    <tr>
                      <td className="tba">Zwycięzca ćwierćfinału 4</td>
                      <td>---</td>
                    </tr>
                  </tbody>
                </table>
                <p>PÓFINAŁ 2</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3>Finał</h3>
              </div>
            </div>
            <div className="col-8 center final">
              <div className="table-responsive pause">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <td className="tba">Zwycięzca półfinału 1</td>
                      <td>---</td>
                    </tr>
                    <tr>
                      <td className="tba">Zwycięzca półfinału 2</td>
                      <td>---</td>
                    </tr>
                  </tbody>
                </table>
                <p>FINAŁ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayOff;