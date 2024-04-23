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
          <h4>{name}</h4>
          <p>{cuisines.join(", ")}</p>
          <h6>({avgRating || avgRatingString})star</h6>
          <h6>{costForTwo} min</h6>
        </div>
      </div>
    </>
  );
}
