/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			allowedForwardedHosts: ['localhost', '0.0.0.0'],
			allowedOrigins: ['localhost:3000', '0.0.0.0:3000']
		},
	}
};

module.exports = nextConfig;
