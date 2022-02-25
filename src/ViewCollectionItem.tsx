import cx from "classnames";
import React from "react";
import { CollectionItem, Issue } from "./types";
import "./ViewCollectionItem.css";

type Props = {
  item: CollectionItem;
  isHostile: (issue: Issue) => boolean;
};

function ViewCollectionItem({ item, isHostile }: Props) {
  const fontSizeHeadingRole = isHostile(Issue.FontSizeHeadingRole);
  const mixButtonLinkRole = isHostile(Issue.MixButtonLinkRole);
  const noDivButtonRole = isHostile(Issue.NoDivButtonRole);
  const noImageLabel = isHostile(Issue.NoImageLabel);
  const noListRole = isHostile(Issue.NoListRole);
  const noPresentationRole = isHostile(Issue.NoPresentationRole);
  const wrongElementOrder = isHostile(Issue.WrongElementOrder);
  const tagElement = (
    <div
      className="ViewCollectionItem-Tag"
      style={{ backgroundColor: item.tagColor }}
    >
      {item.tag}
    </div>
  );
  return (
    <div
      className="ViewCollectionItem"
      id={`ViewCollectionItem-${item.id}`}
      role={
        cx(
          mixButtonLinkRole ? "link" : noDivButtonRole ? undefined : "button",
          !noListRole && "listitem"
        ) || undefined
      }
      tabIndex={0}
    >
      {wrongElementOrder && tagElement}
      <div
        className="ViewCollectionItem-Background"
        style={{ background: item.backgroundImage }}
        role={noPresentationRole ? "img" : "presentation"}
        aria-label={noImageLabel ? undefined : `${item.partner} logo`}
      />
      <div
        className="ViewCollectionItem-Name"
        role={fontSizeHeadingRole ? "heading" : undefined}
        aria-level={fontSizeHeadingRole ? 2 : undefined}
      >
        {item.name}
      </div>
      <div
        className="ViewCollectionItem-Partner"
        role={fontSizeHeadingRole ? "heading" : undefined}
        aria-level={fontSizeHeadingRole ? 5 : undefined}
      >
        {item.partner}
      </div>
      <div className="ViewCollectionItem-Spacer" />
      {!wrongElementOrder && tagElement}
    </div>
  );
}

export default ViewCollectionItem;
