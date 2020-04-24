import { Header, Footer } from '../../components';

export default () => (
  <div className='wrapper'>
    <Header />
    <main className='main'>
      <div className='safe-area col'>
        <div className='main__content-with-col'>
          <div className='main__col-left col'>
            <div className='articles-last' />
            <div className='articles-block' />
            <div className='banner' />
            <div className='articles-block' />
            <div className='articles-block' />
          </div>
          <div className='main__col-right col'>
            <div className='articles-top' />
          </div>
        </div>
        <div className='banner' />
      </div>
    </main>
    <Footer />
  </div>
);
