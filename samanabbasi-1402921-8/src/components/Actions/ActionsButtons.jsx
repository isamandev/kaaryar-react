import "./ActionsButtons.css";
import ApplyButton from "./ApplyButton";
import CancellButton from "./CancellButton";
const ActionsButtons = ({
  handleInputValue,
  InputValue,
  handleEmptyValue,
  handelNewTodos,
}) => {
  return (
    <div className="actions-buttons-container">
      <ApplyButton
        handleInputValue={handleInputValue}
        InputValue={InputValue}
        handleEmptyValue={handleEmptyValue}
        handelNewTodos={handelNewTodos}
      />
      <CancellButton handelNewTodos={handelNewTodos} />
    </div>
  );
};

export default ActionsButtons;
