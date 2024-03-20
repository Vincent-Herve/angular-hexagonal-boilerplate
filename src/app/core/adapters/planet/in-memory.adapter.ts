import { Observable, of } from 'rxjs';
import { PlanetPort } from '../../ports/planet.port';
import { Planet } from '../../models/planet.model';

export class InMemoryPlanetAdapter extends PlanetPort {
  planets: Planet[] = [];

  withPlanets(planets: Planet[]): InMemoryPlanetAdapter {
    this.planets = planets;
    return this;
  }

  findAll(): Observable<Planet[]> {
    return of(this.planets);
  }
}
