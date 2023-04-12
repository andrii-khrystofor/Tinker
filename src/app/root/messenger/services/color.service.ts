import { Injectable } from '@angular/core';

@Injectable()
export class ColorsService {
  private _currentIndex = 0;
  private _colorSuccess = '#8BC541';
  private _colorError = '#EE2300';
  private _colorNeutral = '#616161';

  private _colors: string[] = [
    'rgba(18, 139, 138, 0.3)',
    'rgba(230, 25, 75, 0.3)',
    'rgba(15, 104, 209, 0.3)',
    'rgba(99, 36, 138, 0.3)',
    'rgba(60, 180, 75, 0.3)',
    'rgba(243, 102, 174, 0.3)',
    'rgba(106, 174, 244, 0.3)',
    'rgba(255, 206, 52, 0.3)',
    'rgba(174, 105, 243, 0.3)',
    'rgba(208, 102, 26, 0.3)',
    'rgba(55, 245, 61, 0.3)',
    'rgba(245, 174, 211, 0.3)',
    'rgba(175, 210, 244, 0.3)',
    'rgba(139, 67, 13, 0.3)',
    'rgba(210, 245, 60, 0.3)',
    'rgba(170, 255, 195, 0.3)',
    'rgba(255, 143, 94, 0.3)',
    'rgba(128, 128, 128, 0.3)',
    'rgba(77, 106, 153, 0.3)',
    'rgba(137, 197, 196, 0.3)',
    'rgba(157, 192, 250, 0.3)',
    'rgba(97, 97, 97, 0.3)',
  ];
  private _namedColors: { [key: string]: string } = {};

  public getGraphColor(name: string): any {
    if (this._namedColors[name] == null) {
      this._namedColors[name] = this._colors[this._currentIndex++];

      if (this._currentIndex >= this._colors.length) {
        this._currentIndex = 0;
      }
    }

    return this._namedColors[name];
  }

  public get successColor(): string {
    return this._colorSuccess;
  }

  public get errorColor(): string {
    return this._colorError;
  }

  public get neutralColor(): string {
    return this._colorNeutral;
  }
}
