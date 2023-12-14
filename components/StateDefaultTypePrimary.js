import { useMemo } from "react";
import "./StateDefaultTypePrimary.css";

const StateDefaultTypePrimary = ({
  go,
  goClick,
}) => {
  return (
    <div
      className="statedefault-typeprimary"      
      onClick={goClick}
    >
      <div className="go">
        {go}
      </div>
    </div>
  );
};

export default StateDefaultTypePrimary;
