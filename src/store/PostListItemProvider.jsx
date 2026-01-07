import { useReducer } from "react";
import { PostListItem } from "./PostListItemContext";
import { PostListReducerFn } from "./PostListItemReducer";

const PostListItemProvider = ({ children }) => {
  const InitialPost = [
    {
      id: 1,
      userId: "user234",
      Title: "Starting my React journey 🚀",
      Description:
        "Today I started learning React. Understanding components, JSX, and how everything fits together. Feeling excited to build real projects!",
      hastags: "#react #webdev #learning",
      reactions: 245,
    },
    {
      id: 2,
      userId: "user102",
      Title: "Why hooks changed everything",
      Description:
        "Hooks like useState and useEffect make React code cleaner and easier to understand. No more confusing class components.",
      hastags: "#reacthooks #javascript #frontend",
      reactions: 412,
    },
    {
      id: 3,
      userId: "user567",
      Title: "Building my first Context API app",
      Description:
        "Finally understood how Context and useReducer work together. State management feels much clearer now.",
      hastags: "#contextapi #react #codinglife",
      reactions: 189,
    },
    {
      id: 4,
      userId: "user789",
      Title: "Debugging is a skill 🧠",
      Description:
        "Spent hours fixing bugs today. Realized debugging teaches more than writing code itself.",
      hastags: "#debugging #developer #problemSolving",
      reactions: 321,
    },
    {
      id: 5,
      userId: "user234",
      Title: "From confusion to clarity",
      Description:
        "Reducers felt scary at first, but now they make total sense. Practice really is the key.",
      hastags: "#learningcurve #reactjs #growth",
      reactions: 276,
    },
    {
      id: 6,
      userId: "user901",
      Title: "Consistency beats motivation",
      Description:
        "Coding a little every day is giving better results than long, irregular sessions.",
      hastags: "#consistency #codinghabits #devlife",
      reactions: 358,
    },
  ];

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

  const FindOnKeyEnter = (FindValue) => {
    dispatchPostItem({
      type: "FIND_ITEM",
      payload: { FindValue },
    });
  };

  return (
    <>
      <PostListItem.Provider
        value={{ PostItem, DeleteItem, AddItem, FindOnKeyEnter }}
      >
        {children}
      </PostListItem.Provider>
    </>
  );
};

export default PostListItemProvider;
