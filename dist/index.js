"use strict";
Promise.prototype.withErrors = function () {
    return this
        .then(data => [data, undefined])
        .catch(err => [undefined, new Error(err)]);
};
