gdjs.evtsExt__func1__setEt = {};

gdjs.evtsExt__func1__setEt.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__setEt.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__setEt.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("et").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("st")));
}}

}


}; //End of gdjs.evtsExt__func1__setEt.eventsList0x5b7538


gdjs.evtsExt__func1__setEt.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__func1__setEt.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

