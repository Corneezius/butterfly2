import { Meteor } from 'meteor/meteor';
import { Ideas } from '../imports/collections';



Meteor.methods({
addIdea(): void {
    if (this.addForm.valid) {
      Ideas.insert(this.addForm.value);

      this.addForm.reset();
    }
  }
});
