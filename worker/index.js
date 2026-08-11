const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !['GET', 'HEAD'].includes(request.method)) return response;

    const url = new URL(request.url);
    const normalizedPath = url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname;
    const routeAssetUrl = new URL(`${normalizedPath || ''}/index.html`, url);
    const routeResponse = await env.ASSETS.fetch(new Request(routeAssetUrl, request));

    if (routeResponse.status !== 404) return routeResponse;
    return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
  },
};

export default worker;
