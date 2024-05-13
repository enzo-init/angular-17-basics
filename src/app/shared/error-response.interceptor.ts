import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

//error handler for http petitions in app

export const ErrorResponseInterceptor: HttpInterceptorFn =  (req, next) => 
    next(req).pipe(catchError(handleErrorResponse))

function handleErrorResponse(error: HttpErrorResponse) {
    const errorResponse = `Error ${error.status}, message: ${error.message}`
    return throwError(()=> errorResponse);
}