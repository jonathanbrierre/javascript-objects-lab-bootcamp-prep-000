var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject={}
  Object.assign(newObject,object,{[key]: value})
  return(newObject)
}



function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  Object.assign(object,{[key]: value})
  return object
}

function deleteFromObjectByKey(object, key){
  
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
