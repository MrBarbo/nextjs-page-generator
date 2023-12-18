import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function LanguageSelector() {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
        <List sx={{pt: 0}}>          
          <ListItemButton onClick={handleClick} sx={{pt: 0, pb: 0}}>            
            <ListItemText primary="ES" sx={{mt: 0.2}}/>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                
                <ListItemText primary="EN" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                
                <ListItemText primary="PT" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      );
    }