import Ember from 'ember';
import DestroyNew from 'client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {
    model() {
        return this.store.createRecord('post');
    },
    actions: {
        createPost(model) {
            // model.set('tags', ['lifestyle', 'health', 'tech']);
            var userId = this.get('session.secure.user.id');
            this.store.findRecord('user', userId).then(result => {
                model.set('user', result);
                return model.save();
            }).then(post => this.transitionTo('s.posts.post', post));
        }
    }
});
