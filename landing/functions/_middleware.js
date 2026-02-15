export const onRequest = async (context) => {
  const url = new URL(context.request.url);
  if (url.hostname.endsWith('.pages.dev')) {
    return Response.redirect(`https://stone.beecrow.llc${url.pathname}`, 301);
  }
  return context.next();
};
