import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Divider,Paper } from '@mui/material';
import sittingRed from '../../assests/img/sittingRed01.png'
import './style.css'




export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "inherit",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >   <div style={{display:'flex',justifyContent:'center', marginTop:'12px'}} >
         <Paper elevation={0} sx={{backgroundColor:"inherit",width:"992px"}}>
        <div className="img_wrapper">
        <img width='250vw' src={sittingRed} alt="sittingRed"/>
        </div>
       </Paper>

       </div>
       

        
        <Divider sx={{marginBottom:'5px'}}/>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h8">
              Created with ❣️ by chefpkj 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="h10">
              @2023 SCOD. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;