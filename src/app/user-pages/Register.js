import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <h4>Jesteś tu nowy?</h4>
                <h6 className="font-weight-light">Zarejestruj się, to tylko kilka kroków</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Nazwa użytkownika" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Hasło" />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Akceptuje regulamin serwisu
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">ZAREJESTRUJ SIĘ</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Masz już konto? <Link to="/user-pages/login-1" className="text-primary">Zaloguj się</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Powrót do <Link to="/" className="text-primary">strony głównej</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
