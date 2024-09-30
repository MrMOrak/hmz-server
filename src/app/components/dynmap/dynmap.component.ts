import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeHtmlPipe} from "../../pipes/SafeHtml";

@Component({
  selector: 'app-dynmap',
  templateUrl: './dynmap.component.html',
  imports: [
    SafeHtmlPipe
  ],
  standalone: true
})
export class DynmapComponent {
  dynmapContent!: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    const dynmapUrl = 'http://hmz-craft.de:8123/';
    this.dynmapContent = `<iframe src="${dynmapUrl}" width="100%" height="100%"></iframe>`;
  }
}
