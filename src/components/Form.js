import React from "react";
import { codes } from "../country-code";

function Form() {
  return (
    <>
      <h2 className="text-center p-4">Create/Edit a Participant Profile</h2>
      <div className="container">
        <h3 className="mt-4">Participant Information</h3>
        <form>
          <div className="row mt-4">
            <div className="col-3">
              <p>Ameya ID</p>
            </div>
            <div className="col-1">
              <h5 className="idOne">ABC123</h5>
            </div>
          </div>
          <div className="name">
            <input type="text" className="input" placeholder="First Name" />
            <input type="text" className="input" placeholder="Last Name" />
          </div>
          <div className="email mt-4">
            <input type="text" className="input" placeholder="Email" />
          </div>

          <div className="second-section mt-4">
            <div className="row d-flex">
              <div className="col-sm-6">
                <p className="mb-1 date-of-birth-para">Date of Birth</p>
                <input type="date" className="input date-of-birth" />
              </div>
              <div className="col-sm-2">
                <p className="mb-1">Country Code</p>
                <select className="input countryCode" name="" id="">
                  {codes.map((x) => {
                    return <option>{x.dial_code}</option>;
                  })}
                </select>
              </div>
              <div className="col-sm-4">
                <p className="mb-1 phoneno">Phone Number</p>
                <input type="text" className="input phone" />
              </div>
            </div>
          </div>

          <input type="text" className="input mt-4 city" placeholder="City" />

          <div className="name mt-4">
            <select name="" id="" className="input">
              <option value="Sex">Sex Assigned at birth</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
            <select name="" id="" className="input">
              <option value="">Preferred Pronouns</option>
              <option value="He/Him">He/Him</option>
              <option value="She/Her">She/Her</option>
              <option value="They/Them">They/Them</option>
            </select>
          </div>
          <div className="row d-flex">
            <div className="col-sm-6 mt-4 twoFactorform">
              <p className="mb-1 twoFactor">Enable 2 Factor Authentication</p>
              <div className="switch-wrapper">
                <label className="switch-container">
                  <input hidden type="checkbox" id="with-warrenty" />
                  <div className="switch-bg"></div>
                  <div className="round-box"></div>
                  <div className="switch-left">
                    <span>NO</span>
                  </div>
                  <div className="switch-right">
                    <span>YES</span>
                  </div>
                </label>
              </div>
            </div>{" "}
            <div className="col-sm-2 mt-4">
              <p className="mb-1">Country Code</p>
              <select className="input countryCode" name="" id="">
                {codes.map((x) => {
                  return <option>{x.dial_code}</option>;
                })}
              </select>
            </div>
            <div className="col-sm-4 mt-4">
              <p className="mb-1">2-FA Phone Number</p>
              <input type="text" className="input phone" />
            </div>
          </div>

          <div className="form-floating mt-4">
            <textarea
              className="form-control input"
              placeholder="Health Conditions or other notes"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label className="color">Health Conditions or other notes</label>
          </div>
        </form>
      </div>

      <button className="btn">Save & Continue</button>
    </>
  );
}

export default Form;
