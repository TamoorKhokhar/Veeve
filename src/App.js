import "./App.css";
import theme from "./theme";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import MailIcon from "@mui/icons-material/Mail";
import CancelIcon from "@mui/icons-material/Cancel";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid
          container
          xs={12}
          sx={{
            backgroundColor: "primary.main",
            background:
              "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
            height: "100vh",
            paddingTop: "2.5%",
          }}
        >
          <Grid item xs={12}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DoneIcon
                sx={{
                  color: "success.main",
                  height: "7rem",
                  width: "5vw",
                  paddingRight: "1%",
                }}
              />

              <Typography variant="paymentText">Payment Successful!</Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{
                color: "success.main",
              }}
            >
              <Grid
                cotainer
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography variant="subheading">
                    How would you like your receipt?
                  </Typography>
                </Box>
              </Grid>

              <Grid
                container
                xs={12}
                sx={{
                  marginTop: "3.5%",
                  marginBottom: "3.5%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid
                  container
                  item
                  xs={8}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Grid
                    item
                    xs={4.5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "1.25rem",
                      boxShadow:
                        "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                      width: "100vw",
                      height: "30vh",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <MailIcon
                        sx={{
                          color: "success.main",
                          height: "12vh",
                          width: "8vw",
                        }}
                      />
                      <Typography variant="emailText">Email</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4.5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "1.25rem",
                      boxShadow:
                        "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                      width: "100vw",
                      height: "30vh",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <CancelIcon
                        sx={{
                          color: "secondary.dark",
                          height: "12vh",
                          width: "8vw",
                        }}
                      />
                      <Typography variant="noReceiptText">
                        No Receipt
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
