  import EditorJS from '@editorjs/editorjs';
  import React, { useEffect, useRef } from 'react';
  import "./style.css";
  import ImageTool from '@editorjs/image';
  // my mui components
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
          <button type='button' variant="contained" color="default" size="small" className='saveButton' onClick={onSave} >Save</button>
        </div>
        
        <div id='editorJs' style={{ height: "88vh" }}>
          {/* Editor content goes here */}
        </div>
      </>
    );
  }

  export default EditorBlock;
