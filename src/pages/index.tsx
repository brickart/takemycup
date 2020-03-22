export default () => (
  <div className='wrapper'>
    <header>
      <div className='safe-area'>
        <div className='header__content'>
          <span className='logo'>Take my cup</span>
          <span id='headerContent' className='text'>All your dreams comes brew</span>
        </div>
      </div>
    </header>
    <div className='center'>
      <div className='col'>
        <h1 id='comingSoon'>Coming soon...</h1>
        <span id='timer' className='text'/>
        <div id='empty' className='empty-state'/>
      </div>
    </div>
    <footer>
      <div className='safe-area'>
        <div className='footer__content'>
          <span id='copyright' className='text'>© 2020 Takemycup.</span>
          <div className='row'>
            <span id='language' className='text'>Language</span>
            <div className='selector'>
              <select id='lang_selector'>
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
