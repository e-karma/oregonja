import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return this.store.find('site', params.site_id);
  }
});
