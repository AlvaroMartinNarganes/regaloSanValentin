import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose',
  standalone: true,
  imports: [],
  templateUrl: './choose.component.html',
  styles: ``
})
export class ChooseComponent {
router=inject(Router)

  nop(){
  alert('jaja no')
  }
}
