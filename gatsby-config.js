module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://penngraduateconsultinggroup.us7.list-manage.com/subscribe/post?u=42a16ebbf91719c54d9692097&amp;id=80f39fd46d', // string; add your MC list endpoint here; see instructions below
        timeout: 5000 // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    }
  ]
};
