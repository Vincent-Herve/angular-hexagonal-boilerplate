import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Home</h1>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
