/* Sync */
function add(x,y){
    console.log('[SP] processing ', x, ' and ', y);
    var result = x + y;
    console.log('[SP] returning result');
    return result;
}

function addClient(x,y){
    console.log('[SC] triggering add');
    var result = add(x,y);
    console.log('[SC] result = ', result);
}

/* Async */
function addAsync(x,y, onResult){
    console.log('[SP] processing ', x, ' and ', y);
    setTimeout(function(){
        var result = x + y;
        console.log('[SP] returning result');
        onResult(result);
    },5000);
}

function addAsyncClient(x,y){
    console.log('[SC] triggering add');
    addAsync(x,y, function(result){
        console.log('[SC] result = ', result);
    });
}

/* Async Using Promise*/

function addAsync(x,y){
    console.log('[SP] processing ', x, ' and ', y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log('[SP] returning result');
            resolve(result);
        },5000);
    });

    return promise;
}

function addAsyncClient(x,y){
    console.log('[SC] triggering add');
    var promise = addAsync(x,y);
    promise.then(function(result){
        console.log('[SC] result = ', result);
    });
    return promise;
}






























