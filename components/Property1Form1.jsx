import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "./Property1Form1.module.css";

const Property1Form1 = ({
  imgSrc,
  inputName,
  inputId,
  inputLabel,
  inputType,
  inputName2,
  inputId2,
  inputLabel2,
  inputType2,
  inputName3,
  inputId3,
  inputLabel3,
  inputType3,

  onInputChange,
  onInputChange2,
  onInputChange3,


}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    // Call the callback function to pass the value to the parent component
    onInputChange(value);
  };
  const handleChange2 = (event) => {
    const value = event.target.value;
    // Call the callback function to pass the value to the parent component
    onInputChange2(value);
  };
  const handleChange3 = (event) => {
    const value = event.target.value;
    // Call the callback function to pass the value to the parent component
    onInputChange3(value);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className={styles.property_1form1}>
      <img
        className={styles.property_1form_item}
        alt=""
        src={imgSrc}
      />
      <div className={styles.product_name_parent}>
        <div className={styles.product_name}>
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
        <div className={styles.short_description_container}>
          <div className={styles.product_link}>
          <ThemeProvider theme={theme}>
          <TextField    
          fullWidth      
          className="text"       
          color="primary"            
          name={inputName2}
          id={inputId2}          
          placeholder={inputLabel2}
          type={inputType2} // Establecer el tipo a "password" para ocultar el contenido
          multiline 
          maxRows={2}
          variant="standard"          
          onChange={handleChange2} // Add the onChange handler
        />
        </ThemeProvider>
          </div>
        </div>
        <div className={styles.short_description_container}>
          <div className={styles.product_link}>
          <ThemeProvider theme={theme}>
        <TextField    
          fullWidth      
          className="text"       
          color="primary"            
          name={inputName3}
          id={inputId3}          
          placeholder={inputLabel3}
          type={inputType3} // Establecer el tipo a "password" para ocultar el contenido
          multiline 
          maxRows={2}
          variant="standard"          
          onChange={handleChange3} // Add the onChange handler
        />
        </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Form1;
