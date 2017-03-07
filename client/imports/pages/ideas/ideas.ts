import { Component } from '@angular/core';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Idea } from '../../../../imports/models';
import template from './ideas.html';

@Component({
  template
})
export class IdeasPage {
  ideas: Observable<Idea[]>;

  constructor() {
    this.ideas = this.findIdeas();
  }

  private findIdeas(): Observable<Idea[]> {
    return Observable.of([
        {
        _id: '0',
        title: 'push a button and a gorille comes',
        createdAt: Moment().subtract(1, 'hours').toDate()
        },
      {
        _id: '1',
        title: 'a marketplace for renting babies',
        createdAt: Moment().subtract(2, 'hours').toDate()
      },
      {
        _id: '2',
        title: 'send insults to your friends',
        createdAt: Moment().subtract(1, 'days').toDate()
      },
      {
        _id: '3',
        title: 'an anthology about faith authored by a million people',
        createdAt: Moment().subtract(4, 'days').toDate()
      },
      {
        _id: '4',
        title: 'an app that challenges user to do kind things',
        createdAt: Moment().subtract(2, 'weeks').toDate()
        }
    ]);
  }
}
