module.exports = {
	title: 'Coding and DIY enthusiast',
	description: 'Tianli\'s Blog',
	themeConfig: {
		nav: [
			{ text: 'Main', link: '/' },
			{
				text: 'Blog',
				items: [
					{ text: 'Publication', link: '/publication/' },
					{ text: 'Project', link: '/project/' },
					{ text: 'Teaching', link: '/teaching/' }
				]
			},
			{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/tianli-zhou-65510477/' },
			{ text: 'Github', link: 'https://www.github.com/zhoutl1106' },
		], 
		sidebar: {
			'/publication/': [
						""
						],
				"/project/":[
						""
						],
				"/teaching/":[
							],
			},
		sidebarDepth: 1,
		lastUpdated: 'Last Updated'

	},
	chainWebpack: (config, isServer) => {
		config.module
		  .rule('pdfs')
		  .test(/\.pdf$/)
		  .use('file-loader')
			.loader('file-loader')
		  .options({
			name: `[path][name].[ext]`
		  });
		
		config.module.rule('vue')
		  .uses.store
		  .get('vue-loader').store
		  .get('options').transformAssetUrls = {
			video: ['src', 'poster'],
			source: 'src',
			img: 'src',
			image: ['xlink:href', 'href'],
			a: 'href'
		  };
	  },
}
