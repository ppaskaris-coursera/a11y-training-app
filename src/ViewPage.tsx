import React from "react";
import { Catalog, Issue } from "./types";
import ViewCollection from "./ViewCollection";
import "./ViewPage.css";

type Props = {
  catalog: Catalog;
  isHostile: (issue: Issue) => boolean;
};

function ViewPage({ catalog, isHostile }: Props) {
  const noHeadingRole = isHostile(Issue.NoHeadingRole);
  const wrongHeadingLevel = isHostile(Issue.WrongHeadingLevel);
  const fontSizeHeadingRole = isHostile(Issue.FontSizeHeadingRole);
  return (
    <div className="ViewPage">
      <div
        className="ViewPage-Heading"
        role={noHeadingRole ? undefined : "heading"}
        aria-level={noHeadingRole ? undefined : wrongHeadingLevel ? 2 : 1}
      >
        {catalog.name}
      </div>
      {catalog.description && (
        <div
          className="ViewPage-Description"
          role={fontSizeHeadingRole ? "heading" : undefined}
          aria-level={fontSizeHeadingRole ? 4 : undefined}
        >
          {catalog.description}
        </div>
      )}
      <div className="ViewPage-Collections">
        {catalog.collections.map((collection) => (
          <ViewCollection
            key={collection.id}
            collection={collection}
            isHostile={isHostile}
          />
        ))}
      </div>
    </div>
  );
}

export default ViewPage;
