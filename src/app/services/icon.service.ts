import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IconService {
  private readonly _svgs: { [svg: string ]: string } = {
    angular_material: 'assets/images/angular_material.svg',
  };

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  register(): void {
    Object.keys(this._svgs).forEach(svg => {
      const svgPath = this._svgs[svg];
      const svgUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(svgPath);
      this.iconRegistry.addSvgIcon(svg, svgUrl);
    });
  }
}
