/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
  /** You will need to implement your search and
   * return the appropriate object here. */

  const searchResults = { SearchTerm: searchTerm, Results: [] };

  const isNotValidSearchTerm =
    (typeof searchTerm === 'string' && searchTerm.length === 0) ||
    typeof searchTerm !== 'string';

  if (isNotValidSearchTerm) return searchResults;

  for (book of scannedTextObj) {
    for (scan of book.Content) {
      if (scan.Text.indexOf(searchTerm) > 0)
        searchResults.Results.push({
          ISBN: book.ISBN,
          Page: scan.Page,
          Line: scan.Line,
        });
    }
  }
  return searchResults;
}

/* _____         _     ____        _        
|_   _|__  ___| |_  |  _ \  __ _| |_ __ _ 
  | |/ _ \/ __| __| | | | |/ _` | __/ _` |
  | |  __/\__ \ |_  | |_| | (_| | || (_| |
  |_|\___||___/\__| |____/ \__,_|\__\__,_|
  */

/** Example input object. */
const twentyLeaguesIn = [
  {
    Title: 'Twenty Thousand Leagues Under the Sea',
    ISBN: '9780000528531',
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: 'now simply went on by her own momentum.  The dark-',
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: 'eyes were, I asked myself how he had managed to see, and',
      },
    ],
  },
];

/** Dummy empty input object. */
const emptyBook = [];

/** Dummy even length input object. */
const twoBooks = [
  ...twentyLeaguesIn,
  {
    Title: 'Thirty Thousand Leagues Under the Ocean',
    ISBN: '9780000528522',
    Content: [
      {
        Page: 30,
        Line: 1,
        Text: 'now simply went on by her night night momentum. The dark-',
      },
      {
        Page: 30,
        Line: 2,
        Text: "ness was then profound; and however good the American's America.",
      },
    ],
  },
];
console.log(twoBooks);

/** Example output object. */
const twentyLeaguesOut = {
  SearchTerm: 'the',
  Results: [
    {
      ISBN: '9780000528531',
      Page: 31,
      Line: 9,
    },
  ],
};

/** Example output object for case-sensitive. */
const twentyLeaguesOutCaseSensitive = {
  SearchTerm: 'The',
  Results: [
    {
      ISBN: '9780000528531',
      Page: 31,
      Line: 8,
    },
  ],
};

/**Dummy empty output object. */
const emptySearchTermOut = {
  SearchTerm: '',
  Results: [],
};

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks('the', twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log('PASS: Test 1');
} else {
  console.log('FAIL: Test 1');
  console.log('Expected:', twentyLeaguesOut);
  console.log('Received:', test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks('the', twentyLeaguesIn);
if (test2result.Results.length == 1) {
  console.log('PASS: Test 2');
} else {
  console.log('FAIL: Test 2');
  console.log('Expected:', twentyLeaguesOut.Results.length);
  console.log('Received:', test2result.Results.length);
}

/** Checks to see if an empty searchterm returns the empty object. */
const test3result = findSearchTermInBooks('', twentyLeaguesIn);
if (test3result.Results.length == 0 && test3result.SearchTerm === '') {
  console.log('PASS: Test 3');
} else {
  console.log('FAIL: Test 3');
  console.log('Expected:', emptySearchTermOut.Results.length);
  console.log('Received:', test3result.Results.length);
}

/** Checks case-sensitivity of searchterm. */
const test4result = findSearchTermInBooks('The', twentyLeaguesIn);
if (
  JSON.stringify(twentyLeaguesOutCaseSensitive) === JSON.stringify(test4result)
) {
  console.log('PASS: Test 4');
} else {
  console.log('FAIL: Test 4');
  console.log('Expected:', twentyLeaguesOutCaseSensitive);
  console.log('Received:', test4result);
}
