import React, { useState, Suspense, useCallback } from "react";
import "./App.css";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Dropdown } from "react-bootstrap";
import { data, suggestions } from "./sqlData";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeProvider } from "./DarkModeContext.js";
import DarkModeToggle from "./components/TableGrid/DarkModeToggle";
import SqlEditor from "./components/SqlEditor";
import { downloadJSON } from "./data/downloadJSON";
function App() {
  const TableGrid = React.lazy(() => import("./components/TableGrid/TableGrid"));

  const [queryText, setQueryText] = useState(""); 
  const [history, setHistory] = useState([]);
  const [tableData, setTableData] = useState(null); 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  const handleRunQuery = () => {
    setQueryText(queryText);
    if (!queryText.trim()) return; 
    let result = data.find((d) => d.query === queryText) || data[2];
    setLoading(true);
    setTimeout(() => {
     setTableData(result); 
      setLoading(false);
    }, 400);

    setHistory([...history, queryText]);
    setPage(0);
    setRowsPerPage(10);
  };

  const handleSuggestion = (sgstn) => {
    setQueryText(sgstn); 
    setTableData(null);  
  };

  const handleDeleteHistory = (id) => {
    let hist = history.filter((_, idx) => idx !== id);
    setHistory(hist);
  };

  const handleReuseHistory = (q) => {
    setQueryText(q);
    setTableData(null);
  };

  const handleToggleBtn = () => {
    setToggleButton(!toggleButton);
  };
  const handleDownloadJSON = () => {
    if (!tableData) {
      setTimeout(() => alert("No query results to download!"), 0);
      return;
    }
    setTimeout(() => downloadJSON(tableData), 0);
  };


  const ShowTableData = useCallback(() => {
    return (
      <div>
        {!loading ? (
              
      tableData ? (
      <Suspense fallback={<div></div>}>
        <TableGrid
          headCells={tableData?.headcells}
          rows={tableData?.output}
          page_no={page}
          rows_per_page={rowsPerPage}
        />
      </Suspense>
    ) : (
      <p className="loading_text">Run a query to see results</p>
    )): (
      <p className="loading_text">Loading...</p>
    )}
    </div>
    )
  }, [tableData]);

  return (
    <DarkModeProvider>
      <div className="App">
        <div className="header_section">
        <div>
              <Button onClick={handleToggleBtn} className="history_btn" sx={{fontSize: '2rem'}}>≡</Button>
              <div
                className={`history_section ${toggleButton ? "" : "toggle"}`}
                style={{ overflow: "hidden" }}
              >
                <div className="history-container">
                  <h4>History</h4>
                  {history.map((h, idx) => (
                    <div className="history_row history_border" key={idx}>
                      <p className="" onClick={() => handleReuseHistory(h)}>
                        {h}
                      </p>
                      <IconButton aria-label="delete" onClick={() => handleDeleteHistory(idx)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ))}
                  </div>
                  <Button onClick={handleToggleBtn} className="history_btn" sx={{fontSize: '1.5rem', width: '3rem', height: '3rem'}}>X</Button>
              </div>
            </div>
          <h1>ATLAN SQL Compiler</h1>
          <div className="dark_mode_icon">
            <DarkModeToggle />
          </div>
          <div>
            <IconButton aria-label="GitHub" className="github_icon">
              <a
                rel="noopener noreferrer"
                href="https://github.com/vedanshshri7/Frontend_assignment"
                target="_blank"
              >
                <GitHubIcon style={{ fontSize: "30px" }} />
              </a>
            </IconButton>
          </div>
        </div>

        <div className="query_section">
          <Dropdown>
            <Dropdown.Toggle className="suggestion_button" id="dropdown-basic">
              Queries
            </Dropdown.Toggle>
            <Dropdown.Menu className="suggestions_menu">
              {suggestions.map((sgstn, idx) => (
                <Dropdown.Item
                  className="suggestions_item"
                  key={idx}
                  onClick={() => handleSuggestion(sgstn)}
                >
                  {sgstn}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="query_field">
          <SqlEditor queryText={queryText} setQueryText={setQueryText} onRunQuery={handleRunQuery} />
          </div>
          <div className="btn-container">
            <div className="run-query-container">
              <Button className="run_query_btn" onClick={handleRunQuery} title="Ctrl + Enter">
                Run Query
              </Button>
              <Button className="download_json_btn" onClick={handleDownloadJSON}>
                Download JSON
              </Button>
            </div>
          </div>

          <div className="flexi-box">
            <div className="output_section">
              
              <ShowTableData/>
            </div>
          </div>
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
