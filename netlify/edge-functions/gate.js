// Keep the gallery, compare page, and pricing behind an approved Identity session.
// Invite waitlist emails from the Netlify Identity UI (registration: Invite only).
import { getUser } from "@netlify/identity";

/**
 * @param {Request} request
 * @param {import("@netlify/edge-functions").Context} context
 */
export default async (request, context) => {
  const user = await getUser();
  if (user) return context.next();

  const url = new URL(request.url);
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return Response.redirect(url.toString(), 302);
};

export const config = {
  path: [
    "/gallery",
    "/gallery.html",
    "/pricing",
    "/pricing.html",
    "/compare",
    "/compare.html",
    "/specimens/*",
    "/data/*",
  ],
};
