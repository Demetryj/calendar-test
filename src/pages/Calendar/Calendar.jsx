import { CalendarComponent } from '../../components/CalendarComponent/CalendarComponent';

import './Calendar.scss';

export default function Calendar() {
  return (
    <section>
      <div className="calendar__container">
        <h1 className="calendar__title">Calendar</h1>

        <CalendarComponent />
      </div>
    </section>
  );
}
