
var MyQueue = function () {
    this.internal = [];
    this.output = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.internal.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    var size = this.internal.length;
    for (var i = 0; i < size - 1; i++) {
        this.output.push(this.internal.pop())
    }
    var response = this.internal.pop();
    var outSize = this.output.length;


    for (var i = 0; i < outSize; i++) {
        this.internal.push(this.output.pop())
    }
    return response;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    var size = this.internal.length;
    for (var i = 0; i < size - 1; i++) {
        this.output.push(this.internal.pop())
    }
    var response = this.internal.pop();
    this.output.push(response)
    var outSize = this.output.length;


    for (var i = 0; i < outSize; i++) {
        this.internal.push(this.output.pop())
    }
    return response;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.internal.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
