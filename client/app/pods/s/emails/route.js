import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var userId = this.get('session.secure.user.id');
    var user = this.store.find('user', userId);
    console.log(user);
    return user;
  },

  actions: {
    // provides selected user email to the create email controller to be accessed while email sending process
    selectUserEmail: function(userEmail) {
      alert(userEmail);
      this.controllerFor('s.emails.create').set('selectedUserEmail', userEmail);
    }
  }
});
