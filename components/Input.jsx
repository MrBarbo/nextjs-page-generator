import { useMemo } from "react";
import { TextField } from "@mui/material";
import H2 from "./H2";
import styles from "./Input.module.css";
import { common } from "@mui/material/colors";

const Input = ({
  inputName,
  inputId,
  
  inputLabel,
  inputType,
  inputTitle,  

}) => {
  return (
    <div className={styles.input}>
      <H2
        propHeader={inputTitle}                
      />
      <div className={styles.input_text_here_wrapper} >
        <div className={styles.input_text_here}>
        <TextField          
          className="text"       
          color="primary"            
          name={inputName}
          id={inputId}          
          placeholder={inputLabel}
          type={inputType} // Establecer el tipo a "password" para ocultar el contenido
          multiline 
          maxRows={2}
          variant="standard"
                   
        />
        </div>
      </div>
    </div>
  );
};

export default Input;
