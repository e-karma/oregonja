import Ember from 'ember';

export default Ember.Controller.extend({
  selectedRole: null,
  roles: ["Buyer", "Recommender", "Tester"],

  actions: {

    selectRole: function(role) {
      this.set('selectedRole', role);
    },

    createEmployee: function() {
      var that = this;

      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var email = this.get('email');
      var vendor = this.get('selectedVendor');
      var title = this.get('title');
      var role = this.get('selectedRole');
      if (role === null) {
        role = "Buyer";
      };
      var phone = this.get('phone');


      var newEmployee = this.store.createRecord('employee', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role,
        vendor: vendor,
        title: title,
        phone: phone
      });
      newEmployee.save().then(function(newEmployee){
        that.controllerFor('s.vendors.vendor.employees.employee').toggleProperty('isShowingEmployeeSuccess');
        that.transitionToRoute('s.vendors.vendor.employees.employee', newEmployee);
      });
    }
  }
});
