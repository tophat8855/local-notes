import Ember from 'ember';

export default Ember.Controller.extend({
  message: "Spill the beans, jimmy.",
  actions: {
    createNote: function() {
      var content = this.get('newNote');
      var note = this.store.createRecord('note', {content: content,});
      note.save();
      this.set('newNote', '');
      this.set('message', "Saved!");
    },
    deleteNote: function(note) {
      var _this = this;
      this.store.find('note', note.id).then(function(note) {
        note.destroyRecord().then(function() {
          _this.set('message', 'DELETED');
        });
      });

    },
  }
});
