import React from "react";
import { Issue, Mode } from "./types";
import "./Settings.css";

type Props = {
  mode: Mode;
  setMode: (value: Mode) => void;
  isHostile: (issue: Issue) => boolean;
  setIsHostile: (issue: Issue, value: boolean) => void;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

function ModeBanner({
  mode,
  setMode,
  isHostile,
  setIsHostile,
  isVisible,
  setIsVisible,
}: Props) {
  return (
    <div className="Settings" aria-hidden role="presentation">
      <fieldset className="Settings-Group">
        <legend>Display</legend>
        <div className="Settings-Item">
          <label className="Settings-SelectLabel" htmlFor="Settings-Mode">
            Mode:
          </label>
          <select
            id="Settings-Mode"
            onChange={(event) => setMode(event.target.value as Mode)}
            value={mode}
            tabIndex={-1}
            role="none"
          >
            {Object.entries(Mode).map(([name, value]) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="Settings-Item">
          <input
            id="Settings-IsVisible"
            type="checkbox"
            checked={isVisible}
            onChange={(event) => setIsVisible(event.target.checked)}
            tabIndex={-1}
            role="none"
          />
          <label
            className="Settings-CheckboxLabel"
            htmlFor="Settings-IsVisible"
          >
            Visible
          </label>
        </div>
      </fieldset>
      <fieldset className="Settings-Group">
        <legend>Hostility</legend>
        {Object.values(Issue).map((issue) => (
          <div className="Settings-Item" key={issue}>
            <input
              id={`Settings-${issue}`}
              type="checkbox"
              checked={isHostile(issue)}
              onChange={(event) => setIsHostile(issue, event.target.checked)}
              tabIndex={-1}
              role="none"
            />
            <label
              className="Settings-CheckboxLabel"
              htmlFor={`Settings-${issue}`}
            >
              {issue}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default ModeBanner;
