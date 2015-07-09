import Ember from 'ember';

export default Ember.Controller.extend({
  //pulled model in the route is set here to the vendors property
  vendors: null,

  actions: {
    createEvent: function() {
      var that = this;

      var title = this.get('title');
      var address = this.get('address');
      var description = this.get('description');
      var date = this.get('eventDate');
      var vendor = this.get('selectedVendor');

      var newEvent = this.store.createRecord('event', {
        title: title,
        address: address,
        description: description,
        eventDate: date,
        vendor: vendor
      })
      newEvent.save().then(function(newEvent){
        that.transitionToRoute('s.events.event', newEvent);
      });
    }
  }
});
