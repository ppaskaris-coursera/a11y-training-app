export enum Mode {
  Edit = "Edit",
  View = "View",
}

export enum Issue {
  FontSizeHeadingRole = "Headings for font size",
  MixButtonLinkRole = "Mix up button/link roles",
  NoA11yPunctuation = "No screen reader punctuation",
  NoButtonLinkContext = "No context for buttons/links",
  NoDivButtonRole = "No div button role (clickable div)",
  NoHeadingRole = "No headings",
  NoImageLabel = "No labels for icons/images",
  NoLandmarkRole = "No landmarks",
  NoListRole = "No list semantics",
  NoOutline = "No focus/active outlines",
  NoPresentationRole = "No decorative element hiding",
  WrongElementOrder = "Wrong element order",
  WrongHeadingLevel = "Wrong heading levels",
}

export type CollectionItem = {
  id: number;
  name: string;
  partner: string;
  backgroundImage: string;
  tag: string;
  tagColor: string;
};

export type Collection = {
  id: number;
  name: string;
  description: string | null;
  items: CollectionItem[];
};

export type Catalog = {
  name: string;
  description: string | null;
  collections: Collection[];
};
