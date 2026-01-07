import styles from "./PostList.module.css";
import { PostListItem } from "../store/PostListItemContext";
import Post from "./Post";
import { useContext } from "react";

function PostList() {
  const { PostItem } = useContext(PostListItem);
  return (
    <>
      <div className={styles.listContainer}>
        {PostItem.length === 0 ? (
          <div className={styles.noResultWrapper}>
            <p className={styles.result}>No results found 🔍</p>
          </div>
        ) : (
          PostItem.map((item, index) => <Post key={index} PostValue={item} />)
        )}
      </div>
    </>
  );
}

export default PostList;
