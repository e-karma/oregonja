import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    willTransition: function() {
      this.controllerFor('s.vendors.vendor.opportunities.create').set('title', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('selectedStage', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('stage', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('estAmt', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('estClose', null);
    }

  }

});
