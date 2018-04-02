import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header.component';

const kokan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

@Component({
  selector: 'app-kokan',
  templateUrl: 'kokan.component.html'
})

export class KokanComponent {
  slideIndex = 1;
  kokan = kokan;
  kokanRows = Array.from(Array(Math.ceil(kokan.length / 2)).keys());
  kokanModal (img: string) {
    (<HTMLImageElement>document.querySelector('#kokanImg')).src = 'assets/kokan/' + img + '.jpg';
    document.getElementById('modalKokan').style.display = 'block';
  }
  plusDivs (n: number) {
    this.showDivs(this.slideIndex += n);
  }
  showDivs (n: number) {
    let x = document.querySelectorAll('.kokanSlide');
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
      x[i].className = 'w3-row-padding kokanSlide w3-hide';
    }
    x[this.slideIndex - 1].className = 'w3-row-padding kokanSlide w3-show';
  }
}
