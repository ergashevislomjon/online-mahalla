import React from "react";
import House from "../../assets/images/icons/house.svg";
import Growth from "../../assets/images/icons/growth.svg";
import WorkFromHome from "../../assets/images/icons/work-from-home.svg";
import Headhunting from "../../assets/images/icons/headhunting.svg";

const index = () => {
  return (
    <>
      <section className=" navigator">
        <div className="container">
          <h2 className="navigator__title">Бизнес навигатор</h2>
          <div className="navigator__cards">
            <a href="" className="navigator__card">
              <img src={House} />
              <div className="navigator__card-text">
                <h3>Ўсиш нуқталари</h3>
                <p>
                  Маҳалладаги ижтимоий-иқтисодий ҳолатнии хонадонбай ўрганиш
                </p>
                <a href="#">
                  Батафсил
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </a>
              </div>
            </a>
            <a href="" className="navigator__card">
              <img src={Growth} />
              <div className="navigator__card-text">
                <h3>Бизнес-режа лойиҳаси ва ҳужжатлар тўплами</h3>
                <p>Мавжуд бизнес режалар</p>
                <a href="#">
                  Батафсил
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="arrow"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </a>
              </div>
            </a>
            <a href="" className="navigator__card">
              <img src={WorkFromHome} />
              <div className="navigator__card-text">
                <h3>Имтиёз ва преференциялар тўғрисида маълумот</h3>
                <p>
                  Мавжуд имтиёз ва преференциялар ва уларни олиш учун зарур
                  бўлган хужжатлар тўплами
                </p>
                <a href="#">
                  Батафсил
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </a>
              </div>
            </a>
            <a href="" className="navigator__card">
              <img src={Headhunting} />
              <div className="navigator__card-text">
                <h3>
                  Тадбиркорлик фаолиятини амалга ошириш учун кўчмас мулк
                  объектлари
                </h3>
                <p>Бўш турган кўчмас мулк тўғрисидаги маълумотлар </p>
                <a href="#">
                  Батафсил
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </a>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
