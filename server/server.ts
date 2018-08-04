import * as express from "express";
import suggestions from './suggestions/http.suggestions';
import graphQlSuggestions from './suggestions/graphql.suggestions';
import search from './search/http.seach';
import user from './user/http.user';
import graphQlUser from './user/graphql.user';
import graphQlSearch from './search/graphql.search';

const app = express();
const port = 3001;

app.use('/api/http/suggestions', suggestions);
app.use('/api/graphql/suggestions', graphQlSuggestions);
app.use('/api/http/search', search);
app.use('/api/graphql/search', graphQlSearch);
app.use('/api/http/user/', user);
app.use('/api/graphql/user/', graphQlUser);

app.listen(port, (err: any) => {
    if (err) {
        return console.log("something bad happened", err);
    }

    console.log(`server is listening on ${port}`);
});