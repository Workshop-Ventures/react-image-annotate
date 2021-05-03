import { grey, blue, orange, purple } from "@material-ui/core/colors";
export default {
  container: {
    fontSize: 11,
    fontWeight: "bold",
    color: grey[700],
    "& .icon": {
      marginTop: 4,
      width: 16,
      height: 16
    },
    "& .icon2": {
      opacity: 0.5,
      width: 16,
      height: 16,
      transition: "200ms opacity",
      "&:hover": {
        cursor: "pointer",
        opacity: 1
      }
    }
  },
  row: {
    padding: 1,
    cursor: "pointer",
    "&.header:hover": {
      // backgroundColor: "#fff",
      backgroundColor: "inherit"
    },
    "&.highlighted": {
      // backgroundColor: blue[100],
      // backgroundColor: "#ccc",
      border: "1px solid #ccc",
      borderRadius: "5px"
    },
    "&:hover": {// backgroundColor: blue[50],
      // backgroundColor: "#ccc",
      // color: grey[800],
    }
  },
  chip: {
    display: "flex",
    flexDirection: "row",
    padding: 2,
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: "center",
    "& .color": {
      borderRadius: 5,
      width: 10,
      height: 10,
      marginRight: 4
    },
    "& .text": {}
  }
};