import { Link } from './types';

export const appName: string = 'NFL App';

export const mainNavigation: Link[] = [
  { label: 'Standings', link: '/standings' },
  { label: 'Teams', link: '/teams' },
  { label: 'Games', link: '/games' },
];

export const standingNavigation: Link[] = [
  { label: 'Conference', link: 'conference' },
  { label: 'Division', link: 'division' },
];
