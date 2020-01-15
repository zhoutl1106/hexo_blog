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
			{ text: 'CV', link: '/cv/' },
			{ text: 'About', link: '/about/' },
			{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/tianli-zhou-65510477/' },
			{ text: 'Github', link: 'https://www.github.com/zhoutl1106' },
		], 
		sidebar: {
			'/publication/': [
						"",
						"zerasure",
						"dpg",
						"bitcoin",
						"electronic_components",
						"windows_programming"
						],
				"/project/":[
						"",
						"personal_reliable_storage_system",
						"color_selection_machine",
						"sig",
						"airforce",
						"rov",
						"robot",
						"mahjong",
						"poker",
						"restaurant",
						"rotate",
						"piano"
						],
				"/teaching/":[
					""
							],
			},
		sidebarDepth: 0,
		lastUpdated: 'Last Updated'

	},
		markdown: {
    linkify: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  },
}
