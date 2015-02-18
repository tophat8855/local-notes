import Ember from 'ember';

export default Ember.Controller.extend({
  message: "Spill the beans, jimmy.",
  isValid: Ember.computed.notEmpty('newBody'),
  actions: {
    createNote: function() {
      var title = this.get('newTitle');
      var body = this.get('newBody');
      if(this.get('isValid')){
        var note = this.store.createRecord('note', {title: title, body: body,});
        note.save();
        this.set('newTitle', '');
        this.set('newBody', '');
        this.set('message', "Saved!");
      }
    },
    deleteNote: function(note) {
      var _this = this;
      this.store.find('note', note.id).then(function(note) {
        note.destroyRecord().then(function() {
          _this.set('message', 'DELETED');
        });
      });

    },
//     updateNote: function(note) {
//       var _this = this;
// //      debugger;
//       //var content = this.get(note);
//       this.store.find('note', note.id).then(function(note) {
//         //if(_this.get('isValid')) {
//           var updatedNote = _this.store.createRecord('note', {content: _this.get(note)});
//           updatedNote.save();
//           note.destroyRecord().then(function() {
//             _this.set('message', 'Updated');
//           });
//         //}
//       });
//     },
  }
});
