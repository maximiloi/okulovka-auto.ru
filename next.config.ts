import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  allowedDevOrigins: ["10.0.1.9", "localhost"],
};

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);
