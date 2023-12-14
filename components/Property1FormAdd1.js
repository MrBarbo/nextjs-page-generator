import { useMemo } from "react";
import "./Property1FormAdd1.css";

const Property1FormAdd1 = ({
  rectangle22,
  property1FormAddWidth,
  rectangleIconWidth,
  rectangleIconAlignSelf,
  rectangleIconMaxWidth,
  rectangleIconOverflow,
  rectangleIconFlexShrink,
  frameDivCursor,
  onFrameContainer18Click,
}) => {
  const property1FormAddStyle = useMemo(() => {
    return {
      width: property1FormAddWidth,
    };
  }, [property1FormAddWidth]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: rectangleIconWidth,
      alignSelf: rectangleIconAlignSelf,
      maxWidth: rectangleIconMaxWidth,
      overflow: rectangleIconOverflow,
      flexShrink: rectangleIconFlexShrink,
    };
  }, [
    rectangleIconWidth,
    rectangleIconAlignSelf,
    rectangleIconMaxWidth,
    rectangleIconOverflow,
    rectangleIconFlexShrink,
  ]);

  const frameDiv5Style = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  return (
    <div className="property-1form-add1" style={property1FormAddStyle}>
      <img
        className="property-1form-add-item"
        alt=""
        src={rectangle22}
        style={rectangleIconStyle}
      />
      <div
        className="group"
        style={frameDiv5Style}
        onClick={onFrameContainer18Click}
      >
        <div className="div1">+</div>
        <div className="add-product">Add Product</div>
      </div>
    </div>
  );
};

export default Property1FormAdd1;
