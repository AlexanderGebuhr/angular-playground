import { Injectable } from '@angular/core';
import { IconService } from './services/icon.service';
import { ThemeService } from './services/theme.service';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(
    protected themeService: ThemeService,
    protected iconService: IconService,
  ) {}

  init(): void {
    this.themeService.init();
    this.iconService.register();
  }
}
