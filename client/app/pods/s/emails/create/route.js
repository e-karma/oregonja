import Ember from 'ember';

export default Ember.Route.extend({

  selectedUserEmail: null,

  model: function() {
    var userId = this.get('session.secure.user.id');
    return this.store.find('user', userId);
  },

  actions: {
    // resets form inputs upon transition after email sending
    willTransition: function() {
      this.controllerFor('s.emails.create').set('toEmail').clear();
      this.controllerFor('s.emails.create').set('emailSubject').clear();
      this.controllerFor('s.emails.create').set('emailDesc').clear();
      this.controllerFor('s.emails.create').set('bodyEmail').clear();
    },

    sendEmail: function() {
      var that = this;
      var userId = this.get('session.secure.user.id');
      var fromEmail = this.get('selectedUserEmail');

      // checking if user hasn't selected any other email, then assign the default one to 'From' header
      if (fromEmail === null) {
        fromEmail = this.get('session.secure.user.email');
      };

      // getting input from email form
      var toEmail = this.controllerFor('s.emails.create').get('toEmail');
      var emailSubject = this.controllerFor('s.emails.create').get('emailSubject');
      var emailDesc = this.controllerFor('s.emails.create').get('emailDesc');
      var bodyEmail = this.controllerFor('s.emails.create').get('bodyEmail');

      // creating model object for email
      var emailObject = {
        to: toEmail,
        from: fromEmail,
        title: emailSubject,
        description: emailDesc,
        body: bodyEmail
      };

      // storing email in ember store
      var newEmail = this.store.createRecord('email', {
        to: toEmail,
        from: fromEmail,
        title: emailSubject,
        description: emailDesc,
        body: bodyEmail
      });

      // preparing data to be sent through mandrill service
      var emailMandrillObject = {
        message: {
          html: emailObject.body,
          text: emailObject.body,
          subject: emailObject.title,
          from_email: emailObject.from,
          to: [
            {
              email: emailObject.to,
              type: "to"
            }
          ]
        }
      };

      // send email with mandrill then save to db and transition to email listings
      that.mandrill.send(emailMandrillObject).then(function(response) {
        newEmail.save().then(function(newEmail) {
          that.controllerFor('s.emails.email').toggleProperty('isShowingEmailSuccess');
          that.transitionTo('s.emails.email', newEmail);
        });
      });

    }

  }
});
