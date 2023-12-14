import { useMemo } from "react";
import "./StateDefault1.css";

const StateDefault1 = ({
  inicio,  
  divColor,
  divFontWeight,
  inicioColor,
  onHeaderLinkContainerClick,
}) => {
  

  const divStyle = useMemo(() => {
    return {
      color: divColor,
      fontWeight: divFontWeight,
    };
  }, [divColor, divFontWeight]);

  const inicioStyle = useMemo(() => {
    return {
      color: inicioColor,
      fontWeight: divFontWeight,
    };
  }, [inicioColor, divFontWeight]);

  return (
    <div
      className="statedefault1"      
      onClick={onHeaderLinkContainerClick}
    >
      <div className="div3" style={divStyle}>
        #
      </div>
      <div className="inicio" style={inicioStyle}>
        {inicio}
      </div>
    </div>
  );
};

export default StateDefault1;
