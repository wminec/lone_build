gdjs.evtsExt__func1__fadeOut = {};
gdjs.evtsExt__func1__fadeOut.GDobjObjects1= [];

gdjs.evtsExt__func1__fadeOut.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__fadeOut.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__fadeOut.userFunc0x7a5280 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var obj = objects[0];

if (obj.getOpacity() > 0) {
    //console.log(objects,"will fade out and deleted");
    //console.log("time : ",obj.getElapsedTime(runtimeScene) / 1000);
    obj.setOpacity(obj.getOpacity() - 500 * obj.getElapsedTime(runtimeScene) / 1000);
    if(eventsFunctionContext.getArgument("movePos") == 1){
        obj.setY(obj.getY()+0.5);
    }
    //console.log(obj.getOpacity());
}

};
gdjs.evtsExt__func1__fadeOut.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__func1__fadeOut.GDobjObjects1.createFrom(eventsFunctionContext.getObjects("obj"));

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__func1__fadeOut.GDobjObjects1);
gdjs.evtsExt__func1__fadeOut.userFunc0x7a5280(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__fadeOut.eventsList0x5b7538


gdjs.evtsExt__func1__fadeOut.func = function(runtimeScene, obj, movePos, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"obj": obj
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "movePos") return movePos;
    return "";
  }
};

gdjs.evtsExt__func1__fadeOut.GDobjObjects1.length = 0;

gdjs.evtsExt__func1__fadeOut.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

