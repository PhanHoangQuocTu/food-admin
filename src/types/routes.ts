export const ROUTE = {
  HOME: '/',
  ME: '/me',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PRODUCT_MANAGEMENT: '/product-management',
} as const;

export type ROUTE_KEY = keyof typeof ROUTE;

export const MAPPING_ROUTE_TITLE = {} as unknown as Record<ROUTE_KEY, string>;
