import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('opportunity');
  },

  actions: {
    deleteOpportunity: function(opportunity) {
      opportunity.destroyRecord();
      return false;
    }
  }
});
