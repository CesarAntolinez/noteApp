import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  data = {};
  constructor(public notesService: NotesService) {
    this.data = notesService.list();
  }

  ngOnInit() {
  }

}
