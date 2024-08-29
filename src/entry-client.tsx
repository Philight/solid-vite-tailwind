// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// =================================================================

async function deferRender() {
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    const { worker } = await import("./_mocks/browser");
    return worker.start();
  }

  return Promise.resolve();
}

// =================================================================

deferRender().then(() => {
  mount(() => <StartClient />, document.getElementById("app")!);
});
