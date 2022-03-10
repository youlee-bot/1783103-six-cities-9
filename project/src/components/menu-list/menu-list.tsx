import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {changeCity} from '../../store/action';

export default function MenuList(): JSX.Element {
  const currentState = useAppSelector((state) => state);

  const currentCity = currentState.currentCity;
  const cititesList = currentState.cities;

  console.log(currentState);
  const dispatch = useAppDispatch();

  const cityInfo = (cityToSearch:string)  => {
    const result = currentState.cities.filter((city)=>city.title === cityToSearch)[0];
    return (result);
  };

  return (
    <ul className="locations__list tabs__list">
      {cititesList.map((city) => (
        <li className="locations__item" key={city.title}>
          <a className={currentCity.title === city.title ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#" onClick={()=>dispatch(changeCity(cityInfo(city.title)))}>
            <span>{city}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}
