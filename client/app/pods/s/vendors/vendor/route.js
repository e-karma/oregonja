import Ember from 'ember';

export default Ember.Route.extend({
  // retrieveing vendor info from the store and assigning vendor data to global property on vendor controller to be accessed by other nested controllers (employees/opportunities)
  model: function(params) {
    var vendor = this.store.find('vendor', params.vendor_id);
    this.controllerFor('s.vendors.vendor').set('vendor', vendor);

    return vendor;
  }
});
