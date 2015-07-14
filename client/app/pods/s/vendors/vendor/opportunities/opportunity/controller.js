import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingOpportunitySuccess: false,
  isChangingStage: false,
  stages: ["Demo", "Evaluation", "Solutions Planning Call", "Quote", "Quote Review", "Closed", "Won & Closed", "Lost"],

  actions: {
    changeStage: function() {
      this.toggleProperty('isChangingStage');
    },

    selectStage: function(stage) {
      this.set('selectedStage', stage);
      this.set('model.stage', stage);
    },

    saveOpportunity: function() {
      var that = this;
      this.get('model').save().then(function(savedOpportunity) {
        that.transitionToRoute('s.vendors.vendor.opportunities.index');
      });
      return false;
    }
  }
});
