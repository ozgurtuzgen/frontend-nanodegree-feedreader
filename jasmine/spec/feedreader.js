/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URL defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");
            });
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have name defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            });
        });
    });


    /* a test suite named "The menu" */
    describe('The menu', function () {

        /* a test that ensures the menu element is
         * hidden by default.
         */
        it('should be hidden by default', function () {
            var result = $('body').hasClass('menu-hidden');
            result = $('body').hasClass('menu-hidden');
            expect(result).toBe(true);
        });

        /* a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should be change by clicks', function () {
            $('.menu-icon-link').click();
            var result = $('body').hasClass('menu-hidden');
            expect(result).toBe(false);
            $('body').toggleClass('menu-hidden');
            result = $('body').hasClass('menu-hidden');
            expect(result).toBe(true);
        });
    });

    /* a test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('should load at least one feed', function (done) {
            var result = $('.entry').length;
            expect(result).toBeGreaterThan(0);
            done();
        });
    });


    /* a test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('should content change when feed change', function (done) {
            var result = $('article > h2')[0];
            loadFeed.call(result, 1, function () {
                var newResult = $('article > h2')[0];
                expect(result).not.toBe(newResult);

                done();
            });
        });
    });

}());
