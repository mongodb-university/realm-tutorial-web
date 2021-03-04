import React from "react";
import { useRealmApp } from "../RealmApp";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// Create an ApolloClient that connects to the provided Realm.App's GraphQL API
const createRealmApolloClient = (app) => {
  const link = new HttpLink({
    // TODO: Add your Realm App ID to the uri link to connect your app.
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`,
    // A custom fetch handler adds the logged in user's access token to GraphQL requests
    fetch: async (uri, options) => {
      if (!app.currentUser) {
        throw new Error(`Must be logged in to use the GraphQL API`);
      }
      // Refreshing a user's custom data also refreshes their access token
      await app.currentUser.refreshCustomData();
      // TODO: Include the current user's access token in an Authorization header with
      // every request.
      return fetch(uri, options);
    },
  });

  const cache = new InMemoryCache();

  return new ApolloClient({ link, cache });
};

export default function RealmApolloProvider({ children }) {
  // TODO: Create an ``ApolloClient`` object that connects to your app.
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
