interface Promise<T> {
    withErrors(): Promise<[T | Error]>;
}
