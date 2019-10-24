import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatService } from '../cat-general/cat.service';
import { Cat } from '../cat-general/cat';

@Component({
  selector: 'app-cat-preview',
  templateUrl: './cat-preview.component.html',
  styleUrls: ['./cat-preview.component.scss']
})
export class CatPreviewComponent implements OnInit {
  @Input() id: number;
  @Output()emitPass: EventEmitter<number> = new EventEmitter<number>();
  cat: Cat = null;

  constructor(private catService: CatService) { }

  ngOnInit() {
      this.catService.getCat(this.id)
        .subscribe({
          next: cat => this.cat = cat
        })
    
  }

  close()
  {
    this.emitPass.emit(this.id);
  }
}
