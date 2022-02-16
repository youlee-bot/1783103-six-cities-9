import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function NotFound() {
  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
      <Footer/>
    </>
  );
}
