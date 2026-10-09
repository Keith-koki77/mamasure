// app/robots.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mamasure.com";

export default function robots(): MetadataRoute.Robots {
  // Block everything on Vercel preview/staging deployments
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  // Authenticated, financial, identity and technical paths
  const privatePaths = [
    "/api/",
    "/admin/",
    "/dashboard/",
    "/account/",
    "/profile/",
    "/wallet/",
    "/payments/",
    "/pay/",
    "/mpesa/",
    "/claims/",
    "/policies/",
    "/kyc/",
    "/verify/",
    "/onboarding/",
    "/auth/",
    "/login",
    "/signup",
    "/register",
    "/reset-password",
    "/*?*utm_",
    "/*?*ref=",
    "/*?*token=",
    "/*?*sessionid=",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      // AI training crawlers (remove any you're happy to allow)
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      // Scrapers that add load without benefit
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}