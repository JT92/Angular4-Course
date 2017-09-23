import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title')title : string;
  isExpanded: boolean;

  toggle(){
    console.log(this.isExpanded);
    this.isExpanded = !this.isExpanded;
  }
}
