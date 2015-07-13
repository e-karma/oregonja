import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
	//relationships
    user: DS.belongsTo('user'),
    vendor: DS.belongsTo('vendor'),

    // attributes
    estClose: DS.attr('dateiso'),
    estAmt: DS.attr('string'),
    title: DS.attr('string'),
    stage: DS.attr('string'),
    formattedEstAmt: computed('estAmt', function () {
      return '$' + this.get('estAmt');
    })

});
