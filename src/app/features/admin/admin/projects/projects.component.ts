import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
constructor(private _adminServiceService:AdminServiceService){}
obj = {
  project_detail: "dev.m.nisar191@gmail.com",
  project_name:"9546167raaji",
  user_id:localStorage.getItem('userId') 
}

ngOnInit(){
  this._adminServiceService.createProject(this.obj).subscribe((result: any)=>{
    console.log(result);
  })
}
}
