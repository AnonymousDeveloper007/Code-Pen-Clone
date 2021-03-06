import React ,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
  const [open, setOpen] = useState('');
  const { displayName, language,
    onChange, value
  } = props;
  
  function handleChange(editor, data, value)
  {
      onChange(value)
  }
  function clickHandler()
  {
    setOpen(prevOpen => !prevOpen)
  }
  return (
    <div className={`editor-container ${open ? '':'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          onClick={clickHandler}>
          <FontAwesomeIcon icon={ open ? faCompressAlt:faExpandAlt}/>
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme:'material '
        }}
      />
    </div>
  )
}
