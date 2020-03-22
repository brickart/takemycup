import { Component } from 'react';

const CONTENT_DATA = {
  en: {
    headerContent: 'All your dreams comes brew',
    comingSoon: 'Coming soon...',
    language: 'Language',
    copyright: '© 2020 Takemycup. All rights reserved.',
  },
  ru: {
    headerContent: 'Все твои мечты будут приготовлены',
    comingSoon: 'Совсем скоро...',
    language: 'Язык сайта',
    copyright: '© 2020 Takemycup. Все права защищены.',
  },
  ukr: {
    headerContent: 'Всі твої мрії будуть проготовлені',
    comingSoon: 'Незабаром...',
    language: 'Мова сайту',
    copyright: '© 2020 Takemycup. Всі права захищені.',
  },
};

interface IState {
  timerText: string;
  content: {
    headerContent: string;
    comingSoon: string;
    language: string;
    copyright: string;
  };
}

const transformToTwoDigits = (num) => num < 10 ? `0${num}` : `${num}`;

export default class IndexPage extends Component {
  public state: IState;
  private interval;

  constructor(props) {
    super(props);

    this.state = {
      timerText: '',
      content: {
        headerContent: '',
        comingSoon: '',
        language: '',
        copyright: '',
      },
    };
  }

  public componentDidMount() {
    this.setLocalText();
    const deadline = new Date('2020-05-01T00:00:00');
    const now = new Date();
    const timer = new Date(+deadline - +now);

    this.interval = setInterval(() => {
      timer.setSeconds(timer.getSeconds() - 1);

      const newTime = {
        days: transformToTwoDigits(Math.floor(+timer / 1000 / 60 / 60 / 24)),
        hour: transformToTwoDigits(Math.floor(+timer / 1000 / 60 / 60 % 24)),
        min: transformToTwoDigits(Math.floor(+timer / 1000 / 60 % 60)),
        sec: transformToTwoDigits(Math.floor(+timer / 1000 % 60)),
      };
      this.setState({
        timerText: `[${newTime.days}:${newTime.hour}:${newTime.min}:${newTime.sec}]`,
      });
    }, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <div className='wrapper'>
        <header>
          <div className='safe-area'>
            <div className='header__content'>
              <span className='logo'>Take my cup</span>
              <span id='headerContent' className='text'>{this.state.content.headerContent}</span>
            </div>
          </div>
        </header>
        <div className='center'>
          <div className='col'>
            <h1 id='comingSoon'>{this.state.content.comingSoon}</h1>
            <span id='timer' className='text' >{this.state.timerText}</span>
            {!this.state.timerText && (<div id='empty' className='empty-state' />)}

          </div>
        </div>
        <footer>
          <div className='safe-area'>
            <div className='footer__content'>
              <span id='copyright' className='text'>{this.state.content.copyright}</span>
              <div className='row'>
                <span id='language' className='text'>{this.state.content.language}</span>
                <div className='selector'>
                  <select id='lang_selector' onChange={this.languageChangeHandler}>
                    <option value='en'>En</option>
                    <option value='ru'>Ру</option>
                    <option value='ukr'>Укр</option>
                  </select>
                  <svg className='icon' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
                    <path d='M0 0h24v24H0V0z' fill='none' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  private languageChangeHandler = (event): void => {
    this.setLocalText(event.target.value);
  }

  private setLocalText(localization = 'en'): void {
    this.setState({ content: CONTENT_DATA[localization] });
  }
}
