import logo from "./logo.svg";
import "./App.css";
import { List, ListItem } from "@mui/material";
import React from "react";

function App() {
  const technologies = [
    "Python",
    "C",
    "JavaScript",
    "React",
    "Flask",
    "Django",
    "Rust",
    "C++",
    "Verilog",
    "FPGA",
  ];
  const experience = [
    {
      Company: "Broadcom",
      Position: "Software / Firmware Engineer",
      Date: "April 2023 - Present",
      Description: [
        "Implemented and tested firmware for tuning memory controllers in C, delivering firmware releases for multiple chips.",
        "Wrote Python scripts to automate common repetitive tasks, including generating spreadsheets with information on firmware code size and runtime, flashing firmware to boards, and collecting logs, saving developers hours during debugging and on each firmware release.",
        "Developed a web-based editor in React and Python for memory configuration binary files, which pulled live information from Google Docs to determine the format of the files.",
      ],
    },
    {
      Company: "Berkshire Grey",
      Position: "Software Engineering Co-op",
      Date: "2022",
      Description: [
        "Built an editor for mapping out warehouses using React and Flask.",
        "Allowed users to create warehouses separated into multiple sections, and add physical features to the map using a 3-layer system to place different types of objects (such as columns, shelves) separately.",
        "Worked as part of an Agile team, dividing work and managing tasks with Jira, and collaborating with users to prioritize features.",
      ],
    },
    {
      Company: "Cogito Corp",
      Position: "Web Development Co-op",
      Date: "2021",
      Description: [
        "Implemented and tested new features on an internal audio annotation tool used by a team of approximately 20 annotators, saving them time while reviewing audio samples.",
        "Added keyboard shortcuts, new annotation question types, and UI changes using React and Django.",
        "Contributed to the open-source wavesurfer.js library, which was used to display audio waveforms.",
      ],
    },
    {
      Company: "Northeastern University",
      Position: "Researcher",
      Date: "2020",
      Description: [
        "Extended the Rust language, adding new language features to help express secure protocols.",
        "Designed, programmed, and documented an interface to a cryptographic math library using macros.",
      ],
    },
    {
      Company: "Northeastern University",
      Position: "Embedded Design Course Assistant",
      Date: "2020",
      Description: [
        "Assisted in teaching and labs for Embedded Design: Enabling Robotics.",
        "Taught the use of C++ for embedded programming of FPGAs with robotic arms.",
      ],
    },
    {
      Company: "Northeastern University",
      Position: "Math Department Tutor",
      Date: "2020",
      Description: [
        "Tutored students in Differential Equations and Linear Algebra.",
      ],
    },
  ];
  const skills = {
    "Areas of Expertise": [
      "Web Development",
      "Low-Level Programming",
      "Python Scripting",
    ],
    Languages: [
      "Python",
      "Java",
      "Scala",
      "JavaScript",
      "C#",
      "C++",
      "C",
      "Rust",
    ],
    Tools: ["Git", "Linux", "Jira", "React", "Unity"],
  };

  const processDescription = (desc) => {
    var currDesc = desc;
    for (let tech of technologies) {
      currDesc = currDesc.replace(tech, "<strong>" + tech + "</strong>");
    }
    return currDesc;
  };

  const getExperiences = () => {
    return experience.map((exp) => {
      return (
        <>
          <h3
            style={{
              float: "left",
              marginTop: 0,
              marginBottom: 0,
              // fontWeight: "bold",
            }}
          >
            {exp.Company}
          </h3>
          <div>
            <h4 style={{ float: "left", marginTop: 0, fontStyle: "italic" }}>
              {exp.Position}
            </h4>
            <h4 style={{ float: "right", marginTop: 0 }}>{exp.Date}</h4>
          </div>

          <List
            sx={{ listStyleType: "disc", pl: 4 }}
            style={{ marginTop: -10 }}
          >
            {exp.Description.map((desc) => {
              return (
                <ListItem
                  style={{ marginTop: 0, marginBottom: -15 }}
                  sx={{ display: "list-item" }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: processDescription(desc),
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </>
      );
    });
  };

  const getSkills = () => {
    return Object.keys(skills).map((skillType) => {
      return (
        <>
          <div>
            {skillType}: {""}
            {skills[skillType].map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <strong>{item}</strong>
                  {index !== skills[skillType].length - 1 && ", "}
                </React.Fragment>
              );
            })}
          </div>
        </>
      );
    });
  };
  return (
    <div
      style={{
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "2%",
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
          maxWidth: "45rem",
        }}
      >
        <div className="section" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: 0 }}>Benjamin Knower</h1>

          <h3 style={{ marginTop: 0 }}>
            Boston, MA · <a href="ben.knower@gmail.com">ben.knower@gmail.com</a>{" "}
            · (610) 324-9949
          </h3>
        </div>

        <div className="big-section">
          <h2 className="section-heading">Education</h2>
          <div style={{ marginTop: -15 }}>
            <h3 style={{ float: "left" }}>Northeastern University</h3>
            <h3 style={{ float: "right" }}>Boston, MA</h3>
          </div>
          <div style={{ marginTop: -15 }}>
            <h4 style={{ float: "left" }}>
              Bachelor of Science in Computer Science (GPA: 3.82)
            </h4>
            <h4 style={{ float: "right" }}>2018 - 2022</h4>
          </div>
        </div>

        <div className="big-section">
          <h2 className="section-heading">
            {/* <u style={{ float: "left" }}>Experience</u> */}
            Experience
          </h2>
          {getExperiences()}
        </div>

        <div className="big-section">
          <h2 className="section-heading">Skills</h2>
          {getSkills()}
        </div>
      </body>
    </div>
  );
}

export default App;
