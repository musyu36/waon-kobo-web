import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import ChordButtons from "./ChordButtons";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.handleChords = this.handleChords.bind(this);
  }
  state = {
    title: "",
    content: "",
    chords: [
      { rootName: "C", chordType: "maj", chordNums: [0, 4, 7] },
      { rootName: "C", chordType: "maj", chordNums: [0, 4, 7] },
      { rootName: "C", chordType: "maj", chordNums: [0, 4, 7] },
      { rootName: "C", chordType: "maj", chordNums: [0, 4, 7] },
    ],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  handleChords = (nextChords, index) => {
    var newState = this.state.chords;
    newState[index] = nextChords;
    this.setState({
      chords: newState,
    });
  };

  render() {
    const { auth } = this.props;
    // ルートガード
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="blue-grey-text text-darken-4">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              required
              type="text"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Memo</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <ChordButtons
            chords={this.state.chords}
            handleChords={(nextChords, index) =>
              this.handleChords(nextChords, index)
            }
            setChordNums={this.setChordNums}
          />
          <div className="input-field">
            <button type="submit" className="btn theme-back-blue z-depth-0">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

// createProjectとしてpropsに渡す
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
