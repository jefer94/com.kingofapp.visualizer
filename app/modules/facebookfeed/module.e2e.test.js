(function(){
	describe('Facebook Feed Module test', function() {
		beforeEach(function(){
		    browser.driver.manage().window().setSize(379, 666);
		    browser.ignoreSynchronization = true;
		});

		it('should load facebook feed module', function() {
			browser.get('/app/#/menu/facebook');
			isPresent('.facebookfeed ul.feed li');

			expectmodule();

		});
		function isPresent(selector) {
			browser.wait(function() {
					return $(selector).isPresent();
			}, 6000, 'Main (' + selector + ') not present');
		}
		function expectmodule() {
			expect(element.all(by.css('.facebookfeed ul.feed li')).count()).toBeGreaterThan(2);
		}

		afterEach(function() {
			browser.ignoreSynchronization = false;
		});
	});
}());
