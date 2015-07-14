import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('task');
  },

  actions: {
    deleteTask: function(task) {
      task.destroyRecord();
      return false;
    }
  }

});
