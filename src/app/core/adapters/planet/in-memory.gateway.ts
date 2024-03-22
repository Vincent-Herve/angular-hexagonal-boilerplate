import { Observable, of } from 'rxjs';
import { PlanetGateway } from '../../ports/planet.gateway';
import { Planet } from '../../models/planet.model';

export class InMemoryPlanetGateway extends PlanetGateway {
  planets: Planet[] = [];

  withPlanets(planets: Planet[]): InMemoryPlanetGateway {
    this.planets = planets;
    return this;
  }

  findAll(): Observable<Planet[]> {
    return of(this.planets);
  }
}
