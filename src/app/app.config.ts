import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PlanetGateway } from './core/ports/planet.gateway';
import { InMemoryPlanetGateway } from './core/adapters/planet/in-memory.gateway';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: PlanetGateway, useValue: new InMemoryPlanetGateway() },
  ],
};
