import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';

export abstract class PlanetPort {
  abstract findAll(): Observable<Planet[]>;
}
