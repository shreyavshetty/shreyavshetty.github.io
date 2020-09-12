import { Component, ViewEncapsulation, OnInit } from '@angular/core';
declare var AOS;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'shreyavshetty.github.io';
  ngOnInit() {
    AOS.init({
  // Global settings:
  easing: 'ease-out-back',
   duration: 800,
   delay: 300,
   once: true,
   disable: 'mobile'

});
  }
}
