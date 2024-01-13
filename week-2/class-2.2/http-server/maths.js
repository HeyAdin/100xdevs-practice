// This is Maths module

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}


// One way to export
module.exports = {
    add,
    sub,
    product
};

// Another way is by using exports

exports.add = (a,b)=> a+b;
exports.sub = (a,b)=> a-b;
exports.product = (a,b)=> a*b;