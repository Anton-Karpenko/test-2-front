import "react-table/react-table.css";

import React, { Component } from "react";

import ReactTable from "react-table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMenu } from "../actions/index";

class Menu extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    if (!this.props.menu) {
      return <div> Loading... </div>;
    }
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Price",
        accessor: "price"
      }
    ];

    return <ReactTable data={this.props.menu.data} columns={columns} />;
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMenu }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
