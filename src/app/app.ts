import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { NgClass } from '@angular/common';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, RouterLink, Navbar, NgClass, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('yra');
}
