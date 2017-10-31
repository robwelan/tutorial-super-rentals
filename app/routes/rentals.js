import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition: function(transition) {
      this.controllerFor('application').set('lastRoute', 'one');
    },
    goBack: function() {
      var appController = this.controllerFor('application');
      this.transitionTo(appController.get('lastRoute'));
    }
  }
});
