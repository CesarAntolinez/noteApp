import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.service';
import {MenuController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {StorageService} from '../../services/storage.service';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public authUser: any;
  list: Array<any>[];
  constructor(public notesService: NotesService, public menuController: MenuController, private toastService: ToastService) { }
  ionViewWillEnter() {
    this.menuController.enable(true);
  }
  ngOnInit() {
    this.notesService.list().subscribe(response => {
      this.list = response;
    }, error => {
      this.toastService.presentToast(
          'Error.'
      );
    });
  }
}
