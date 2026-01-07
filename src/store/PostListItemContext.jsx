import { createContext } from "react";

export const PostListItem = createContext({
  PostItem: [],
  DeleteItem: () => {},
  AddItem: () => {},
  FindOnKeyEnter: () => {},
});
