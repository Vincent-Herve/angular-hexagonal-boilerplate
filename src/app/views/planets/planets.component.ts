import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlanetGateway } from '../../core/ports/planet.gateway';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-planet',
  standalone: true,
  template: `
    <h1>Star Wars Planets</h1>
    @if (planets().length) {
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
export default class PlanetsComponent {
  private planetGateway = inject(PlanetGateway);
  planets = toSignal(this.planetGateway.findAll(), { initialValue: [] });
}
