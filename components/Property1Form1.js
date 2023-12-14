import { useMemo } from "react";
import "./Property1Form1.css";

const Property1Form1 = ({
  rectangle22,
  productName,
  shortDescription,
  productLink,
  property1FormWidth,
  rectangleIconWidth,
  rectangleIconAlignSelf,
  rectangleIconMaxWidth,
  rectangleIconOverflow,
  rectangleIconFlexShrink,
  frameDivBoxSizing,
  productNameFontSize,
  productNameFontWeight,
  productNameFontFamily,
  productNameColor,
  productNameTextAlign,
  productNameDisplay,
  shortDescriptionFontSize,
  shortDescriptionFontFamily,
  shortDescriptionColor,
  shortDescriptionTextAlign,
  shortDescriptionDisplay,
  productLinkFontSize,
  productLinkFontFamily,
  productLinkColor,
  productLinkTextAlign,
  productLinkDisplay,
}) => {
  const property1Form1Style = useMemo(() => {
    return {
      width: property1FormWidth,
    };
  }, [property1FormWidth]);

  const rectangleIcon1Style = useMemo(() => {
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

  const frameDiv6Style = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  const productNameStyle = useMemo(() => {
    return {
      fontSize: productNameFontSize,
      fontWeight: productNameFontWeight,
      fontFamily: productNameFontFamily,
      color: productNameColor,
      textAlign: productNameTextAlign,
      display: productNameDisplay,
    };
  }, [
    productNameFontSize,
    productNameFontWeight,
    productNameFontFamily,
    productNameColor,
    productNameTextAlign,
    productNameDisplay,
  ]);

  const shortDescription1Style = useMemo(() => {
    return {
      fontSize: shortDescriptionFontSize,
      fontFamily: shortDescriptionFontFamily,
      color: shortDescriptionColor,
      textAlign: shortDescriptionTextAlign,
      display: shortDescriptionDisplay,
    };
  }, [
    shortDescriptionFontSize,
    shortDescriptionFontFamily,
    shortDescriptionColor,
    shortDescriptionTextAlign,
    shortDescriptionDisplay,
  ]);

  const productLinkStyle = useMemo(() => {
    return {
      fontSize: productLinkFontSize,
      fontFamily: productLinkFontFamily,
      color: productLinkColor,
      textAlign: productLinkTextAlign,
      display: productLinkDisplay,
    };
  }, [
    productLinkFontSize,
    productLinkFontFamily,
    productLinkColor,
    productLinkTextAlign,
    productLinkDisplay,
  ]);

  return (
    <div className="property-1form1" style={property1Form1Style}>
      <img
        className="property-1form-item"
        alt=""
        src={rectangle22}
        style={rectangleIcon1Style}
      />
      <div className="product-name-parent" style={frameDiv6Style}>
        <div className="product-name" style={productNameStyle}>
          {productName}
        </div>
        <div className="short-description-container">
          <div className="product-link" style={shortDescription1Style}>
            {shortDescription}
          </div>
        </div>
        <div className="short-description-container">
          <div className="product-link" style={productLinkStyle}>
            {productLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Form1;
