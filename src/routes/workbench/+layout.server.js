import { getPropSchemas } from "./prop-schema.server.js";

export function load() {
	return { propSchemas: getPropSchemas() };
}