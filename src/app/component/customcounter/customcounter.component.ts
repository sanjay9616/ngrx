import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss']
})
export class CustomcounterComponent {

  customIncrementControl: FormControl = new FormControl();

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit() { }

  customIncrement() {
    this.store.dispatch(customIncrement({value: Number(this.customIncrementControl?.value)}));
  }

}
