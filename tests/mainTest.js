describe('myDirective', function() {
	var element, scope, $compile;

	beforeEach(module('myApp'));

	beforeEach(inject(function(_$rootScope_, _$compile_) {
		scope = _$rootScope_.$new();
		$compile = _$compile_;
	}));

	it('should not be undefined', function() {
		element = $compile('<div my-directive></div>')(scope);
		expect(element.scope().changeTitle).not.to.be(undefined);
	});
});