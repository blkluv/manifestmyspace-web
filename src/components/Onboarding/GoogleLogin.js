import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
const GOOGLE_LOGIN = process.env.REACT_APP_GOOGLE_LOGIN;
let SCOPES =
  "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/userinfo.profile ";

function GoogleLogin(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [userDoesntExist, setUserDoesntExist] = useState(false);
  const [socialId, setSocialId] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [accessExpiresIn, setAccessExpiresIn] = useState("");
  let codeClient = {};
  function getAuthorizationCode() {
    // Request authorization code and obtain user consent,  method of the code client to trigger the user flow
    codeClient.requestCode();
  }

  const socialGoogle = async (e, u) => {
    setShowSpinner(true);
    navigate("/register", {
      state: {
        user: u,
      },
    });
    setLoginSuccessful(true);
    setShowSpinner(false);
  };

  useEffect(() => {
    /* global google */
    codeClient = google.accounts.oauth2.initCodeClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (tokenResponse) => {
        // gets back authorization code
        if (tokenResponse && tokenResponse.code) {
          let auth_code = tokenResponse.code;
          let authorization_url = "https://accounts.google.com/o/oauth2/token";

          var details = {
            code: auth_code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirectUri: "postmessage",
            grant_type: "authorization_code",
          };
          var formBody = [];
          for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          formBody = formBody.join("&");
          // use authorization code, send it to google endpoint to get back ACCESS TOKEN n REFRESH TOKEN
          fetch(authorization_url, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: formBody,
          })
            .then((response) => {
              return response.json();
            })

            .then((data) => {
              let at = data["access_token"];
              let rt = data["refresh_token"];
              let ax = data["expires_in"];
              //  expires every 1 hr
              setAccessToken(at);
              // stays the same and used to refresh ACCESS token
              setRefreshToken(rt);
              setAccessExpiresIn(ax);
              //  use ACCESS token, to get email and other account info
              axios
                .get(
                  "https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=" +
                    at
                )
                .then((response) => {
                  let data = response.data;

                  let e = data["email"];
                  let si = data["id"];

                  setEmail(e);

                  setSocialId(si);

                  axios
                    .get(
                      `https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/UserSocialLogin/FINDME/${e}`
                    )
                    .then((response) => {
                      if (
                        response["data"]["message"] === "Email ID doesnt exist"
                      ) {
                        const socialGoogle = async () => {
                          const user = {
                            email: e,
                            password: GOOGLE_LOGIN,
                            first_name: data["given_name"],
                            last_name: data["family_name"],
                            google_auth_token: at,
                            google_refresh_token: rt,
                            social_id: si,
                            access_expires_in: ax,
                          };
                          navigate("/register", {
                            state: {
                              user: user,
                            },
                          });
                        };
                        socialGoogle();
                        return;
                      } else if (
                        response["data"]["message"] === "Login with email"
                      ) {
                        setErrorMessage(response["data"]["message"]);
                      } else {
                        let user = response.data.result;
                        let user_id = response.data.result.user_uid;
                        setAccessToken(at);
                        let url = `https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/UpdateAccessToken/FINDME/${user_id}`;
                        axios
                          .post(url, {
                            google_auth_token: at,
                          })
                          .then((response) => {
                            socialGoogle(email, user);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        return accessToken;
                      }
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
              return (
                accessToken, refreshToken, accessExpiresIn, email, socialId
              );
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    });
  }, [getAuthorizationCode]);
  const onCancelModal = () => {
    setUserDoesntExist(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <div className="w-100">
        <div></div>
        <div>
          <div></div>
          <div id="signUpDiv">
            <Button
              onClick={() => getAuthorizationCode()}
              role="button"
              sx={{
                textTransform: "none",
                backgroundColor: "white",
                color: "#000000",
                width: "92vw",
                height: "44px",
                "&.MuiButtonBase-root:hover, &.Mui-selected": {
                  backgroundColor: "white",
                },
              }}
            >
              <img
                style={{
                  width: "3rem",
                  padding: "1rem",
                }}
                alt="Google sign-up"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              {"Sign in with Google"}
            </Button>
          </div>
        </div>
        <div></div>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            width: "92vw",
            fontSize: 18,
            my: 3,
          }}
          align="center"
        >
          {"OR"}
        </Typography>
      </div>
    </div>
  );
}

export default GoogleLogin;