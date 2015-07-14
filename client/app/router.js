import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.route("register");
  this.resource('pages', { path: 'pages/*slug' }, function() {});
  this.route("s", {
      path: "s"
  }, function() {
    this.route("posts", function() {
      this.route("post", { path: ":post_id" }, function() {
      });
      this.route("create", {
          path: "create"
      });
      this.route('edit', {
        path: '/edit/:post_id'
      });
    });
    this.route('sites', function() {
      this.route("site", { path: ":site_id" }, function() {
      });
      this.route("create", {
          path: "create"
      });
      this.route('edit', {
        path: '/edit/:site_id'
      });
    });
    this.route("vendors", function() {
        this.route("vendor", { path: ":vendor_id"}, function(){
          this.route('edit');
          this.route('tasks', function() {
            this.route('create');
            this.route('task', { path: ":task_id" } );
          });
          this.route('employees', function() {
            this.route('create', function() {
              this.route('controller');
            });
            this.route('employee', {path: ":employee_id"});
          });
          this.route('opportunities', function() {
            this.route('create', function() {
              this.route('controller');
            });
            this.route('opportunity', {path: ":opportunity_id"});
          });
        });
        this.route("create", {
            path: "create"
        });
    });
    this.route("mktg", function() {
      this.route('content');
      this.route('seo');
      this.route('branding');
      this.route('analytics');
    });
    this.route("media", function() {
      this.route("upload", {
          path: "upload"
      });

      this.route("albums", function() {
          this.route("album", {
              path: ":album_id"
          });

          this.route("create", {
              path: "create"
          });
      });
    });
    this.route("users", function() {
        this.route("user", {
            path: ":user_id"
        });

        this.route("create", {
            path: "create"
        });
    });

    this.route("events", function() {
        this.route("event", {
            path: ":event_id"
        }, function() {});

        this.route("create", {
            path: "create"
        });
    });

    this.route('page-manager', function() {
      this.route('new');

      this.route('edit', {
        path: '/edit/:page_id'
      });
    });
    this.route("emails", function() {
      this.route("email", {
          path: ":email_id"
      });

      this.route("create", {
          path: "create"
      });
    });
    this.route("todos", function() {
        this.route("todo", {
            path: ":todo_id"
        });

        this.route("create", {
            path: "create"
        });
    });
    // this.route('crm');
    // this.route("homepages", function() {
    //     this.route("homepage", {
    //         path: ":homepage_id"
    //     });
    //     this.route("create", {
    //         path: "create"
    //     });
    // });
    // this.route("templates", function() {
    //     this.route("template", {
    //         path: ":template_id"
    //     });
    //
    //     this.route("create", {
    //         path: "create"
    //     });
    // });
    // this.route("photos", function() {
    //     this.route("photo", {
    //         path: ":photo_id"
    //     });
    //
    //     this.route("create", {
    //         path: "create"
    //     });
    // });
    // this.route("feed", function() {
    //     this.route("status", {
    //         path: "status"
    //     });
    // });
    this.route("settings");
  });
  this.route('blog', function() {
    this.route("post", {path: ":post_id"});
  });
  this.route('about', function() {
    this.route("user", {path: ":user_id"});
  });
  this.route('profile');
  this.route('products');
  this.route('contact');
});

export default Router;
