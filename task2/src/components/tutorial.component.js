import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTutorial, deleteTutorial } from "../actions/tutorials";
import TutorialDataService from "../services/tutorial.service";

class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);


    this.getTutorial = this.getTutorial.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeTutorial = this.removeTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: "",
        name: "",
        email: "",
        gender: "",
        status: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          name: name,
        },
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          email: email,
        },
      };
    });
  }

  onChangeGender(e) {
    const gender = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          gender: gender,
        },
      };
    });
  }

  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          status: status,
        },
      };
    });
  }


  // onChangeDescription(e) {
  //   const description = e.target.value;

  //   this.setState((prevState) => ({
  //     currentTutorial: {
  //       ...prevState.currentTutorial,
  //       description: description,
  //     },
  //   }));
  // }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then((response) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentTutorial.id,
      name: this.state.currentTutorial.name,
      email: this.state.currentTutorial.email,
      gender: this.state.currentTutorial.gender,
      status : this.state.currentTutorial.status,
    };

    this.props
      .updateTutorial(this.state.currentTutorial.id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateTutorial(this.state.currentTutorial.id, this.state.currentTutorial)
      .then((reponse) => {
        console.log(reponse);

        this.setState({ message: "The tutorial was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeTutorial() {
    this.props
      .deleteTutorial(this.state.currentTutorial.id)
      .then(() => {
        this.props.history.push("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Id</label>
                <input disabled
                  type="text"
                  className="form-control"
                  id="id"
                  value={currentTutorial.id}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentTutorial.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentTutorial.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <fieldset className="form-group" >
                <label htmlFor="description">Gender</label><br></br>
                
                <label htmlFor="description" >
                <input type="radio" className="form-control" onClick={this.onChangeGender} checked = {currentTutorial.gender === 'male'} value="Male" name="gender" id="male"  /> Male</label>
                <label htmlFor="description" >
                <input type="radio" className="form-control" onClick={this.onChangeGender} checked = {currentTutorial.gender === 'female'} value="Female" name="gender" id="female"  /> Female</label>

              </fieldset>
              <div className="form-group">
                <label htmlFor="description">Status</label>

                <select value={currentTutorial.status}>
                  <option value="active" id="active">active</option>
                  <option value="inactive" id="inactive">inactive</option>
                </select>

              </div>

            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.removeTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateTutorial, deleteTutorial })(Tutorial);
