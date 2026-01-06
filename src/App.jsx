import { useState } from "react";
import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderCom";
import PostList from "./components/PostList";
import SideBarComp from "./components/SideBarComp";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Posts");

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
  const [PostItems, setPostItems] = useState(InitialPost);

  const handleOnSubmitForm = (
    TitleText,
    DescriptionText,
    ReactionsText,
    hastagsText,
    userIdText
  ) => {
    const NewItem = {
      userId: userIdText,
      Title: TitleText,
      Description: DescriptionText,
      hastags: hastagsText,
      reactions: ReactionsText,
    };
    setPostItems((prevItem) => {
      return [NewItem, ...prevItem];
    });
  };

  return (
    <>
      <div className={styles.outercontainer}>
        <SideBarComp
          SelectedTab={SelectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className={styles.innercontainer}>
          <HeaderComp />

          {SelectedTab === "Posts" ? (
            <PostList PostItems={PostItems} />
          ) : (
            <CreatePost handleOnSubmitForm={handleOnSubmitForm} />
          )}
          <FooterComp />
        </div>
      </div>
    </>
  );
}

export default App;
