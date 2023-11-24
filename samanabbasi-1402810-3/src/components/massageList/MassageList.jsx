import Massage from "../massage/Massage";
import "./MassageList.css";

const MassageList = ({ Massages }) => {
  return (
    <div className="massage-list">
      {Massages.map((massage) => (
        <Massage key={massage.id} body={massage.body} isPeer={massage.isPeer} />
      ))}
    </div>
  );
};

export default MassageList;
