import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Output() newLocation = new EventEmitter<string>();
location: string = "";


onSubmit(){
  this.newLocation.emit(this.location);
};
}
