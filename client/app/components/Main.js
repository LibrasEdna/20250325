import { useEffect } from "react";
import "./style.css";
export default function Home() {
  useEffect(() => {
    const daysContainer = document.getElementById("daysContainer");
    const prevWeekBtn = document.getElementById("prevWeek");
    const nextWeekBtn = document.getElementById("nextWeek");
    const calendarHeader = document.getElementById("calendarHeader");

    const events = {
      "2025-03-09": [
        {
          title: "Securities Regulation",
          time: "2 PM - 5 PM",
          start: 6,
          end: 9,
          class: "securities",
        },
      ],
      "2025-03-10": [
        {
          title: "Corporate Finance",
          time: "10 AM - 12 PM",
          start: 2,
          end: 4,
          class: "corp-fi",
        },
        {
          title: "Entertainment Law",
          time: "1 PM - 4 PM",
          start: 5,
          end: 8,
          class: "ent-law",
        },
      ],
    };

    let currentStartDate = new Date("2025-03-09");

    function renderCalendarHeader(startDate) {
      const options = { year: "numeric", month: "long" };
      calendarHeader.textContent = startDate.toLocaleDateString(
        "en-US",
        options
      );
    }

    function renderCalendar(startDate) {
      renderCalendarHeader(startDate);
      daysContainer.innerHTML = "";

      for (let i = 0; i < 7; i++) {
        const dayDate = new Date(startDate);
        dayDate.setDate(startDate.getDate() + i);
        const dayStr = dayDate.toISOString().split("T")[0];

        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.innerHTML = `
            <p class="date-num">${dayDate.getDate()}</p>
            <p class="date-day">${dayDate.toLocaleDateString("en-US", {
              weekday: "short",
            })}</p>
        `;
        dayDiv.appendChild(dateDiv);

        const eventsDiv = document.createElement("div");
        eventsDiv.classList.add("events");

        if (events[dayStr]) {
          events[dayStr].forEach((event) => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event", event.class);
            eventDiv.style.gridRow = `${event.start} / ${event.end}`;
            eventDiv.innerHTML = `
                <p class="title">${event.title}</p>
                <p class="time">${event.time}</p>
            `;
            eventsDiv.appendChild(eventDiv);
          });
        }
        dayDiv.appendChild(eventsDiv);
        daysContainer.appendChild(dayDiv);
      }
    }

    function changeWeek(direction) {
      currentStartDate.setDate(currentStartDate.getDate() + direction * 7);
      if (currentStartDate <= new Date("2025-05-31")) {
        renderCalendar(currentStartDate);
      }
    }

    prevWeekBtn.addEventListener("click", () => changeWeek(-1));
    nextWeekBtn.addEventListener("click", () => changeWeek(1));

    renderCalendar(currentStartDate);
  }, []);

  return (
    <>
      <section>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </section>

      <section id="countdownsection" className="bg-orange-600">
        <h2 id="specialItemTitle" className="text-2xl">
          【官方限定】購買10堂送一堂!
        </h2>
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": 10 }} aria-live="polite" aria-label="10">
            10
          </span>
          :
          <span style={{ "--value": 24 }} aria-live="polite" aria-label="24">
            24
          </span>
          :
          <span style={{ "--value": 59 }} aria-live="polite" aria-label="59">
            59
          </span>
        </span>
      </section>

      <section className="showcasebox">
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Show Case</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Dance Competition</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Workshop</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="divideSection">
        <div className="divider divider-neutral"></div>
      </section>

      <section className="showcasebox">
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">First Trial</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Class Booking</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Class Package</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="divideSection">
        <div className="divider divider-neutral"></div>
      </section>

      <section className="showcasebox">
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Single rent</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Package rent</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="divideSection">
        <div className="divider divider-neutral"></div>
      </section>

      <section className="showcasebox">
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">Ticket</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
        <div className="showcaseChild">
          <div className="card bg-base-100 image-full w-96 shadow-sm card-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title headerText">The Xtra Tee</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptas, ducimus, voluptatem veniam asperiores
                doloremque quis quaerat, ut nobis molestias illum harum! Eum
                provident tempore magnam?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="divideSection">
        <div className="divider divider-neutral"></div>
      </section>

      <section id="calendarSection">
        <div className="calendar">
          <div className="controls">
            <button id="prevWeek">Previous Week</button>
            <div id="calendarHeader"></div>
            <button id="nextWeek">Next Week</button>
          </div>
          <div className="timeline">
            <div className="spacer"></div>
            <div className="time-marker">9 AM</div>
            <div className="time-marker">10 AM</div>
            <div className="time-marker">11 AM</div>
            <div className="time-marker">12 PM</div>
            <div className="time-marker">1 PM</div>
            <div className="time-marker">2 PM</div>
            <div className="time-marker">3 PM</div>
            <div className="time-marker">4 PM</div>
            <div className="time-marker">5 PM</div>
            <div className="time-marker">6 PM</div>
          </div>
          <div className="days" id="daysContainer"></div>
        </div>
      </section>

      <section id="TutorSection">
        <div className="card card-side bg-base-100 shadow-sm TutorSectioncard">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tutor IG</h2>
            <p>Pop Out Tutor Class Detail When User Click</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      </section>

      <section id="commitmentSection">
        <div className="commitmentSectionChild">
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Service Commitment</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commitmentSectionChild">
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Service Commitment</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commitmentSectionChild">
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Service Commitment</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commitmentSectionChild">
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Service Commitment</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="socialMediaSection">
        <ul className="menu menu-horizontal bg-base-200 rounded-box">
          <li className="socialMediaSectionIcon">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
            </a>
          </li>
          <li className="socialMediaSectionIcon">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>
          </li>
          <li className="socialMediaSectionIcon">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </section>

      <section id="subscribeSection">
        <div>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </div>
        <div>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">Enter Whatsapp</div>
            </div>
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </div>
      </section>

      <section id="footerSection">
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </section>
    </>
  );
}
