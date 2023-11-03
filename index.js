function receivesAFunction (callback) {
    return callback();
}
receivesAFunction(callback)

function returnsANamedFunction(){
    return function named(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
}