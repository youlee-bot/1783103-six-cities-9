import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {changeCity, changeSortType} from '../../store/app-data/app-data';
import {CITIES} from '../../const/city';
import {SortType} from '../../const/const';

export default function MenuList(): JSX.Element {
  const currentCity = useAppSelector(({DATA}) => DATA.currentCity);
  const dispatch = useAppDispatch();

  const getCityInfo = (cityToSearch:string)  => CITIES.filter((city)=>city.title === cityToSearch)[0];

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city.title}>
          <a className={currentCity.title === city.title ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#" onClick={()=>
          {
            dispatch(changeCity(getCityInfo(city.title)));
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
