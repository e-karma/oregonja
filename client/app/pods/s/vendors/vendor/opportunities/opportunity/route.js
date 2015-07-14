import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    this.store.find('opportunity', params.opportunity_id)
  },

  actions: {

    willTransition: function() {
      this.controllerFor('s.vendors.vendor.opportunities.opportunity').set('isShowingOpportunitySuccess', false);
    }

  }
});
