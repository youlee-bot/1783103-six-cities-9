import {useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';

import {changeSortType} from '../../store/action';

import {SortType} from '../../const/const';

export default function SortMenu(): JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);
  const currentSortType = useAppSelector((state)=>state.sortType);
  const dispatch = useAppDispatch();

  const onSortMenuClick = () => {
    const sortMenuList = formRef?.current?.querySelector('.places__options--custom');
    sortMenuList?.classList.toggle('places__options--opened');
  };
  return (
    <form className="places__sorting" action="#" method="get" ref={formRef} onClick={onSortMenuClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>{currentSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        <li
          className="places__option places__option--active"
          tabIndex={0}
          onClick={() => {
            dispatch(changeSortType(SortType.Popular));}}
        >
          Popular
        </li>
        <li className="places__option" tabIndex={0} onClick={() => {
          dispatch(changeSortType(SortType.LowToHigh));}}
        >
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0} onClick={() => {
          dispatch(changeSortType(SortType.HighToLow));}}
        >
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0} onClick={() => {
          dispatch(changeSortType(SortType.TopRated));}}
        >
          Top rated first
        </li>
      </ul>
    </form>);
}
