import Ember from 'ember';

export default Ember.Controller.extend({
  selectedRole: null,
  roles: ["Buyer", "Recommender", "Tester"],

  actions: {
    // saves selected role to a property
    selectRole: function(role) {
      this.set('selectedRole', role);
    },

    // creates an employee
    createEmployee: function() {
      var that = this;

      // getting form input
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var email = this.get('email');
      var vendor = this.controllerFor('s.vendors.vendor').get('vendor');
      var title = this.get('title');
      var role = this.get('selectedRole');
      var phone = this.get('phone');

      // saving new employee to the store
      var newEmployee = this.store.createRecord('employee', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role,
        vendor: vendor,
        title: title,
        phone: phone
      });
      // saving to db and triggering flash message, then transition to employee route
      newEmployee.save().then(function(newEmployee){
        that.controllerFor('s.vendors.vendor.employees.employee').toggleProperty('isShowingEmployeeSuccess');
        that.transitionToRoute('s.vendors.vendor.employees.employee', newEmployee);
      });
    }
  }
});
