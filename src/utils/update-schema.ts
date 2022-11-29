import type { Class } from "type-fest";
import { SCHEMA_KEY } from "../constants";

export function updateSchema (target: Class<any>, key: string | symbol, options: any): void {
  const s = Reflect.getOwnMetadata(SCHEMA_KEY, target) ?? {};
  if(s[key]) s[key] = [s[key], options]
  else s[key] = options;
  Reflect.defineMetadata(SCHEMA_KEY, s, target);
}
