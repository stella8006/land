/** @type {import('next').NextConfig} */
const repo = "ai-bomulseom"; // ← 저장소 이름으로 바꾸세요

module.exports = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
  images: { unoptimized: true },
};
