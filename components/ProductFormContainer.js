"use client";
import { useRouter } from 'next/navigation'
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Property1Form1 from "./Property1Form1";
import Property1FormAdd1 from "./Property1FormAdd1";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import "./ProductFormContainer.css";

const ProductFormContainer = () => {
  const router = useRouter()

  const onFrameContainer18Click = useCallback(() => {() => router.push('/dashboard')});

  return (
    <div className="product-group">
      <Property1Form1
        rectangle22="/rectangle-22@2x.png"
        property1FormWidth="332.6px"
        rectangleIconWidth="unset"
        rectangleIconAlignSelf="stretch"
        rectangleIconMaxWidth="100%"
        rectangleIconOverflow="hidden"
        rectangleIconFlexShrink="0"
        frameDivBoxSizing="border-box"
        productNameFontSize="unset"
        productNameFontWeight="unset"
        productNameFontFamily="unset"
        productNameColor="unset"
        productNameTextAlign="unset"
        productNameDisplay="unset"
        shortDescriptionFontSize="unset"
        shortDescriptionFontFamily="unset"
        shortDescriptionColor="unset"
        shortDescriptionTextAlign="unset"
        shortDescriptionDisplay="unset"
        productLinkFontSize="unset"
        productLinkFontFamily="unset"
        productLinkColor="unset"
        productLinkTextAlign="unset"
        productLinkDisplay="unset"
      />
      <Property1Form1
        rectangle22="/rectangle-225@2x.png"
        property1FormWidth="332.6px"
        rectangleIconWidth="unset"
        rectangleIconAlignSelf="stretch"
        rectangleIconMaxWidth="100%"
        rectangleIconOverflow="hidden"
        rectangleIconFlexShrink="0"
        frameDivBoxSizing="border-box"
        productNameFontSize="unset"
        productNameFontWeight="unset"
        productNameFontFamily="unset"
        productNameColor="unset"
        productNameTextAlign="unset"
        productNameDisplay="unset"
        shortDescriptionFontSize="unset"
        shortDescriptionFontFamily="unset"
        shortDescriptionColor="unset"
        shortDescriptionTextAlign="unset"
        shortDescriptionDisplay="unset"
        productLinkFontSize="unset"
        productLinkFontFamily="unset"
        productLinkColor="unset"
        productLinkTextAlign="unset"
        productLinkDisplay="unset"
      />
      <Property1Form1
        rectangle22="/rectangle-227@2x.png"
        property1FormWidth="332.6px"
        rectangleIconWidth="unset"
        rectangleIconAlignSelf="stretch"
        rectangleIconMaxWidth="100%"
        rectangleIconOverflow="hidden"
        rectangleIconFlexShrink="0"
        frameDivBoxSizing="border-box"
        productNameFontSize="unset"
        productNameFontWeight="unset"
        productNameFontFamily="unset"
        productNameColor="unset"
        productNameTextAlign="unset"
        productNameDisplay="unset"
        shortDescriptionFontSize="unset"
        shortDescriptionFontFamily="unset"
        shortDescriptionColor="unset"
        shortDescriptionTextAlign="unset"
        shortDescriptionDisplay="unset"
        productLinkFontSize="unset"
        productLinkFontFamily="unset"
        productLinkColor="unset"
        productLinkTextAlign="unset"
        productLinkDisplay="unset"
      />
      <Property1FormAdd1
        rectangle22="/rectangle-22@2x.png"
        property1FormAddWidth="332.6px"
        rectangleIconWidth="unset"
        rectangleIconAlignSelf="stretch"
        rectangleIconMaxWidth="100%"
        rectangleIconOverflow="hidden"
        rectangleIconFlexShrink="0"
        frameDivCursor="pointer"
        onFrameContainer18Click={onFrameContainer18Click}
      />
      <div className="product">
        <img className="product-child" alt="" src="/rectangle-227@2x.png" />
        <div className="produ-name-group">
          <div className="produ-name1">Produ Name</div>
          <div className="lorem-ipsum-dolor9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className="button-wrapper1">
            <StateDefaultTypePrimary
              go={`Go <~>`}
              stateDefaultTypePrimaryAlignItems="flex-start"
              stateDefaultTypePrimaryJustifyContent="flex-start"
              stateDefaultTypePrimaryFlex="unset"
              stateDefaultTypePrimaryWidth="unset"
              goFontSize="16px"
              goTextAlign="left"
              goFlex="unset"
            />
          </div>
        </div>
      </div>
      <div className="product">
        <img className="product-child" alt="" src="/rectangle-227@2x.png" />
        <div className="produ-name-group">
          <div className="produ-name1">Produ Name</div>
          <div className="lorem-ipsum-dolor9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className="button-wrapper1">
            <StateDefaultTypePrimary
              go={`Go <~>`}
              stateDefaultTypePrimaryAlignItems="flex-start"
              stateDefaultTypePrimaryJustifyContent="flex-start"
              stateDefaultTypePrimaryFlex="unset"
              stateDefaultTypePrimaryWidth="unset"
              goFontSize="16px"
              goTextAlign="left"
              goFlex="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormContainer;
