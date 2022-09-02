import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  email = '';
  message = '';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  send(e: Event) {
    e.preventDefault()
    this._snackBar.open('Información Enviada!', 'X', {
      duration: 3000
    });
    this.email = '';
    this.message = '';

  }

}
