// Runs before `pnpm dev`, `pnpm build` and `pnpm check-types`. (Not as a
// preinstall script: pnpm skips those when the install is already up to date.)
//
// A pnpm-workspace.yaml or pnpm-lock.yaml inside an app makes pnpm treat that
// app as its own project, which installs a second copy of every dependency
// (e.g. two @types/react, breaking type checks). Tools like create-next-app or
// shadcn can generate these files.
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const strays = ["apps", "packages"]
  .filter((dir) => existsSync(dir))
  .flatMap((dir) => readdirSync(dir).map((name) => join(dir, name)))
  .flatMap((pkg) =>
    ["pnpm-workspace.yaml", "pnpm-lock.yaml"]
      .map((file) => join(pkg, file))
      .filter((path) => existsSync(path)),
  );

if (strays.length > 0) {
  console.error(
    [
      "These files make an app a separate pnpm project:",
      ...strays.map((path) => `  - ${path}`),
      "",
      "Move any settings into the root pnpm-workspace.yaml, delete these files",
      "and that app's node_modules, then run `pnpm install` from the repo root.",
      "Add packages from the root too: pnpm add <package> --filter <app>",
    ].join("\n"),
  );
  process.exit(1);
}
