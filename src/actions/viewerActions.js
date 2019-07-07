import * as types from './viewerTypes';

export function getViewerProperties(properties = []) {
  //console.log('action', properties)
    console.log(JSON.stringify(properties));
  return {
    type: types.GET_AGGREGATE_PROPERTIES,
    properties,
  }
}
