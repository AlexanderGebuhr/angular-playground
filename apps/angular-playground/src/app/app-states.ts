import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { NgxsModuleOptions } from '@ngxs/store';
import { environment } from '../environments/environment';
import { PreferencesState } from './state/preferences/preferences.state';

export const appStates = [PreferencesState];

export const appStateOptions: NgxsModuleOptions = {
  developmentMode: !environment.production,
};

export const appStateFeatures = [
  withNgxsStoragePlugin({
    keys: [PreferencesState],
  }),
];
