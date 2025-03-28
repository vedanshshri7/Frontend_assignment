import React, { useState, Suspense } from "react";
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

  return (
    <DarkModeProvider>
      <div className="App">
      <div className="header_section">
          <h1>Dummy SQL Compiler</h1>
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
              Suggestions
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
            <SqlEditor queryText={queryText} setQueryText={setQueryText} /> 
          </div>

          <div className="run-query-container">
          <Button className="run_query_btn" onClick={handleRunQuery}>
            Run Query
          </Button>
          </div>
          <div className="flexi-box">
            <div>
              <Button onClick={handleToggleBtn}>≡</Button>
              <div
                className={`history_section ${toggleButton ? "" : "toggle"}`}
                style={{ overflow: "hidden" }}
              >
                <h3>History</h3>
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
            </div>

            <div className="output_section">
              {!loading ? (
                tableData ? (
                  <Suspense fallback={<div></div>}>
                    <TableGrid
                      headCells={tableData.headcells}
                      rows={tableData.output}
                      page_no={page}
                      rows_per_page={rowsPerPage}
                    />
                  </Suspense>
                ) : (
                  <p className="loading_text">Run a query to see results</p> 
                )
              ) : (
                <p className="loading_text">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
