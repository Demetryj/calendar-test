import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './data';

import './Form.scss';

export const Form = ({
  selectedEvent,
  newEvent,
  setNewEvent,
  saveEvent,
  deleteEvent,
  closeModal,
}) => {
  console.log(newEvent);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      eventName: newEvent.eventName,
      eventDate: newEvent.eventDate,
      eventTime: newEvent.eventTime,
      notes: newEvent.notes,
      eventColor: newEvent.eventColor.toString(),
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    setNewEvent();
    saveEvent(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-wrapper">
        <div className="input-wrapper">
          <input id="eventName" type="text" placeholder=" " {...register('eventName')} />
          <label htmlFor="eventName">event Name</label>
          {errors.eventName && <p className="error-message">{errors.eventName.message}</p>}
        </div>

        <div className="input-wrapper">
          <input id="eventDate" type="date" placeholder=" " {...register('eventDate')} />
          <label htmlFor="eventDate">event Date</label>
          {errors.eventDate && <p className="error-message">{errors.eventDate.message}</p>}
        </div>

        <div className="input-wrapper">
          <input id="eventTime" type="time" placeholder=" " {...register('eventTime')} />
          <label htmlFor="eventTime">event Time</label>
          {errors.eventTime && <p className="error-message">{errors.eventTime.message}</p>}
        </div>

        <div className="input-wrapper">
          <input id="notes" type="text" placeholder=" " className="italic" {...register('notes')} />
          <label htmlFor="notes">notes</label>
          {errors.notes && <p className="error-message">{errors.notes.message}</p>}
        </div>

        <div className="modal__input-wrapper">
          <Controller
            name="eventColor"
            control={control}
            render={({ field }) => <input {...field} type="color" className="input-color" />}
          />
        </div>
      </div>

      <div className="form__buttons">
        {selectedEvent ? (
          <button
            type="button"
            className="form__buttons-item form__buttons-item--attention"
            onClick={deleteEvent}
          >
            Discard
          </button>
        ) : (
          <button
            type="button"
            className="form__buttons-item form__buttons-item--attention"
            onClick={closeModal}
          >
            Cancel
          </button>
        )}

        {selectedEvent ? (
          <button type="submit" className="form__buttons-item">
            Edit
          </button>
        ) : (
          <button type="submit" className="form__buttons-item">
            Save
          </button>
        )}
      </div>
    </form>
  );
};
