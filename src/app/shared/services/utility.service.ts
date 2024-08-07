import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isSidebarActive = new BehaviorSubject(false);
  isLogin = new BehaviorSubject(false);
  profileViewer = new BehaviorSubject(false);

  breadcrumbs: any | undefined;
  constructor() {}
}
