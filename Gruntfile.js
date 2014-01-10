module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'RawImages',
					src: ['**/*.{jpg,gif,png,jpeg}'],
					dest: 'Images'
				}]
			}
		},

		compress: {
			main: {
				options: {
					mode: 'gzip'
				},
				expand: true,
				cwd: '',
				src: ['*.html'],
				dest: 'compressed/'
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('default', ['imagemin']);
};
