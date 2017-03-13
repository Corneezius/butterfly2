import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Ideas} from '../../../../imports/collections';
import { Idea} from '../../../../imports/models';
import template from './ideas.html';
// import { NewIdeaComponent} from './new-idea';

@Component({
  template
})
export class IdeasPage implements OnInit {
  ideas;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.ideas = Ideas
      .find({})
      .zone();
  }

// addIdea(): void {
//   const modal = this.modalCtrl.create(NewIdeaComponent);
//   modal.present();
// }

  removeIdea(idea: Idea): void {
     Ideas.remove({_id: idea._id}).subscribe(() => {});
   }
 };
