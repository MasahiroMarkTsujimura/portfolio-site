module.exports = {
    siteMetadata: {
        title: 'Masahiro Tsujimura Portfolio Site',
        description: 'Portfolio site of Masahiro Mark Tsujimura.',
        author: 'Masahiro Mark Tsujimura',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/robot.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/Layout'),
            },
        },
        'gatsby-plugin-styled-components'
    ],
};
