import styles from "./PostList.module.css";

import Post from "./Post";

function PostList({ PostItems }) {
  return (
    <>
      <div className={styles.listContainer}>
        {PostItems.map((item, index) => (
          <Post key={index} PostValue={item} />
        ))}
      </div>
    </>
  );
}

export default PostList;
