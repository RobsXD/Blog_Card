import React from "react";
import Style from "./BlogCard.module.css";
import cactus_img from "../../assets/cactus_img.jpg";

const BlogCard = () => {
  return (
    <div className={Style.blogCard}>
      <img src={cactus_img} alt="cactus" />
      <div className={Style.tagContainer}>
        <p className={Style.tag}>Design</p>
      </div>
      <h3 className={Style.tittle}>Embracing Minimalism</h3>
      <p className={Style.body}>
        From milimalist sculpture to milimalist painting, this blog will inspire
        you to appreciate the beauty that lies in simplicity
      </p>
      <hr />
      <p className={Style.name}>Annie Spratt</p>
    </div>
  );
};

export default BlogCard;
