import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Resume } from "./Resume";
import { Sheet, Tab, TabList, Tabs } from "@mui/joy";
import { tabClasses } from "@mui/joy/Tab";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Projects } from "./Projects";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const theme = extendTheme({
  fontFamily: {
    display: "CMU Serif",
    body: "CMU Serif",
  },
  palette: {
    background: {
      default: "#000000",
    },
  },
});

function App() {
  const location = useLocation();
  useEffect(() => {
    setTab(location.pathname.substring(1));
    console.log(location.pathname.substring(1));
  }, [location]);
  const [tab, setTab] = useState();
  console.log(tab);
  return (
    <CssVarsProvider
      theme={theme}
      defaultMode="dark"
      disableNestedContext
      colorSchemeSelector="#dark-mode-by-default"
      modeStorageKey="dark-mode-by-default"
    >
      <div
        id="dark-mode-by-default"
        style={{
          display: "flex",
          // flexGrow: 1,
          minWidth: 0,
        }}
      >
        <Sheet
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            paddingLeft: "calc(100vw - 100%)",
          }}
        >
          <div
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "0",
              marginBottom: "2%",
              display: "flex",
              justifyContent: "center",
            }}
            className="App"
          >
            <body
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "49rem",
              }}
            >
              <Tabs size="lg" value={tab || null}>
                <TabList
                  disableUnderline
                  tabFlex={1}
                  onChange={(event, newValue) => {
                    setTab(newValue);
                  }}
                  value={tab}
                  sx={{
                    [`& .${tabClasses.root}`]: {
                      fontSize: "sm",
                      fontWeight: "lg",
                      [`&[aria-selected="true"]`]: {
                        color: "primary.500",
                        bgcolor: "neutral.800",
                      },
                      [`&.${tabClasses.focusVisible}`]: {
                        outlineOffset: "-4px",
                      },
                    },
                  }}
                >
                  <Tab
                    disableIndicator
                    variant="plain"
                    sx={{ flexGrow: 1 }}
                    label="Resume"
                    value="resume"
                    component={Link}
                    to="/resume"
                  >
                    Resume
                  </Tab>
                  <Tab
                    disableIndicator
                    variant="plain"
                    sx={{ flexGrow: 1 }}
                    label="Projects"
                    value="projects"
                    component={Link}
                    to="/projects"
                  >
                    Projects
                  </Tab>
                  <Tab
                    disableIndicator
                    variant="plain"
                    sx={{ flexGrow: 1 }}
                    label="Contact"
                    value="contact"
                    component={Link}
                    to="/contact"
                  >
                    Contact
                  </Tab>
                </TabList>
              </Tabs>
              <Sheet
                variant="soft"
                color="neutral"
                style={{
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  minHeight: "96%",
                }}
              >
                <div className="section" style={{ textAlign: "center" }}>
                  <h1 style={{ marginBottom: 0 }}>Benjamin Knower</h1>

                  <h3 style={{ marginTop: 0 }}>
                    Boston, MA ·{" "}
                    <a href="ben.knower@gmail.com">ben.knower@gmail.com</a> ·
                    (610) 324-9949
                  </h3>
                </div>
                <Routes>
                  {/* <Route path="/" element={<Resume />}> */}
                  <Route path="resume" element={<Resume />} />
                  {/* <Route path="blogs" element={<Blogs />} /> */}
                  <Route path="projects" element={<Projects />} />
                  {/* <Route path="*" element={<NoPage />} /> */}
                  {/* </Route> */}
                </Routes>
              </Sheet>
            </body>
          </div>
        </Sheet>
      </div>
    </CssVarsProvider>
  );
}

export default App;
