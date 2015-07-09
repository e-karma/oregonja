import Ember from 'ember';

export default Ember.Controller.extend({
  //pulled model in the route is set here to the vendors property
  vendors: null,

  actions: {
    createTask: function() {
      var that = this;

      var firstName = this.get('title');
      var lastName = this.get('address');
      var email = this.get('description');
      var role = this.get('eventDate');
      var title = this.get('selectedVendor');

      var newTask = this.store.createRecord('task', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role,
        vendor: vendor
      })
      newTask.save().then(function(newTask){
        that.transitionToRoute('s.vendors.vendor.tasks.task', newTask);
      });
    }
  }
});
