import Ember from 'ember';

export default Ember.Route.extend({
  // since we have two models needed, let's retrieve one of them using beforeModel hook. Also we can retrieve needed info on most top route
  beforeModel: function() {
    var users = this.store.findAll('user');
    this.controllerFor('s.vendors.vendor.tasks.create').set('users', users);
  },

  model: function() {
    return this.store.find('vendor', this.controllerFor('s.vendors.vendor').get('vendor.id'));
  },

  actions: {

    willTransition: function() {
      this.controllerFor('s.vendors.vendor.tasks.create').set('name', null);
      this.controllerFor('s.vendors.vendor.tasks.create').set('selectedUser', null);
      this.controllerFor('s.vendors.vendor.tasks.create').set('description', null);
      this.controllerFor('s.vendors.vendor.tasks.create').set('selectedEmployee', null);
      this.controllerFor('s.vendors.vendor.tasks.create').set('dueDate', null);
      this.controllerFor('s.vendors.vendor.tasks.create').set('user', null);
      this.controllerFor('s.vendors.vendor.tasks.create').set('employee', null);
    }

  }

});
