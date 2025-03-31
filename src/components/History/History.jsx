import { useState } from 'react';
import '../History/History.css';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
export const HistoryComponent = ({history, handleReuseHistory, handleDeleteHistory}) => {
    const [toggleButton, setToggleButton] = useState(false);
    const handleToggleBtn = () => {
        setToggleButton((prev) => !prev);
      };
    return (
        <div>
            <Button onClick={handleToggleBtn} className="history_btn" sx={{ fontSize: '2rem' }}>≡</Button>
            <div className={`history_section ${toggleButton ? "" : "toggle"}`} style={{ overflow: "hidden" }}>
                <div className="history-container">
                <h4>History</h4>
                {history?.map((h, idx) => (
                    <div className="history_row history_border" key={idx}>
                    <p className="" onClick={() => handleReuseHistory(h)}>{h}</p>
                    <IconButton aria-label="delete" onClick={() => handleDeleteHistory(idx)}>
                        <DeleteIcon />
                    </IconButton>
                    </div>
                ))}
                </div>
            <Button onClick={handleToggleBtn} className="history_btn" sx={{ fontSize: '1.5rem', width: '3rem', height: '3rem' }}>X</Button>
            </div>
        </div>
    );
}