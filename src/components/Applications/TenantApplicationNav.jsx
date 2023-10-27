import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import EmailIcon from "../Property/messageIconDark.png";
import PhoneIcon from "../Property/phoneIconDark.png";

const TenantApplicationNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const applicationList = location.state.applicationList;
  const [currentIndex, setCurrentIndex] = useState(location.state.index || 0);
  const [application, setApplication] = useState(applicationList[currentIndex]);
  const [showSpinner, setShowSpinner] = useState(false);
  // const [tenantInfo, setTenantInfo] = useState({});
  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % applicationList.length);
  };
  const handlePreviousCard = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + applicationList.length) % applicationList.length
    );
  };
  const handleRejectLease = async () => {
    setShowSpinner(true);
    await fetch(
      `https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/leaseApplication`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lease_uid: application.lease_uid,
          lease_status: "REJECTED",
        }),
      }
    );
    setShowSpinner(false);
  };
  const handleCreateLease = () =>
    navigate("/tenantLease", { state: { application } });
  useEffect(() => {
    setApplication(applicationList[currentIndex]);
  }, [currentIndex]);
  return (
    <ThemeProvider theme={theme}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showSpinner}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
          paddingBottom: "50px",
        }}
      >
        <Paper
          style={{
            margin: "30px",
            backgroundColor: theme.palette.primary.main,
            width: "100%",
            paddingTop: "10px",
          }}
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box
              sx={{
                borderBottom: 0,
                width: "75%",
              }}
            >
              <Paper
                sx={{
                  backgroundColor: theme.palette.form.main,
                }}
              >
                <Box
                  sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: theme.spacing(2),
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#160449",
                        position: "relative",
                        borderRadius: "10px 10px 0 0",
                        paddingTop: "10px",
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Button
                          onClick={handlePreviousCard}
                          disabled={currentIndex === 0}
                        >
                          {currentIndex === 0 ? (
                            <ArrowBackIcon
                              sx={{
                                color: "#A0A0A0",
                                width: "25px",
                                height: "25px",
                                margin: "0px",
                              }}
                            />
                          ) : (
                            <ArrowBackIcon
                              sx={{
                                width: "25px",
                                height: "25px",
                                margin: "0px",
                              }}
                            />
                          )}
                        </Button>
                        <Stack
                          direction="column"
                          margin="0px"
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                        >
                          <Typography
                            sx={{
                              color: "#FFFFFF",
                              fontWeight:
                                theme.typography.propertyPage.fontWeight,
                              fontSize: "16px",
                            }}
                          >
                            {`${currentIndex + 1} of ${
                              applicationList.length
                            } Applicants`}
                          </Typography>
                        </Stack>
                        <Button
                          onClick={handleNextCard}
                          disabled={currentIndex === applicationList.length - 1}
                        >
                          {currentIndex === applicationList.length - 1 ? (
                            <ArrowForwardIcon
                              sx={{
                                color: "#A0A0A0",
                                width: "25px",
                                height: "25px",
                                margin: "0px",
                              }}
                            />
                          ) : (
                            <ArrowForwardIcon
                              sx={{
                                width: "25px",
                                height: "25px",
                                margin: "0px",
                              }}
                            />
                          )}
                        </Button>
                      </Stack>
                      <Typography
                        align="center"
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Source Sans 3, sans-serif",
                          margin: "0 18px",
                          color: "#FFFFFF",
                          fontWeight: 800,
                          marginTop: "10px",
                          marginBottom: "50px",
                        }}
                      >
                        {application.tenant_first_name +
                          " " +
                          application.tenant_last_name}
                      </Typography>
                      <Avatar
                        src={application.tenant_photo_url}
                        sx={{
                          width: "60px",
                          height: "60px",
                          position: "absolute",
                          bottom: "-30px",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ paddingTop: "50px", paddingLeft: "15px" }}>
                    <Grid container>
                      <Grid item xs={1}>
                        <img src={EmailIcon} alt="email" />
                      </Grid>
                      <Grid item xs={7}>
                        <Typography
                          sx={{
                            fontSize: 13,
                            paddingLeft: "10px",
                            fontFamily: "Source Sans Pro, sans-serif",
                            color: "#160449",
                          }}
                        >
                          {application.tenant_email}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}></Grid>
                      <Grid item xs={1}>
                        <img src={PhoneIcon} alt="phone" />
                      </Grid>
                      <Grid item xs={7}>
                        <Typography
                          sx={{
                            fontSize: 13,
                            paddingLeft: "10px",
                            fontFamily: "Source Sans Pro, sans-serif",
                            color: "#160449",
                          }}
                        >
                          {application.tenant_phone_number}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}></Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontFamily: "Source Sans Pro, sans-serif",
                            color: "#160449",
                          }}
                        >{`${application.tenant_address}, ${application.tenant_city}, ${application.tenant_state} ${application.tenant_zip}`}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_ssn}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {"SSN"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_drivers_license_number}/
                            {application.tenant_drivers_license_state}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {"License Number/ State"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"Current Salary"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_current_salary}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"Salary Frequency"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_salary_frequency}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"Company Name"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_current_job_company}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"Job Title"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_current_job_title}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"Current Address"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_address}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"Unit #"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_unit}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"City/ State"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_city}/ {application.tenant_state}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#3D5CAC",
                            }}
                          >
                            {"Zip Code"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontFamily: "Source Sans Pro, sans-serif",
                              color: "#160449",
                            }}
                          >
                            {application.tenant_zip}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-around"
                      sx={{ padding: "30px 0", paddingRight: "15px" }}
                    >
                      <Button
                        onClick={handleRejectLease}
                        sx={{
                          backgroundColor: "#CB8E8E",
                          color: "#160449",
                          textTransform: "none",
                          width: "120px",
                          "&:hover, &:focus, &:active": {
                            backgroundColor: "#CB8E8E",
                          },
                        }}
                      >
                        {"Reject Tenant"}
                      </Button>
                      <Button
                        onClick={handleCreateLease}
                        sx={{
                          backgroundColor: "#9EAED6",
                          color: "#160449",
                          textTransform: "none",
                          width: "120px",
                          "&:hover, &:focus, &:active": {
                            backgroundColor: "#9EAED6",
                          },
                        }}
                      >
                        {"Reject Tenant"}
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default TenantApplicationNav;
