//tell Karma we want to test the 'optIn directive'
describe('optIn', function() {
    //declare the variables needed for testing
    var scope,
        element,
        compiled,
        html,
        someone;
    //before each test, require the 'signupFormApp'
    beforeEach(module('signupFormApp'));
    //before each test, require the 'opt-in.html' partial
    beforeEach(module('opt-in.html'));
    //compile the directive & link it to HTML
    beforeEach(inject(function($rootScope, $compile) {
        //setting scope equal to a NEW INSTANCE of rootscope provides a context to compile the directive in
        scope = $rootScope.$new();
        brandLogo = "brand-logo";
        brandImage = "<div class='" + brandLogo + "'></div>";
        //brandImage = "hello";
        html = "<opt-in>" + brandImage + "</opt-in>";
        //use compile to compile a view for HTML
        compiled = $compile(html);
        //link the compiled view w/ the scope
        element = compiled(scope);
        //call digest to have angular look through all the changes
        scope.$digest();

    }));
    //does what we expect to happen actually happen?
    it('should render element and contain image', function(){
        //we expect the html element to contain brandLogo variable, which tells us html was compiled as expected
        expect(element.html()).toContain(brandLogo);
    })
});