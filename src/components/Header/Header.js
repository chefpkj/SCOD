import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import './styles.css'





export default function ButtonAppBar() {
  return (

    <>
  
        <Box sx={{ flexGrow: 1,marginBottom:'30px'}}>
      
        <AppBar position="static" style={{ background: 'inherit', height: '60px', border: 'none',boxShadow:'none' }} >
        <Toolbar sx={{display:'flex',justifyContent:'start',alignItems:'baseline'}}>
        
        {/* my logo component */}
        <div class="spinner">
          <div class="inner_spin level">
          </div>
          <span class="fullie header_Title"><h2 style={{color:"black",fontFamily:'Fantasy'}}>SCOD</h2></span>
        </div>
        
        </Toolbar>
        
      </AppBar>

      

    
      
    </Box>





   

    


    

    




    </>




    
  );
}