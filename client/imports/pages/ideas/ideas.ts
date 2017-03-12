import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Ideas} from '../../../../imports/collections';
import { Idea} from '../../../../imports/models';
import template from './ideas.html';

@Component({
  template
})
export class IdeasPage implements OnInit {
  ideas;

  constructor() {
  }

  ngOnInit() {
    this.ideas = Ideas
      .find({})
      .zone();
  }

  removeIdea(idea: Idea): void {
     Ideas.remove({_id: idea._id}).subscribe(() => {});
   }
 };
