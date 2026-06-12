const GET = async () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: https://www.btecgradecalculator.com/sitemap.xml"
  ].join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
export {
  GET
};
