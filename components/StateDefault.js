import { useMemo } from "react";
import "./StateDefault.css";
import LanguageSelector from "./LanguageSelector"

const StateDefault = ({ stateDefaultFlex}) => {
  
  const stateDefaultStyle = useMemo(() => {
    return {
      flex: stateDefaultFlex,
    };
  }, [stateDefaultFlex]);

 

  return (
    <div className="statedefault" style={stateDefaultStyle}>
      <div className="es"></div>      
      <LanguageSelector></LanguageSelector>      
    </div>
  );
};

export default StateDefault;
