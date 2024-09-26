import calendar from '../assets/icon_calendar.svg';
import home from '../assets/icon_home.svg';
import inbox from '../assets/icon_inbox.svg';
import invoices from '../assets/icon_invoices.svg';
import help from '../assets/icon_help.svg';
import settings from '../assets/icon_settings.svg';

export const navList = [
  { title: 'Home', icon: home, alt: 'House', width: 16, height: 16, linkTo: '#' },
  { title: 'Dashboard', icon: '', alt: 'Dashboard', width: 16, height: 16, linkTo: '#' },
  { title: 'Inbox', icon: inbox, alt: 'Envelope', width: 16, height: 14, linkTo: '#' },
  { title: 'Products', icon: '', alt: 'Products', width: 16, height: 16, linkTo: '#' },
  { title: 'Invoices', icon: invoices, alt: 'Invoices', width: 14, height: 16, linkTo: '#' },
  { title: 'Customers', icon: '', alt: 'Customers', width: 14, height: 16, linkTo: '#' },
  { title: 'Chat Room', '': home, alt: 'Message', width: 16, height: 16, linkTo: '#' },
  { title: 'Calendar', icon: calendar, alt: 'Calendar', width: 16, height: 14, linkTo: '/' },
  {
    title: 'Help Center',
    icon: help,
    alt: 'Circle with a cross',
    width: 16,
    height: 16,
    linkTo: '#',
  },
  { title: 'Settings', icon: settings, alt: 'Equipment', width: 16, height: 16, linkTo: '#' },
];
