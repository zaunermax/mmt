export type MapToOptional<T> = { [P in keyof T]?: T[P] };
export type Maybe<T> = T | undefined;
export type Nullable<T> = T | null;
