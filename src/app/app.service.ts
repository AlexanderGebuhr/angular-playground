import { Injectable } from '@angular/core';
import { IconService } from './services/icon.service';

@Injectable()
export class AppService {
  constructor(protected iconService: IconService) {}

  init(): void {
    this.iconService.register();
  }
}

export const appInitializer = (appService: AppService): () => void => () => appService.init();
