import { Header, Footer } from "../components";

export default () => (
    <>
      <Header />
      <div className="main">
        <div className="main__content-with-col">
            <div className="main__col-big"></div>
            <div className="main__col-small"></div>
        </div>
      </div>
      <Footer />
    </>
  );
  