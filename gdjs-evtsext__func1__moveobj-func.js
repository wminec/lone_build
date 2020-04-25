gdjs.evtsExt__func1__moveObj = {};
gdjs.evtsExt__func1__moveObj.GDobjObjects1= [];

gdjs.evtsExt__func1__moveObj.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__moveObj.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__moveObj.userFunc0x79ee60 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var obj = objects[0];

obj.setX(eventsFunctionContext.getArgument("xPos"));
obj.setY(eventsFunctionContext.getArgument("yPos"));
obj.setZOrder(eventsFunctionContext.getArgument("zPos"));
};
gdjs.evtsExt__func1__moveObj.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__func1__moveObj.GDobjObjects1.createFrom(eventsFunctionContext.getObjects("obj"));

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__func1__moveObj.GDobjObjects1);
gdjs.evtsExt__func1__moveObj.userFunc0x79ee60(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__moveObj.eventsList0x5b7538


gdjs.evtsExt__func1__moveObj.func = function(runtimeScene, obj, xPos, yPos, zPos, parentEventsFunctionContext) {
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
if (argName === "xPos") return xPos;
if (argName === "yPos") return yPos;
if (argName === "zPos") return zPos;
    return "";
  }
};

gdjs.evtsExt__func1__moveObj.GDobjObjects1.length = 0;

gdjs.evtsExt__func1__moveObj.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

