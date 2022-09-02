import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private request = new BehaviorSubject<string>('');
  private image = new BehaviorSubject<string>('');

  constructor() { }

  updateRequest(description: string): void {
    this.request.next(description);
  }
  
  getRequest(): string {
    return this.request.value;
  }
  
  updateImage(image: string): void {
    this.image.next(image);
  }
  
  getImage(): string {
    return this.image.value;
  }
}
