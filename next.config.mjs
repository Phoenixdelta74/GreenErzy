/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
// If running in GitHub Actions, extract the repo name from GITHUB_REPOSITORY (e.g. "Phoenixdelta74/GreenErzy" -> "/GreenErzy")
const repo = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubActions ? repo : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
