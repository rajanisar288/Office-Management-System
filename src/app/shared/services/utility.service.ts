import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  isSidebarActive = new BehaviorSubject(false)
  constructor() { }
  breadcrumbs: string | undefined = 'raja nisar'

}
