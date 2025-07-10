import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);
