/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // redirects: async () => {
  //   return [
  //     {
  //       // Source Path ( from )
  //       source: "/",

  //       // Destination Path ( to )
  //       destination: "/kommersnart",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
