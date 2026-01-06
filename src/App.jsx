import { useState } from "react";
import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderCom";
import PostList from "./components/PostList";
import SideBarComp from "./components/SideBarComp";

function App() {
  const [SelectedTab, setSelectedTab] = useState();

  return (
    <>
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
    </>
  );
}

export default App;
