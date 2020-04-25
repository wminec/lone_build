gdjs.evtsExt__func1__setSen = {};

gdjs.evtsExt__func1__setSen.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__setSen.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__setSen.userFunc0x7a5280 = function(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene.getVariables().get("sen").setNumber(eventsFunctionContext.getArgument("sen"));
};
gdjs.evtsExt__func1__setSen.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__func1__setSen.userFunc0x7a5280(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__setSen.eventsList0x5b7538


gdjs.evtsExt__func1__setSen.func = function(runtimeScene, sen, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
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
if (argName === "sen") return sen;
    return "";
  }
};


gdjs.evtsExt__func1__setSen.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

