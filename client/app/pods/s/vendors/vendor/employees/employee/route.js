import Ember from 'ember';

export default Ember.Route.extend({
  // retrieving individual employee by id
  model: function(params) {
    this.store.find('employee', params.employee_id)
  },

  actions: {
    // clearing flash message if transitioning from the route
    willTransition: function() {
      this.controllerFor('s.vendors.vendor.employees.employee').set('isShowingEmployeeSuccess', false);
    }

  }
});
