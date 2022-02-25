import React from "react";
import cx from "classnames";
import "./App.css";
import { Catalog, Issue, Mode } from "./types";
import Settings from "./Settings";
import EditPage from "./EditPage";
import ViewPage from "./ViewPage";

function App() {
  const [mode, setMode] = React.useState(Mode.View);
  const [hostility, setHostility] = React.useState(() =>
    Object.fromEntries(Object.values(Issue).map((issue) => [issue, false]))
  );
  const [isVisible, setIsVisible] = React.useState(true);
  const [catalog, setCatalog] = React.useState<Catalog>({
    name: "Coursera for Courserians",
    description:
      "As a Coursera employee, you get access to these great learning resources for FREE!",
    collections: [
      {
        id: 1,
        name: "Recommended by your organization",
        description:
          "Enroll in any course hand-picked by your organization. These courses cover topics and skills your organization is focused on improving.",
        items: [
          {
            id: 4,
            name: "Google IT Support",
            partner: "Google",
            backgroundImage: `
linear-gradient(
  110deg,
  #EA4335 30%,
  #FBBC05 30% 40%,
  #34A853 40% 70%,
  #4285F4 70%
)
`.trim(),
            tag: "Professional Certificate",
            tagColor: "#382D8B",
          },
          {
            id: 5,
            name: "AWS Fundamentals: Going Cloud-Native",
            partner: "Amazon Web Services",
            backgroundImage: `
linear-gradient(
  -10deg,
  #1D2A37 20%,
  #202A38 20% 25%,
  #FFFFFF 25% 27%,
  #212A38 27% 35%,
  #FFFFFF 35% 37%,
  #1D2934 37% 40%,
  #FE9E06 40% 47%,
  #1F2A35 47% 52%,
  #FD9D04 52% 60%,
  #253240 60% 63%,
  #FFFFFF 63% 65%,
  #253240 65% 73%,
  #FFFFFF 73% 75%,
  #293645 75% 80%,
  #303F50 80%
)
`.trim(),
            tag: "Course",
            tagColor: "#0056D2",
          },
        ],
      },
      {
        id: 6,
        name: "Recommended by Coursera",
        description:
          "Enroll in popular courses based on enrollment data and ratings by learners from a variety of industries across Coursera.",
        items: [
          {
            id: 7,
            name: "Introduction to Psychology",
            partner: "Yale University",
            backgroundImage:
              " linear-gradient(to right, #002157 0%,#011f55 5%,#041f56 5%,#011f55 11%,#032058 11%,#032058 13%,#505f7c 13%,#505f7c 16%,#002157 16%,#002157 21%,#bcbcc6 21%,#bcbcc6 24%,#c9d4e6 24%,#c9d4e6 27%,#709ac0 27%,#709ac0 29%,#779dc4 29%,#779dc4 32%,#6f93b7 32%,#6f93b7 35%,#3c4252 35%,#3c4252 37%,#222933 37%,#212735 43%,#262d37 43%,#262d37 45%,#2c3240 45%,#2c3240 51%,#282e3e 51%,#292f3d 59%,#181822 59%,#181822 61%,#17181d 61%,#17181d 64%,#262630 64%,#242430 69%,#282c37 69%,#282c37 72%,#252837 72%,#212735 77%,#2e323d 77%,#2e323d 80%,#262630 80%,#262630 83%,#23232d 83%,#23232d 85%,#2a303e 85%,#2a303e 88%,#2c3447 88%,#2c3447 91%,#899aac 91%,#899aac 93%,#9eb9d4 93%,#9eb9d4 96%,#5584b0 96%,#5584b0 99%,#4c73ac 99%,#4c73ac 100%)",
            tag: "Course",
            tagColor: "#0056D2",
          },
          {
            id: 8,
            name: "Use Canva to Create Desktop and Mobile-friendly Web Pages.",
            partner: "Coursera Project Network",
            backgroundImage:
              "linear-gradient(to right, #ffdf5b 0%,#ffdf5b 2%,#f8d958 2%,#f8d958 5%,#d1b749 5%,#d1b749 7%,#f0ebd4 7%,#f0ebd4 10%,#edf0ed 10%,#edf0ed 13%,#f0f3f0 13%,#f0f3f0 15%,#fcfdf8 15%,#fbfdf7 21%,#f3b593 21%,#f3b593 23%,#edc92e 24%,#edc92e 26%,#74683f 26%,#74683f 29%,#4a4943 29%,#4a4943 31%,#c0a435 32%,#c0a435 34%,#edd475 34%,#edd475 37%,#eaf3db 37%,#ecf0d8 77%,#c7b598 77%,#c7b598 80%,#ce9b5e 80%,#ce9b5e 83%,#ad8256 83%,#ad8256 85%,#b68655 85%,#b48352 91%,#fada5a 91%,#fada5a 93%,#e5c951 93%,#e6ca51 99%,#ffdf5b 99%,#ffdf5b 100%)",
            tag: "Guided Project",
            tagColor: "#6A52E9",
          },
        ],
      },
    ],
  });

  const isHostile = (issue: Issue) => hostility[issue];
  const setIsHostile = (issue: Issue, value: boolean) =>
    setHostility({ ...hostility, [issue]: value });

  const noOutline = isHostile(Issue.NoOutline);

  return (
    <div className="App">
      <Settings
        mode={mode}
        setMode={setMode}
        isHostile={isHostile}
        setIsHostile={setIsHostile}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <div
        className={cx(
          "App-Main",
          !isVisible && "--hidden",
          noOutline && "--no-outline"
        )}
        role={isHostile(Issue.NoLandmarkRole) ? undefined : "main"}
      >
        {mode === Mode.Edit && <EditPage />}
        {mode === Mode.View && (
          <ViewPage catalog={catalog} isHostile={isHostile} />
        )}
      </div>
    </div>
  );
}

export default App;
