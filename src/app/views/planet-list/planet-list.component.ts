import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlanetGateway } from '../../core/ports/planet.gateway';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, merge, switchMap } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h1>Star Wars Planets</h1>
    @if (planets()?.length) {
    <input type="text" name="name" [formControl]="name" />
    <ul>
      @for (planet of planets(); track planet.name) {
      <li>{{ planet.name }}</li>
      }
    </ul>
    } @else {
    <p>No planets found in this universe !</p>
    }
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PlanetListComponent {
  private planetGateway = inject(PlanetGateway);
  name = new FormControl('');
  planets = toSignal(
    merge(
      this.planetGateway.findAll(),
      this.name.valueChanges.pipe(
        debounceTime(300),
        switchMap((name) => this.planetGateway.search(name || ''))
      )
    )
  );
}
