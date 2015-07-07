import DS from 'ember-data';

export default DS.Model.extend({

    // relationships
    user: DS.belongsTo('user'),

    // attributes
    title: DS.attr('string'),
    intro: DS.attr('string'),
    bgCoverImg: DS.attr('string'),
    imgOne: DS.attr('string'),
    imgTwo: DS.attr('string'),
    imgThree: DS.attr('string'),

    body: DS.attr('string'),
    tldr: DS.attr('string'),
    tags: DS.attr('array')

});
