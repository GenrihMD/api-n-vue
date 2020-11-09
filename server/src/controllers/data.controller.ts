// Uncomment these imports to begin using these cool features!

import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/core';

// import {inject} from '@loopback/core';


export class DataController {
  constructor() {}

  @get('/data')
  getData(): object {
    return {}
  }
}
