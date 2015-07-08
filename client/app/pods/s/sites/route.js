import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel() {
      this.transitionTo('s.sites.site.index');
    },
    update(model) {
      return model.save().then(
          savedModel => {
            console.log('site ' + savedModel.get('title') + ' saved successfully');
            this.transitionTo('s.sites.index');
          },
          reason => {
            console.log('error saving site, reason: ' + reason);
            this.transitionTo('s.sites.index');
          }
      );
    },
    delete(model) {
      return model.destroyRecord().then(
          () => this.transitionTo('s.sites.index'),
          reason => {
            console.log('error deleting site, reason was: ' + reason);
            this.transitionTo('s.sites.index');
          }
      );
    }
  }
});
