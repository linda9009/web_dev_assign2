const arr = [1, 2, 3, 4]; //testing array
// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }

};

// MAP //
Array.prototype.myMap = function(callbackFN) {
    let new_array =[]
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined)  {new_array.push(this[i]); continue;}
        new_array.push(callbackFN(this[i], i, this))
    }
    return new_array
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let new_array =[]
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)) {
            new_array.push(this[i])
        }
    }
    return new_array
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    let value = false;
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)) {
            value = true;
        }
    }
    return value
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    let value = true;
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        if (!callbackFn(this[i], i, this)) {
            value = false;
        }
    }
    return value
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    let new_val = 0;
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined)continue;
        new_val = callbackFn(new_val, this[i],i, this)
    }
    return new_val;
};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for(let i = length; i< length + args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

