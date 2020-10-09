import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <h4>Witaj!</h4>
                <h6 className="font-weight-light">Zaloguj się, aby kontynuować</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">ZALOGUJ SIĘ</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Nie masz konta? <Link to="/user-pages/register-1" className="text-primary">Rejestracja</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Powrót do <Link to="/" className="text-primary">strony głównej</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
