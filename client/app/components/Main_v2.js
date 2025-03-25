import { useEffect } from "react";
import "./style_Home.css"; // Import CSS file
import Calendar2 from "./Calendar2";
export default function Home() {
  useEffect(() => {
    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function (n) {
      showSlides((slideIndex += n));
    };

    window.currentSlide = function (n) {
      showSlides((slideIndex = n));
    };

    function showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }, []);

  return (
    <div>
      <section>
        <div className="slideshow-container">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="mySlides fade" key={index}>
              <div className="numbertext">{index + 1} / 5</div>
              <img
                src={`./images/Banner0${index + 1}.jpeg`}
                style={{ width: "100%" }}
                alt={`Banner ${index + 1}`}
              />
            </div>
          ))}
          <a className="prev" onClick={() => window.plusSlides(-1)}>
            ❮
          </a>
          <a className="next" onClick={() => window.plusSlides(1)}>
            ❯
          </a>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              className="dot"
              key={index}
              onClick={() => window.currentSlide(index + 1)}
            ></span>
          ))}
        </div>
      </section>
      <Calendar2 />
      <section className="products" id="products">
        <h1 className="heading">
          <span></span>
        </h1>
        <div className="box-container">
          {[
            "Showcase",
            "Dance Competition",
            "Workshop",
            "Buy Class",
            "Rent",
          ].map((product, index) => (
            <div className="box" key={index}>
              <div className="image">
                <a href={`#${product.replace(" ", "")}`}>
                  <img
                    src={`./images/imagesimg-${index + 1}.png`}
                    alt={product}
                  />
                </a>
              </div>
              <div className="content">
                <a href={`#${product.replace(" ", "")}`}>
                  <h3>{product}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment section */}
      <section className="Commitment-container">
        <div className="Commit">
          <img src="./images/icon-1.png" alt="" />
          <div className="info">
            <h3>Flexible schedule</h3>
            <span>choose courses</span>
          </div>
        </div>

        <div className="Commit">
          <img src="./images/icon-2.png" alt="" />
          <div className="info">
            <h3>expert instructors</h3>
            <span>top-quality dance lessons</span>
          </div>
        </div>

        <div className="Commit">
          <img src="./images/icon-3.png" alt="" />
          <div className="info">
            <h3>Transparent pricing</h3>
            <span>clear course fees</span>
          </div>
        </div>

        <div className="Commit">
          <img src="./images/icon-4.png" alt="" />
          <div className="info">
            <h3>Customer support</h3>
            <span>quick responses services.</span>
          </div>
        </div>
      </section>
      {/* Commitment section end */}

      {/* Footer section */}
      <section className="footer" id="footer">
        <div className="row">
          <div className="box">
            <h3>WhatsAPP</h3>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/85212345678">
              <img
                alt="Chat on WhatsApp"
                src="./images/WhatsApp.png"
                width="50"
                height="50"
              />
            </a>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/85212345678">
              <p>+852 1234 5678</p>
            </a>
          </div>
          <div className="box">
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/@xtra.lab" target="_blank">
              <img
                src="./images/Instagram.png"
                width="50"
                height="50"
                alt="IGIcon"
              />
            </a>
            <a href="https://www.instagram.com/@xtra.lab" target="_blank">
              <p>@xtra.lab</p>
            </a>
          </div>
          <div className="box">
            <h3>address</h3>
            <a
              href="https://www.google.com/maps/place/%E8%A7%80%E5%A1%98%E5%B7%A5%E6%A5%AD%E4%B8%AD%E5%BF%83%EF%BC%9A%E7%AC%AC2%E6%9C%9F/@22.310731,114.227625,16z/data=!4m6!3m5!1s0x340401413b19e527:0x5f6c4cca8aa97c00!8m2!3d22.3107307!4d114.2276251!16s%2Fg%2F11hdjf_d6m?hl=zh-TW&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <img
                src="./images/Address.png"
                width="50"
                height="50"
                alt="LocationIcon"
              />
            </a>
            <a
              href="https://www.google.com/maps/place/%E8%A7%80%E5%A1%98%E5%B7%A5%E6%A5%AD%E4%B8%AD%E5%BF%83%EF%BC%9A%E7%AC%AC2%E6%9C%9F/@22.310731,114.227625,16z/data=!4m6!3m5!1s0x340401413b19e527:0x5f6c4cca8aa97c00!8m2!3d22.3107307!4d114.2276251!16s%2Fg%2F11hdjf_d6m?hl=zh-TW&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <p>觀塘工業中心：第2期5樓J室</p>
            </a>
          </div>
          <div className="box">
            <h3>Youtube</h3>
            <a
              href="https://www.youtube.com/@XtraordinaryLaboratory"
              target="_blank"
            >
              <img
                src="./images/YouTube.png"
                width="50"
                height="50"
                alt="YoutubeIcon"
              />
            </a>
            <a
              href="https://www.youtube.com/@XtraordinaryLaboratory"
              target="_blank"
            >
              <p>@XtraordinaryLaboratory</p>
            </a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.135076580777!2d114.2250448113591!3d22.31073067959423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401413b19e527%3A0x5f6c4cca8aa97c00!2z6KeA5aGY5bel5qWt5Lit5b-D77ya56ysMuacnw!5e0!3m2!1szh-TW!2shk!4v1742530679992!5m2!1szh-TW!2shk"
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="credit">
          created by <span>web designer</span> | all rights reserved |
        </div>
      </section>
      {/* Footer section end */}
    </div>
  );
}
