import { ComponentFixture, TestBed } from '@angular/core/testing';
import PlanetsComponent from './planets.component';
import { InMemoryPlanetGateway } from '../../core/adapters/planet/in-memory.gateway';
import { PlanetGateway } from '../../core/ports/planet.gateway';
import { StubPlanetBuilder } from '../../core/models/builders/planet.builder';
import { Planet } from '../../core/models/planet.model';

describe('PlanetsComponent', () => {
  let fixture: ComponentFixture<PlanetsComponent>;
  let planetGateway: InMemoryPlanetGateway;

  beforeEach(() => {
    planetGateway = new InMemoryPlanetGateway();
    TestBed.configureTestingModule({
      imports: [PlanetsComponent],
      providers: [{ provide: PlanetGateway, useValue: planetGateway }],
    });
  });

  it('should not have any planet', () => {
    setup([]);
    const paragraphElement = fixture.nativeElement.querySelector('p');
    expect(paragraphElement.textContent).toContain(
      'No planets found in this universe !'
    );
  });

  it('should have planets', () => {
    setup([
      new StubPlanetBuilder().withName('Alderaan').build(),
      new StubPlanetBuilder().withName('Yavin IV').build(),
    ]);
    const liElements = fixture.nativeElement.querySelectorAll('li');
    expect(liElements).toHaveLength(2);
  });

  function setup(planets: Planet[]): void {
    planetGateway.withPlanets(planets);
    fixture = TestBed.createComponent(PlanetsComponent);
    fixture.detectChanges();
  }
});
