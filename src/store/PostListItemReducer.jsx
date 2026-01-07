export const PostListReducerFn = (currPostItem, Action) => {
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

  if (Action.type === "FIND_ITEM") {
    return currPostItem.filter(
      (post) => post.Title === Action.payload.FindValue
    );
  }
};
