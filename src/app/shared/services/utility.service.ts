import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isSidebarActive = new BehaviorSubject(false);
  isLogin = new BehaviorSubject(false);
  profileViewer = new BehaviorSubject(false);
  private confirmationSource = new Subject<{ msg: string; isView: boolean }>();
  confirmation$ = this.confirmationSource.asObservable();
  private confirmAction: Subject<boolean> = new Subject<boolean>();
  breadcrumbs: any | undefined;
  constructor() {}
  openConfirm(msg: string) {
    this.confirmationSource.next({ msg, isView: true });
  }

  closeConfirm() {
    this.confirmationSource.next({ msg: '', isView: false });
  }
  onConfirm(): Subject<boolean> {
    return this.confirmAction;
  }
  confirmDelete() {
    this.confirmAction.next(true);
    this.closeConfirm();
  }

  cancelDelete() {
    this.confirmAction.next(false);
    this.closeConfirm();
  }
}
