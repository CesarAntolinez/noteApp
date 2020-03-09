import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.service';
import {ToastService} from '../../services/toast.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  data = {};
  constructor(public notesService: NotesService, public menuController: MenuController) {
    this.data = notesService.list();
  }
  ionViewWillEnter() {
    this.menuController.enable(true);
  }

  ngOnInit() {
  }

}
