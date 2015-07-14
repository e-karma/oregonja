import Ember from 'ember';

export default Ember.Controller.extend({
  stages: ["Demo", "Evaluation", "Solutions Planning Call", "Quote", "Quote Review", "Closed - Won", "Closed - Lost"],

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
      var vendor = this.controllerFor('s.vendors.vendor').get('vendor');
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
