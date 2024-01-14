import React from "react";
import "../styles/featuredblog.css"
import warwickBassPicture from "../utils/warwick_bass_picture.jpg";

function FeaturedBlog()
{
    return (
      <div className="featured-blog-outer-area">
        <div className="featured-blog-inner-area">
          <div className="featured-blog-name-area">
            <p>FEATURED BLOG</p>
          </div>
          <div className="featured-blog-picture-area">
            <img src={warwickBassPicture} alt="Warwick Bass" />
          </div>
          <div className="featured-blog-title-area">
            <div className="featured-blog-title">
              <h3>Warwick Thumb BO 5: Unleashing the Power of Precision</h3>
            </div>
            <div className="featured-blog-body">
              <p>
                Greetings fellow bass aficionados! Today, we're taking a closer
                look at the Warwick Thumb BO 5, a bass guitar that stands tall
                in the realm of precision and craftsmanship. Buckle up as we
                explore the sonic wonders of this German-engineered masterpiece.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FeaturedBlog;