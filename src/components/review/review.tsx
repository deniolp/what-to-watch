import * as React from 'react';

import {Review as Rev} from "../../types";

interface Props {
  review: Rev;
}

const Review = (props: Props): React.SFC => {
  const {review} = props;
  const getDate = (data): string => {
    const year = data.getFullYear();
    const month = data.toLocaleString(`en-us`, {month: `long`});
    const date = data.getDate();
    return month + ` ` + date + `, ` + year;
  };

  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{review.user.name}</cite>
        <time className="review__date" dateTime={review.date}>{getDate(new Date(review.date))}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{review.rating}</div>
  </div>;
};

export default React.memo(Review);
