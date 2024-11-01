// /src/routes/sitemap.xml/+server.ts
import {type RequestHandler} from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';


export const prerender = true; // optional

export const GET: RequestHandler = async () => {
    return await sitemap.response({
        origin: 'https://www.btecgradecalculator.com',
        paramValues: {
            '/info/[subject]/[course_name]': [
                ['computing', 'national-certificate'],
                ['computing', 'national-extended-certificate'],
                ['computing', 'national-foundation-diploma'],
                ['computing', 'national-diploma'],
                ['computing', 'national-extended-diploma'],
                ['business', 'national-certificate'],
                ['business', 'national-extended-certificate'],
                ['business', 'national-foundation-diploma'],
                ['business', 'national-diploma'],
                ['business', 'national-extended-diploma']
            ],
            '/subject/[subject]': ['computing', 'business'],
            '/info/[subject]': ['computing', 'business'],
            '/calculate/[subject]/[course_name]': [
                ['computing', 'national-certificate'],
                ['computing', 'national-extended-certificate'],
                ['computing', 'national-foundation-diploma'],
                ['computing', 'national-diploma'],
                ['computing', 'national-extended-diploma'],
                ['business', 'national-certificate'],
                ['business', 'national-extended-certificate'],
                ['business', 'national-foundation-diploma'],
                ['business', 'national-diploma'],
                ['business', 'national-extended-diploma']
            ],
        },
        headers: {
            'custom-header': 'foo'
        },
        additionalPaths: [],
        sort: 'alpha'
    });
};