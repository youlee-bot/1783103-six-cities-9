import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import MenuList from '../../components/menu-list/menu-list';
import MainContent from '../../components/main-content/main-content';
import MainEmpty from '../../components/main-empty/main-empty';
import {Offers} from '../../types/offers';
import { useEffect } from 'react';
import {useAppDispatch} from '../../hooks/';
import { setOfferLoaded } from '../../store/app-data/app-data';

type IndexPageProps = {
  offers: Offers;
}

export default function IndexPage({offers} :IndexPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setOfferLoaded(false));
  }, []);

  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <MenuList />
          </section>
        </div>
        {offers.length>0?<MainContent offers={offers}/>:<MainEmpty /> }
      </main>
      <Footer/>
    </>
  );
}
