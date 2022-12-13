import background_image from "/resources/background.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__background">
        <img src={background_image} alt="background" />
      </div>
      <div className="home__presentation__top-left">
        <h1>David Valenzuela Martinez</h1>
        <p>Développeur Web Junior</p>
        <p>Pays Basque / Sud Landes</p>
      </div>
      <div className="home__presentation__bottom-right">
        <p>Formation : Wild Code School - Biarritz</p>
        <p>Entreprise : Poplidays - Urrugne</p>
      </div>
    </div>
  );
};

export default Home;
