import { Component } from '@angular/core';
import { BgColorService } from '../../services/bg-color-service';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-programmes',
  styleUrl: './programmes.css',
  templateUrl: './programmes.html',
})

export class Programmes {
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
