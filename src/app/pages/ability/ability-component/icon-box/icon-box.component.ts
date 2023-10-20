import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.css']
})
export class IconBoxComponent {
  @Input()
  estilo:string = '';
  @Input()
  urlLogo:string = '';


}
