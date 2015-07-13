import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    this.store.find('employee', params.employee_id)
  },

  actions: {

    willTransition: function() {
      this.controllerFor('s.vendors.vendor.employees.employee').set('isShowingEmployeeSuccess', false);
    }

  }
});
