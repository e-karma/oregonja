import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var vendor = this.store.find('vendor', params.vendor_id);
    this.controllerFor('s.vendors.vendor').set('vendor', vendor);

    return vendor;
  }
});
