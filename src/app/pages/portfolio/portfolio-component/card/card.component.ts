import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardTitle:string = ''
  @Input() linkProject:string = ''
  @Input() previewProject = ''
  @Input() cardDescription = ''
  @Input() techItems: string[] | undefined

}
