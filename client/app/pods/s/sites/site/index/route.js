import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(model) {
      return model.destroyRecord()
    }
  }
});
