import * as yup from 'yup';

export const schema = yup.object().shape({
  eventName: yup
    .string()
    .required('Event name is required')
    .max(30, 'Event name must be at most 30 characters'),
  eventDate: yup.string().required('Event date is required'),
  eventTime: yup.string().required('Event time is required'),
  notes: yup.string().required('Notes are required').max(30, 'Notes must be at most 30 characters'),
});
