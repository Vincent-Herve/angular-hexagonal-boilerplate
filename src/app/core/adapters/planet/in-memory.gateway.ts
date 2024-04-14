import { Observable, map, of } from 'rxjs';
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

  search(name: string): Observable<Planet[]> {
    return of(this.planets).pipe(
      map((planets) =>
        planets.filter((planet) =>
          planet.name.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  }
}
