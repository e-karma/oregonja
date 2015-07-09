import Ember from 'ember';

export default Ember.Controller.extend({
  //pulled model in the route is set here to the vendors property
  vendors: null,

  actions: {
    createOpportunity: function() {
      var that = this;

      var firstName = this.get('title');
      var lastName = this.get('address');
      var email = this.get('description');
      var role = this.get('eventDate');
      var title = this.get('selectedVendor');

      var newOpportunity = this.store.createRecord('opportunity', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role,
        vendor: vendor
      })
      newOpportunity.save().then(function(newOpportunity){
        that.transitionToRoute('s.vendors.vendor.opportunities.opportunity', newOpportunity);
      });
    }
  }
});
