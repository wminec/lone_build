gdjs.evtsExt__func1__objFadeIn = {};
gdjs.evtsExt__func1__objFadeIn.GDobjObjects1= [];

gdjs.evtsExt__func1__objFadeIn.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__objFadeIn.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__objFadeIn.userFunc0x79ee60 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var obj = objects[0];
//console.log("lskdf");
if (obj.getOpacity() < 255) {
    //console.log(obj,"will created and fade in");
    //console.log("time : ",obj.getElapsedTime(runtimeScene) / 1000);
    obj.setOpacity(obj.getOpacity() + 500 * obj.getElapsedTime(runtimeScene) / 1000);
    if(eventsFunctionContext.getArgument("movePos") == 1){
        obj.setY(obj.getY()-0.5);
    }
    //console.log("obj opacity", obj.getOpacity());
}
};
gdjs.evtsExt__func1__objFadeIn.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__func1__objFadeIn.GDobjObjects1.createFrom(eventsFunctionContext.getObjects("obj"));

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__func1__objFadeIn.GDobjObjects1);
gdjs.evtsExt__func1__objFadeIn.userFunc0x79ee60(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__objFadeIn.eventsList0x5b7538


gdjs.evtsExt__func1__objFadeIn.func = function(runtimeScene, obj, movePos, parentEventsFunctionContext) {
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

gdjs.evtsExt__func1__objFadeIn.GDobjObjects1.length = 0;

gdjs.evtsExt__func1__objFadeIn.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

