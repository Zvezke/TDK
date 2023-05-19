/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/sangpr%C3%B8ven",
        destination: "/sangproeven",
      },
    ];
  },
  images: {
    domains: ["treenighedskirkensdrengekor.dk", "localhost"],
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
