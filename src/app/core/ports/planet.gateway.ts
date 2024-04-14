import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';

export abstract class PlanetGateway {
  abstract findAll(): Observable<Planet[]>;
  abstract search(name: string): Observable<Planet[]>;
}
