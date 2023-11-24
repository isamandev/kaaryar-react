import React from "react";
import "./Forms.css";
import formData from "../../assets/form";

const Form = () => {
  return (
    <form>
      {formData.map((item) => (
        <div key={item.id}>
          <label htmlFor={item.name}>{item.label}</label>
          {item.options ? (
            item.type === "select" ? (
              <select>
                {item.options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : item.type === "radio" ? (
              item.options.map((option) => (
                <>
                  <label htmlFor={option.value}>{option.label}</label>
                  <input
                    type="radio"
                    value={option.value}
                    name={option.value}
                  />
                </>
              ))
            ) : (
              <></>
            )
          ) : (
            <input {...item} />
          )}
        </div>
      ))}
    </form>
  );
};

export default Form;
