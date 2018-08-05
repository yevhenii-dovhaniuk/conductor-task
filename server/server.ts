import * as express from "express";
import suggestions from './suggestions/suggestions.http';
import graphQlSuggestions from './suggestions/suggestions.graphql';
import search from './search/seach.http';
import graphQlSearch from './search/search.graphql';
import user from './user/user.http';
import graphQlUser from './user/user.graphql';
import repo from './repo/repo.http';
import graphQlRepo from './repo/repo.graphql';

const app = express();
const port = 3001;

app.use('/api/http/suggestions', suggestions);
app.use('/api/graphql/suggestions', graphQlSuggestions);
app.use('/api/http/search', search);
app.use('/api/graphql/search', graphQlSearch);
app.use('/api/http/user/', user);
app.use('/api/graphql/user/', graphQlUser);
app.use('/api/http/user/', repo);
app.use('/api/graphql/user/', graphQlRepo);

app.listen(port, (err: any) => {
    if (err) {
        return console.log("something bad happened", err);
    }

    console.log(`server is listening on ${port}`);
});