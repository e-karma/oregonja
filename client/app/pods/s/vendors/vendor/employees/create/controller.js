import Ember from 'ember';

export default Ember.Controller.extend({
  //pulled model in the route is set here to the vendors property
  vendors: null,

  actions: {
    createEmployee: function() {
      var that = this;

      var firstName = this.get('title');
      var lastName = this.get('address');
      var email = this.get('description');
      var vendor = this.get('selectedVendor');

      // var role = this.get('eventDate');
      // var title = this.get('selectedVendor');

      var newEmployee = this.store.createRecord('employee', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        // role: role,
        vendor: vendor
      });
      newEmployee.save().then(function(newEmployee){
        that.transitionToRoute('s.vendors.vendor.employees.employee', newEmployee);
      });
    }
  }
});
