module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: 'read',
    themeConfig: {
        nav: [{
            text: 'Languages',
            items: [{
                    text: 'Chinese',
                    link: '/language/chinese'
                },
                {
                    text: 'Japanese',
                    link: '/language/japanese'
                }
            ]
        }],
      sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ]
    }

}