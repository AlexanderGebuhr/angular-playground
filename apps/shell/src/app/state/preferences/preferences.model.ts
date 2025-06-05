import { StateToken } from '@ngxs/store';

export enum ThemeMode {
  Light = 'light-mode',
  Dark = 'dark-mode',
}

export interface ThemePreferences {
  mode: ThemeMode | null;
}

export interface Preferences {
  theme: ThemePreferences;
}

export const defaultPreferences: Preferences = {
  theme: {
    mode: null,
  },
};

export const PREFERENCES = new StateToken<Preferences>('preferences');
