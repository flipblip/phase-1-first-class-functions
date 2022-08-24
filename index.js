function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return function msgLogger(){
        console.log(`This function returns a named function`)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log(`This function returns an anonymous function`)
    }
}