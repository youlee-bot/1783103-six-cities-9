import ReviewItem from '../../components/review-item/review-item';

import {Reviews} from '../../types/types';

type reviewListProps = {
  reviews: Reviews;
}

export default function ReviewList({reviews}: reviewListProps): JSX.Element {
  console.log(reviews);
  return (
    <ul className="reviews__list">
      {reviews.map((reviewItem)=><ReviewItem review={reviewItem} key={reviewItem.reviewId}/>)}
    </ul>
  );
}
