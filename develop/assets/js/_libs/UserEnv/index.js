'use strict';

import UAParser from 'ua-parser-js';

let instance = null;

export default class UserEnv {
  constructor() {
    if (!instance) instance = this;

    this._uaParser = new UAParser();
    this._isPC = null;
    this._isTablet = null;
    this._isSP = null;
    this._isIos = null;
    this._isAndroid = null;
    this._isIE = null;
    return instance;
  }

  static getInstance() {
    if (!instance) instance = new UserEnv();
    return instance;
  }

  static get isPC() {
    return UserEnv.getInstance().isPC;
  }
  static get isTablet() {
    return UserEnv.getInstance().isTablet;
  }
  static get isSP() {
    return UserEnv.getInstance().isSP;
  }
  static get isIos() {
    return UserEnv.getInstance().isIos;
  }
  static get isAndroid() {
    return UserEnv.getInstance().isAndroid;
  }
  static get isIE() {
    return UserEnv.getInstance().isIE;
  }

  get isPC() {
    if (this._isPC) return this._isPC;

    const device = this._uaParser.getDevice();
    this._isPC = device.type == undefined ? true : false;
    return this._isPC;
  }
  get isTablet() {
    if (this._isTablet) return this._isTablet;

    const device = this._uaParser.getDevice();
    this._isTablet = device.type == 'tablet' ? true : false;
    return this._isTablet;
  }
  get isSP() {
    if (this._isSP) return this._isSP;

    const device = this._uaParser.getDevice();
    this._isSP = device.type == 'mobile' ? true : false;
    return this._isSP;
  }
  get isIos() {
    if (this._isIos) return this._isIos;

    const os = this._uaParser.getOS();
    this._isIos = os.name.toLowerCase().indexOf('ios') > -1 ? true : false;
    return this._isIos;
  }
  get isAndroid() {
    if (this._isAndroid) return this._isAndroid;

    const os = this._uaParser.getOS();
    this._isAndroid = os.name.toLowerCase().indexOf('android') > -1 ? true : false;
    return this._isAndroid;
  }
  get isIE() {
    if (this._isIE) return this._isIE;

    const browser = this._uaParser.getBrowser();
    this._isIE = browser.name.toLowerCase().indexOf('ie') > -1 ? true : false;
    return this._isIE;
  }
}
