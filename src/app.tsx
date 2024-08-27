// @refresh reload
import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

// =================================================================

export default function Root() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Vitesse</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Link rel="apple-touch-icon" href="/pwa-192x192.png" />
          <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9" />
          <Meta name="msapplication-TileColor" content="#00aba9" />
          <Meta
            name="description"
            content="Opinionated Vite Starter Template"
          />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
