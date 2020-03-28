import { Header } from "../components";

export default () => (
    <>
      <Header />
      {/* <div className="header">
        <div className="header__content">
          <div className="header__article"> </div>
        </div>
      </div> */}
      <div className="main">
        <div className="main__content-with-col">
            <div className="main__col-big"></div>
            <div className="main__col-small"></div>
        </div>
      </div>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__article"></div>
        </div>
      </div>
    </>
  );
  