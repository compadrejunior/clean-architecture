import { Request, Response } from 'express';

/**
 * @description HTTP methods
 */
export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

/**
 * @description HTTP methods
 */
export const HttpMethod = {
  GET: 'get' as HttpMethod,
  POST: 'post' as HttpMethod,
  PUT: 'put' as HttpMethod,
  PATCH: 'patch' as HttpMethod,
  DELETE: 'delete' as HttpMethod,
};

/**
 * @description Route interface
 */
export default interface Route {
  /**
   * Returns the handler for the route
   * @param request - The request object
   * @param response - The response object
   * @returns The handler for the route
   */
  getHandler(): (request: Request, response: Response) => Promise<void>;

  /**
   * Returns the path for the route
   * @returns The path for the route
   */
  getPath(): string;

  /**
   * Returns the HTTP method for the route
   * @returns The HTTP method for the route
   */
  getMethod(): HttpMethod;
}
