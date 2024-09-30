import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynmapComponent} from "./components/dynmap/dynmap.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynmapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hmz-server';
}
