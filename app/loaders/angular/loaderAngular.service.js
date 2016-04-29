(function() {
  'user strict';

  angular
    .module('king.loaders.angular', ['ngRoute'])
    .factory('angularLoader', angularLoader);

  angularLoader.$inject = ['$q', '$rootScope', '$location', '$ocLazyLoad', 'structureService', '$templateCache'];

  function angularLoader($q, $rootScope, $location, $ocLazyLoad, structureService, $templateCache) {
    return {
      module: dynamicLoad
    };

    function dynamicLoad() {

      structureService.getCurrentModules($location, function loadmodules(modules) {
        var dependencies = {
          files: new Array(0),
          libs: new Array(0),
          htmlSources: new Array(0)
        };

        var cache = structureService.getCachedLibs();
        angular.forEach(modules, function(value) {
          var libs = value.libs;
          angular.forEach(libs, function(value, key) {
            if (value && value.bower) {
              if (cache[Object.keys(value.bower)[0]]) {
                libs[key].src = undefined;
              }
              cache[Object.keys(value.bower)[0]] = true;
            }
          }, libs);

          if (libs) {
            //Load libs
            this.files = this.files.concat(_.map(libs, 'src')).filter(filterNotHtmlOrUndefined);
            this.htmlSources = this.htmlSources.concat(_.map(libs, 'src')).filter(filterHtml);
          }
          this.files = this.files.concat(value.files);
          this.htmlSources = this.htmlSources.concat(value.files).filter(filterHtml);
          $templateCache.get(value.view);
        }, dependencies);

        structureService.setCachedLibs(cache);
        loadHtmlDeps()
          .then(loadLibsAndFiles);

        function loadHtmlDeps() {
          var defer = $q.defer();
          var htmlImports = [];
          angular.forEach(dependencies.htmlSources, function(value) {
            this.push(importHref(value));
          }, htmlImports);

          $q.all(htmlImports)
            .then(defer.resolve)
            .catch(defer.reject);
          return defer.promise;
        }

        function loadLibsAndFiles() {
          var defer = $q.defer();
          $q.all({
            'dependencies': $ocLazyLoad.load(dependencies.files, {serie: true}),
            'rootModule': structureService.getModule('/' + $location.$$path.split('/')[1])
          }).then(function(data) {
              $rootScope.rootTemplate = structureService.validateScope(data.rootModule);
              defer.resolve();
          }).catch(defer.reject);
          return defer.promise;
        }

        function importHref(file) {
          var defer = $q.defer();
          polymerImportHref(file, defer.resolve, defer.reject);
          return defer.promise;
        }

        function polymerImportHref(href, onload, onerror) {
          var l = document.createElement('link');
          l.rel = 'import';
          l.href = href;
          var self = this;
          if (onload) {
            l.onload = function(e) {
              return onload.call(self, e);
            };
          }
          if (onerror) {
            l.onerror = function(e) {
              return onerror.call(self, e);
            };
          }
          document.head.appendChild(l);
          return l;
        }

        function filterHtml(n) {
          return n != undefined && n.indexOf('.html') > -1;
        }
        function filterNotHtmlOrUndefined(n) {
          return n != undefined && n.indexOf('.html') == -1;
        }
      });
    }
  }
}());
