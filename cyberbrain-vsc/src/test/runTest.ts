// import * as path from "path";

// import { runTests } from "vscode-test";
import { spawnSync } from "child_process";

async function main() {
  // try {
  //   // The folder containing the Extension Manifest package.json
  //   // Passed to `--extensionDevelopmentPath`
  //   const extensionDevelopmentPath = path.resolve(__dirname, "../../");

  //   // The path to test runner
  //   // Passed to --extensionTestsPath
  //   const extensionTestsPath = path.resolve(__dirname, "./suite/index");

  //   // Download VS Code, unzip it and run the integration test
  //   await runTests({ extensionDevelopmentPath, extensionTestsPath });
  // } catch (err) {
  //   console.error("Failed to run tests");
  //   process.exit(1);
  // }
  const childProcess = spawnSync("pdm", ["info"]);
  if (childProcess.stdout.toString() == "") {
    throw "Failed";
  } else {
    console.log(childProcess.stdout.toString());
  }
}

main();
