import React from "react";
import { Collection, Issue } from "./types";
import ViewCollectionItem from "./ViewCollectionItem";
import "./ViewCollection.css";

type Props = {
  collection: Collection;
  isHostile: (issue: Issue) => boolean;
};

function ViewCollection({ collection, isHostile }: Props) {
  const fontSizeHeadingRole = isHostile(Issue.FontSizeHeadingRole);
  const mixButtonLinkRole = isHostile(Issue.MixButtonLinkRole);
  const noButtonLinkContext = isHostile(Issue.NoButtonLinkContext);
  const noHeadingRole = isHostile(Issue.NoHeadingRole);
  const noListRole = isHostile(Issue.NoListRole);
  const noPresentationRole = isHostile(Issue.NoPresentationRole);
  const wrongElementOrder = isHostile(Issue.WrongElementOrder);
  const wrongHeadingLevel = isHostile(Issue.WrongHeadingLevel);
  const spacers = 3 - (collection.items.length % 3);
  const headingText = (
    <span
      className="ViewCollection-Heading"
      role={noHeadingRole ? undefined : "heading"}
      aria-level={noHeadingRole ? undefined : wrongHeadingLevel ? 1 : 2}
    >
      {collection.name}
    </span>
  );
  const viewMoreLink = (
    <span
      className="ViewCollection-ViewMore link"
      role={mixButtonLinkRole ? "button" : "link"}
      tabIndex={0}
    >
      View more <span aria-hidden={!noPresentationRole}>&rarr;</span>
      {!noButtonLinkContext && (
        <span className="sr-only">{collection.name}</span>
      )}
    </span>
  );
  return (
    <div className="ViewCollection">
      <div
        className="ViewCollection-Header"
        id={`ViewCollection-${collection.id}`}
      >
        {wrongElementOrder ? viewMoreLink : headingText}
        {wrongElementOrder ? headingText : viewMoreLink}
      </div>
      {collection.description && (
        <div
          className="ViewCollection-Description"
          role={fontSizeHeadingRole ? "heading" : undefined}
          aria-level={fontSizeHeadingRole ? 4 : undefined}
        >
          {collection.description}
        </div>
      )}
      <div
        className="ViewCollection-Items"
        role={noListRole ? undefined : "list"}
      >
        {collection.items.map((item) => (
          <ViewCollectionItem key={item.id} item={item} isHostile={isHostile} />
        ))}
        {spacers > 0 && <div className="ViewCollection-ItemSpacer" />}
        {spacers > 1 && <div className="ViewCollection-ItemSpacer" />}
      </div>
      <div className="ViewCollection-Footer">
        <strong>Want to see more?</strong> {viewMoreLink}
      </div>
    </div>
  );
}

export default ViewCollection;
