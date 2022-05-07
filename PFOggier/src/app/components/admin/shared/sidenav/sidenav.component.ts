import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  esAdministrador(): boolean {
    if (localStorage.getItem('session') === 'admin'){
      return true;
    }else{
      return false;
    }
  }

}
