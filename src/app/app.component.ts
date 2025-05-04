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
import { SetPreferences } from './state/preferences/preferences.actions';
import { ThemeMode } from './state/preferences/preferences.model';
import { PreferencesState } from './state/preferences/preferences.state';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
})
export class AppComponent {
  readonly themeModes = ThemeMode;
  readonly themeMode$ = this.store.select(PreferencesState.themeMode);

  constructor(private readonly store: Store) {}

  setThemeMode(mode: ThemeMode): void {
    this.store.dispatch(new SetPreferences({ theme: { mode } }));
  }
}
