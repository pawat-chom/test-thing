{
	/* istanbul ignore next */
define(function(require) {
  'use strict';
  
    app = angular.module('exampleApp', [
    ]);

  app.run(['$location', 'appData', 'common.resources.constant', 'apiServices', 'settings', '$templateCache',
    function($location, appData, constants, apiServices, stt, $templateCache) {
   

      angular.element(document.querySelector('.nav_left')).css('display', 'none');

      apiServices.get(constants.loadMetaNodes).then(function(resp) {
        var types = resp.data,
          i;

        for (i = 0; i < types.length; i = i + 1) {
          appData.metadataNodes[types[i].name] = types[i];
          appData.metadataNodeTypes[types[i]._id] = types[i].gm_lnh;
        }
      });
    }]);

  app.controller('MainController', [
    '$scope', 'notifications', '$timeout', 'cacheService', 'localStorageService', '$location', '$rootScope',
    function($scope, notifications, $timeout, cacheService, localStorageService, $location, $rootScope) {
   

      $timeout(function() {
        if (widths) {
          angular.element(document.querySelector('#menu_dt_user')).css('width', widths[0] + 'px');
          //angular.element(document.querySelector('#middle_panel')).css('width', widths[1]);
          angular.element(document.querySelector('.rightPanel')).css('width', widths[1] + 'px');
        }
      });

      notifications.onLoaded($scope, LoadedEventHandler);

      $scope.$on('$routeChangeStart', function(next, current) {



      });
    }
  ]);

  return app;
});



}