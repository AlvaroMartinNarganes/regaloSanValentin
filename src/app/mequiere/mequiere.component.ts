import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-mequiere',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mequiere.component.html',
  styles: ``
})
export class MequiereComponent {
  router=inject(Router)
  sliceForm=new FormControl(1)

}
