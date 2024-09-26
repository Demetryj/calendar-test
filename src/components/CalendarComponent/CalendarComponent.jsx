import { useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';

import './CalendarComponent.scss';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const eventInitialState = {
  eventName: '',
  eventDate: '',
  eventTime: '',
  notes: '',
  eventColor: '#3B86FF',
};

const Event = ({ event }) => <div className="calendar-event">{event.eventName}</div>;

export const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState(eventInitialState);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const calendarRef = useRef(null);

  const handleSelectSlot = ({ start, end, box }) => {
    setNewEvent({
      ...eventInitialState,
      start,
      end,
    });
    setSelectedEvent(null);
    setModalOpen(true);

    const calendarElement = calendarRef.current;
    const rect = calendarElement.getBoundingClientRect();

    const slotX = box.clientX - rect.left;
    const slotY = box.clientY - rect.top;

    const modalHeight = 375;
    const calendarHeight = rect.height;

    let topPosition = slotY;
    if (slotY + modalHeight > calendarHeight) {
      topPosition = slotY - modalHeight;
    }

    setModalPosition({ top: topPosition, left: slotX });
  };

  const handleSelectEvent = event => {
    setSelectedEvent(event);
    setNewEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const saveEvent = dataEvent => {
    const startEvent = moment(
      `${dataEvent.eventDate} ${dataEvent.eventTime}`,
      'YYYY-MM-DD HH:mm'
    ).toDate();
    const endEvent = moment(startEvent).add(1, 'hours').toDate();

    const dataToSave = {
      ...dataEvent,
      start: startEvent,
      end: endEvent,
    };

    setNewEvent(dataToSave);

    if (selectedEvent) {
      setEvents(events.map(event => (event === selectedEvent ? dataToSave : event)));
    } else {
      setEvents([...events, dataToSave]);
    }
    closeModal();
  };

  const deleteEvent = () => {
    setEvents(events.filter(event => event !== selectedEvent));
    closeModal();
  };

  const onEventDrop = ({ event, start, end }) => {
    const updatedEvent = { ...event, start, end };
    setEvents(
      events.map(existingEvent => (existingEvent === event ? updatedEvent : existingEvent))
    );
  };

  const onEventResize = ({ event, start, end }) => {
    const updatedEvent = { ...event, start, end };
    setEvents(
      events.map(existingEvent => (existingEvent === event ? updatedEvent : existingEvent))
    );
  };

  return (
    <div className="calendar-component">
      <h2 className="calendar-component__title">Calendar View</h2>

      <div ref={calendarRef} className="calendar-component__wrapper">
        <div>
          <DnDCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            onEventDrop={onEventDrop}
            resizable
            onEventResize={onEventResize}
            style={{ width: 1170, height: 860 }}
            eventPropGetter={event => ({
              style: {
                backgroundColor: event.eventColor,
                color: 'white',
              },
            })}
            components={{
              event: Event,
            }}
          />

          {modalOpen && (
            <Modal closeModal={closeModal} modalPosition={modalPosition}>
              <Form
                selectedEvent={selectedEvent}
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                saveEvent={saveEvent}
                deleteEvent={deleteEvent}
                closeModal={closeModal}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
