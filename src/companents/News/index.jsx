import React from "react";
import Carousel from "../UI/Carousel";

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="news">
            <h2 className="news__title">Онлайн ахборотнома</h2>
            <div className="news__cards">
              <a href="" className="news__card">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HFn9Ul_z6CY"
                  title="Ҳоким ёрдамчиси билан бир кун: Қашқадарё вилояти, Миришкор тумани, Бори маҳалласи"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <data>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                  </svg>
                  26.03.2022
                </data>
                <div className="news__card-title">
                  Ҳоким ёрдамчиси билан бир кун: Қашқадарё вилояти, Миришкор
                  тумани, Бори маҳалласи
                </div>
              </a>
              <a href="" className="news__card">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/mB7DdBWB7aw"
                  title="Маҳаллабай ишлаш тизими: энди ҳар бир маҳалла ихтисослашуви бўйича қўллаб-қувватланади"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <data>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                  </svg>
                  26.03.2022
                </data>
                <div className="news__card-title">
                  Ҳоким ёрдамчиси билан бир кун: Қашқадарё вилояти, Миришкор
                  тумани, Бори маҳалласи
                </div>
              </a>
              <a href="" className="news__card">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/rlhKtZWeeOU"
                  title="Ҳоким ёрдамчиси билан бир кун: Наманган вилояти Наманган тумани Наврўз маҳалласи"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <data>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                  </svg>
                  26.03.2022
                </data>
                <div className="news__card-title">
                  Ҳоким ёрдамчиси билан бир кун: Қашқадарё вилояти, Миришкор
                  тумани, Бори маҳалласи
                </div>
              </a>
            </div>
            {/* Carousel mobile */}
            <Carousel />
            {/* Carousel mobile*/}
            <a href="" className="news__more-video">
              Барча видеолавхалар
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
