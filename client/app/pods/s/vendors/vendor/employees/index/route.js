import Ember from 'ember';

export default Ember.Route.extend({
  // getting vendor info with vendor id that is used on most top vendor route
  model: function() {
    return this.store.find('vendor', this.controllerFor('s.vendors.vendor').get('vendor.id'));
  },

  actions: {
    deleteEmployee: function(employee) {
      employee.destroyRecord();
      return false;
    }
  }
});
