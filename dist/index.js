"use strict";
Promise.prototype.withErrors = function () {
    return this
        .then(data => data)
        .catch(err => err);
};
