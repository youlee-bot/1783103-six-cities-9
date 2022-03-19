import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {changeCity, changeSortType} from '../../store/action';

import {SortType} from '../../const/const';

export default function MenuList(): JSX.Element {
  const currentState = useAppSelector((state) => state);

  const currentCity = currentState.currentCity;
  const cititesList = currentState.cities;
  const dispatch = useAppDispatch();

  const getCityInfo = (state:typeof currentState, cityToSearch:string)  => state.cities.filter((city)=>city.title === cityToSearch)[0];

  return (
    <ul className="locations__list tabs__list">
      {cititesList.map((city) => (
        <li className="locations__item" key={city.title}>
          <a className={currentCity.title === city.title ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#" onClick={()=>
          {
            dispatch(changeCity(getCityInfo(currentState, city.title)));
            dispatch(changeSortType(SortType.Popular));
          }}
          >
            <span>{city.title}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}
