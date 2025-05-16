import React, { useState, useEffect, Suspense, useCallback, useMemo, useTransition } from "react";
import "./App.css";
import { Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Dropdown } from "react-bootstrap";
import { data, suggestions } from "./data/sqlData";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeProvider } from "./components/DarkMode/DarkModeContext.js";
import DarkModeToggle from "./components/DarkMode/DarkModeToggle.js";
import SqlEditor from "./components/SqlEditor";
import { downloadJSON } from "./data/downloadJSON";
import { HistoryComponent } from "./components/History/History.jsx";

const TableGrid = React.lazy(() => import("./components/TableGrid/TableGrid"));

function App() {
  const [queryText, setQueryText] = useState("-- Select a query and press 'Run Query' to execute "); 
  const [tableData, setTableData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    import("./components/TableGrid/TableGrid");
  }, []);

  const handleRunQuery = () => {
    const selectedText = window.getSelection().toString().trim() || queryText.trim(); 
  
    if (!selectedText || selectedText.startsWith("--")) {
      alert("Query is not selected! Please select a query and press 'Run Query'.");
      return;
    }
  
    let result = data.find((d) => d.query === selectedText) || data[2];
  
    startTransition(() => {
      setTableData(result); // Non-blocking state update
    });
  
    setHistory((prevHistory) => [...prevHistory, selectedText]);
    setPage(0);
    setRowsPerPage(10);
  };
  
  
  const handleSuggestion = (sgstn) => {
    setQueryText(sgstn);
    setTableData(null);
  };

  const handleDeleteHistory = (id) => {
    setHistory((prevHistory) => prevHistory.filter((_, idx) => idx !== id));
  };

  const handleReuseHistory = (q) => {
    setQueryText(q);
    setTableData(null);
  };


  const handleDownloadJSON = () => {
    if (!tableData) {
      setTimeout(() => alert("No query results to download!"), 0);
      return;
    }
    setTimeout(() => downloadJSON(tableData), 0);
  };

  // Memoized Table Rendering to prevent unnecessary re-renders
  const showTableData = useMemo(() => {
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
          )
        ) : (
          <p className="loading_text">Loading...</p>
        )}
      </div>
    );
  }, [tableData, loading]);

  return (
    <DarkModeProvider>
      <div className="App">
        <div className="header_section">
          <HistoryComponent 
            history={history}
            handleReuseHistory={handleReuseHistory} 
            handleDeleteHistory={handleDeleteHistory}
          />
          <h1>SQL Runner</h1>
          <div className="dark_mode_icon">
            <DarkModeToggle />
          </div>
          <div>
            <IconButton aria-label="GitHub" className="github_icon">
              <a rel="noopener noreferrer" href="https://github.com/vedanshshri7/Frontend_assignment" target="_blank">
                <GitHubIcon/>
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
                <Dropdown.Item className="suggestions_item" key={idx} onClick={() => handleSuggestion(sgstn)}>
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
              {showTableData}
            </div>
          </div>
        </div>
      </div>
    </DarkModeProvider>
  );
}
export default App;
