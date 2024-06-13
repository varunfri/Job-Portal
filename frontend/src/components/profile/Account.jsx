import React from "react";
import authFn from "../../utils/authFn";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authStore";
import "./Account.css";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  console.log(user);
  return (
    <div className="auth">
      <div className="account-container">
        <h1>Account Information</h1>
        <div className="user-details">
          {Object.entries(user.userData).map(([key, value]) => {
            return (
              <div key={key} className="usertab">
                <div>
                  <strong>{key}:</strong>
                </div>
                <div>{value !== null ? value : "null"}</div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="logout"
        onClick={() => {
          authFn.logout();
          dispatch(authActions.logout());
        }}
      >
        Log Out
      </button>{""}
      <button
        className="editprofile"
        onClick={() => {
          authFn.logout();
          dispatch(authActions.logout());
        }}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default Account;
