import React, { useState } from "react";
import "./DisplayForm.css";
import cities from "../../cities";
import skills from "../../skills";

const DisplayForm = () => {
  const [patternMismatch, setPatternMismatch] = useState(false);
  const [valueMissing, setValueMissing] = useState(false);
  const [emailPatternMismatch, setEmailPatternMismatch] = useState(false);
  const [emailValueMissing, setEmailValueMissing] = useState(false);

  const displayNameError = (event) => {
    const inputElement = event.target;
    setPatternMismatch(inputElement.validity.patternMismatch);
    setValueMissing(inputElement.validity.valueMissing);
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@gmail.com$/i;
    return emailRegex.test(email);
  };

  const displayEmailError = (event) => {
    const inputElement = event.target;
    const email = inputElement.value;
    const isValid = isValidEmail(email);
    setEmailPatternMismatch(!isValid);
    setEmailValueMissing(inputElement.validity.valueMissing);
  };
  return (
    <>
      <form action="">
        <label htmlFor="name">نام و نام خانوادگی</label>
        <input
          type="text"
          id="name"
          pattern="[آ-ی ]+"
          onInvalid={displayNameError}
          required
        />
        <span
          id="persian-words"
          className={patternMismatch ? "invalid" : undefined}
        >
          نام و نام خانوادگی باید فقط شامل حروف فارسی باشند
        </span>
        {valueMissing && (
          <span id="name-required" className="invalid">
            نام و نام خانوادگی اجباری است
          </span>
        )}
        <label htmlFor="email">ایمیل</label>
        <input
          type="email"
          name="email"
          id="email"
          onInvalid={displayEmailError}
          required
        />
        <span
          id="invalid-email"
          className={emailPatternMismatch ? "invalid" : undefined}
        >
          ساختار ایمیل نادرست است
        </span>
        {emailValueMissing && (
          <span id="email-required" className="invalid">
            ایمیل اجباری است
          </span>
        )}
        <label htmlFor="password">رمزعبور </label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirm-password">تکرار رمزعبور</label>
        <input type="password" name="confirm-password" id="confirm-password" />
        <label htmlFor="citys">شهر محل سکونت:</label>
        <select name="citys" id="citys">
          {cities.map((city) => (
            <option key={city.id} value={city.value}>
              {city.city}
            </option>
          ))}
        </select>
        <div className="genders">
          <h3>جنسیت:</h3>
          <label htmlFor="gender-male">مرد</label>
          <input type="radio" name="genders" id="gender-male" />
          <label htmlFor="gender-female">زن</label>
          <input type="radio" name="genders" id="gender-female" />
          <label htmlFor="gender-prefer-not-to-say">نمی توم بگم</label>
          <input type="radio" name="genders" id="gender-prefer-not-to-say" />
        </div>
        <h3>مهارت ها</h3>
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index}>
              <label htmlFor={skill.value}>{skill.value}</label>
              <input type="checkbox" name="skills" id={skill.value} />
            </div>
          ))}
        </div>
        <div className="actions-buttons">
          <button type="submit">ثبت نام</button>
        </div>
      </form>
    </>
  );
};

export default DisplayForm;
