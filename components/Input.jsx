import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import H2 from "./H2";
import styles from "./Input.module.css";


const Input = ({
  inputName,
  inputId,  
  inputLabel,
  inputType,
  inputTitle,

  onInputChange 
}) => {
  //Manejador de contenido del texto
  const handleChange = (event) => {
    const value = event.target.value;
    // Call the callback function to pass the value to the parent component
    onInputChange(value);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className={styles.input}>
      <H2
        propHeader={inputTitle}                
      />
      <div className={styles.input_text_here_wrapper} >
        <div className={styles.input_text_here}>
        <ThemeProvider theme={theme}>
        <TextField    
          fullWidth      
          className="text"       
          color="primary"            
          name={inputName}
          id={inputId}          
          placeholder={inputLabel}
          type={inputType} // Establecer el tipo a "password" para ocultar el contenido
          multiline 
          maxRows={2}
          variant="standard"          
          onChange={handleChange} // Add the onChange handler
        />
        </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Input;
