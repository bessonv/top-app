module.exports = {
	images: {
		domains: ['courses-top.ru']
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
