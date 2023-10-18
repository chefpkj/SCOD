import React from 'react'
import './style.css'
import topPeekl from "../../assests/img/topPeekI.png";
import EditorBlock from '../EditorJs/EditorBlock';
import Ppk from './ppk';
//my mui components
import { Paper } from '@mui/material'
//*****************


const MainBody = () => {
  console.log("main page component!!")

  return (
    <div className='mainBodyWapper'>
      <div style={{position:'relative'}}>
        <img className='writing_kid_wrapper' width='110px'  src={topPeekl} alt='writing_kid.png'/>
      </div>
      <Paper elevation={3} sx={{backgroundColor:"white", height:"1200px",width:"992px"}}>
       <EditorBlock/>
      </Paper>
    </div>       

  )
}

export default MainBody
