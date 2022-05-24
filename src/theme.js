import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E5E5E5",
    },
    success: {
      main: "#1976D2",
      dark: "rgba(19, 47, 76, 0.87)",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#1976D280",
    },
  },
  typography: {
    paymentText: {
      fontWeight: "700",
      fontSize: "4.428vw",
      // lineHeight: "5.04rem",
      fontStyle: "normal",
      textAlign: "center",
      color: "#1976D2",
    },
    subheading: {
      fontWeight: "600",
      fontSize: "5.535vw",
      // lineHeight: "7.5rem",
      fontStyle: "normal",
      textAlign: "center",
      letterSpacing: "-0.73802px",
      color: "rgba(19, 47, 76, 0.87)",
      marginTop: "1%",
    },
    emailText: {
      fontWeight: "400",
      fontSize: "3vw",

      fontStyle: "normal",
      textAlign: "center",
      color: "rgba(19, 47, 76, 0.87)",
    },
    noReceiptText: {
      fontWeight: "400",
      fontSize: "3vw",
      fontStyle: "normal",
      textAlign: "center",
      color: "rgba(19, 47, 76, 0.87)",
    },
  },
});

export default theme;
