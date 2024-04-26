import React from "react";
export default function Body(props) {
  const { resdataprop } = props;

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    cuisines,
    costForTwo,
    avgRating,
  } = resdataprop.info;

  return (
    <>
      <div class="card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
        />
        <div className="content">
          <h3>{name.slice(0,40)}</h3>
          <h6>{cuisines.slice(0,5).join(", ")}</h6>
          <h5 className="rating">({avgRating || avgRatingString}) star</h5>
          <h4>{costForTwo} min</h4>
        </div>
      </div>
    </>
  );
}
