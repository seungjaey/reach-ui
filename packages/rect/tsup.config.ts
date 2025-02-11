import type { defineConfig } from "tsup";
import { getTsupConfig, getPackageInfo } from "@reach-fork-internal/dev/tsup.js";

type TsupConfig = ReturnType<typeof defineConfig>;

let { name: packageName, version: packageVersion } = getPackageInfo(
	// @ts-expect-error
	__dirname
);
let cfg: TsupConfig = getTsupConfig(`src/reach-rect.tsx`, {
	packageName,
	packageVersion,
});
export default cfg;
