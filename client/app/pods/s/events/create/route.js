import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model() {
        return this.store.findAll('vendor');
        return this.store.createRecord('event');
    },

    actions: {
      selectVendor(vendor){
        this.set('selectedVendor', vendor);
        // this.event.set('event', vendor);
      },
      createEvent(model) {
          // var userId = this.session.get('user.id');
          var vendor = this.session.get('vendor');
          var event = this.session.get('event', vendor).then(result => {
              model.set('event', result);
              return model.save();
          }).then(event => this.transitionTo('s.events.event', event));
      }
    }
});
