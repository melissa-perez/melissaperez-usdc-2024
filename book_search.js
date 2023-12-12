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
  searchTerm = searchTerm.trim();

  const searchResults = { SearchTerm: searchTerm, Results: [] };

  const isNotValidSearchTerm =
    (typeof searchTerm === 'string' && searchTerm.length === 0) ||
    typeof searchTerm !== 'string';

  if (isNotValidSearchTerm) return searchResults;

  for (let bookIdx = 0; bookIdx < scannedTextObj.length; bookIdx++) {
    for (
      let contentIdx = 0;
      contentIdx < scannedTextObj[bookIdx].Content.length;
      contentIdx++
    ) {
      if (
        scannedTextObj[bookIdx].Content[contentIdx].Text.indexOf(searchTerm) > 0
      )
        searchResults.Results.push({
          ISBN: scannedTextObj[bookIdx].ISBN,
          Page: scannedTextObj[bookIdx].Content[contentIdx].Page,
          Line: scannedTextObj[bookIdx].Content[contentIdx].Line,
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

// Input Data

/** Empty input object. No books added.*/
const emptyBook = [];

/** Example input object. */
// Given input object, with 1 book.
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

/** Input object of even length. Contains two books. */
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
        Text: "ness was their then profound; and however good the American's America...",
      },
    ],
  },
];

/** Input object of odd length. Contains one book with no scanned content. */
const oneBookEmptyContent = {
  Title: 'Twenty Thousand Leagues Under the Sea',
  ISBN: '9780000528531',
  Content: [],
};

// Output Data

/** Empty output object for missing or invalid searchterm. */
const emptySearchTermOut = {
  SearchTerm: '',
  Results: [],
};

/** Example output object. */
// Given output object, with one result.
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

/** Example output object for case-sensitive given test. */
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

/** Example output object for multiple word matches across books. */
const twoBooksDarkOut = {
  SearchTerm: 'dark',
  Results: [
    {
      ISBN: '9780000528531',
      Page: 31,
      Line: 8,
    },
    {
      ISBN: '9780000528522',
      Page: 30,
      Line: 1,
    },
  ],
};

/** Example output object for no match. */
const noMatchOut = {
  SearchTerm: 'Adult',
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
// Given test for positive match, checking JSON.
const test1result = findSearchTermInBooks('the', twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log('PASS: Test 1');
} else {
  console.log('FAIL: Test 1');
  console.log('Expected:', twentyLeaguesOut);
  console.log('Received:', test1result);
}

/** We could choose to check that we get the right number of results. */
// Given test for positive match checking length.
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
// Suggested test for case-sensitive, checking JSON.
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

/** Checks that nothing returns from a book with empty content. */
const test5result = findSearchTermInBooks('simply', oneBookEmptyContent);
if (test5result.Results.length == 0) {
  console.log('PASS: Test 5');
} else {
  console.log('FAIL: Test 5');
  console.log('Expected:', 0);
  console.log('Received:', test5result.Results.length);
}

/** Checks that two results from two different books returns. */
const test6result = findSearchTermInBooks('dark', twoBooks);
if (test6result.Results.length == 2) {
  console.log('PASS: Test 6');
} else {
  console.log('FAIL: Test 6');
  console.log('Expected:', 2);
  console.log('Received:', test6result.Results.length);
}

const test7result = findSearchTermInBooks('dark', twoBooks);
if (JSON.stringify(test7result) === JSON.stringify(twoBooksDarkOut)) {
  console.log('PASS: Test 7');
} else {
  console.log('FAIL: Test 7');
  console.log('Expected:', twoBooksDarkOut);
  console.log('Received:', test7result);
}

/** Checks that a line with multiple instances of word returns with length 1. */
const test8result = findSearchTermInBooks('night', twoBooks);
if (test8result.Results.length == 1) {
  console.log('PASS: Test 8');
} else {
  console.log('FAIL: Test 8');
  console.log('Expected:', 1);
  console.log('Received:', test8result.Results.length);
}

/** Checks that a word not found returns empty results(negative). */
const test9result = findSearchTermInBooks('Adult', twoBooks);
if (JSON.stringify(noMatchOut) === JSON.stringify(test9result)) {
  console.log('PASS: Test 9');
} else {
  console.log('FAIL: Test 9');
  console.log('Expected:', noMatchOut);
  console.log('Received:', test9result);
}
