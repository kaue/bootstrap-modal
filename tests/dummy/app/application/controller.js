import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleShow() {
      this.toggleProperty('showModal');
    }
  }
});
