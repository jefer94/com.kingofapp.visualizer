angular
  .module('king.core.structureService', [])
  .factory('structureService', structureService);

  structureService.$inject = ['$q','$translatePartialLoader', '$translate', 'sampleModules'];

  function structureService($q, $translatePartialLoader, $translate, sampleModules){

    var listeners = [];
    var lang;
    var cachedLocations = {};

    var angularscope = {
      name: 'Angular Scope Module',
      identifier: 'angularscope',
      type: 'A',
      view: "modules/angularscope/index.html",
      files: [
              "modules/angularscope/controller.js"
             ],
      scope: {
        config: ""
      }
    };
    var firebase = {
      name: 'Firebase Module',
      identifier: 'firebase',
      type: 'A',
      view: "modules/firebase/index.html",
      files: [
              "modules/firebase/controller.js",
              "modules/firebase/factory.js"
             ],
      scope: {
        src: "https://blinding-heat-1559.firebaseio.com/datatest"
      },
      //Online builder testing purpose
      libs: [{
          bower : {"firebase": "2.2.4"},
          src:"https://cdn.firebase.com/js/client/2.2.4/firebase.js"
        },
        {
          bower : {"angularfire": "1.1.2"},
          src:"https://cdn.firebase.com/libs/angularfire/1.1.2/angularfire.min.js"
        }
      ]
    };

    var list = {
      name: 'List Module',
      identifier: 'list',
      type: 'A',
      view: "modules/list/index.html",
      files: [
              "modules/list/controller.js"
             ],
      scope: {
        src: ""
      }
    };

    var facebookfeed = {
      name: 'Facebook Feed',
      identifier: 'facebookfeed',
      type: 'A',
      view: "modules/facebookfeed/index.html",
      files: [
              "modules/facebookfeed/controller.js"
             ],
      scope: {
        accesstoken : "583995668377553|9CrhjgiahQTZQ-l4E40edyNgh0k",
        pageid      : "laneveraroja"
      }
    };
    var twitterfeed = {
      name: 'Twitter Feed',
      identifier: 'twitterfeed',
      type: 'A',
      view: "modules/twitterfeed/index.html",
      files: [
        "modules/twitterfeed/controller.js"
      ],
      scope: {
        widgetid : "628892310084939776",
        limite : "2"
      }
    };
    var text = {
      name: 'Text Example',
      identifier: 'text',
      type: 'A',
      view: "modules/text/index.html",
      files: [
        "modules/text/controller.js"
      ],
      scope: {
        value: "Text phrase"
      }
    };
    var translationtest = {
      name: 'Translation Test',
      identifier: 'translationtest',
      type: 'A',
      view: "modules/translationtest/index.html",
      files: [
        "modules/translationtest/controller.js"
      ],
      scope: {
        name: "Noemal"
      }
    };
    var ads = {
      name: 'Ads container',
      identifier: 'ads',
      type: 'A',
      view: "modules/ads/index.html",
      files: [
        "modules/ads/controller.js"
      ],
      scope: {
        mainsrc: "<h1>Ads Everywhere!</h1>",
        fixedsrc: "<h3>fixed</h3>"
      }
    };
    var simpledirective = {
      name: 'Simple directive',
      identifier: 'simpledirective',
      type: 'A',
      view: "modules/simpledirective/index.html",
      files: [
        "modules/simpledirective/controller.js"
      ],
      scope: {
        config: ""
      }
    };

    var multiplefiles = {
      name: 'Multiple files',
      identifier: 'multiplefiles',
      type: 'A',
      view: "modules/multiplefiles/index.html",
      files: [
        "modules/multiplefiles/controller.js",
        "modules/multiplefiles/directive.js"
      ],
      scope: {
        config: ""
      }
    };

    var embed = {
      name: 'Embed Example',
      identifier: 'embed',
      type: 'A',
      view: "modules/embed/index.html",
      files: [
        "modules/embed/controller.js"
      ],
      scope: {
        url: "http://es.lipsum.com"
      }
    };
    var html = {
      name: 'Html Example',
      identifier: 'html',
      type: 'A',
      view: "modules/html/index.html",
      files: [
        "modules/html/controller.js"
      ],
      scope: {
        value: "<p style='color:#39a9d3;' lang='es-ES'>"+
                "En Japón hay una censura férrea hacia cierto tipo de porno: no se"+
                "permite mostrar penetraciones vaginales o anales reales, sino que"+
                "estas imágenes aparecen pixeladas o bien sólo pueden verse en"+
                "animaciones. Por lo tanto se inventaron formas, como el bukakke,"+
                "donde lo pueden mostrar todo.</p>"+
                "<p style='color:#d36339;' lang='es-ES'>"+
                "Desde que creó el portal Putalocura, Torbe asegura que los bukkakes son lo"+
                "que más se descarga de su página. Hasta el día de hoy ha hecho"+
                "131, y han participado innumerables hombres y 70 chicas.</p>"
      }
    };

    var angulardiffscope = {
      name: 'Angular Different Scope Module',
      identifier: 'angularscope',
      type: 'A',
      view: "modules/angularscope/index.html",
      files: [
        "modules/angularscope/controller.js"
      ],
      scope: {
        config: ""
      }
    };

    var angularmenu = {
      name: 'Angular Menu Module',
      identifier: 'angularmenu',
      type: 'A',
      view: "modules/angularmenu/index.html",
      files: [
        "modules/angularmenu/controller.js"
      ]
      // ctrl: "modules/angular-menu/controller.js",
    };
    var angularstaticfeed = {
      name: 'Angular Static Feed Module',
      identifier: 'angularstaticfeed',
      type: 'A',
      view: "modules/angularstaticfeed/index.html",
      files: [
        "modules/angularstaticfeed/controller.js"
      ],
      scope: {
              feed : [{
                          "created_at": "Thu Jul 16 17:59:01 +0000 2015",
                          "text": "TFW you realize you've spent the majority of your front-end career in #CallbackHell",
                        }, {
                          "created_at": "Thu Jul 16 16:17:48 +0000 2015",
                          "text": "@alixmcalpine wow ça me donne un petit coup de nostalgie",
                        }, {
                          "created_at": "Thu Jul 16 16:14:11 +0000 2015",
                          "text": "Had a nightmare last night where @angularjs 2 came out and I suddenly sucked at #javascript and I was being chased by Donald Trump and ugh ",
                        }, {
                          "created_at": "Tue Jul 14 13:23:45 +0000 2015",
                          "text": "@haziqmir explosions, gunfire, and Vince Vaughn... That's about all I can discern",
                        }, {
                          "created_at": "Mon Jul 13 11:42:38 +0000 2015",
                          "text": "#GetToTheChoppa\nhttps://t.co/xVDXnhWWlz",
                        }]
      }
    };


    // var rssmodule = {
    //   name: 'RSS Module',
    //   controller: 'rssmodule',
    //   type: 'A',
    //   view: "modules/rssmodule/index.html",
    //   ctrl: "modules/rssmodule/controller.js",
    //   scope: {
    //     feed: "http://www.hd-adult.com/feed/"
    //   }
    // };
    //
    // var youtube = {
    //   name: 'youtube',
    //   type: '$',
    //   scope: {
    //     video: "k1eKW37q8Fo",
    //     time: {hours: 12, minutes: 7},
    //     map: 'spain'
    //   },
    //   view: "modules/youtube/index.html",
    //   ctrl: "modules/youtube/controller.js",
    //   config: {
    //     video: {
    //       type: 'text',
    //       min: 4,
    //       max: 200,
    //       regex: '/\w./',
    //     },
    //     time: {
    //       type: 'composed',
    //       elements: {
    //         hours:   { type: 'number', min: 0, max: 23 },
    //         minutes: { type: 'number', min: 0, max: 59 }
    //       }
    //     },
    //     map: {
    //       type: 'custom',
    //       view: "modules/youtube/index.html",
    //       ctrl: "modules/youtube/controller.js",
    //
    //     }
    //   }
    //
    // };
    //
    // var x = {
    //   name: 'Module X',
    //   type: '$',
    //   view: "modules/x/index.html",
    //   ctrl: "modules/x/controller.js",
    // };

    var menu = {
      items:{
            '/ads'                           : ads,
            '/ads/menu'                      : angularmenu,
            '/ads/menu/angular-scope'        : angularscope,
            '/menu/fire-connector'           : firebase,
            '/menu/fire-connector/list'      : list,
            '/menu/translation'              : translationtest,
            '/menu/text'                     : text,
            '/menu/html'                     : html,
            '/menu/embed'                    : embed,
            '/menu/twitter'                  : twitterfeed,
            '/menu/facebook'                 : facebookfeed,
            '/simple-directive'              : simpledirective,
            '/scope'                         : angularscope,
            '/feed'                          : angularstaticfeed,
            '/menu/scope-module'             : angularscope,
            '/menu/scope-diff-module'        : angulardiffscope,
            '/menu/scope-same-module'        : angularscope,
            '/menu/scope-module/static-feed' : angularstaticfeed,
            '/multiple-files'                : multiplefiles,
            '/menu/level1-feed'              : angularstaticfeed,
            '/menu'                          : angularmenu
            }
    };


    var data = sampleModules;
    var config = data.config;
    var menu = data.children;

    return {
      get               : get,
      getModule         : getModule,
      getCurrentModules : getCurrentModules,
      getMenu           : getMenu,
      getLang           : getLang,
      setLang           : setLang,
      registerModule    : registerModule,
      loadconfig        : loadconfig,
      update            : update,
      onChange          : onChange
    };

    function get(){
      return data;
    }
    function getLang(){
      if(lang){
        return lang;
      }else{
        return config.lang;
      }
    }
    function setLang(locale){
      lang=locale;
    }
    function getMenu(){
      return menu;
    }
    function loadconfig($rootScope) {
      $translate.use(getLang());
      $rootScope['config'] = {
        googleAnalytics      : config.googleAnalytics
      };
      $rootScope.$watch('config.googleAnalytics', function(prev,next) {
        ga('create', $rootScope['config'].googleAnalytics, { 'cookieDomain': 'none' });
      });
    }

    function getModule(path, callback){
      var deferred = $q.defer();
      if(cachedLocations[path]){
        deferred.resolve(cachedLocations[path]);
      }
      else{
        findRoute(path, data, function(module){
          cachedLocations[path] = module;
          deferred.resolve(cachedLocations[path]);
        });
      }
      return deferred.promise;
    }

    function getCurrentModules($location, callback){
        var moduleList = [];
        var path = $location.$$path;
        var split = path.split("/");

        angular.forEach(split.reverse(), function(value, key) {
          if(value!=""){
            var moduleee = findRoute(path, data, function(module){
                moduleList.push(module);
            });
            path=path.replace("/"+value,"");
          }
        });
        // console.log("ModuleLIST",moduleList);
        callback(moduleList);
    }
    function registerModule($location, $scope, item){
      getCurrentModules( $location, function(modules){
        angular.forEach(modules, function(value, key) {
          if(modules[key+1]){
            $scope[modules[key+1].identifier+'Template'] = value.view;
          }
          if(modules[key].identifier==item){
            $scope[item] = {
              custom      : modules[key].name,
              modulescope : modules[key].scope
            };
            $translatePartialLoader.addPart(item);
          }
        });
      });
    }
    function update(newData){
      if(newData){
        data = newData;
        angular.forEach(listeners, function(listener){
          if(listener) listener(newData);
        });
      }else{
        return {
          message: "Structure data should not be null",
          error  : true
        };
      }
    }

    function onChange(callback){
      listeners.push[callback];
    }

    function findRoute(path, structure, callback){
      //*** Meter menu como parte de modulo si no esta definido cargar el default
      for(var key in structure){
        if(path === key){
          callback(structure[path]);
        }
        else if(path.indexOf(key) === 0){
          findRoute(path, structure[key].children, callback);
        }
      }
    }

  };