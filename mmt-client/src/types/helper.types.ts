export type Nullable<T> = T | null;
export type MapToOptional<T> = { [P in keyof T]?: T[P] };
