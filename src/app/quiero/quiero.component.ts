import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiero',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './quiero.component.html',
  styles: ``
})
export class QuieroComponent {
router=inject(Router)
}
