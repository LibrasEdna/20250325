const daysContainer = document.getElementById('daysContainer');
const prevWeekBtn = document.getElementById('prevWeek');
const nextWeekBtn = document.getElementById('nextWeek');
const calendarHeader = document.getElementById('calendarHeader');

const events = {
    '2025-03-09': [
        { title: 'Securities Regulation', time: '2 PM - 5 PM', start: 6, end: 9, class: 'securities' }
    ],
    '2025-03-10': [
        { title: 'Corporate Finance', time: '10 AM - 12 PM', start: 2, end: 4, class: 'corp-fi' },
        { title: 'Entertainment Law', time: '1 PM - 4 PM', start: 5, end: 8, class: 'ent-law' }
    ],
    // Add more events here as needed
};

let currentStartDate = new Date('2025-03-09');

function renderCalendarHeader(startDate) {
    const options = { year: 'numeric', month: 'long' };
    calendarHeader.textContent = startDate.toLocaleDateString('en-US', options);
}

function renderCalendar(startDate) {
    renderCalendarHeader(startDate);
    daysContainer.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(startDate);
        dayDate.setDate(startDate.getDate() + i);
        const dayStr = dayDate.toISOString().split('T')[0];

        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.innerHTML = `
            <p class="date-num">${dayDate.getDate()}</p>
            <p class="date-day">${dayDate.toLocaleDateString('en-US', { weekday: 'short' })}</p>
        `;
        dayDiv.appendChild(dateDiv);

        const eventsDiv = document.createElement('div');
        eventsDiv.classList.add('events');

        if (events[dayStr]) {
            events[dayStr].forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event', event.class);
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
    currentStartDate.setDate(currentStartDate.getDate() + (direction * 7));
    if (currentStartDate <= new Date('2025-05-31')) {
        renderCalendar(currentStartDate);
    }
}

prevWeekBtn.addEventListener('click', () => changeWeek(-1));
nextWeekBtn.addEventListener('click', () => changeWeek(1));

renderCalendar(currentStartDate);
