import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const SqlEditor = ({ queryText, setQueryText }) => {
  return (
    <div className="sql-editor-container">
      <AceEditor
        mode="sql"
        theme="monokai"
        name="sql-editor"
        fontSize={14}
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
