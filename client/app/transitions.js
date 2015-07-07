export default function () {
  var duration = 500;
  this.transition(
    this.hasClass('geo-info'),
    this.toValue(true),
    this.use('toDown', {duration: 300})
  );
  this.transition(
    this.hasClass('wizard'),
    this.toValue(true),
    this.use('toRight', {duration: 200})
  );
  this.transition(
    this.hasClass('wizard'),
    this.toValue(true),
    this.use('toRight', {duration: 200})
  );
  this.transition(
    this.hasClass('slideUp'),
    this.toValue(true),
    this.use('toUp', {duration: 200}),
    this.reverse('toDown', {duration: 200})
  );

  //dashboard
  this.transition(
    this.fromRoute('index'),
    this.toRoute('s.mktg.index'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  //mktg
  this.transition(
    this.fromRoute('s.mktg.index'),
    this.toRoute('s.mktg.content'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('s.mktg.content'),
    this.toRoute('s.mktg.seo'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('s.mktg.seo'),
    this.toRoute('s.mktg.branding'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('s.mktg.branding'),
    this.toRoute('s.mktg.analytics'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  //store
  this.transition(
    this.fromRoute('s.store'),
    this.toRoute('s.vendors'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  //crm
  this.transition(
    this.fromRoute('s.vendors'),
    this.toRoute('s.posts.index'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  //posts
  this.transition(
    this.fromRoute('s.posts'),
    this.toRoute('s.todos'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  this.transition(
    this.fromRoute('s.posts.index'),
    this.toRoute('s.posts.post'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('s.posts.post.index'),
    this.toRoute('s.posts.post.edit'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  //todos
  this.transition(
    this.fromRoute('s.todos'),
    this.toRoute('s.page-manager.index'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  //page manager
  this.transition(
    this.fromRoute('s.page-manager.index'),
    this.toRoute('s.page-manager.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('gallery'),
  //   this.use('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toLeft', { duration } ]
  //   }),
  //   this.reverse('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toRight', { duration } ]
  //   })
  // );
}
