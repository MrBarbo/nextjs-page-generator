import { Checkbox } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import H2 from "./H2";
import styles from "./Socials.module.css";

const Socials = ({ 

  onInputChange1,
  onInputChange2,
  onInputChange3,
  onInputChange4 
}) => { 
  const [checked, setChecked] = useState();

  const handleLinked = (event) => {
    const checked = event.target.checked;
    // Call the callback function to pass the value to the parent component
    onInputChange1(checked);
  };
  const handleInsta = (event) => {
    const checked = event.target.checked;
    // Call the callback function to pass the value to the parent component
    onInputChange2(checked);
  };
  const handleGit = (event) => {
    const checked = event.target.checked;
    // Call the callback function to pass the value to the parent component
    onInputChange3(checked);
  };
  const handleMail = (event) => {
    const checked = event.target.checked;
    // Call the callback function to pass the value to the parent component
    onInputChange4(checked);
  };
  


  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className={styles.socials1}>
      <H2
        propHeader="Socials"        
      />
      <div className={styles.frame_div}>      
        <div className={styles.check_parent}>
          <img
            className={styles.div_icon}
            alt=""
            src="/linkedin.svg"
          />
          <ThemeProvider theme={theme} >
            <Checkbox        
              name="linked"
              checked={checked}
              onChange={handleLinked}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            </ThemeProvider>          
        </div>
        <div className={styles.check_parent}>
          <img
            className={styles.div_icon1}
            alt=""
            src="/instagram.svg"
          />
          <ThemeProvider theme={theme} >
            <Checkbox     
              name="insta"   
              checked={checked}
              onChange={handleInsta}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            </ThemeProvider>
        </div>
        <div className={styles.check_parent}>
          <img
            className={styles.div_icon}
            alt=""
            src="/github.svg"
          />
          <ThemeProvider theme={theme} >
            <Checkbox       
              name="gith" 
              checked={checked}
              onChange={handleGit}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            </ThemeProvider>
        </div>
        <div className={styles.check_parent}>
          <img
            className={styles.div_icon}
            alt=""
            src="/email.svg"          
          />
          <ThemeProvider theme={theme} >
            <Checkbox        
              name="email"
              checked={checked}
              onChange={handleMail}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Socials;
