import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat-general/cat.service';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  imagesUrls = [
    "/assets/cats-photos/welcome_photos/IMG_0003_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_0006_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_0051_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_0070_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_0136_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_0684_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1561_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1620_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1676_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1679_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1687_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1819_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1851_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1856_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1864_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1879_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1891_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1931_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1934_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1944_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1972_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_1979.jpg",
"/assets/cats-photos/welcome_photos/IMG_2039.jpg",
"/assets/cats-photos/welcome_photos/IMG_2048_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2049.jpg",
"/assets/cats-photos/welcome_photos/IMG_2127_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2146_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2186_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2277_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2513_.jpg",
"/assets/cats-photos/welcome_photos/IMG_2550_1024.jpg",
"/assets/cats-photos/welcome_photos/IMG_2580_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2623_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2684_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_2969_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_3141_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_3287.JPG",
"/assets/cats-photos/welcome_photos/IMG_3628_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_6435_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_6817_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_6837_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_7021_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_7080_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_8802_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_8832_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_8962_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_9031_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_9309_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_9511_small.jpg",
"/assets/cats-photos/welcome_photos/IMG_9613_small.jpg"
  ];

  photoColumns = 5;
  photoColumnWidth = 250;
  constructor(private catService: CatService) {}

  ngOnInit() {
    this.shuffle(this.imagesUrls);
    console.log(window.innerWidth, this.photoColumns);
    this.photoColumnWidth = Math.floor((window.innerWidth-5) / this.photoColumns) - 7;
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  public get images(): IMasonryGalleryImage[] {
    return this.imagesUrls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });

  }
}
