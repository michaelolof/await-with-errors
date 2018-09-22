interface Promise<T> {
  withErrors():Promise<[T | Error]>;
}

Promise.prototype.withErrors = function() {
  return this
  .then( data => data )
  .catch( err => new Error( err ) )
}

