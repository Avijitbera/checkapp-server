
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  uid: 'uid',
  name: 'name',
  image: 'image',
  loginWith: 'loginWith',
  createdAt: 'createdAt'
};

exports.Prisma.ApplicationScalarFieldEnum = {
  id: 'id',
  appId: 'appId',
  appUrl: 'appUrl',
  title: 'title',
  icon: 'icon',
  minInstalls: 'minInstalls',
  maxInstalls: 'maxInstalls',
  score: 'score',
  ratings: 'ratings',
  reviews: 'reviews',
  price: 'price',
  free: 'free',
  developer: 'developer',
  isAndroid: 'isAndroid',
  usage_rating: 'usage_rating'
};

exports.Prisma.AppReviewScalarFieldEnum = {
  id: 'id',
  appId: 'appId',
  reviewId: 'reviewId',
  uid: 'uid',
  message: 'message',
  rating: 'rating',
  type: 'type',
  createAt: 'createAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AppTagsScalarFieldEnum = {
  id: 'id',
  tagId: 'tagId',
  appId: 'appId',
  uid: 'uid'
};

exports.Prisma.TagsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  tagId: 'tagId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.LoginWith = exports.$Enums.LoginWith = {
  google: 'google',
  facebook: 'facebook',
  twitter: 'twitter',
  apple: 'apple'
};

exports.Prisma.ModelName = {
  Profile: 'Profile',
  Application: 'Application',
  AppReview: 'AppReview',
  AppTags: 'AppTags',
  Tags: 'Tags'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/avijit/Projects/Deno/appcheck_server/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.7.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBMb2dpbldpdGggewogIGdvb2dsZQogIGZhY2Vib29rCiAgdHdpdHRlcgogIGFwcGxlCn0KCm1vZGVsIFByb2ZpbGUgewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHVpZCBTdHJpbmcgQGRiLlZhckNoYXIoMTAwKSBAdW5pcXVlCiAgbmFtZSBTdHJpbmcgQGRiLlZhckNoYXIoMTgwKQogIGltYWdlIFN0cmluZyBAZGIuVGV4dAogIGxvZ2luV2l0aCBMb2dpbldpdGggQGRlZmF1bHQoZ29vZ2xlKQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGIuVGltZXN0YW1wdHooKSBAZGVmYXVsdChub3coKSkKICByZXZpZXdzIEFwcFJldmlld1tdCiAgdGFncyBBcHBUYWdzW10KfQoKbW9kZWwgQXBwbGljYXRpb24gewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGFwcElkIFN0cmluZyBAZGIuVGV4dCBAdW5pcXVlCiAgYXBwVXJsIFN0cmluZyBAZGIuVGV4dAogIHRpdGxlIFN0cmluZyBAZGIuVmFyQ2hhcigxMjApCiAgaWNvbiBTdHJpbmcgQGRiLlRleHQKICBtaW5JbnN0YWxscyBJbnQKICBtYXhJbnN0YWxscyBJbnQKICBzY29yZSBJbnQKICByYXRpbmdzIEludAogIHJldmlld3MgSW50CiAgcHJpY2UgSW50CiAgZnJlZSBCb29sZWFuCiAgZGV2ZWxvcGVyIFN0cmluZyBAZGIuVmFyQ2hhcigxMDApCiAgaXNBbmRyb2lkIEJvb2xlYW4gQGRlZmF1bHQodHJ1ZSkKICB1c2FnZV9yYXRpbmcgSW50IEBkZWZhdWx0KDUpCiAgdGFncyBBcHBUYWdzW10KCn0KCm1vZGVsIEFwcFJldmlldyB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYXBwSWQgU3RyaW5nIEBkYi5UZXh0CiAgcmV2aWV3SWQgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkgQHVuaXF1ZQogIHVpZCBTdHJpbmcgQGRiLlZhckNoYXIoMTAwKQogIG1lc3NhZ2UgU3RyaW5nPyBAZGIuVGV4dAogIHJhdGluZyBJbnQgQGRlZmF1bHQoNSkKICB0eXBlIFN0cmluZz8gQGRiLlRleHQKICBjcmVhdGVBdCBEYXRlVGltZSBAZGIuVGltZXN0YW1wdHooKSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQGRiLlRpbWVzdGFtcHR6KCkgQGRlZmF1bHQobm93KCkpCiAgcHJvZmlsZSBQcm9maWxlIEByZWxhdGlvbihmaWVsZHM6IFt1aWRdLCByZWZlcmVuY2VzOiBbdWlkXSkKfQoKbW9kZWwgQXBwVGFncyB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdGFnSWQgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkgQHVuaXF1ZQogIGFwcElkIFN0cmluZyBAZGIuVGV4dAogIHVpZCBTdHJpbmcgQGRiLlZhckNoYXIoMTAwKQogIHRhZ3MgVGFncyBAcmVsYXRpb24oZmllbGRzOiBbdGFnSWRdLCByZWZlcmVuY2VzOiBbdGFnSWRdKQogIGFwcHMgQXBwbGljYXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2FwcElkXSwgcmVmZXJlbmNlczogW2FwcElkXSkKICBwcm9maWxlIFByb2ZpbGUgQHJlbGF0aW9uKHJlZmVyZW5jZXM6IFt1aWRdLCBmaWVsZHM6IFt1aWRdKQp9Cgptb2RlbCBUYWdzIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lIFN0cmluZyBAZGIuVmFyQ2hhcigzMCkKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eigpCiAgdGFnSWQgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkgQHVuaXF1ZQogIGFwcFRhZ3MgQXBwVGFnc1tdCn0K",
  "inlineSchemaHash": "8a74205dc14ff51d54187243136ab70c2b93488e42d07444791f2f3feb8356a1",
  "noEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginWith\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"LoginWith\",\"default\":\"google\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppReview\",\"relationName\":\"AppReviewToProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppTags\",\"relationName\":\"AppTagsToProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Application\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minInstalls\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxInstalls\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"free\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"developer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAndroid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppTags\",\"relationName\":\"AppTagsToApplication\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AppReview\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"AppReviewToProfile\",\"relationFromFields\":[\"uid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AppTags\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tags\",\"relationName\":\"AppTagsToTags\",\"relationFromFields\":[\"tagId\"],\"relationToFields\":[\"tagId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apps\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Application\",\"relationName\":\"AppTagsToApplication\",\"relationFromFields\":[\"appId\"],\"relationToFields\":[\"appId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"AppTagsToProfile\",\"relationFromFields\":[\"uid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tags\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appTags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppTags\",\"relationName\":\"AppTagsToTags\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"LoginWith\":{\"values\":[{\"name\":\"google\",\"dbName\":null},{\"name\":\"facebook\",\"dbName\":null},{\"name\":\"twitter\",\"dbName\":null},{\"name\":\"apple\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

