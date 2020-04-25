gdjs.evtsExt__func1__deleteObj = {};
gdjs.evtsExt__func1__deleteObj.GDobjObjects1= [];

gdjs.evtsExt__func1__deleteObj.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__deleteObj.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__deleteObj.userFunc0x7393f8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var obj = objects[0];
obj.deleteFromScene(runtimeScene);
};
gdjs.evtsExt__func1__deleteObj.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__func1__deleteObj.GDobjObjects1.createFrom(eventsFunctionContext.getObjects("obj"));

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__func1__deleteObj.GDobjObjects1);
gdjs.evtsExt__func1__deleteObj.userFunc0x7393f8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__deleteObj.eventsList0x5b7538


gdjs.evtsExt__func1__deleteObj.func = function(runtimeScene, obj, parentEventsFunctionContext) {
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
    return "";
  }
};

gdjs.evtsExt__func1__deleteObj.GDobjObjects1.length = 0;

gdjs.evtsExt__func1__deleteObj.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

