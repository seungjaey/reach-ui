import type { defineConfig } from "tsup";
import { getTsupConfig, getPackageInfo } from "@reach-fork-hamtolchu-internal/dev/tsup.js";

type TsupConfig = ReturnType<typeof defineConfig>;

let { name: packageName, version: packageVersion } = getPackageInfo(__dirname);
let cfg: TsupConfig = getTsupConfig("src/reach-menu-button.tsx", {
	packageName,
	packageVersion,
});
export default cfg;
