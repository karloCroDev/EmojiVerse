/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign-in",
        permanent: true, // this will set a 308 HTTP status for the redirect
      },
    ];
  },
};

export default nextConfig;
