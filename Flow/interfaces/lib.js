// interfaces/underscore.js
declare class Angular {
    module(string, any): any;
    bootstrap(any,any):any;
}

declare var angular: Angular;


declare class Require {
    config(any): any;
    constructor(any,any): any;
    // ...
};
declare var require: Require;

declare function define(any,any): any;