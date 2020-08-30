import React from "react";
// import  { anime } from "react-anime";
import "../../../index.scss";
function ProfileInputs({ handleSubmit, addHandleChange }) {
//   var current = null;
//   const handleSubmitFocus = (e) => {
//     if (current) current.pause();
//     current = anime({
//       targets: "path",
//       strokeDashoffset: {
//         value: -2421,
//         duration: 700,
//         easing: "easeOutQuart",
//       },
//       strokeDasharray: {
//         value: "522 3000",
//         duration: 700,
//         easing: "easeOutQuart",
//       },
//     });
//   };
//   const handleTextFocus = (e) => {
//     if (current) current.pause();
//     //console.log(e);debugger;
//     current = anime({
//       targets: "path",
//       strokeDashoffset: {
//         value: e.target.dataset.strokedashoffset,
//         duration: 700,
//         easing: "easeOutQuart",
//       },
//       strokeDasharray: {
//         value: e.target.dataset.strokedasharray,
//         duration: 700,
//         easing: "easeOutQuart",
//       },
//     });
  };
  return (
    <div className="demensions">
      <div>
       <svg className="svg" viewBox="0 0 320 550.8">
          <defs>
            <linearGradient
              inkscapeCollect="always"
              id="linearGradient"
              x1="13"
              y1="193.49992"
              x2="307"
              y2="193.49992"
              gradientUnits="userSpaceOnUse"
            >
              <stop style={{ stopColor: "#ff00ff" }} offset="0" id="stop876" />
              <stop style={{ stopColor: "#ff0000" }} offset="1" id="stop878" />
            </linearGradient>
          </defs>
          <path className="path"
            d="M282.8,23l-240,0c0,0-25,0.8-25,35c0,34.2,25,35,25,35l-5.5,0l240,0c0,0,25,0.8,25,35c0,34.2-25,35-25,35l5.5,0l-240,0
	c0,0-25,0.8-25,35c0,34.2,25,35,25,35l-5.5,0l240,0c0,0,25,0.8,25,35c0,34.2-25,35-25,35l8.3,0l-240,0c0,0-25,0.8-25,35
	c0,34.2,25,35,25,35l-5.5,0l240,0c0,0,25,0.8,25,35c0,34.2-25,35-25,35H40c0,0-25,4-25,38.5S40,520,40,520h215c0,0,20-1,20-25
	s-20-25-20-25H65c0,0-20,1.7-20,25c0,24,20,25,20,25h168.6"
          />
  </svg>
        <form
          style={{ position: "absolute", zIndex: 10, margin: "0 40px" }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <label
            className="label"
            htmlFor="first_name"
            aria-label="first_name"
            alt="first name"
        >First Name</label>
          <input
            type="text"
            placeholder="First Name"
            class="input"
            name="first_name"
            data-strokedashoffset="0"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}
          />
          <label
            className="label"
            htmlFor="last_name"
            aria-label="last name"
            data-testid="lname"
          >Last Name</label>
          <input
            type="text"
            aria-label="last name"
            placeholder="Last Name"
            class="input"
            name="last_name"
            data-strokedashoffset="-331"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}
          />
          <label
            className="label"
            htmlFor="dob"
            aria-label="birth date"
          >Date</label>
          <input
            class="input datepicker"
            id="dob"
            type="date"
            name="dob"
            data-strokedashoffset="-686"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}
          />
          <label
            className="label"
            htmlFor="address"
            aria-label="address"
          >Address</label>
          <input
            type="text"
            placeholder="Address"
            className="input"
            name="address"
            data-strokedashoffset="-1012"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}
          />
          <label className="label" htmlFor="city" aria-label="city">City </label>
          <input
            type="text"
            placeholder="City"
            className="input"
            name="city"
            data-strokedashoffset="-1367"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}
          />
          <div>
            <label
              className="label"
              aria-label="state"
            >States</label>
            <select
              data-strokedashoffset="-1696"
              data-strokedasharray="240 3000"
              onFocus={handleTextFocus}
               onChange={addHandleChange}
              className="input"
              name="state"
            >
              <option  placeholder="Choose">Choose...</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washingtion">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
            </div>
          <div>
            <label
              className="label"
              for="Zip Code"
              aria-label="zip code"
            >Zip</label>
            <input
              type="number" 
              placeholder="Zip Code"
              className="input"
              name="zip"
              data-strokedashoffset="-2040"
              data-strokedasharray="240 3000"
              onFocus={handleTextFocus}
              onChange={addHandleChange}
            />
          </div>
          <div className="center" >
            <button type="submit" onFocus={handleSubmitFocus} className="btn">
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProfileInputs;