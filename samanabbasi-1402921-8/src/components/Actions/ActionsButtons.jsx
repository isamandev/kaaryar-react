import "./ActionsButtons.css";
import ApplyButton from "./ApplyButton";
import CancellButton from "./CancellButton";
const ActionsButtons = ({
  handleInputValue,
  InputValue,
  handleEmptyValue,
  handleRemoveAllBtn,
  check,
}) => {
  return (
    <div className="actions-buttons-container">
      <ApplyButton
        handleInputValue={handleInputValue}
        InputValue={InputValue}
        handleEmptyValue={handleEmptyValue}
        handleRemoveAllBtn={handleRemoveAllBtn}
        check={check}
      />
      <CancellButton handleRemoveAllBtn={handleRemoveAllBtn} />
    </div>
  );
};

export default ActionsButtons;
