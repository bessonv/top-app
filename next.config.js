module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	async redirects() {
    return [
      {
        source: '/',
        destination: '/courses/python',
        permanent: true,
      },
    ];
  },
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					// plugins: [{ removeViewBox: false }],
					plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }],
				},
				titleProp: true,
			},
			test: /\.svg$/i,
		});

		return config;
	},
};
