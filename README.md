# Jhool Cachie

## About

Cachie allows us to know how many times a word or a combination of words has been queried since the engine has been running. The server exposes two endpoints:

1. `POST /search` - which accepts a search query of at least a word.
2. `GET /analyse` - which accepts a comma-separated series of one or two words called the Analysis token. It returns the number of times the analysis token was found in a previous search query and the time it took to complete the analysis process.

## Setup

1. Install packages:

```
npm install
```

2. Run dev:

```
npm run dev
```

Run tests:

```
npm run test
```

## API

| Endpoint     | Request                                                         | Success Response                                                       |
| ------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| POST /search | { search_query: "The quick brown fox jumps over the lazy dog" } | { status: "ok" }                                                       |
| GET /analyse | ?analysis_token=the quick,lazy dog,the                          | { "results": { "the quick": 1, "lazy dog": 1, the: 2 }, "time": 80ms } |

Simple😎
