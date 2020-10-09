import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class EditTeam extends Component {

    render() {

        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Edytuj drużynę </h3>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Edytuj główne dane drużyny</h4>
                                <form className="forms-sample">
                                    <Form.Group>
                                        <label htmlFor="exampleInputName1">Nazwa</label>
                                        <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputEmail3">Email kontaktowy</label>
                                        <Form.Control type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label>File upload</label>
                                        <Form.Control type="file" name="img[]" accept="image/*" />
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary mr-2">Edytuj</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Edytuj social media</h4>
                                <form className="forms-sample">
                                    <Form.Group>
                                        <label htmlFor="exampleInputName1">Facebook</label>
                                        <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputName1">Twitter</label>
                                        <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputName1">Instagram</label>
                                        <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputName1">YouTube</label>
                                        <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputName1">Twitch</label>
                                        <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputName1">Strona internetowa</label>
                                        <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary mr-2">Edytuj</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditTeam
