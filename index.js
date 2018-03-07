'use strict'

const nothing = undefined

function set (obj, path, val) {
  let prop = '' + path

  path = path.split('.')

  /* istanbul ignore else */
  if (path.length === 1 || obj.hasOwnProperty(prop)) {
    obj[ prop ] = val
  } else if (path.length > 1) {
    if (!obj.hasOwnProperty(path[ 0 ])) {
      obj[path[ 0 ]] = {}
    }
    obj[path[ 0 ]] = set(obj[path[ 0 ]], path.slice(1).join('.'), val)
  }

  return obj
}

function get (obj, path) {
  let prop = '' + path
  let result = nothing

  path = path.split('.')

  if (obj.hasOwnProperty(prop)) {
    result = obj[ prop ]
  } else if (path.length !== 0 && obj.hasOwnProperty(path[ 0 ])) {
    result = get(obj[path[ 0 ]], path.slice(1).join('.'))
  }

  return result
}

function has (obj, path) {
  let result = get(obj, path)

  if (typeof result === 'undefined') {
    return false
  }

  return true
}

function remove (obj, path) {
  let prop = '' + path

  path = path.split('.')

  if (obj.hasOwnProperty(prop)) {
    delete obj[ prop ]
    return obj
  } else if (path.length !== 0 && obj.hasOwnProperty(path[ 0 ])) {
    obj[path[ 0 ]] = remove(obj[path[ 0 ]], path.slice(1).join('.'))
  }

  return obj
}

module.exports = {
  set,
  get,
  has,
  remove
}
