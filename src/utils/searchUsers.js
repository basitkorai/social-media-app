const searchUsersByName = (searchString, users, setSearchResult) => {
    // clear search result if the search field is empty
    if (searchString === "") {
        setSearchResult([]);
    }

    // discontinue if there is no search yet
    if (searchString === null || searchString === "" || users === []) return;

    // empty the previous search array if any
    setSearchResult([]);
    let results = [];
    // create a regular expression pattern for the search string
    const pattern = new RegExp(searchString, "gi");

    for (const user of users) {
        const userName = user.name;
        if (pattern.test(userName)) {
            results.push(user);
        }
    }

    setSearchResult(results)
};

export default searchUsersByName