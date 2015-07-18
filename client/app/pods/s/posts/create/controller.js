import Ember from 'ember';

export default Ember.ObjectController.extend({
  contentHeight: 200,
  postContent: "Some intial contents go here. Lorem Ipsum is simply dummy text of the printing.",
  editingDisabled: false,

  actions: {
    changeHeight(someObject) {
      var height = someObject.doSomeCalculationToGetHeight();
       this.set('contentHeight', heigth)
    }
  }
});
