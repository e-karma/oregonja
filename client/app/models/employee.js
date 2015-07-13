import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
  //relationships
  vendor: DS.belongsTo('vendor'),
  tasks: DS.hasMany('task'),
  //attrs
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  role: DS.attr('string'),
  title: DS.attr('string'),
  phone: DS.attr('string'),
  fullName: computed('firstName', 'lastName', function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
