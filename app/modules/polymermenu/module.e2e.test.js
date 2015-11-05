(function(){
	describe('Polymer menu test', function() {
		beforeEach(function(){
		    browser.driver.manage().window().setSize(379, 666);
		    browser.ignoreSynchronization = true;
		});

		it('should load polymer menu', function() {
			browser.get('/app/#/menu');
			isPresent('paper-icon-button');

			element(by.css('paper-icon-button')).click();
			isPresent('paper-menu .selectable-content a');
			var EC = protractor.ExpectedConditions;
			var menuelement = element.all(by.cssContainingText('.selectable-content a','Facebook Feed')).get(0);
			isPresent('#mainContainer');
			browser.wait(EC.elementToBeClickable(menuelement), 10000);
			menuelement.click();

			isPresent('.facebookfeed paper-card img');

			expectmodule();

		});
		function isPresent(selector) {
			browser.wait(function() {
					return $(selector).isPresent();
			}, 6000, 'Main (' + selector + ') not present');
		}
		function expectmodule() {
			expect(element.all(by.css('.facebookfeed paper-card img')).count()).toBeGreaterThan(5);
		}

		afterEach(function() {
			browser.ignoreSynchronization = false;
		});
	});
}());
