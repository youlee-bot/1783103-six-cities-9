import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import MenuList from '../../components/menu-list/menu-list';
import MainContent from '../../components/main-content/main-content';

export default function IndexPage(): JSX.Element {
  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <MenuList/>
          </section>
        </div>
        <MainContent />
      </main>
      <Footer/>
    </>
  );
}
