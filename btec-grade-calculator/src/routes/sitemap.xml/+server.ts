// /src/routes/sitemap.xml/+server.ts
import {type RequestHandler} from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';


export const prerender = true; // optional

export const GET: RequestHandler = async () => {
    return await sitemap.response({
        origin: 'https://www.btecgradecalculator.com',
        paramValues: {
            '/info/[subject]/[course_name]': [
                ['computing', 'new-york'],
                ['computing', 'california'],
                ['computing', 'toronto'],
                ['computing', 'toronto'],
                ['computing', 'toronto'],
            ],
            '/subject/[subject]': [],
            '/info/[subject]': [],
            '/calculate/[subject]/[course_name]': [
                ['usa', 'new-york'],
                ['usa', 'california'],
                ['canada', 'toronto'],
            ],
        },
        headers: {
            'custom-header': 'foo'
        },
        additionalPaths: [
            '/foo.pdf', // e.g. to a file in your static dir
        ],
        changefreq: 'daily', // excluded by default b/c ignored by modern search engines
        priority: 0.7, // excluded by default b/c ignored by modern search engines
        sort: 'alpha', // default is false; 'alpha' sorts all paths alphabetically.
        processPaths: (paths: sitemap.PathObj[]) => {
            // A callback to allow arbitrary processing of your path objects. See the
            // processPaths() section of the README.
            return paths;
        },
    });
};