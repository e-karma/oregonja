import DS from 'ember-data';

export default DS.Model.extend({
  //relationships
  user: DS.belongsTo('user'),
  vendor: DS.belongsTo('vendor'),
  //attributes
  siteUrl: DS.attr('string'),
  pages: DS.attr('array'),
  seoGrade: DS.attr('string'),
  viewersDaily: DS.attr('string'),
  theme: DS.attr('string'),
  plugins: DS.attr('array')
});
