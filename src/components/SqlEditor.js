import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-nord_dark";

import "ace-builds/src-noconflict/ext-language_tools";
import { Dropdown } from "react-bootstrap";

const SqlEditor = ({ queryText, setQueryText, onRunQuery }) => { 
  const [theme, setTheme] = useState("solarized_light");

  const handleTheme = (themeName) => {
    setTheme(themeName);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault(); 
        onRunQuery(); 
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onRunQuery]); 
  const getResponsiveFontSize = (rem) => {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return rem * rootFontSize;
  };
  return (
    <div className="sql-editor-container">
      <Dropdown className="theme-selector">
        <Dropdown.Toggle>Theme</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleTheme("monokai")} active={theme === "monokai"}>
            Monokai
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme("solarized_dark")} active={theme === "solarized_dark"}>
            Solarized Dark
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme("solarized_light")} active={theme === "solarized_light"}>
            Solarized Light
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme("tomorrow_night")} active={theme === "tomorrow_night"}>
            Tomorrow Night
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleTheme("nord_dark")} active={theme === "nord_dark"}>
            Nord Dark
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <AceEditor
        mode="sql"
        theme={theme}
        name="sql-editor"
        fontSize={getResponsiveFontSize(1.3)}
        width="100%"
        height="100%"
        value={queryText} 
        onChange={(newValue) => setQueryText(newValue)}
        editorProps={{ $blockScrolling: true,  }}
        
      />
    </div>
  );
};

export default SqlEditor;