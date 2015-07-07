import DS from 'ember-data';

export default DS.Model.extend({
  //relationships
  user: DS.belongsTo('user'),
  title: DS.attr('string')
});
