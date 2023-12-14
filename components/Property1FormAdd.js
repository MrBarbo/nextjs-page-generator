import { useMemo } from "react";
import "./Property1FormAdd.css";

const Property1FormAdd = ({ frameDivCursor, onFrameContainer32Click }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  return (
    <div className="property-1form-add">
      <img
        className="property-1form-add-child"
        alt=""
        src="/rectangle-22@2x.png"
      />
      <div
        className="parent"
        style={frameDiv3Style}
        onClick={onFrameContainer32Click}
      >
        <div className="div">+</div>
        <div className="add-project">Add Project</div>
      </div>
    </div>
  );
};

export default Property1FormAdd;
