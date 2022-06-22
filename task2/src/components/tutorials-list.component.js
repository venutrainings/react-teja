import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveTutorials,
  findTutorialsByName,
  deleteAllTutorials,
} from "../actions/tutorials";
import { Link } from "react-router-dom";

class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeName= this.onChangeName.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.findByName = this.findByName.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);

    this.state = {
      currentTutorial: null,
      currentIndex: -1,
      name: "",
    };
  }

  componentDidMount() {
    this.props.retrieveTutorials();
  }

  onChangeName(e) {
    const name= e.target.value;

    this.setState({
      name: name,
    });
  }

  refreshData() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    this.props
      .deleteAllTutorials()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByName() {
    this.refreshData();

    this.props.findTutorialsByName(this.state.name);
  }

  render() {
    const { name, currentTutorial, currentIndex } = this.state;
    const { tutorials } = this.props;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={name}
              onChange={this.onChangeName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Tutorials List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Id :</strong>
                </label>{" "}
                {currentTutorial.id}
              </div>
              <div>
                <label>
                  <strong>Name : </strong>
                </label>{" "}
                {currentTutorial.name}
              </div>
              <div>
                <label>
                  <strong>Email :</strong>
                </label>{" "}
                {currentTutorial.email}
              </div>
              <div>
                <label>
                  <strong>Gender :</strong>
                </label>{" "}
                {currentTutorial.gender}
              </div>

              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.status}
              </div>

              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tutorials: state.tutorials,
  };
};

export default connect(mapStateToProps, {
  retrieveTutorials,
  findTutorialsByName,
  deleteAllTutorials,
})(TutorialsList);
