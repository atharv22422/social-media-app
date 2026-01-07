import { createContext, useReducer } from "react";

export const PostListItem = createContext({
  PostItem: [],
  DeleteItem: () => {},
  AddItem: () => {},
});

const InitialPost = [
  {
    userId: "user234",
    Title: "Learning react",
    Description:
      "i am enjoying learning it having fun i have learned basic and i am movig forward towards the advanced part",
    hastags: "#vibing #nightcoding #pushingonestepforward",
    reactions: "2435",
  },
  {
    userId: "user234",
    Title: "Learning react",
    Description:
      "i am enjoying learning it having fun i have learned basic and i am movig forward towards the advanced part",
    hastags: "#vibing #nightcoding #pushingonestepforward",
    reactions: "2435",
  },
  {
    userId: "user234",
    Title: "Learning react",
    Description:
      "i am enjoying learning it having fun i have learned basic and i am movig forward towards the advanced part",
    hastags: "#vibing #nightcoding #pushingonestepforward",
    reactions: "2435",
  },
  {
    userId: "user234",
    Title: "Learning react",
    Description:
      "i am enjoying learning it having fun i have learned basic and i am movig forward towards the advanced part",
    hastags: "#vibing #nightcoding #pushingonestepforward",
    reactions: "2435",
  },
  {
    userId: "user234",
    Title: "Learning react",
    Description:
      "i am enjoying learning it having fun i have learned basic and i am movig forward towards the advanced part",
    hastags: "#vibing #nightcoding #pushingonestepforward",
    reactions: "2435",
  },
  {
    userId: "user234",
    Title: "Learning react",
    Description:
      "i am enjoying learning it having fun i have learned basic and i am movig forward towards the advanced part",
    hastags: "#vibing #nightcoding #pushingonestepforward",
    reactions: "2435",
  },
];

const PostListReducerFn = (currPostItem, Action) => {
  let NewPostItem = currPostItem;
  if (Action.type === "DELETE_ITEM") {
    return (NewPostItem = currPostItem.filter(
      (post) => post !== Action.payload.PostValue
    ));
  }

  if (Action.type === "ADD_ITEM") {
    return [
      {
        userId: Action.payload.userIdText,
        Title: Action.payload.TitleText,
        Description: Action.payload.DescriptionText,
        hastags: Action.payload.hastagsText,
        reactions: Action.payload.ReactionsText,
      },
      ...currPostItem,
    ];
  }
};

const PostListItemProvider = ({ children }) => {
  const [PostItem, dispatchPostItem] = useReducer(
    PostListReducerFn,
    InitialPost
  );

  const AddItem = ({
    TitleText,
    DescriptionText,
    ReactionsText,
    hastagsText,
    userIdText,
  }) => {
    dispatchPostItem({
      type: "ADD_ITEM",
      payload: {
        TitleText,
        DescriptionText,
        ReactionsText,
        hastagsText,
        userIdText,
      },
    });
  };

  const DeleteItem = (PostValue) => {
    dispatchPostItem({
      type: "DELETE_ITEM",
      payload: { PostValue },
    });
  };
  return (
    <>
      <PostListItem.Provider value={{ PostItem, DeleteItem, AddItem }}>
        {children}
      </PostListItem.Provider>
    </>
  );
};

export default PostListItemProvider;
