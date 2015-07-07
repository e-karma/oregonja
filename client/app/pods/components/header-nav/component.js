import Ember from 'ember';

export default Ember.Component.extend({
  menu: [{
    'title': 'Index',
    'link': 'index'
  }, {
    'title': 'Media',
    'link': 's.media'
  }, {
    'title': 'Posts',
    'link': 's.posts'
  }, {
    'title': 'Users',
    'link': 's.users.index'
  }, {
    'title': 'Page Manager',
    'link': 's.page-manager',
    'submenu': [{
        'title': 'List Pages',
        'link': 's.page-manager.index'
      }, {
        'title': 'Create New Page',
        'link': 's.page-manager.new'
      }]
      // }, {
      //     'title': 'Homepages',
      //     'link': 's.homepages',
      //     'submenu': [{
      //         'title': 'Index',
      //         'link': 's.homepages.index'
      //     }, {
      //         'title': 'Create Homepage',
      //         'link': 's.homepages.create'
      //     }, ]
  }],
  didInsertElement() {
    $('.mobile-menu').css('padding-right', "15px");
    $('.mobile-menu').on('shown.bs.collapse', () => {
      $(document).on('click', this.hideMenu);
    });

    $('.mobile-menu').on('hidden.bs.collapse', () => {
      $(document).unbind("click", this.hideMenu);
    });
  },

  hideMenu() {
    $('.mobile-menu').collapse('hide');
  },

  actions: {
    invalidateSession() {
      this.sendAction('invalidateSession');
    },
    back() {
      this.sendAction('back');
    },
    forward() {
      this.sendAction('forward');
    }
  }
});
