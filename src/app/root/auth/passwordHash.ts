import { SHA256, enc } from 'crypto-js';

export function hashPassword(input: string): string {
    return SHA256(input).toString(enc.Hex);
  }
