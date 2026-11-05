import { Component } from '@angular/core';
import { BgColorService } from '../../services/bg-color-service';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-resources',
  styleUrl: './resources.css',
  templateUrl: './resources.html',
})

export class Resources {
  bgColor: string = "";

  constructor(private bgColorService: BgColorService) { };

  getBgColor() {
    this.bgColorService.selectedColor$.subscribe({
      next: (selectedColor) => {
        this.bgColor = selectedColor;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Subscription process completed");
      }
    });
    return { 'background-color': this.bgColor };
  };
};
