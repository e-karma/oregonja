import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var userId = this.get('session.secure.user.id');
    return this.store.find('user', userId);
  },

  actions: {

    sendEmail: function() {
      var that = this;
      var userId = this.get('session.secure.user.id');
      var fromEmail = this.get('session.secure.user.email');
      var toEmail = this.controllerFor('s.emails.create').get('toEmail');
      var emailSubject = this.controllerFor('s.emails.create').get('emailSubject');
      var emailDesc = this.controllerFor('s.emails.create').get('emailDesc');
      var bodyEmail = this.controllerFor('s.emails.create').get('bodyEmail');

      var emailObject = this.store.createRecord('email', {
        to: toEmail,
        from: fromEmail,
        title: emailSubject,
        description: emailDesc,
        body: bodyEmail
      });
      emailObject.save().then(function() {
        that.transitionTo('s.emails.index');
      });

    }
  }
});
