interface Promise<T> {
  withErrors():Promise<[T, Error | undefined]>;
}

//@ts-ignore
Promise.prototype.withErrors = function() {
  return this
  .then( data =>  [ data, undefined ] )
  .catch( err => [ undefined, new Error( err ) ] )
}

