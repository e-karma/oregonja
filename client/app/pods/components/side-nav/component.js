import Ember from 'ember';

export default Ember.Component.extend({
  menu: [{
    'title': 'Dashboard',
    'link': 'index',
    'icon': 'fa-dashboard'
  },  {
    'title': 'Marketing',
    'link': 's.mktg',
    'icon': 'fa-bar-chart'
  },
  // {
  //   'title': 'eStore',
  //   'link': 's.store',
  //   'icon': 'fa-shopping-cart'
  // },
  {
    'title': 'CRM',
    'link': 's.vendors',
    'icon': 'fa-folder-open'
  },
  // {
  //   'title': 'eMail',
  //   'link': 's.emails',
  //   'icon': 'fa-envelope'
  // },
  // {
  //   'title': 'Media',
  //   'link': 's.media',
  //   'icon': 'fa-laptop'
  // },
  {
    'title': 'Events',
    'link': 's.events',
    'icon': 'fa-calendar'
  },
  {
    'title': 'Posts',
    'link': 's.posts',
    'icon': 'fa-picture-o'
  },
  {
    'title': 'Todos',
    'link': 's.todos',
    'icon': 'fa-check'
  },
  {
    'title': 'Pages',
    'link': 's.page-manager',
    'icon': 'fa-file',
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
  }, {
    'title': 'Users',
    'link': 's.users.index',
    'icon': 'fa-users'
  },
  // {
  //   'title': 'Settings',
  //   'link': 's.settings',
  //   'icon': 'fa-cog'
  // }
  ],
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
