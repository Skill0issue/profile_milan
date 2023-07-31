import React, { useState } from 'react';

const eventsData = {
  '2023-09-01': ['Event 1', 'Event 2'],
  '2023-09-15': ['Event 3'],
  '2023-10-05': ['Event 4'],
  '2023-10-20': ['Event 5', 'Event 6'],
};

const ReactCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState('September');

  const months = ['September', 'October'];

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = () => {
    setCurrentMonth(currentMonth === 'September' ? 'October' : 'September');
  };

  const renderCalendar = () => {
    const month = currentMonth === 'September' ? 8 : 9;
    const year = 2023;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const calendarDays = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      const events = eventsData[date] || [];

      calendarDays.push(
        <div
          key={i}
          className={`calendar-day ${selectedDate === date ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <div className="day">{i}</div>
        </div>
      );
    }

    return calendarDays;
  };

  const renderEventsDialog = () => {
    if (!selectedDate) return null;

    const events = eventsData[selectedDate] || [];

    return (
      <div className="events-dialog">
        <div className="dialog-header">
          <span>{selectedDate}</span>
          <button onClick={() => setSelectedDate(null)}>Close</button>
        </div>
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        ) : (
          <p>No events for this day.</p>
        )}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>{currentMonth}</h2>
        <button onClick={handleMonthChange}>Change Month</button>
      </div>
      <div className="calendar">{renderCalendar()}</div>
      {renderEventsDialog()}
    </div>
  );
};

export default ReactCalendar;
