import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
  static handlerError(error: Response | any){
    console.log(error)
    let errorMessage: string;
    if(error instanceof Response) {
      console.log(error)
      errorMessage = `Error ${error.status} ao acessar a url ${error.url} - ${error.statusText}`
    } else {
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}