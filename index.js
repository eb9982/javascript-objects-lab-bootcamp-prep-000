var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, {[key] : value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object,key) {
  const object2 = object
  delete object2[key]
  return object
}
