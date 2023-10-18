  import EditorJS from '@editorjs/editorjs';
  import React, { useEffect, useRef } from 'react';
  import "./style.css";
  import ImageTool from '@editorjs/image';
  // my mui components
  import Button from '@material-ui/core/Button';
  import SaveIcon from '@material-ui/icons/Save';
  import DragDrop from 'editorjs-drag-drop';


  const EditorBlock = () => {
    const editorRef = useRef(null);

    // Initialize the EditorJS instance here
    

    useEffect(() => {
      const editor = new EditorJS({
        holder: 'editorJs',
        onReady: () => {
          console.log('Editor.Js is ready to work!');
          new DragDrop(editor);
        },
        data: {
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: 'This is a sample <more style={{background:"red",fontStyle:"italic"}}>This is red</more> paragraph.'
              }
            }
          ]
        },
        tools:{
          image:{
            class:ImageTool,
            config:{
              //configuration image tool options here
            }
          },
          
        }
      });
      editorRef.current = editor;

    }, []);

    const onSave = () => {
      console.log("check data saving...")
    };

    return (
      <>
        <div className='Savebutton_wrapper'>
          <Button variant="contained" color="default" size="small" className='saveButton' onClick={onSave} startIcon={<SaveIcon />}>Save</Button>
        </div>
        
        <div id='editorJs' style={{ height: "88vh" }}>
          {/* Editor content goes here */}
        </div>
      </>
    );
  }

  export default EditorBlock;
