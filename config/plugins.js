module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            credentials: {
                accessKeyId: env('CELLAR_ADDON_KEY_ID'),
                secretAccessKey: env('CELLAR_ADDON_KEY_SECRET'),
              },
            region: env('CELLAR_ADDON_REGION'), // e.g "fr-par"
            endpoint: 'https://' + env('CELLAR_ADDON_HOST'), 
            params: {
              Bucket: env('CELLAR_BUCKET'),
            },
          }
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
  });