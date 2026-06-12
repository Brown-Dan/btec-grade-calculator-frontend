const svg_map: Map<string, string> = new Map([
    ["computing", "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n" +
    "                         stroke=\"currentColor\" class=\"w-6 h-6\">\n" +
    "                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
    "                              d=\"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25\"/>\n" +
    "                    </svg>"],
    ["business", "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n" +
    "                         stroke=\"currentColor\" class=\"w-6 h-6\">\n" +
    "                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
    "                              d=\"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z\"/>\n" +
    "                    </svg>"],
    ["applied-science", "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n" +
    "                         stroke=\"currentColor\" class=\"w-6 h-6\">\n" +
    "                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
    "                              d=\"M14.25 2.25v4.5m-4.5-4.5v4.5m8.197 13.047-3.807-8.564a.75.75 0 0 1 .053-.694l2.036-3.055A.75.75 0 0 0 15.605 6H8.395a.75.75 0 0 0-.624 1.184l2.036 3.055a.75.75 0 0 1 .053.694l-3.807 8.564A1.5 1.5 0 0 0 7.424 21h9.152a1.5 1.5 0 0 0 1.371-2.203Z\"/>\n" +
    "                    </svg>"],
    ["it", "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n" +
    "                         stroke=\"currentColor\" class=\"w-6 h-6\">\n" +
    "                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
    "                              d=\"M17.25 6.75h-10.5A2.25 2.25 0 0 0 4.5 9v6a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 15V9a2.25 2.25 0 0 0-2.25-2.25Zm-9 3.75 2.25 1.5-2.25 1.5m4.5 0h3\"/>\n" +
    "                    </svg>"],
    ["science", "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n" +
    "                         stroke=\"currentColor\" class=\"w-6 h-6\">\n" +
    "                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
    "                              d=\"M14.25 2.25v4.5m-4.5-4.5v4.5m8.197 13.047-3.807-8.564a.75.75 0 0 1 .053-.694l2.036-3.055A.75.75 0 0 0 15.605 6H8.395a.75.75 0 0 0-.624 1.184l2.036 3.055a.75.75 0 0 1 .053.694l-3.807 8.564A1.5 1.5 0 0 0 7.424 21h9.152a1.5 1.5 0 0 0 1.371-2.203Z\"/>\n" +
    "                    </svg>"],
    ["healthcare", "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n" +
    "                         stroke=\"currentColor\" class=\"w-6 h-6\">\n" +
    "                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
    "                              d=\"M9 12.75 11.25 15 15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\"/>\n" +
    "                    </svg>"]
])


export function get_svg(key: string): string {
    return svg_map.get(key)!;
}