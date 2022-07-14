import { RequestHandler } from "express";
import { APIResponse } from "typings/general";

/**
 * This is the function type for the GraphQL resolver.
 *
 * This type accepts four generic arguments:
 *
 * i. Param -> This defines the req params type of the request. If there is no params pass void.
 *
 * ii. ResponseData -> This defines the data object of the response.
 *
 * iii. RequestBody -> This defines the body elements of the request. If there is no body elements then pass void.
 *
 * iv. Query -> This defines the queries passed in the request. If there are no queries then pass void.
 */

export type Controller<Param = void, ResponseData = void, RequestBody = void, Query = void> = RequestHandler<
	Param,
	APIResponse<ResponseData>,
	RequestBody,
	Query
>;
