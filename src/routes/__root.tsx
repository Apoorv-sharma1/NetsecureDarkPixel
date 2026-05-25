import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SITE } from "@/lib/site";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-7xl font-bold text-primary">404</div>
        <h1 className="mt-2 font-display text-2xl font-bold text-foreground">
          पृष्ठ नहीं मिला · Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist. Let's get you back to safer ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-muted"
          >
            About
          </Link>
          <Link
            to="/donate"
            className="rounded-lg bg-saffron px-4 py-2.5 text-sm font-bold text-saffron-foreground hover:brightness-110"
          >
            Donate
          </Link>
          <Link
            to="/engage"
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-muted"
          >
            Volunteer
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-muted"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["NGO", "Organization"],
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  logo: `${SITE.url}/logo.png`,
  description:
    "Rajasthan's registered Section 8 non-profit for free cybercrime awareness education for students, women & professionals.",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: "S-3, 104, Gopi Residency, Manyawas, Kiran Vihar, Mansarovar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302020",
    addressCountry: "IN",
  },
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin, SITE.social.youtube],
  identifier: SITE.cin,
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NetSecure Foundation | Cyber Awareness NGO Rajasthan" },
      {
        name: "description",
        content:
          "NetSecure Foundation is Rajasthan's registered Section 8 non-profit for free cybercrime awareness education across schools, women & professionals.",
      },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#0A1628" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitter },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(ORG_SCHEMA) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="theme-cyber-dark" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
