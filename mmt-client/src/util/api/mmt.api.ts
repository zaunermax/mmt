import { BaseApi } from './base.api';
import { LoginUser } from '../../types/auth.types';

export const MmtApi = new (class MmtApiClass extends BaseApi {
  async login(userData: LoginUser): Promise<string> {
    return this.post<string>('auth/login', userData);
  }
})();
