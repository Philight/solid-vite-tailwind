// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// =================================================================

async function deferRender() {
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    console.log("worker.start() before import");
    const { worker } = await import("./_mocks/browser");
    console.log("worker.start() after import");
    return worker.start();
  }

  return Promise.resolve();
}

// =================================================================

// deferRender().then(() => {
//   mount(() => <StartClient />, document.getElementById("app")!);
// });

deferRender().then(() => {
  mount(() => <StartClient />, document.getElementById("app")!);
});
