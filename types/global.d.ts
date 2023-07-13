declare type Fn<Args extends any[] = any[], Return = any> = (...args: Args) => Return;

declare interface PromiseFn<Args extends any[] = any[], R = Args> {
  (...arg: Args[]): Promise<R>;
}
