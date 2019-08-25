import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  private readonly env = process.env.NODE_ENV || 'development';

  constructor() {
    this.envConfig = dotenv.parse(fs.readFileSync(`${this.env}.env`));
  }

  get(key: string): string {
    const value = this.envConfig[key];
    if (!value) throw new Error(`${key} is not set in ${this.env}.env`);
    return value;
  }
}
