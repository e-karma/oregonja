import Ember from 'ember';

export default Ember.Controller.extend({
  stages: ["First Stage", "Second Stage", "Third Stage"],

  actions: {

    selectStage: function(stage) {
      this.set('selectedStage', stage);
    },

    createOpportunity: function() {
      var that = this;

      var title = this.get('title');
      var estClose = this.get('estClose');
      var estAmt = this.get('estAmt');
      var stage = this.get('selectedStage');
      if (stage === null) {
        stage = "First Stage";
      };
      var vendor = this.get('selectedVendor');

      var newOpportunity = this.store.createRecord('opportunity', {
        title: title,
        estClose: estClose,
        estAmt: estAmt,
        stage: stage,
        vendor: vendor
      })
      newOpportunity.save().then(function(newOpportunity){
        that.controllerFor('s.vendors.vendor.opportunities.opportunity').toggleProperty('isShowingOpportunitySuccess');
        that.transitionToRoute('s.vendors.vendor.opportunities.opportunity', newOpportunity);
      });
    }
  }
});
