// // @refresh reload
// import { Suspense, ErrorBoundary } from 'solid-js'
// import { Body, Head, Html, Link, Meta, Scripts, Title } from '@solidjs/meta'
// // import { MetaProvider, Title } from "@solidjs/meta";

// import DefaultLayout from './layouts/default'
// import { I18nProvider } from './locales'
// import './styles/root.css'
// import 'uno.css'
// import '@unocss/reset/tailwind.css'

// export default function Root() {
//   return (
//     <Html lang="en">
//       <Head>
//         <Title>Vitesse</Title>
//         <Meta charset="utf-8" />
//         <Meta name="viewport" content="width=device-width, initial-scale=1" />
//         <Link rel="apple-touch-icon" href="/pwa-192x192.png" />
//         <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9" />
//         <Meta name="msapplication-TileColor" content="#00aba9" />
//         <Meta name="description" content="Opinionated Vite Starter Template" />
//       </Head>
//       <Body class="font-sans">
//         <Suspense>
//           <ErrorBoundary>
//             <I18nProvider>
//               <DefaultLayout />
//             </I18nProvider>
//           </ErrorBoundary>
//         </Suspense>
//         <Scripts />
//       </Body>
//     </Html>
//   )
// }

import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
// import Nav from "~/components/Nav";
// import "./app.css";
export default function Root() {
  return (
    <Router
      root={(props) => (
        <>
          {/*<Nav />*/}
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
