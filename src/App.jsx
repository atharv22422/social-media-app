import { useState } from "react";
import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderCom";
import PostList from "./components/PostList";
import SideBarComp from "./components/SideBarComp";
import PostListItemProvider from "./store/PostListItemProvider";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Posts");

  return (
    <>
      <PostListItemProvider>
        <div className={styles.outercontainer}>
          <SideBarComp
            SelectedTab={SelectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className={styles.innercontainer}>
            <HeaderComp />

            {SelectedTab === "Posts" ? <PostList /> : <CreatePost />}
            <FooterComp />
          </div>
        </div>
      </PostListItemProvider>
    </>
  );
}

export default App;
