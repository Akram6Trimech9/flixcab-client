import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
   url ='http://localhost:3000/api'
  constructor() {}
   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: this.url  + request.url
    });
    return next.handle(request);
  }
}
