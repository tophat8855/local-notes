import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNote: function() {
      var content = this.get('newNote');
      var note = this.store.createRecord('note', {content: content,});
      note.save();
    }
  }
});
