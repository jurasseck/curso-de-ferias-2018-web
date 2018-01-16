import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {

  public isLoading = false;
  private isLoadingChange = new Subject<Boolean>();

  constructor() {
    this.isLoadingChange.next(false);
  }

  public callNextStatus(status:boolean){
    this.isLoading = status;
    this.isLoadingChange.next(this.isLoading);
  }

  getLoading(): Observable<any> {
    return this.isLoadingChange.asObservable();
  }
  
}
