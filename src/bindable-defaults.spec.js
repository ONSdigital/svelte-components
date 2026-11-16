import fs from "node:fs";
import { expect, test } from "vitest";
import { listComponents, parseProps } from "../scripts/prop-docs.js";

// A bindable prop with a default in $props() (eg. `value = $bindable(null)`) throws
// `props_invalid_value` when a parent binds a variable that starts undefined. Set the default in the
// script instead: `value = $bindable()`, then `if (value === undefined) value = null;`.
test("no bindable prop has a default in $props()", () => {
	const offenders = listComponents().flatMap((file) =>
		(parseProps(fs.readFileSync(file, "utf8"))?.props ?? [])
			.filter((p) => p.bindable && p.defaultValue !== undefined && !p.defaultInScript)
			.map((p) => `${file}: ${p.name}`)
	);
	expect(offenders).toEqual([]);
});
