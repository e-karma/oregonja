import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      pages: this.store.findAll('page'),
      events: this.store.findAll('event'),
      todos: this.store.findAll('todo'),
      opportunities: this.store.findAll('opportunity'),
      emails: this.store.findAll('email'),
      settings: this.store.findAll('setting'),
      // s: this.store.findAll(''),
      // s: this.store.findAll('')
    })
  },

});
