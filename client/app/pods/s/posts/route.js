import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel() {
      this.transitionTo('s.posts.post.index');
    },
    update(model) {
      return model.save().then(
          savedModel => {
            console.log('post ' + savedModel.get('title') + ' saved successfully');
            this.transitionTo('s.posts.post.index');
          },
          reason => {
            console.log('error saving post, reason: ' + reason);
            this.transitionTo('s.posts.post.index');
          }
      );
    },
    delete(model) {
      return model.destroyRecord().then(
          () => this.transitionTo('s.posts.post.index'),
          reason => {
            console.log('error deleting post, reason was: ' + reason);
            this.transitionTo('s.posts.post.index');
          }
      );
    }
  }
});
