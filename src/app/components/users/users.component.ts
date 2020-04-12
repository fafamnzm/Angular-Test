import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        id: 1,
        username: 'faramarz',
        status: true
      },
      {
        id: 2,
        username: 'Jafar',
        status: false
      },
      {
        id: 3,
        username: 'Mamad',
        status: true
      },
    ]
  }

}
