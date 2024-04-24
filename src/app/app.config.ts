import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter,Router,RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
