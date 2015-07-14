import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model() {
        return this.store.createRecord('pitch');
    },
    actions: {
        createPitch(model) {
            // model.set('tags', ['lifestyle', 'health', 'tech']);
            var userId = this.session.get('user.id');
            this.store.findRecord('user', userId).then(result => {
                model.set('user', result);
                return model.save();
            }).then(pitch => this.transitionTo('s.bullpen.pitch', pitch));
        }
    }
});
