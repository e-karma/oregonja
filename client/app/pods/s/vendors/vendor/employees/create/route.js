import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
  //

  model: function() {
    // vendors are pulled from the store and stored in vendors variable
    var vendors = this.store.findAll('vendor');
    // this gets controller instance and sets vendors array to the controller's vendor property
    this.controllerFor('s.vendors.vendor.employees.create').set('vendors', vendors);
    return vendors;
  },

  actions: {
    // selected vendor from the list is stored in the selectedVendor property
    selectVendor: function(vendor) {
      this.set('selectedVendor', vendor);
    }

  }
    // model() {
    //   var vendors = this.store.findAll('vendor');
    //   this.controllerFor('s.events.create').set('vendors', vendors);
    //   return vendors;
    // },
    //
    // actions: {
    //   selectVendor: function(vendor){
    //     this.set('selectedVendor', vendor);
    //     // this.event.set('event', vendor);
    //   },
    //
    //   createEvent(model) {
    //       // var userId = this.session.get('user.id');
    //       var vendor = this.session.get('vendor');
    //       var event = this.session.get('event', vendor).then(result => {
    //           model.set('event', result);
    //           return model.save();
    //       }).then(event => this.transitionTo('s.events.event', event));
    //   }
    // }
});
