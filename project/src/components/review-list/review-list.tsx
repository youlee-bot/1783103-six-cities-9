import ReviewItem from '../../components/review-item/review-item';

import {Reviews} from '../../types/types';

type reviewListProps = {
  reviews: Reviews;
}

export default function ReviewList({reviews}: reviewListProps): JSX.Element {
  const reviewsToSort = [...reviews];
  reviewsToSort.sort((a, b)=>{
    if (a.date>b.date){
      return -1;
    }
    if (a.date<b.date){
      return 1;
    }
    return 0;
  });
  const reviewsToDisplay = reviewsToSort.slice(0,9);
  return (
    <ul className="reviews__list">
      {reviewsToDisplay.map((reviewItem)=><ReviewItem review={reviewItem} key={reviewItem.id}/>)}
    </ul>
  );
}
