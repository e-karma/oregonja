import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  isEditing: false,
  actions: {
    editPost() {
      this.set('isEditing', true);
    },

    saveEdit() {
      this.set('isEditing', false);

      var user = this.get('user');
      user.save();

      this.transitionToRoute('s.posts.post', post);
    },

    cancelEdit() {
      this.set('isEditing', false);
    }
  }
});
