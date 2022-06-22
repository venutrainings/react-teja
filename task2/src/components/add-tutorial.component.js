import React, { Component } from "react";
import { connect } from "react-redux";
import { createTutorial } from "../actions/tutorials";

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);

    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "",
      gender: "",
      status:"",

      submitted: false,
    };
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }


  saveTutorial() {
    const { id, name,email,gender,status } = this.state;

    this.props
      .createTutorial(id, name, email, gender, status)
      .then((data) => {
        this.setState({
          id: data.id,
          name: data.name,
          email: data.email,
          gender: data.gender,
          status:data.status,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      name: "",
      email: "",
      gender: "",
      status:"",
      

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.title}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>
            <fieldset className="form-group" >
                <label htmlFor="description">Gender</label><br></br>
                <label htmlFor="description" >
                <input type="radio" className="form-control" onChange={this.onChangeGender}  value="Male" name="gender" id="male"  /> Male</label>
                <label htmlFor="description" >
                <input type="radio" className="form-control" onChange={this.onChangeGender}  value="Female" name="gender" id="female"  /> Female</label>

              </fieldset>


              <div className="form-group">
                <label htmlFor="description">Status</label>

                <select onChange={this.onChangeGender}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>

              </div>

             <div className="form-group">
              <label htmlFor="title">Status</label>
              <input
                type="text"
                className="form-control"
                id="status"
                required
                value={this.state.status}
                onChange={this.onChangeStatus}
                name="status"
              />
            </div>


            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createTutorial })(AddTutorial);
