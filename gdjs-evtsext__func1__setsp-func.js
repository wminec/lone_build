gdjs.evtsExt__func1__setSP = {};

gdjs.evtsExt__func1__setSP.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__setSP.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__setSP.userFunc0x79ee60 = function(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene.getVariables().get("sp").setNumber(eventsFunctionContext.getArgument("nextSP"));
};
gdjs.evtsExt__func1__setSP.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__func1__setSP.userFunc0x79ee60(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__setSP.eventsList0x5b7538


gdjs.evtsExt__func1__setSP.func = function(runtimeScene, nextSP, parentEventsFunctionContext) {
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
if (argName === "nextSP") return nextSP;
    return "";
  }
};


gdjs.evtsExt__func1__setSP.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

