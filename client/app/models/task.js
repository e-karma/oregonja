import DS from 'ember-data';

export default DS.Model.extend({

	//relationships
	assignedTo: DS.belongsTo('user'),
	employee: DS.belongsTo('employee'),

	// attr
  name: DS.attr('string'),
	description: DS.attr('string'),
  dueDate: DS.attr('dateiso')
});
