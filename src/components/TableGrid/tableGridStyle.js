import { alpha, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: "2rem",
    "& .MuiInputBase_root": {
      color: "white",
    },
    background: "#283D4A !important",
  },
  gridContainer: {
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 3rem",
    alignItems: "center",
    background: "#283D4A !important",
  },
  paper: {
    width: "100%",
    marginBottom: 50,
    background: "#283D4A !important",
    color: "white",
  },
  Table_Container: {
    height: "76vh",
  },

  table: {
    root: {
      "& .Mui-selected": {
        backgroundColor: "red !important",
      },
    },
  },
  checkbox: {
    "&$checked": {
      color: "rgba(0, 0, 0, 0.54) !important",
    },
  },
  checked: {
    color: "yellow !important",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  HeadTableRow: {
    "&:hover": {
      backgroundColor: "#21323c !important",
    },
    backgroundColor: "#21323c",
    color: "white",
    "& > .MuiTableCell-root": {
      color: "white",
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#034269",
      "& > .MuiTableCell-root": {
        color: "white",
      },
    },
  },
  HeadTableCell: {
    background: "#21323c",
    position: "sticky",
    zIndex: "10",
    top: "0vh",
  },
  headCellLabel: {
    position: "sticky",
    "&:hover": {
      color: "white !important",
    },
    "&:selected": {
      color: "white !important",
    },
  },
  "MuiTableSortLabel-active": {
    color: "white !important",
  },
  MuiTableRow: {
    "&:hover": {
      backgroundColor: "#06588ae3 !important",
    },
    height: "4.7rem",
    backgroundColor: "#283D4A",
    color: "white",
    "& > .MuiTableCell-root": {
      color: "white",
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#034269",
      "& > .MuiTableCell-root": {
        color: "white",
      },
    },
  },
  root: {
    // color: '#14AFF1',
    "&$indeterminate": {
      color: "white",
    },
    // "&$unselected": {
    //   color: "#14AFF1",
    // },
  },
  indeterminate: {},
  MuiCheckbox: {
    color: "#14AFF1",
  },
  TableCell: {
    fontSize: "1.3rem",
    padding: ".5rem",
    height: ".5rem",
  },
  tableTool: {
    margin: "0 1.5rem",
    display: "flex",
    justifyContent: "end",
    fontSize: "1.3rem",
  },
  footerIcon: {
    background: "white",
    borderRadius: "1.5rem",
  },
  scrollTrackHorizontal: {
    background: "transparent",
    bottom: ".2rem",
    width: "100%",
  },
  scrollTrackVertical: {
    background: "transparent",
    right: ".2rem",
    top: ".2rem",
    bottom: ".2rem",
    width: ".5rem",
  },
  scrollThumbHorizontal: {
    height: ".4rem",
    borderRadius: ".4rem",
    boxShadow: "0 .2rem .4rem 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#ffffff4f",
    "&:hover": {
      background: "#fff",
    },
  },
  scrollThumbVertical: {
    width: ".4rem",
    borderRadius: ".4rem",
    boxShadow: "0 .2rem .4rem 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#ffffff4f",
    "&:hover": {
      background: "#fff",
    },
  },
}));