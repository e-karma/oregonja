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
      this.controllerFor('s.vendors.vendor.employees.create').set('firstName').clear();
      this.controllerFor('s.vendors.vendor.employees.create').set('lastName').clear();
      this.controllerFor('s.vendors.vendor.employees.create').set('email').clear();
      this.controllerFor('s.vendors.vendor.employees.create').set('selectedVendor').clear();
      this.controllerFor('s.vendors.vendor.employees.create').set('title').clear();
      this.controllerFor('s.vendors.vendor.employees.create').set('phone').clear();
      this.controllerFor('s.vendors.vendor.employees.create').set('selectedRole').clear();
    }

  }

});
