(function(){
  'use strict';
  angular
    .module('king.loaders.common')
    .controller('commonLoaderCtrl', commonLoaderCtrl)
    .directive("polyScripts", function() {
        var updateScripts = function (element) {
            return function (scripts) {
                element.empty();
                angular.forEach(scripts, function (source, key) {
                    var scriptTag = angular.element(
                        document.createElement("script"));
                    source = "//@ sourceURL=" + key + "\n" + source;
                    scriptTag.text(source)
                    element.append(scriptTag);
                });
            };
        }; 
        return {
            restrict: "EA",
            scope: {
              scripts: "=" 
            },
            link: function(scope,element) {
                scope.$watch("scripts", updateScripts(element));
            }
        };
    });

  commonLoaderCtrl.$inject = ['$scope', '$rootScope', '$http','$location', '$ocLazyLoad', 'structureService','angularLoader'];

  function commonLoaderCtrl($scope, $rootScope, $http, $location, $ocLazyLoad, structureService, angularLoader) {
    console.log("pasa por el commonLoaderCtrl");

    // $http.get('http://koa.pepocivs.com/test.txt',{  params: {}})
    //   .success(function(data){
    //     var test = data.split('\n')
    //     angular.forEach( test, function(item, index){
    //       console.log(item);
    //
    //         if($rootScope.pushcache && item!=""){
    //           console.log("IndexOF",$rootScope.pushcache.indexOf(item));
    //           if($rootScope.pushcache.indexOf(item) == -1){
    //             console.log("Editado", item);
    //             $rootScope.pushcache.push(item);
    //             console.log("TOtal2",$rootScope.pushcache);
    //             // koa.pushit(item);
    //           }
    //         }else if(item!=""){
    //             console.log("Nuevo",item);
    //             $rootScope.pushcache=[item];
    //             // koa.pushit(item);
    //         }
    //
    //
    //     });
    //   }).error(function(){
    //     // $scope.facebookfeed.message = $filter('translate')('facebookfeed.feed.error');
    //   });



    $location.$$path = $location.$$path || '/';
    // setTimeout(function() {
    //   $rootScope.test='Variableasdsdsa';
    // },2000);
    //Load config
    structureService.loadconfig($rootScope);
    //Register Route
    structureService.getModule($location.$$path).then(function(module){
      $rootScope.toolbar = { title : module.name,
        class : module.headclass
      };
      $scope.module = module || $scope.module;
      if(!module){
          //TODO: Display a 404 error or similar
      }
      else if( isAngularModule(module.type) ){
        angularLoader.module($scope);
      }
      else if( isJqueryModule(module.type) ){
        //TODO: Load jquery module from angular

      }
      else{
        //TODO: Display error and blame developer
      }
    });

    $scope.data = JSON.stringify(structureService.get(), null, "    ");

    function isAngularModule(type){ return type == 'A'; }
    function isJqueryModule (type){ return type == '$'; }

  }

}());
