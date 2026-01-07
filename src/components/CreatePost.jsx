import { useRef, useContext } from "react";
import styles from "./CreatPost.module.css";
import { PostListItem } from "../store/PostListItemContext";

function CreatePost() {
  const TitleText = useRef();
  const DescriptionText = useRef();
  const ReactionsText = useRef();
  const hastagsText = useRef();
  const userIdText = useRef();

  const { AddItem } = useContext(PostListItem);

  const submitHandler = (e) => {
    e.preventDefault();
    AddItem({
      TitleText: TitleText.current.value,
      DescriptionText: DescriptionText.current.value,
      ReactionsText: ReactionsText.current.value,
      hastagsText: hastagsText.current.value,
      userIdText: userIdText.current.value,
    });

    TitleText.current.value = "";
    DescriptionText.current.value = "";
    ReactionsText.current.value = "";
    hastagsText.current.value = "";
    userIdText.current.value = "";
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            user-ID:
          </label>
          <input
            type="ID"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={userIdText}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={TitleText}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={DescriptionText}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            #HASTAGSS:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            ref={hastagsText}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            reactions:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            ref={ReactionsText}
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
      <div className={styles.lastLine}>
        <p>Create a post and have fun in your life</p>
      </div>
    </>
  );
}

export default CreatePost;
