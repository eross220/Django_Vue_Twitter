import gql from "graphql-tag";

export const SIT_INFO = gql `
    query {
        site {
            name
        }
    }
`