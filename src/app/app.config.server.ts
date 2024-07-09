import { mergeApplicationConfig, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
