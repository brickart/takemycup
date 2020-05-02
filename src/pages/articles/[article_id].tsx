import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Header, Footer } from '../../components';
import { TitleComponent } from '../../components/title.component';
import { ParagraphComponent } from '../../components/paragraph.component';
import { ImageComponent } from '../../components/image.component';

export default () => (
  <div className='wrapper'>
    <Header />
    <main className='main'>
      <article className='article'>
        <div className='article__tools'><ArrowBackIcon /></div>
        <div className='article__header with-columns'>
          <div className='col-big'>
            <TitleComponent>{TITLE}</TitleComponent>
            <ParagraphComponent>{SUB_TITLE}</ParagraphComponent>
          </div>
          <div className='col-small' />
        </div>
        <div className='article__body'>
          <ImageComponent url={IMAGE} />
          <ParagraphComponent>{TEXT_1}</ParagraphComponent>
          <ParagraphComponent>{TEXT_2}</ParagraphComponent>
          <ParagraphComponent>{TEXT_3}</ParagraphComponent>
          <ParagraphComponent>{TEXT_4}</ParagraphComponent>
          <ParagraphComponent>{TEXT_5}</ParagraphComponent>
          <ParagraphComponent>{TEXT_6}</ParagraphComponent>
        </div>
      </article>
      <div className='safe-area'>
        <div className='banner' />
      </div>
    </main>
    <Footer />
  </div>
);

const TITLE = '«Треба заробити якісь гроші на гречку»: 8 історій барист на карантині';
const SUB_TITLE = '«Так, я буду в цій сфері. Це моя стихія. Але, якщо життя змусить, то будемо викручуватися»';
const TEXT_1 = 'Йон Джин Кім («Новий Смачний Проєкт»): Наразі зупинили роботу закладу заради безпеки всіх нас і вас.'
const TEXT_2 = 'Єлизавета Федоровська(«Каштан Coffee»): «Каштан» пішов на карантин одразу, щойно його оголосили.Зважаючи на те, що нашу кав’ярню відвідує досить велика кількість іноземців та гостей, які подорожували за межі України, ми вирішили не грати з вогнем.Усі співробітники підтримали це рішення, адже здоров’я важливіше.';
const TEXT_3 = 'Арсеній Тарасов(Yellow Place): Магазин goodwine, частиною якого є наша кав’ярня, продовжує працювати, однак усі заклади громадського харчування у його межах, включно із кав’ярнею, зачинені на період карантину.';
const TEXT_4 = 'Владислав Навоєв(Ganter Coffee): Ні, ми закрили кав’ярню Ganter.Думали про те, щоб працювати у форматі to go.Але було два чинники, через яких ми ухвалили рішення не працювати так.По - перше, контакт із людьми – це ризик здоров’ю і гостей, і барист.По - друге, через обмеження пересувань по місту(зупинки метро, заборони громадського транспорту) дуже сильно зменшилася аудиторія кав’ярень.Працювати економічно не вигідно, тому що люди банально до нас не доїдуть.';
const TEXT_5 = 'Ілля Мелентьєв(ONE LOVE Coffee): На даний момент ми зачинили всі локації.Але хотіли б відкрити хоча б одну з них: для того, щоб наші гості мали можливість пити каву – їм її дуже не вистачає.Якщо і будемо працювати, то дійсно лише в форматі take away.Організувати роботу треба таким чином, щоб гість замовляв каву завчасно та дистанційно(Telegram тощо) та оплачував замовлення на вході в заклад за допомогою терміналу, а бариста готував та видавав каву у рукавичках і масці.';
const TEXT_6 = 'Мар’яна Юськевич(«Світ кави» Київ): Наразі продовжуємо працювати.Наш заклад працює в форматі take away – виключно все з собою, в одноразовий посуд, а також продаж зерна.Простір організували таким чином, що у дверях поставили стіл, на якому стоїть антисептик, барний органайзер і термінал.Гість та команда мають можливість зберігати дистанцію, команда працює в рукавичках та масках, гості не потрапляють в середину кав’ярні, а коли замовлення готове, ми його виносимо на так зване місце видачі.Також просимо робити замовлення за телефоном і зберігати дистанцію, якщо підходять двоє чи більше гостей.Усі прекрасно все розуміють і дотримуються правил.';

const IMAGE = 'https://blackfield.coffee/wp-content/uploads/2020/03/barista_coronavirus_4.jpg';
