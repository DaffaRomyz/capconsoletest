sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capconsoletestbooks/test/integration/FirstJourney',
		'capconsoletestbooks/test/integration/pages/BooksList',
		'capconsoletestbooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capconsoletestbooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);