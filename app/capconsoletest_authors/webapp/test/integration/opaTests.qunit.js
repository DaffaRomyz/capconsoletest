sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capconsoletestauthors/test/integration/FirstJourney',
		'capconsoletestauthors/test/integration/pages/AuthorsList',
		'capconsoletestauthors/test/integration/pages/AuthorsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capconsoletestauthors') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage
                }
            },
            opaJourney.run
        );
    }
);