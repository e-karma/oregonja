import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('vendor', params.vendor_id);
  }
});
