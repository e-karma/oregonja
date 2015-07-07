import DS from 'ember-data';

export default DS.Model.extend({
    // relationships
    users: DS.belongsTo('user'),

    // TODO: add images
    // attributes
    to: DS.attr('string'),
    from: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    body: DS.attr('string')
  });
