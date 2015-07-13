import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
  //

  model: function() {
    // vendors are pulled from the store and stored in vendors variable
    var vendors = this.store.findAll('vendor');
    // this gets controller instance and sets vendors array to the controller's vendor property
    this.controllerFor('s.vendors.vendor.employees.create').set('vendors', vendors);
    return vendors;
  },

  actions: {

    willTransition: function() {
      this.controllerFor('s.vendors.vendor.employees.create').set('firstName', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('lastName', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('email', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('selectedVendor', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('title', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('phone', null);
      this.controllerFor('s.vendors.vendor.employees.create').set('selectedRole', null);
    }

  }

});
