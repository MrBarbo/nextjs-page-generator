import { useMemo } from "react";
import { TextField } from "@mui/material";
import "./FullNameForm.css";

const FullNameForm = ({
  inputId,
  inputName,
  inputPlaceholder,
  inputLabel,
  inputType,
  inputAutocomplete,
  propOverflow,
  propOverflow1
  
}) => {
  const fullNameInputStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const nameInpStyle = useMemo(() => {
    return {
      overflow: propOverflow1,
    };
  }, [propOverflow1]);

  return (
    <div className="fullname-input" style={fullNameInputStyle}>
      <div className="full-name">{inputPlaceholder}</div>
      <div className="nameinp" style={nameInpStyle}>
        <TextField
          className="text"
          color="primary"
          name={inputName}
          id={inputId}
          autoComplete={inputAutocomplete}
          placeholder={inputLabel}
          type={inputType} // Establecer el tipo a "password" para ocultar el contenido
          variant="standard"
          
        />
      </div>
    </div>
  );
};

export default FullNameForm;
