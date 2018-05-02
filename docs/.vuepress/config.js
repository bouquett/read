module.exports = {
    title: 'My VuePress',
    base: '/vuepress_demoII/',
    themeConfig: {
        nav: [{
                text: 'html',
                link: '/development/'
            },
            {
                text: 'css',
                link: '/about/'
            },
            {
                text: 'js',
                link: '/guide/'
            },
            {
                text: 'other',
                link: 'https://vuepress.vuejs.org/'
            },
        ],
        sidebar: {
            '/development/': [
                
                '', /* /foo/ */
                'two', /* /foo/one.html */
                'three' /* /foo/two.html */
            ],
            
        }


        // sidebar: [{
        //         title: '前端',
        //         collapsable: false,
        //         children: [
        //             '/web/',
        //             '/development/'
        //         ]
        //     },
        //     '/about/',
        //     {
        //         title: 'Group 2',
        //         collapsable: false,
        //         children: [
        //             '/guide/'
        //         ]
        //     }

        // ]
    }
}