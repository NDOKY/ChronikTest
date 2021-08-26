Array.prototype.reduce = function(callBack){
    var acc = 0;

    for (let index = 0; index < this.length; index++) {
        callBack(acc = acc+this[index]);
    }

    return acc;
}