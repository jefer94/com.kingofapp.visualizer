angular
  .module('king.services.puship',[])
  .run(['configService', function (configService) {

    if(configService.services && configService.services.puship){
      console.log("Loading Puship config ...");
      load(configService.services.puship.scope);
    }
    function load(config) {
      PushipAppId = config.PushipAppId;
      GCMCode = config.GCMCode;
      document.addEventListener("deviceready", function(){
        var Puship = window.plugins.puship;
        Puship.EnableLog = true;
        Puship.PushipAppId = PushipAppId; // From Puship.com application id

        if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
          // var GCMCode = GCMCode; // From Google Cloud Messaging - Proyect Number
          Puship.GCM.Register(GCMCode,
          {
            successCallback: function (pushipresult){
              console.log("device registered with DeviceId:" + pushipresult.DeviceId);
            },
            failCallback: function (pushipresult){
              console.log("error during registration: "+ JSON.stringify(pushipresult));
            }
          });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.IOS){
          Puship.APNS.Register(
          {
            successCallback: function (pushipresult){
              console.log("device registered with DeviceId:" + pushipresult.DeviceId);
            },
            failCallback: function (pushipresult){
              console.log("error during registration: "+ JSON.stringify(pushipresult));
            }
          });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.WP){
          Puship.WP.Register(
          {
            successCallback: function (pushipresult){
              console.log("device registered with DeviceId:" + pushipresult.DeviceId);
            },
            failCallback: function (pushipresult){
              console.log("error during registration: "+ JSON.stringify(pushipresult));
            }
          });
        } else {
          Console.log("Not supported platform");
        }
      }, false);

    }
  }]);