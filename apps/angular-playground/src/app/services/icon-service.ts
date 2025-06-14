import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconService {
  private readonly _svgs = ['add', 'angular_material', 'chevron_left', 'chevron_right', 'code', 'saved_search', 'school', 'whatshot'];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }

  register(): void {
    this._svgs.forEach(svg => {
      const svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/images/${svg}.svg`);
      this.iconRegistry.addSvgIcon(svg, svgUrl);
    });
  }
}
