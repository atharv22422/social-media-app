import styles from "./PostList.module.css";
import { PostListItem } from "../store/PostListItem";
import Post from "./Post";
import { useContext } from "react";

function PostList() {
  const { PostItem } = useContext(PostListItem);
  return (
    <>
      <div className={styles.listContainer}>
        {PostItem.map((item, index) => (
          <Post key={index} PostValue={item} />
        ))}
      </div>
    </>
  );
}

export default PostList;
