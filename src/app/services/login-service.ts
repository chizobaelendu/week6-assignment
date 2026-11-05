import { Service } from '@angular/core';
import { map, Observable } from 'rxjs';

@Service()

export class LoginService {
    databaseEmail:string = "chi@gmail.com"; 
    databasePassword:string = "chichichi";

    //NOTE: Unlike variable, property MUST be initialized upon creation.
    //OR (|) operator specifies that values of EITHER datatype can be passed to the function when called.
    logUserIn(inputtedEmail:string, inputtedPassword:string) {

        /* Promise based
        const promise = new Promise((resolve, reject)=> {
            if (inputtedEmail === this.databaseEmail && inputtedPassword === this.databasePassword) {
                resolve("Successfully logged in !!!");
            } else {
                reject("Incorrect email or password");
            };
        });

        promise
        .then((resolveMsg)=> {
            console.log(resolveMsg);
        })
        .catch((rejectMsg)=> {
            console.log(rejectMsg);
        })
        .finally(()=> {
            console.log("Promise executed");
        });
        */

        //Observable based
        const observable = new Observable((resolve)=> {
            resolve.next(inputtedEmail);
            resolve.next(inputtedPassword);
        })
        .pipe(
            //RxJS map() operator TRANSFORMS each value in an Observable (data stream) by passing them through its projection function (callback).
            //Unlike JavaScript's Array.prototype.map() method that transforms elements in a STATIC array, it transforms values OVER TIME in a data stream.
            map((loginCredential:any)=> loginCredential.toUpperCase())
        )
        .subscribe({
            next: (loginCredential)=> {
                console.log(loginCredential);
            },
            error: (err)=> {
                console.log(err);
            },
            complete: ()=> {
                console.log("Observable completed");
            }
        });
    };
};
