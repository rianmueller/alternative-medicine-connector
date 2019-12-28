import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUserAsync } from "../../actions/index";
import styles from "./User.module.css";

const User = ({ ...props }) => {
  const { dispatch, user } = props;
  useEffect(() => {
    dispatch(loadUserAsync(Math.floor(Math.random() * 654)));
  }, [dispatch]);

  return (
    <>
      <div>
        <h4>Name:</h4>
        <p>John Doe</p>
        <h4>Email:</h4>
        <p>john@nowhere.com</p>
        <h4>Conditions:</h4>
        <div className={styles.conditions}>Back Pain, Migraines</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(User);
