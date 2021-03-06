import React, {FC} from 'react';

import Comment from "./Comment";
import CommentForm from "./CommentForm";

import {removeFilmComment} from "../../common/firebase/database";
import {useAppSelector} from "../../hooks/redux";

import {Wrapper} from "./Comments.styles";

import {IComment} from "../../types/IComment";
import {Collection} from "../../types/IDatabase";

interface CommentsProps {
  filmId: string;
  comments: IComment[];
}

const Comments: FC<CommentsProps> = ({filmId, comments}) => {
  const {user} = useAppSelector(state => state.user);

  const handleClick = (commentId: string) => {
    removeFilmComment(filmId, commentId, Collection.Comments);
  }

  const commentsList = comments.map((comment) => (
    <Comment key={comment.commentId} comment={comment} onClick={handleClick} isDeletable={user?.uid === comment.authorId}/>
  ))

  return (
    <Wrapper>
      <CommentForm filmId={filmId}/>
      {commentsList}
    </Wrapper>
  );
};

export default Comments;