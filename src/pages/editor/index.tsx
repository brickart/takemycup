import * as React from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Header, Footer } from '../../components';
import EditorComponent from '../../components/editor.component';

export default () => (
    <div className='wrapper'>
        <Header />
        <main className='main'>
            <article className='article'>
                <div className='article__tools'><ArrowBackIcon /></div>
                <EditorComponent />

            </article>
            <div className='safe-area'>
                <div className='banner'/>
            </div>
        </main>
        <Footer />
    </div>
);
