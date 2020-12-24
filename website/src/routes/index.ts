/* eslint-disable import/prefer-default-export */
import { GoTo as GoToTinkering } from './tinkering';
import { GoTo as GoToArt } from './art';
import { GoTo as GoToPersonal } from './personal';

export const GoTo = {
  Home: '/',
  Tinkering: GoToTinkering,
  Art: GoToArt,
  Personal: GoToPersonal,
};
