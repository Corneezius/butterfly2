import { Meteor } from 'meteor/meteor';
import * as Moment from 'moment';
import { Ideas } from '../imports/collections';


Meteor.startup(() => {
  if (Ideas.find({}).cursor.count() === 0) {
    let ideaId;

    ideaId = Ideas.collection.insert({
      title: 'Push a button for tap dancing',
      createdAt: Moment().subtract(1, 'hours').toDate()
    });

    ideaId = Ideas.collection.insert({
      title: 'A marketplace for renting babies',
      createdAt: Moment().subtract(1, 'hours').toDate()
    });

    ideaId = Ideas.collection.insert({
      title: 'Send insults to your friends',
      createdAt: Moment().subtract(1, 'hours').toDate()
    });


    ideaId = Ideas.collection.insert({
      title: 'An anthology about faith',
      createdAt: Moment().subtract(1, 'hours').toDate()
    });

    ideaId = Ideas.collection.insert({
      title: 'A boy who brings story to life',
      createdAt: Moment().subtract(1, 'hours').toDate()
    });


  }
});
