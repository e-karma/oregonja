import DS from 'ember-data';

export default DS.Model.extend({
    //relationships
    user: DS.belongsTo('user'),
    // homepages: DS.hasMany('homepage'),
    // templates: DS.hasMany('template'),
    // services: DS.hasMany('service'),
    events: DS.hasMany('event'),
    employees: DS.hasMany('employee'),

    // attr
    name: DS.attr('string'),
    description: DS.attr('string'),
    phone: DS.attr('string'),
    email: DS.attr('string'),
    address: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('array'),
    zip: DS.attr('number')

    // urlSegment: DS.attr('string'),
    // location: DS.attr(),

    // // computed
    // slug: computed('name', function() {
    //     let slug = this.get('name').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    //     this.set('urlSegment', slug);
    //     return slug;
    // })
});
