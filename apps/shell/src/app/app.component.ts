import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetPreferences } from './state/preferences/preferences.actions';
import { ThemeMode } from './state/preferences/preferences.model';
import { PreferencesState } from './state/preferences/preferences.state';

@Component({
  selector: 'shell-root',
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly themeModes = ThemeMode;
  readonly themeMode$: Observable<ThemeMode | null>;

  constructor(private readonly store: Store) {
    this.themeMode$ = this.store.select(PreferencesState.themeMode);
  }

  setThemeMode(mode: ThemeMode): void {
    this.store.dispatch(new SetPreferences({ theme: { mode } }));
  }
}
