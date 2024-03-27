/**
 * Default resources types
 */
export const CONSOLE_DEFAULT_RESOURCES_TYPES: string[] = [

  /**
   * Plugins
   */
  'plugin',

  /**
   * Applications
   */
  'application',

  /**
   * Templates
   */
  'template',

  /**
   * Examples
   */
  'example',
] as const

/**
 * Custom Resource Definition
 */
export const MARKETPLACE_CRD_RESOURCE_TYPE
  = 'custom-resource-definition' as const

/**
 * Reserved marketplace resource types used by the console
 */
export const RESERVED_MARKETPLACE_RESOURCE_TYPES = [
  ...CONSOLE_DEFAULT_RESOURCES_TYPES,
  MARKETPLACE_CRD_RESOURCE_TYPE,
] as const
