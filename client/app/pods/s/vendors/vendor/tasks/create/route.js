import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var users = this.store.findAll('user');
    this.controllerFor('s.vendors.vendor.tasks.create').set('users', users);
  },

  model: function() {
    return this.store.findAll('employee');
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
