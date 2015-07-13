import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('employee');
  },

  actions: {
    deleteEmployee: function(employee) {
      employee.destroyRecord();
      return false;
    }
  }
});
