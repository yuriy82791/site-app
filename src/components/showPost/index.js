import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
function ShowPost(props) {
  console.log(FontAwesomeIcon);
  return (
    <div className="post-wrapper">
      <article className="post">
        <div className="author-avatar">
          <img src={props.author.avatar} alt={props.author.name} />
        </div>
        <div className="post-content-wrapper">
          <div className="post-heading">
            <span className="author-name">{props.author.name}</span>
            <span className="author-nickname">{props.author.nickName}</span>
            <span className="sep"> · </span>
            <span className="post-date">{props.date}</span>
          </div>
          <div className="post-content">
            <p>{props.content}</p>
            <img src={props.image} alt="" />
          </div>
          <div className="post-data">
            <span className="">
              <FontAwesomeIcon icon={faComment} />
              {props.comments}
            </span>
            <span className="">
              <FontAwesomeIcon icon={faRetweet} />
              {props.retweets}
            </span>
            <span className="">
              <FontAwesomeIcon icon={faHeart} />
              {props.likes}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
export default ShowPost;
