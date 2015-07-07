import DS from 'ember-data';

export default DS.Model.extend({
	//relationships
    user: DS.belongsTo('user'),
    vendor: DS.belongsTo('vendor'),

    // attributes
    estClose: DS.attr('dateiso'),
    estAmt: DS.attr('number'),
    title: DS.attr('string'),
    stage: DS.attr('string')

});
