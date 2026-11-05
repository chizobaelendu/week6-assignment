import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BgColorService } from '../../services/bg-color-service';

@Component({
  imports: [RouterLink, NgClass, NgStyle],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  bgColor:string = "";

  constructor(private bgColorService: BgColorService) {};

  getBgColor() {
    this.bgColorService.selectedColor$.subscribe({
      next: (selectedColor)=> {
        this.bgColor = selectedColor;
      },
      error: (err)=> {
        console.log(err);
      },
      complete: ()=> {
        console.log("Subscription process completed");
      }
    });
    return {'background-color': this.bgColor};
  };
};
