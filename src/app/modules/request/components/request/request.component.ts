import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  messageDescription = ''
  image = ''

  name = '';
  document = null;
  email = '';
  creditCard = null;

  constructor(private router: Router, private _snackBar: MatSnackBar, private requestService: RequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.messageDescription = this.requestService.getRequest();
    this.image = this.requestService.getImage();
  }

  pay(e: Event) {
    e.preventDefault();
    this._snackBar.open('Pago Realizado', 'X', {
      duration: 3000
    });
    this.router.navigate(['/purchases']);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '550px'
    });
  }

}

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-dialog',
  styleUrls: ['dialog.component.scss'],
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  @Input() serviceInfo = '';
  message = '';
  messages = [
    {
        user: 'Asesor',
        message: 'Hola! es un placer ayudarte, ¿qué necesitas?'
    }
  ]

  addMessage() {
    	this.messages.push({
        user: 'Usuario',
        message: this.message
      });
      this.message = '';
  }

  identify(index: any, item: any){
    return `${index}-${item.user}`; 
 }
}