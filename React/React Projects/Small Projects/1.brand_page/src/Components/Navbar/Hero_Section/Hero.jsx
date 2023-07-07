import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>your feet deserve the best</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est?
          Tenetur dolorum iusto corrupti dolor neque odit totam nemo quibusdam?
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="btn-secondary">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/public/images/flipkart.png" alt="" />
            <img src="/public/images/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/public/images/hero-image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
