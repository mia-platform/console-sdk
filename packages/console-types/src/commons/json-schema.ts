import type { JSONSchema7TypeName, JSONSchema7 as OriginalJSONSchema7 } from 'json-schema'

declare const $JSONSchema7: unique symbol

type $JSONSchema7 = typeof $JSONSchema7

type PropsToOverride = 'type' | 'const' | 'enum' | 'items' | 'additionalItems' | 'contains' | 'properties' | 'required' | 'patternProperties' | 'additionalProperties' | 'dependencies' | 'propertyNames' | 'if' | 'then' | 'else' | 'allOf' | 'anyOf' | 'oneOf' | 'not' | 'definitions' | 'examples' | 'default'

type JSONSchema7 = boolean | (Omit<OriginalJSONSchema7, PropsToOverride> & Readonly<{
  [$JSONSchema7]?: $JSONSchema7;
  type?: JSONSchema7TypeName | readonly JSONSchema7TypeName[];
  const?: unknown;
  enum?: unknown;
  items?: JSONSchema7 | readonly JSONSchema7[];
  additionalItems?: JSONSchema7;
  contains?: JSONSchema7;
  properties?: Readonly<Record<string, JSONSchema7>>;
  required?: readonly string[];
  patternProperties?: Readonly<Record<string, JSONSchema7>>;
  additionalProperties?: JSONSchema7;
  dependencies?: Readonly<Record<string, JSONSchema7 | readonly string[]>>;
  propertyNames?: JSONSchema7;
  if?: JSONSchema7;
  then?: JSONSchema7;
  else?: JSONSchema7;
  allOf?: readonly JSONSchema7[];
  anyOf?: readonly JSONSchema7[];
  oneOf?: readonly JSONSchema7[];
  not?: JSONSchema7;
  nullable?: boolean;
  definitions?: Readonly<Record<string, JSONSchema7>>;
  examples?: readonly unknown[];
  default?: unknown;
  deprecated?: boolean
}>)

export type JSONSchema = JSONSchema7
