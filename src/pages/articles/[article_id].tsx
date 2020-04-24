import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Header, Footer } from '../../components';

export default () => (
  <div className='wrapper'>
    <Header />
    <main className='main'>
        <article className='article'>
            <div className='article__tools'><ArrowBackIcon /></div>
            <div className='article__header with-columns'>
                <div className='col-big' />
                <div className='col-small' />
            </div>
            <div className='article__body' />
        </article>
        <div className='safe-area'>
            <div className='banner' />
        </div>
    </main>
    <Footer />
  </div>
);
