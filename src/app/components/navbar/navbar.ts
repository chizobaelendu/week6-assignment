import { Component } from '@angular/core';
import { NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BgColorService } from '../../services/bg-color-service';

@Component({
  imports: [NgStyle, NgClass, TitleCasePipe, RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
  standalone: true
})

export class Navbar {
  constructor(private bgColorService: BgColorService) {}

  navbarAboutText:string = "about";
  navbarprogrammesText:string = "programmes";
  navbarresourcesText:string = "resources";
  navbareventsText:string = "events";
  navbarMediaText:string = "media";
  navbarOpportunitiesText:string = "opportunities";
  navbarCommunityText:string = "community";

  onInputChange(event: any): void {
    //NOTE: Parameter "event" IMPLICITLY has an "any" data-type, therefore MUST be declared as such.
    //NOTE: BY default, typescript function returns "void" data-type and it is NOT specified when calling such function.
    //The value of an input can be accessed through "event.target.value" object (used in event-listener function), or through "DOMElement.property.value" object (used in DOM). 
    event.preventDefault();
    this.bgColorService.selectedColor$.next(event.target.value);
  };
};
