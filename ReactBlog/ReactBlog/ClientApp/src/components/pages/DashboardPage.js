import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
  <div>{!isConfirmed && <ConfirmEmailMessage />}</div>
);
function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}
DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(DashboardPage);
