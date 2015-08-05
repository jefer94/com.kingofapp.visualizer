angular
  .module('king.core.structureService', [])
  .factory('structureService', structureService);

  //structureService.$inject = ['$location'];

  function structureService(){

    var listeners = [];
    var cachedLocations = {};

    var angularscope = {
      name: 'Angular Scope Module',
      identifier: 'angularscope',
      type: 'A',
      view: "modules/angular-scope/index.html",
      ctrl: "modules/angular-scope/controller.js",
      scope: {
        config: ""
      }
    };
    var facebookfeed = {
      name: 'Facebook Feed',
      identifier: 'facebookfeed',
      type: 'A',
      view: "modules/facebook-feed/index.html",
      ctrl: "modules/facebook-feed/controller.js",
      scope: {
        accesstoken : "583995668377553|9CrhjgiahQTZQ-l4E40edyNgh0k",
        pageid      : "laneveraroja"
      }
    };
    var twitterfeed = {
      name: 'Twitter Feed',
      identifier: 'twitterfeed',
      type: 'A',
      view: "modules/twitter-feed/index.html",
      ctrl: "modules/twitter-feed/controller.js",
      scope: {
        accesstoken : "583995668377553|9CrhjgiahQTZQ-l4E40edyNgh0k",
        pageid      : "laneveraroja"
      }
    };
    var text = {
      name: 'Text Example',
      identifier: 'text',
      type: 'A',
      view: "modules/text/index.html",
      ctrl: "modules/text/controller.js",
      scope: {
        value: "On a dare, Kylie Nicole breaks into neighborhood tough guy Jordan Ash’s house. But when Jordan comes home and busts her hiding in his pantry"
      }
    };
    var simpledirective = {
      name: 'Simple directive',
      identifier: 'text',
      type: 'A',
      view: "modules/simple-directive/index.html",
      ctrl: "modules/simple-directive/controller.js",
      scope: {
        value: "Random text"
      }
    };
    var embed = {
      name: 'Embed Example',
      identifier: 'embed',
      type: 'A',
      view: "modules/embed/index.html",
      ctrl: "modules/embed/controller.js",
      scope: {
        url: "http://www.brazzers.com/pornstars/"
      }
    };
    var html = {
      name: 'Html Example',
      identifier: 'html',
      type: 'A',
      view: "modules/html/index.html",
      ctrl: "modules/html/controller.js",
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
      view: "modules/angular-scope/index.html",
      ctrl: "modules/angular-scope/controller.js",
      scope: {
        config: ""
      }
    };

    var angularmenu = {
      name: 'Angular Menu Module',
      identifier: 'angularmenu',
      type: 'A',
      view: "modules/angular-menu/index.html",
      ctrl: "modules/angular-menu/controller.js",
    };
    var angularstaticfeed = {
      name: 'Angular Static Feed Module',
      identifier: 'angularstaticfeed',
      type: 'A',
      view: "modules/angular-staticfeed/index.html",
      ctrl: "modules/angular-staticfeed/controller.js",
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
            '/menu'                          : angularmenu,
            '/menu/simple-directive'         : simpledirective,
            '/menu/text'                     : text,
            '/menu/html'                     : html,
            '/menu/embed'                    : embed,
            '/menu/twitter'                  : twitterfeed,
            '/menu/facebook'                 : facebookfeed,
            '/scope'                         : angularscope,
            '/feed'                          : angularstaticfeed,
            '/menu/scope-module'             : angularscope,
            '/menu/scope-diff-module'        : angulardiffscope,
            '/menu/scope-same-module'        : angularscope,
            '/menu/scope-module/static-feed' : angularstaticfeed,
            '/menu/level1-feed'              : angularstaticfeed
            }
    };

    var data = {
          '/': {
            name     : 'Home',
            type     : 'A',
            view     : "modules/angular-menu/index.html",
            ctrl     : "modules/angular-menu/controller.js",
            children : menu.items
          }
        };

    return {
      get               : get,
      getCurrent        : getCurrent,
      getModulefromPath : getModulefromPath,
      getCurrentModules : getCurrentModules,
      getMenu           : getMenu,
      registerModule    : registerModule,
      update            : update,
      onChange          : onChange
    }

    function get(){
      return data;
    }

    function getMenu(){
      return menu;
    }

    function getModulefromPath(path, callback){
      if(cachedLocations[path]){
        callback(cachedLocations[path]);
      }
      else{
        findRoute(path, data, function(module){
          cachedLocations[path] = module;
          callback(module);
        });
      }
    }

    function getCurrent($location, callback){
      if(cachedLocations[$location.$$path]){
        callback(cachedLocations[$location.$$path]);
      }
      else{
        findRoute($location.$$path, data, function(module){
          cachedLocations[$location.$$path] = module;
          callback(module);
        });
      }
    }
    function getCurrentModules($location, callback){
        var moduleList = []
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
          if(structure[path].menu==null){
            structure[path].menu = menu.defaultMenu;
          }
          callback(structure[path]);
        }
        else if(path.indexOf(key) === 0){
          findRoute(path, structure[key].children, callback);
        }
      }
    }

  };
