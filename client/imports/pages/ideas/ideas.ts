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
        title: 'Push a button and a gorilla comes',
        createdAt: Moment().subtract(1, 'hours').toDate()
        },
      {
        _id: '1',
        title: 'A marketplace for renting babies',
        createdAt: Moment().subtract(2, 'hours').toDate()
      },
      {
        _id: '2',
        title: 'Aend insults to your friends',
        createdAt: Moment().subtract(1, 'days').toDate()
      },
      {
        _id: '3',
        title: 'An anthology about faith authored by a million people',
        createdAt: Moment().subtract(4, 'days').toDate()
      },
      {
        _id: '4',
        title: 'An app that challenges user to do kind things',
        createdAt: Moment().subtract(2, 'weeks').toDate()
      },
      {
      _id: '5',
      title: 'A story about a boy who brings his pet rocks to life',
      createdAt: Moment().subtract(1, 'hours').toDate()
      },
    {
      _id: '6',
      title: '1 billion people singing kumbaya on new years eve 2018',
      createdAt: Moment().subtract(2, 'hours').toDate()
    },
    {
      _id: '7',
      title: 'A game where you give a kid neopet and then kidnap it to help kid learn',
      createdAt: Moment().subtract(1, 'days').toDate()
    },
    {
      _id: '8',
      title: 'Tinder consulting',
      createdAt: Moment().subtract(4, 'days').toDate()
    },
    {
      _id: '9',
      title: 'An app that challenges user to do kind things',
      createdAt: Moment().subtract(2, 'weeks').toDate()
      }
    ]);
  }
}
