import { useContext } from "react";
import { PostListItem } from "../store/PostListItemContext";
import styles from "./Post.module.css";

function Post({ PostValue }) {
  const { DeleteItem } = useContext(PostListItem);
  return (
    <>
      <div className={`${styles.card} card`}>
        <div className={`card-body `}>
          <h5 className={`card-title ${styles.cardTitle}`}>
            {PostValue.Title}
          </h5>
          <p className={`card-text  ${styles.description}`}>
            {PostValue.Description}
          </p>
          <p className={`card-text ${styles.cardhastag}`}>
            {PostValue.hastags}
          </p>
          <div className={styles.buttons}>
            <button type="button" className="btn btn-warning">
              <p className="card-text">Reactions : {PostValue.reactions}</p>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => DeleteItem(PostValue)}
            >
              <p className="card-text">delete post</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
