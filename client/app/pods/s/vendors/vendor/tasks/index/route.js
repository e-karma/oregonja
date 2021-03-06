import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('vendor', this.controllerFor('s.vendors.vendor').get('vendor.id'));
  },

  actions: {
    deleteTask: function(task) {
      task.destroyRecord();
      return false;
    }
  }

});
