import axios from 'axios';
import { Nullable } from '../../types/helper.types';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Data = { [key: string]: string };

type BaseRequestData = {
  method: Method;
  resource: string;
  data: Data;
  headers?: string[];
};

export class BaseApi {
  private base: Nullable<string> = null;
  private token: Nullable<string> = null;

  set Base(base: Nullable<string>) {
    this.base = base;
  }

  get Base(): Nullable<string> {
    return this.base;
  }

  set Token(token: Nullable<string>) {
    this.token = token;
  }

  get Token(): Nullable<string> {
    return this.token;
  }

  protected async baseRequest<T>({
    method,
    resource,
    data,
    headers,
  }: BaseRequestData): Promise<T> {
    if (!this.base) throw new Error('Base url not set.');

    try {
      const addedHeaders: Data = {};

      if (this.token) addedHeaders['Authorization'] = this.token;

      const { data: res }: { data: T } = await axios({
        url: this.base + resource,
        method,
        data,
        headers: {
          ...addedHeaders,
          ...headers,
        },
      });

      return res;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  protected get<T>(resource: string, data: Data): Promise<T> {
    return this.baseRequest<T>({ method: 'GET', resource, data });
  }

  protected post<T>(resource: string, data: Data): Promise<T> {
    return this.baseRequest<T>({ method: 'POST', resource, data });
  }

  protected delete<T>(resource: string, data: Data): Promise<T> {
    return this.baseRequest<T>({ method: 'DELETE', resource, data });
  }
}
