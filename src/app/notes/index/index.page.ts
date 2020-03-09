import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.service';
import {MenuController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  list = [
    {
      id: 6,
      user_id: 2,
      note: 'Esta es una nota',
      created_at: '2020-03-07T18:36:41.000000Z',
      updated_at: '2020-03-07T18:36:41.000000Z'
    },
    {
      id: 7,
      user_id: 2,
      note: 'Esta es una nota',
      created_at: '2020-03-07T21:46:21.000000Z',
      updated_at: '2020-03-07T21:46:21.000000Z'
    }
  ];
  constructor(public notesService: NotesService, public menuController: MenuController) {
    // this.list = 0;
  }
  ionViewWillEnter() {
    this.menuController.enable(true);
  }
  ngOnInit() {
  }
}
