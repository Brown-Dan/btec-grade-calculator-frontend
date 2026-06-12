import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const body = [
        'User-agent: *',
        'Allow: /',
        '',
        'Sitemap: https://www.btecgradecalculator.com/sitemap.xml'
    ].join('\n');

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8'
        }
    });
};
