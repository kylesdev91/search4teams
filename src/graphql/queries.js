/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFastpich = /* GraphQL */ `
  query GetFastpich($hashKey: Int!, $rangeKey: String!) {
    getFastpich(hashKey: $hashKey, rangeKey: $rangeKey) {
      hashKey
      rangeKey
      cityst
      geohash
      geoJson
      teamName
      teamIDu3s
      createdAt
      updatedAt
    }
  }
`;
export const listFastpiches = /* GraphQL */ `
  query ListFastpiches(
    $hashKey: Int
    $rangeKey: ModelStringKeyConditionInput
    $filter: ModelFastpichFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFastpiches(
      hashKey: $hashKey
      rangeKey: $rangeKey
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        hashKey
        rangeKey
        cityst
        geohash
        geoJson
        teamName
        teamIDu3s
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
