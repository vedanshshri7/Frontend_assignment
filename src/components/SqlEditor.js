import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-nord_dark";

import "ace-builds/src-noconflict/ext-language_tools";
import { Dropdown } from "react-bootstrap";

const SqlEditor = ({ queryText, setQueryText }) => { 
  const [theme, setTheme] = useState('solarized_light');

  const handleTheme = (themeName) => {
    setTheme(themeName);
  }

  return (
    <div className="sql-editor-container">
      <Dropdown className="theme-selector">
        <Dropdown.Toggle>Theme</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleTheme('monokai')} active={theme==='monokai'}>Monokai</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme('solarized_dark')} active={theme==='solarized_dark'}>Solarized Dark</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme('solarized_light')} active={theme==='solarized_light'}>Solarized Light</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme('tomorrow_night')} className={`${theme === 'tomorrow_night' ? 'theme-active' : ''}`}>Tomorrow Night</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme('nord_dark')} className={`${theme === 'nord_dark' ? 'theme-active' : ''}`}>Nord Dark</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <AceEditor
        mode="sql"
        theme={theme}
        name="sql-editor"
        fontSize={18}
        width="100%"
        height="100%"
        value={queryText} 
        onChange={(newValue) => setQueryText(newValue)}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default SqlEditor;
