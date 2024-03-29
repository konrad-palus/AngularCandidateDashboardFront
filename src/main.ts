import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './app/auth-interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(appRoutes)),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(BrowserAnimationsModule),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
}).catch(err => console.error(err));