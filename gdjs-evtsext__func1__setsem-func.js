gdjs.evtsExt__func1__setSem = {};

gdjs.evtsExt__func1__setSem.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__setSem.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__setSem.userFunc0x79ee60 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var sem = runtimeScene.getVariables().get("sem").getAsNumber();
if(sem == 0){
    sem = 1;
}else{
    sem = 0;
}
runtimeScene.getVariables().get("sem").setNumber(sem);
};
gdjs.evtsExt__func1__setSem.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__func1__setSem.userFunc0x79ee60(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__setSem.eventsList0x5b7538


gdjs.evtsExt__func1__setSem.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  }
};


gdjs.evtsExt__func1__setSem.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

