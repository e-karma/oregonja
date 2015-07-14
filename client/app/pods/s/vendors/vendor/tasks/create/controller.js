import Ember from 'ember';

export default Ember.Controller.extend({
  users: null,

  actions: {

    selectUser: function(user) {
      this.set('selectedUser', user);
    },

    selectEmployee: function(employee) {
      this.set('selectedEmployee', employee);
    },

    createTask: function() {
      var that = this;

      var user = this.get('selectedUser');
      var name = this.get('name');
      var description = this.get('description');
      var dueDate = this.get('dueDate');
      var employee = this.get('selectedEmployee');
      var vendor = this.get('selectedVendor');

      var newTask = this.store.createRecord('task', {
        name: name,
        description: description,
        dueDate: dueDate,
        employee: employee,
        assignedTo: user
      })
      newTask.save().then(function(newTask){
        that.controllerFor('s.vendors.vendor.tasks.task').toggleProperty('isShowingTaskSuccess');
        that.transitionToRoute('s.vendors.vendor.tasks.task', newTask);
      });
    }
  }
});
