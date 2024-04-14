import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import PlanetListComponent from './planet-list.component';
import { InMemoryPlanetGateway } from '../../core/adapters/planet/in-memory.gateway';
import { PlanetGateway } from '../../core/ports/planet.gateway';
import { StubPlanetBuilder } from '../../core/models/builders/planet.builder';
import { Planet } from '../../core/models/planet.model';
import { ReactiveFormsModule } from '@angular/forms';

describe('PlanetListComponent', () => {
  let fixture: ComponentFixture<PlanetListComponent>;
  let planetGateway: InMemoryPlanetGateway;

  beforeEach(() => {
    planetGateway = new InMemoryPlanetGateway();
    TestBed.configureTestingModule({
      imports: [PlanetListComponent, ReactiveFormsModule],
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

  it('should search planets with name filter', fakeAsync(() => {
    setup([
      new StubPlanetBuilder().withName('Mustafar').build(),
      new StubPlanetBuilder().withName('Muunilinst').build(),
    ]);
    const inputEl = fixture.nativeElement.querySelector('input');
    let liElements: HTMLLIElement[];

    setInputElement('mu', inputEl);
    liElements = fixture.nativeElement.querySelectorAll('li');
    expect(liElements).toHaveLength(2);

    setInputElement('mus', inputEl);
    liElements = fixture.nativeElement.querySelectorAll('li');
    expect(liElements).toHaveLength(1);
  }));

  function setup(planets: Planet[]): void {
    planetGateway.withPlanets(planets);
    fixture = TestBed.createComponent(PlanetListComponent);
    fixture.detectChanges();
  }

  function setInputElement(
    inputValue: string,
    inputEl: HTMLInputElement
  ): void {
    inputEl.value = inputValue;
    inputEl.dispatchEvent(new Event('input'));
    tick(300);
    fixture.detectChanges();
  }
});
