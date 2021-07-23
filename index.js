import { EventEmitter } from "./EventEmitter/EventEmitter";

const eventEmitter = new EventEmitter();
window.EM = eventEmitter;

import './Elements/input-component.js';
import './Elements/button-component.js';