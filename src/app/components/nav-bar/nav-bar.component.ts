import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {faPowerOff, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;


  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
