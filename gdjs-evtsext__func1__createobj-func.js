gdjs.evtsExt__func1__createObj = {};

gdjs.evtsExt__func1__createObj.conditionTrue_0 = {val:false};
gdjs.evtsExt__func1__createObj.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__func1__createObj.userFunc0x79ee60 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var fadeIn = eventsFunctionContext.getArgument("fadeIn");
//var obj = runtimeScene.createObject(eventsFunctionContext.getArgument("objName"));
function createObj(callback){
    var obj = runtimeScene.createObject(eventsFunctionContext.getArgument("objName"));
    //console.log(obj);
    callback(obj);
}

function settingObj(obj){
    obj.setX(eventsFunctionContext.getArgument("xPos"));
    obj.setY(eventsFunctionContext.getArgument("yPos"));
    obj.setZOrder(eventsFunctionContext.getArgument("zPos"));
    obj.setAnimation(eventsFunctionContext.getArgument("anim"));
    if(fadeIn == 1){ // init for fade in
        obj.setOpacity(0);
    }else{ // not fade in
        obj.setOpacity(255);
    }
}

createObj(function(obj){
    settingObj(obj);
    });
/*
obj.setX(eventsFunctionContext.getArgument("xPos"));
obj.setY(eventsFunctionContext.getArgument("yPos"));
console.log(obj);
obj.setZOrder(eventsFunctionContext.getArgument("zPos"));
obj.setAnimation(eventsFunctionContext.getArgument("anim"));
if(fadeIn == 1){ // init for fade in
    obj.setOpacity(0);
}else{ // not fade in
    obj.setOpacity(255);
}
*/
};
gdjs.evtsExt__func1__createObj.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__func1__createObj.userFunc0x79ee60(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__func1__createObj.eventsList0x5b7538


gdjs.evtsExt__func1__createObj.func = function(runtimeScene, objName, xPos, yPos, zPos, anim, fadeIn, parentEventsFunctionContext) {
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
if (argName === "objName") return objName;
if (argName === "xPos") return xPos;
if (argName === "yPos") return yPos;
if (argName === "zPos") return zPos;
if (argName === "anim") return anim;
if (argName === "fadeIn") return fadeIn;
    return "";
  }
};


gdjs.evtsExt__func1__createObj.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

