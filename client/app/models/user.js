import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({

  //relationships
  vendors: DS.hasMany('vendor'),
  photos: DS.hasMany('photo'),
  albums: DS.hasMany('album'),
  posts: DS.hasMany('post'),
  todos: DS.hasMany('todo'),
  statuses: DS.hasMany('status', {
    inverse: 'likes'
  }),
  events: DS.hasMany('event'),
  emails: DS.hasMany('email'),
  opportunities: DS.hasMany('opportunity'),
  tasks: DS.hasMany('task'),

  // attributes
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  tagline: DS.attr('string'),
  email: DS.attr('string'),
  website: DS.attr('string'),

  // computed
  fullName: computed('firstName', 'lastName', function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
