import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
//import { Service } from '@angular/core';

@Injectable(
    {
        providedIn: "root"
    }
)

export class BgColorService {
    selectedColor$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    //selectedColor$: Subject<string> = new Subject<string>();
};

