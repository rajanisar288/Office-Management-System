import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  
  isSidebarActive = new Subject<boolean>()
  constructor() { }
  breadcrumbs: string | undefined = 'raja nisar'

}
