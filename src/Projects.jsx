import "./App.css";
import { List, ListItem } from "@mui/joy";
import React from "react";
//projects
// Husky Hunt Committee Python
// • Worked with the rest of a committee to design and coordinate a 24-hour puzzle-hunt qualifying quiz and
// a 24-hour Boston-wide scavenger hunt, each run once per year.
// • Acted as point person for the quiz and clues subcommittee.
// • Created a text adventure game played by over 140 teams of 12 during the quiz.
// • Wrote Python scripts to automate the creation of various puzzles, including stitching together images,
// video, and audio, encoding text with ciphers, and generating sheet music.
// Augmented Reality Adventure Game React, Leaflet
// • Created an AR game set on Northeastern’s campus to be played by teams during Husky Hunt.
// • Developed a system for interacting with NPCs and items that could be found at markers around a map
// of campus, along with a series of 8 quests, using React and Leaflet.
// Pi Tiles C, MPI, Raspberry Pi
// • Implemented algorithms to multiply matrices in parallel across 28 Raspberry Pis with C and MPI. • Won Graduate Innovators award at the Northeastern Research, Innovation, and Scholarship Expo.

export const Projects = () => {
  const projects = [
    {
      Project: "Husky Hunt Committee",
      Description: [
        "Worked with the rest of a committee to design and coordinate a 24-hour puzzle-hunt qualifying quiz and a 24-hour Boston-wide scavenger hunt, each run once per year.",
        "Acted as point person for the quiz and clues subcommittee.",
        "Created a text adventure game played by over 140 teams of 12 during the quiz.",
        "Wrote Python scripts to automate the creation of various puzzles, including stitching together images, video, and audio, encoding text with ciphers, and generating sheet music.",
      ],
    },
    {
      Project: "Augmented Reality Adventure Game",
      Description: [
        "Created an AR game set on Northeastern’s campus to be played by teams during Husky Hunt.",
        "Developed a system for interacting with NPCs and items that could be found at markers around a map of campus, along with a series of 8 quests, using React and Leaflet.",
      ],
    },
    {
      Project: "Pi Tiles",
      Description: [
        "Implemented algorithms to multiply matrices in parallel across 28 Raspberry Pis with C and MPI.",
        "Won Graduate Innovators award at the Northeastern Research, Innovation, and Scholarship Expo.",
      ],
    },
  ];
  return (
    <div className="big-section">
      {projects.map((project) => (
        <div className="section">
          <h3>{project.Project}</h3>
          <List
            sx={{ listStyleType: "disc", pl: 4 }}
            style={{ marginTop: -10 }}
          >
            {project.Description.map((description) => (
              <ListItem
                style={{ marginTop: 0, marginBottom: -10 }}
                sx={{ display: "list-item" }}
              >
                {description}
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};
