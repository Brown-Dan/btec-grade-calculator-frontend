// /src/routes/sitemap.xml/+server.ts
import {type RequestHandler} from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';


export const prerender = true; // optional

export const GET: RequestHandler = async () => {
    const subjects = ['computing', 'business', 'applied-science', 'it', 'science', 'healthcare'];
    const courseTypes = [
        'national-certificate',
        'national-extended-certificate',
        'national-foundation-diploma',
        'national-diploma',
        'national-extended-diploma'
    ];

    return await sitemap.response({
        origin: 'https://www.btecgradecalculator.com',
        paramValues: {
            '/subject/[subject]': subjects,
            '/info/[subject]': subjects,
            '/calculate/[subject]/[course_name]': subjects.flatMap((subject) =>
                courseTypes.map((courseType) => [subject, courseType] as [string, string])
            )
        },
        additionalPaths: ['/', '/faq'],
        sort: 'alpha'
    });
};