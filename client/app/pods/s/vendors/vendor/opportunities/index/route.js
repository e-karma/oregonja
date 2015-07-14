import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('vendor', this.controllerFor('s.vendors.vendor').get('vendor.id'));
  },

  actions: {
    deleteOpportunity: function(opportunity) {
      opportunity.destroyRecord();
      return false;
    }
  }
});
