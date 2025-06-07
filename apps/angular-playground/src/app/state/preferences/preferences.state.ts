import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetPreferences } from './preferences.actions';
import { PREFERENCES, Preferences, ThemeMode, ThemePreferences, defaultPreferences } from './preferences.model';

@State<Preferences>({
  name: PREFERENCES,
  defaults: defaultPreferences,
})
@Injectable()
export class PreferencesState {
  @Selector()
  static theme(state: Preferences): ThemePreferences {
    return state?.theme;
  }

  @Selector()
  static themeMode(state: Preferences): ThemeMode | null {
    return state?.theme?.mode ?? null;
  }

  @Action(SetPreferences)
  setPreferences(ctx: StateContext<Preferences>, { payload }: SetPreferences) {
    ctx.setState(payload);
  }
}
