import React from "react";
import ShowPost from "../../components/showPost";
import "../../components/showPost/style.scss";
import "./style.scss";
export default () => {
  const posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push(
      <ShowPost
        key={i}
        author={{
          name: "Anakin skywalker",
          avatar:
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
          nickName: "@anakin_skywalkerr",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={
          "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
        }
        date={"27 бер."}
        comments={"1212"}
        retweets={"500"}
        likes={"12000"}
      />
    );
  }
  return <div className="posts-container">{posts}</div>;
};
