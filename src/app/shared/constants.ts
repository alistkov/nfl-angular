import { Link } from './types';

export const appName: string = 'NFL App';

export const mainNavigation: Link[] = [
  { label: 'Standings', link: '/standings' },
  { label: 'Teams', link: '/teams' },
  { label: 'Games', link: '/games' },
];

export const standingNavigation: Link[] = [
  { label: 'Division', link: 'division' },
  { label: 'Conference', link: 'conference' },
];

export const CONFERENCES = [
  {
    title: 'American Football Conference',
    divisions: [
      'AFC East',
      'AFC North',
      'AFC South',
      'AFC West',
    ]
  },
  {
    title: 'National Football Conference',
    divisions: [
      'NFC East',
      'NFC North',
      'NFC South',
      'NFC West',
    ]
  }
];
