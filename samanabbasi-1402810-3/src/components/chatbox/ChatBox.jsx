import Actions from "../actions/Actions";
import "./ChatBox.css";
import Massages from "../../assets/messages";
import MassageList from "../massageList/MassageList";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <MassageList Massages={Massages} />
      <Actions />
    </div>
  );
};

export default ChatBox;
