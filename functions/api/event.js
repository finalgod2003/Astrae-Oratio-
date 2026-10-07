// Cloudflare Pages Function: first-party proxy for Plausible events.
// The tracker (public/js/p.js) posts to /api/event on our own domain; we forward it to Plausible
// with the visitor's IP and user agent so geolocation and unique-visitor counting keep working.
export async function onRequestPost({ request }) {
  const headers = new Headers({
    'Content-Type': request.headers.get('Content-Type') || 'text/plain',
    'User-Agent': request.headers.get('User-Agent') || '',
  });
  const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For');
  if (ip) headers.set('X-Forwarded-For', ip);

  const upstream = await fetch('https://plausible.io/api/event', {
    method: 'POST',
    headers,
    body: await request.text(),
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('Content-Type') || 'text/plain' },
  });
}
