import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMenu } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  onButtonClick(event) {
    this.props.fetchMenu(this.state.searchTerm);
  }
  render() {
    return (
      <div>
        <input
          value={this.term}
          type="text"
          className="form-control"
          placeholder="Search items by name..."
          onChange={this.onInputChange}
        />
        <button onClick={this.onButtonClick}>Search</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMenu }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
