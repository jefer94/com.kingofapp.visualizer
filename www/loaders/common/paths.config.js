(function() {
  'use strict';

  angular
    .module('king.loaders.common', ['ngRoute', 'xc.indexedDB'])
    .config(setDefaultPaths);
  setDefaultPaths.$inject = ['$routeProvider', '$locationProvider', '$sceProvider', '$analyticsProvider'];

  function setDefaultPaths($routeProvider, $locationProvider, $sceProvider, $analyticsProvider) {
    $sceProvider.enabled(false);
    $analyticsProvider.firstPageview(true);
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(false);
    //Default Route
    $routeProvider
      .otherwise({
        templateUrl: 'loaders/common/loaderCommon.view.html',
        controller: 'commonLoaderCtrl',
        action: 'section-view2'
      });
  }
}());
