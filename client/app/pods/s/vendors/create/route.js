import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model() {
        return this.store.createRecord('vendor');
    },
    actions: {

        createVendor(model) {
            var userId = this.session.get('user.id');
            this.store.findRecord('user', userId).then(result => {
                model.set('user', result);
                return model.save();
            }).then(vendor => this.transitionTo('s.vendors.vendor', vendor));
        }
    }
});
