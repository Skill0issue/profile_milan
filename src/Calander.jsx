import React from 'react';


class Calendar extends React.Component {
  state = {
    currentMonth: 8, // September is the 9th month (zero-indexed)
    currentYear: 2023,
    selectedDate: null,
  };

    // Function to get the number of days in a month
    getDaysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    // Function to get the name of the day (e.g., "Mon", "Tue") for a given date
    getDayName = (year, month, day) => {
      const dayOfWeek = new Date(year, month, day).getDay();
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return weekdays[dayOfWeek];
    };
  

  handlePrevMonth = () => {
    this.setState((prevState) => ({
      currentMonth: prevState.currentMonth === 8 ? 7 : 8, // Toggle between 7 (August) and 8 (September)
      selectedDate: null,
    }));
  };

  handleNextMonth = () => {
    this.setState((prevState) => ({
      currentMonth: prevState.currentMonth === 8 ? 9 : 8, // Toggle between 9 (October) and 8 (September)
      selectedDate: null,
    }));
  };

  handleDateClick = (day) => {
    const { currentMonth, currentYear } = this.state;
    this.setState({
      selectedDate: new Date(currentYear, currentMonth, day),
    });
  };

  closeModal = () => {
    this.setState({
      selectedDate: null,
    });
  };

  render() {
    const { currentMonth, currentYear, selectedDate } = this.state;
    const daysInSeptember = this.getDaysInMonth(8, currentYear);
    const daysInOctober = this.getDaysInMonth(9, currentYear);

    // Create an array of dates for September and October
    const dates = [];
    const daysInCurrentMonth = currentMonth === 8 ? daysInSeptember : daysInOctober;
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      dates.push({
        day,
        month: currentMonth,
        year: currentYear,
      });
    }

  // Create the grid for displaying the calendar
  const calendarGrid = dates.map((date) => (
    <div
      key={`${date.month}-${date.day}`}
      className="calendar-cell"
      onClick={() => this.handleDateClick(date.day)}
    >
      <div className="date">{date.day}</div>
      <div className="day">{this.getDayName(date.year, date.month, date.day)}</div>
    </div>
  ));
    

        return (
          <div className="calendar">
            <div className="month">{currentMonth === 8 ? 'September 2023' : 'October 2023'}</div>
            <div className="calendar-grid">{calendarGrid}</div>
            {selectedDate && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={this.closeModal}>&times;</span>
                  <h2>{selectedDate.toDateString()}</h2>
                  {/* Add more information about the selected date here if needed */}
                </div>
              </div>
            )}
            <div className="navigation">
              <button onClick={this.handlePrevMonth}>&lt; Prev &nbsp;</button>
              <button onClick={this.handleNextMonth}>Next &gt;</button>
            </div>
          </div>
        );
  }
}

export default Calendar;
