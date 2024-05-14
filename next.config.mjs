const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
      {
        protocol: "http",
        hostname: "files.edgestore.dev",
      },
    ],
  },
};

export default nextConfig;
