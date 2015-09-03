(function(){
	describe('Instagram Feed Module test', function() {
		beforeEach(function(){
		    browser.driver.manage().window().setSize(379, 666);
		    browser.ignoreSynchronization = true;
		});
		afterEach(function() {
			// browser.manage().logs().get('browser').then(function(browserLog) {
			// 	console.log('log: ' + require('util').inspect(browserLog));
			// });
		});
		it('should load instagram feed module', function() {
			browser.get('/app/#/menu/instagram');
			browser.debugger();
			isPresent('.instagramfeed ul.feed li');

			expectmodule();

		});
		function isPresent(selector) {
			browser.wait(function() {
					return $(selector).isPresent();
			}, 6000, 'Main (' + selector + ') not present');
		}
		function expectmodule() {
			expect(element.all(by.css('.instagramfeed ul.feed li')).count()).toBeGreaterThan(3);
		}

		afterEach(function() {
			browser.ignoreSynchronization = false;
		});
	});
}());
