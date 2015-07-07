import DS from 'ember-data';

export default DS.Model.extend({
  //relationships
  vendor: DS.belongsTo('vendor'),
  tasks: DS.hasMany('task'),
  //attrs
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  role: DS.attr('array'),
  title: DS.attr('array'),
  phone: DS.attr('number')
});
