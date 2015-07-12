import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    this.store.find('email', params.email_id);
  },

  actions: {

    willTransition: function() {
      this.controllerFor('s.emails.email').set('isShowingEmailSuccess', false);
    }

  }
});
