import "./Massage.css";

const Massage = ({ body, isPeer }) => {
  return (
    <div
      className={isPeer ? "massage-container start" : "massage-container end"}
    >
      <p className={isPeer ? "blue" : "red"}>{body}</p>
    </div>
  );
};

export default Massage;
