import { Planet } from '../planet.model';

export class PlanetBuilder {
  protected name!: string;
  protected rotation_period!: string;
  protected orbital_period!: string;
  protected diameter!: string;
  protected climate!: string;
  protected gravity!: string;
  protected terrain!: string;
  protected surface_water!: string;
  protected population!: string;
  protected residents!: string[];
  protected films!: string[];
  protected created!: string;
  protected edited!: string;
  protected url!: string;

  withName(value: string): PlanetBuilder {
    this.name = value;
    return this;
  }

  build(): Planet {
    return {
      name: this.name,
      rotation_period: this.rotation_period,
      orbital_period: this.orbital_period,
      diameter: this.diameter,
      climate: this.climate,
      gravity: this.gravity,
      terrain: this.terrain,
      surface_water: this.surface_water,
      population: this.population,
      residents: this.residents,
      films: this.films,
      created: this.created,
      edited: this.edited,
      url: this.url,
    };
  }
}

export class StubPlanetBuilder extends PlanetBuilder {
  protected override name = 'Tatooine';
  protected override rotation_period = '23';
  protected override orbital_period = '304';
  protected override diameter = '10465';
  protected override climate = 'arid';
  protected override gravity = '1 standard';
  protected override terrain = 'desert';
  protected override surface_water = '1';
  protected override population = '200000';
  protected override residents = [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/4/',
    'https://swapi.dev/api/people/6/',
    'https://swapi.dev/api/people/7/',
    'https://swapi.dev/api/people/8/',
    'https://swapi.dev/api/people/9/',
    'https://swapi.dev/api/people/11/',
    'https://swapi.dev/api/people/43/',
    'https://swapi.dev/api/people/62/',
  ];
  protected override films = [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ];
  protected override created = '2014-12-09T13:50:49.641000Z';
  protected override edited = '2014-12-20T20:58:18.411000Z';
  protected override url = 'https://swapi.dev/api/planets/1/';
}
