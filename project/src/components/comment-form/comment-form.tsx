import {FormEvent, useEffect, useState} from 'react';
import {fetchOfferInfoAction, fetchOfferReviewsAction, postCommentAction} from '../../store/api-actions';
import {useAppSelector, useAppDispatch} from '../../hooks/index';

type CommentFormProps = {
  id: number;
}

export default function CommentForm({id}:CommentFormProps): JSX.Element {
  const [currentStar, setStar] = useState(0);
  const [currentComment, setComment] = useState('');
  const currentId = useAppSelector(({DATA})=>DATA?.currentOffer?.id);
  const {isCommentSent} = useAppSelector(({DATA})=>DATA);

  const [commentIsValid, setCommentStatus] = useState(false);

  const dispatch = useAppDispatch();
  const onFormSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (currentId) {
      dispatch(postCommentAction({comment: currentComment, rating: currentStar, id:currentId}));
      dispatch(fetchOfferReviewsAction(Number(id)));
      dispatch(fetchOfferInfoAction(Number(id)));
      setCommentStatus(false);
    }
  };

  useEffect(() => {
    ((currentComment.length > 50) && (currentComment.length < 300) && (currentStar>0) && (isCommentSent))?setCommentStatus(true):setCommentStatus(false);
  }, [currentComment, currentStar]);


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          onChange={(evt) => {setStar(5);}}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          onChange={(evt) => {setStar(4);}}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          onChange={(evt) => {setStar(3);}}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          onChange={(evt) => {setStar(2);}}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          onChange={(evt) => {setStar(2);}}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={(evt) => setComment(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
          stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!commentIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
