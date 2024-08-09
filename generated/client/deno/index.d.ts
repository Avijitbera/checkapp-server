
/**
 * Client
**/

import * as runtime from '.././runtime/library.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model AppReview
 * 
 */
export type AppReview = $Result.DefaultSelection<Prisma.$AppReviewPayload>
/**
 * Model AppTags
 * 
 */
export type AppTags = $Result.DefaultSelection<Prisma.$AppTagsPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoginWith: {
  google: 'google',
  facebook: 'facebook',
  twitter: 'twitter',
  apple: 'apple'
};

export type LoginWith = (typeof LoginWith)[keyof typeof LoginWith]

}

export type LoginWith = $Enums.LoginWith

export const LoginWith: typeof $Enums.LoginWith

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs>;

  /**
   * `prisma.appReview`: Exposes CRUD operations for the **AppReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppReviews
    * const appReviews = await prisma.appReview.findMany()
    * ```
    */
  get appReview(): Prisma.AppReviewDelegate<ExtArgs>;

  /**
   * `prisma.appTags`: Exposes CRUD operations for the **AppTags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppTags
    * const appTags = await prisma.appTags.findMany()
    * ```
    */
  get appTags(): Prisma.AppTagsDelegate<ExtArgs>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Application: 'Application',
    AppReview: 'AppReview',
    AppTags: 'AppTags',
    Tags: 'Tags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'profile' | 'application' | 'appReview' | 'appTags' | 'tags'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      AppReview: {
        payload: Prisma.$AppReviewPayload<ExtArgs>
        fields: Prisma.AppReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppReviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppReviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload>
          }
          findFirst: {
            args: Prisma.AppReviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppReviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload>
          }
          findMany: {
            args: Prisma.AppReviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload>[]
          }
          create: {
            args: Prisma.AppReviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload>
          }
          createMany: {
            args: Prisma.AppReviewCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AppReviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload>
          }
          update: {
            args: Prisma.AppReviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload>
          }
          deleteMany: {
            args: Prisma.AppReviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppReviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppReviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppReviewPayload>
          }
          aggregate: {
            args: Prisma.AppReviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppReview>
          }
          groupBy: {
            args: Prisma.AppReviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppReviewCountArgs<ExtArgs>,
            result: $Utils.Optional<AppReviewCountAggregateOutputType> | number
          }
        }
      }
      AppTags: {
        payload: Prisma.$AppTagsPayload<ExtArgs>
        fields: Prisma.AppTagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppTagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppTagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload>
          }
          findFirst: {
            args: Prisma.AppTagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppTagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload>
          }
          findMany: {
            args: Prisma.AppTagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload>[]
          }
          create: {
            args: Prisma.AppTagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload>
          }
          createMany: {
            args: Prisma.AppTagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AppTagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload>
          }
          update: {
            args: Prisma.AppTagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload>
          }
          deleteMany: {
            args: Prisma.AppTagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppTagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppTagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppTagsPayload>
          }
          aggregate: {
            args: Prisma.AppTagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppTags>
          }
          groupBy: {
            args: Prisma.AppTagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppTagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppTagsCountArgs<ExtArgs>,
            result: $Utils.Optional<AppTagsCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    reviews: number
    tags: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ProfileCountOutputTypeCountReviewsArgs
    tags?: boolean | ProfileCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppReviewWhereInput
  }


  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppTagsWhereInput
  }



  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    tags: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ApplicationCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppTagsWhereInput
  }



  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    appTags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appTags?: boolean | TagsCountOutputTypeCountAppTagsArgs
  }

  // Custom InputTypes

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountAppTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppTagsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    image: string | null
    loginWith: $Enums.LoginWith | null
    createdAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    image: string | null
    loginWith: $Enums.LoginWith | null
    createdAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    uid: number
    name: number
    image: number
    loginWith: number
    createdAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    image?: true
    loginWith?: true
    createdAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    image?: true
    loginWith?: true
    createdAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    image?: true
    loginWith?: true
    createdAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    uid: string
    name: string
    image: string
    loginWith: $Enums.LoginWith
    createdAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    image?: boolean
    loginWith?: boolean
    createdAt?: boolean
    reviews?: boolean | Profile$reviewsArgs<ExtArgs>
    tags?: boolean | Profile$tagsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    uid?: boolean
    name?: boolean
    image?: boolean
    loginWith?: boolean
    createdAt?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Profile$reviewsArgs<ExtArgs>
    tags?: boolean | Profile$tagsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      reviews: Prisma.$AppReviewPayload<ExtArgs>[]
      tags: Prisma.$AppTagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      name: string
      image: string
      loginWith: $Enums.LoginWith
      createdAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reviews<T extends Profile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    tags<T extends Profile$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly uid: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly image: FieldRef<"Profile", 'String'>
    readonly loginWith: FieldRef<"Profile", 'LoginWith'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile.reviews
   */
  export type Profile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    where?: AppReviewWhereInput
    orderBy?: AppReviewOrderByWithRelationInput | AppReviewOrderByWithRelationInput[]
    cursor?: AppReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppReviewScalarFieldEnum | AppReviewScalarFieldEnum[]
  }


  /**
   * Profile.tags
   */
  export type Profile$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    where?: AppTagsWhereInput
    orderBy?: AppTagsOrderByWithRelationInput | AppTagsOrderByWithRelationInput[]
    cursor?: AppTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppTagsScalarFieldEnum | AppTagsScalarFieldEnum[]
  }


  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
  }



  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    minInstalls: number | null
    maxInstalls: number | null
    score: number | null
    ratings: number | null
    reviews: number | null
    price: number | null
    usage_rating: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    minInstalls: number | null
    maxInstalls: number | null
    score: number | null
    ratings: number | null
    reviews: number | null
    price: number | null
    usage_rating: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    appId: string | null
    appUrl: string | null
    title: string | null
    icon: string | null
    minInstalls: number | null
    maxInstalls: number | null
    score: number | null
    ratings: number | null
    reviews: number | null
    price: number | null
    free: boolean | null
    developer: string | null
    isAndroid: boolean | null
    usage_rating: number | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    appId: string | null
    appUrl: string | null
    title: string | null
    icon: string | null
    minInstalls: number | null
    maxInstalls: number | null
    score: number | null
    ratings: number | null
    reviews: number | null
    price: number | null
    free: boolean | null
    developer: string | null
    isAndroid: boolean | null
    usage_rating: number | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    appId: number
    appUrl: number
    title: number
    icon: number
    minInstalls: number
    maxInstalls: number
    score: number
    ratings: number
    reviews: number
    price: number
    free: number
    developer: number
    isAndroid: number
    usage_rating: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    minInstalls?: true
    maxInstalls?: true
    score?: true
    ratings?: true
    reviews?: true
    price?: true
    usage_rating?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    minInstalls?: true
    maxInstalls?: true
    score?: true
    ratings?: true
    reviews?: true
    price?: true
    usage_rating?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    appId?: true
    appUrl?: true
    title?: true
    icon?: true
    minInstalls?: true
    maxInstalls?: true
    score?: true
    ratings?: true
    reviews?: true
    price?: true
    free?: true
    developer?: true
    isAndroid?: true
    usage_rating?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    appId?: true
    appUrl?: true
    title?: true
    icon?: true
    minInstalls?: true
    maxInstalls?: true
    score?: true
    ratings?: true
    reviews?: true
    price?: true
    free?: true
    developer?: true
    isAndroid?: true
    usage_rating?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    appId?: true
    appUrl?: true
    title?: true
    icon?: true
    minInstalls?: true
    maxInstalls?: true
    score?: true
    ratings?: true
    reviews?: true
    price?: true
    free?: true
    developer?: true
    isAndroid?: true
    usage_rating?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    appId: string
    appUrl: string
    title: string
    icon: string
    minInstalls: number
    maxInstalls: number
    score: number
    ratings: number
    reviews: number
    price: number
    free: boolean
    developer: string
    isAndroid: boolean
    usage_rating: number
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appId?: boolean
    appUrl?: boolean
    title?: boolean
    icon?: boolean
    minInstalls?: boolean
    maxInstalls?: boolean
    score?: boolean
    ratings?: boolean
    reviews?: boolean
    price?: boolean
    free?: boolean
    developer?: boolean
    isAndroid?: boolean
    usage_rating?: boolean
    tags?: boolean | Application$tagsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    appId?: boolean
    appUrl?: boolean
    title?: boolean
    icon?: boolean
    minInstalls?: boolean
    maxInstalls?: boolean
    score?: boolean
    ratings?: boolean
    reviews?: boolean
    price?: boolean
    free?: boolean
    developer?: boolean
    isAndroid?: boolean
    usage_rating?: boolean
  }

  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Application$tagsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      tags: Prisma.$AppTagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      appId: string
      appUrl: string
      title: string
      icon: string
      minInstalls: number
      maxInstalls: number
      score: number
      ratings: number
      reviews: number
      price: number
      free: boolean
      developer: string
      isAndroid: boolean
      usage_rating: number
    }, ExtArgs["result"]["application"]>
    composites: {}
  }


  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Application that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
    **/
    create<T extends ApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Applications.
     *     @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tags<T extends Application$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Application$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Application model
   */ 
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly appId: FieldRef<"Application", 'String'>
    readonly appUrl: FieldRef<"Application", 'String'>
    readonly title: FieldRef<"Application", 'String'>
    readonly icon: FieldRef<"Application", 'String'>
    readonly minInstalls: FieldRef<"Application", 'Int'>
    readonly maxInstalls: FieldRef<"Application", 'Int'>
    readonly score: FieldRef<"Application", 'Int'>
    readonly ratings: FieldRef<"Application", 'Int'>
    readonly reviews: FieldRef<"Application", 'Int'>
    readonly price: FieldRef<"Application", 'Int'>
    readonly free: FieldRef<"Application", 'Boolean'>
    readonly developer: FieldRef<"Application", 'String'>
    readonly isAndroid: FieldRef<"Application", 'Boolean'>
    readonly usage_rating: FieldRef<"Application", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }


  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }


  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application.tags
   */
  export type Application$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    where?: AppTagsWhereInput
    orderBy?: AppTagsOrderByWithRelationInput | AppTagsOrderByWithRelationInput[]
    cursor?: AppTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppTagsScalarFieldEnum | AppTagsScalarFieldEnum[]
  }


  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
  }



  /**
   * Model AppReview
   */

  export type AggregateAppReview = {
    _count: AppReviewCountAggregateOutputType | null
    _avg: AppReviewAvgAggregateOutputType | null
    _sum: AppReviewSumAggregateOutputType | null
    _min: AppReviewMinAggregateOutputType | null
    _max: AppReviewMaxAggregateOutputType | null
  }

  export type AppReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type AppReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type AppReviewMinAggregateOutputType = {
    id: number | null
    appId: string | null
    reviewId: string | null
    uid: string | null
    message: string | null
    rating: number | null
    type: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type AppReviewMaxAggregateOutputType = {
    id: number | null
    appId: string | null
    reviewId: string | null
    uid: string | null
    message: string | null
    rating: number | null
    type: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type AppReviewCountAggregateOutputType = {
    id: number
    appId: number
    reviewId: number
    uid: number
    message: number
    rating: number
    type: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type AppReviewAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type AppReviewSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type AppReviewMinAggregateInputType = {
    id?: true
    appId?: true
    reviewId?: true
    uid?: true
    message?: true
    rating?: true
    type?: true
    createAt?: true
    updatedAt?: true
  }

  export type AppReviewMaxAggregateInputType = {
    id?: true
    appId?: true
    reviewId?: true
    uid?: true
    message?: true
    rating?: true
    type?: true
    createAt?: true
    updatedAt?: true
  }

  export type AppReviewCountAggregateInputType = {
    id?: true
    appId?: true
    reviewId?: true
    uid?: true
    message?: true
    rating?: true
    type?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppReview to aggregate.
     */
    where?: AppReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppReviews to fetch.
     */
    orderBy?: AppReviewOrderByWithRelationInput | AppReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppReviews
    **/
    _count?: true | AppReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppReviewMaxAggregateInputType
  }

  export type GetAppReviewAggregateType<T extends AppReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateAppReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppReview[P]>
      : GetScalarType<T[P], AggregateAppReview[P]>
  }




  export type AppReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppReviewWhereInput
    orderBy?: AppReviewOrderByWithAggregationInput | AppReviewOrderByWithAggregationInput[]
    by: AppReviewScalarFieldEnum[] | AppReviewScalarFieldEnum
    having?: AppReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppReviewCountAggregateInputType | true
    _avg?: AppReviewAvgAggregateInputType
    _sum?: AppReviewSumAggregateInputType
    _min?: AppReviewMinAggregateInputType
    _max?: AppReviewMaxAggregateInputType
  }

  export type AppReviewGroupByOutputType = {
    id: number
    appId: string
    reviewId: string
    uid: string
    message: string | null
    rating: number
    type: string | null
    createAt: Date
    updatedAt: Date
    _count: AppReviewCountAggregateOutputType | null
    _avg: AppReviewAvgAggregateOutputType | null
    _sum: AppReviewSumAggregateOutputType | null
    _min: AppReviewMinAggregateOutputType | null
    _max: AppReviewMaxAggregateOutputType | null
  }

  type GetAppReviewGroupByPayload<T extends AppReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppReviewGroupByOutputType[P]>
            : GetScalarType<T[P], AppReviewGroupByOutputType[P]>
        }
      >
    >


  export type AppReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appId?: boolean
    reviewId?: boolean
    uid?: boolean
    message?: boolean
    rating?: boolean
    type?: boolean
    createAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appReview"]>

  export type AppReviewSelectScalar = {
    id?: boolean
    appId?: boolean
    reviewId?: boolean
    uid?: boolean
    message?: boolean
    rating?: boolean
    type?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type AppReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }


  export type $AppReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppReview"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      appId: string
      reviewId: string
      uid: string
      message: string | null
      rating: number
      type: string | null
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appReview"]>
    composites: {}
  }


  type AppReviewGetPayload<S extends boolean | null | undefined | AppReviewDefaultArgs> = $Result.GetResult<Prisma.$AppReviewPayload, S>

  type AppReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppReviewFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AppReviewCountAggregateInputType | true
    }

  export interface AppReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppReview'], meta: { name: 'AppReview' } }
    /**
     * Find zero or one AppReview that matches the filter.
     * @param {AppReviewFindUniqueArgs} args - Arguments to find a AppReview
     * @example
     * // Get one AppReview
     * const appReview = await prisma.appReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppReviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AppReview that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppReviewFindUniqueOrThrowArgs} args - Arguments to find a AppReview
     * @example
     * // Get one AppReview
     * const appReview = await prisma.appReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppReviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AppReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppReviewFindFirstArgs} args - Arguments to find a AppReview
     * @example
     * // Get one AppReview
     * const appReview = await prisma.appReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppReviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppReviewFindFirstArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AppReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppReviewFindFirstOrThrowArgs} args - Arguments to find a AppReview
     * @example
     * // Get one AppReview
     * const appReview = await prisma.appReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppReviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AppReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppReviews
     * const appReviews = await prisma.appReview.findMany()
     * 
     * // Get first 10 AppReviews
     * const appReviews = await prisma.appReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appReviewWithIdOnly = await prisma.appReview.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppReviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AppReview.
     * @param {AppReviewCreateArgs} args - Arguments to create a AppReview.
     * @example
     * // Create one AppReview
     * const AppReview = await prisma.appReview.create({
     *   data: {
     *     // ... data to create a AppReview
     *   }
     * })
     * 
    **/
    create<T extends AppReviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppReviewCreateArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AppReviews.
     *     @param {AppReviewCreateManyArgs} args - Arguments to create many AppReviews.
     *     @example
     *     // Create many AppReviews
     *     const appReview = await prisma.appReview.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppReviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppReviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppReview.
     * @param {AppReviewDeleteArgs} args - Arguments to delete one AppReview.
     * @example
     * // Delete one AppReview
     * const AppReview = await prisma.appReview.delete({
     *   where: {
     *     // ... filter to delete one AppReview
     *   }
     * })
     * 
    **/
    delete<T extends AppReviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppReviewDeleteArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AppReview.
     * @param {AppReviewUpdateArgs} args - Arguments to update one AppReview.
     * @example
     * // Update one AppReview
     * const appReview = await prisma.appReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppReviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppReviewUpdateArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AppReviews.
     * @param {AppReviewDeleteManyArgs} args - Arguments to filter AppReviews to delete.
     * @example
     * // Delete a few AppReviews
     * const { count } = await prisma.appReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppReviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppReviews
     * const appReview = await prisma.appReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppReviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppReview.
     * @param {AppReviewUpsertArgs} args - Arguments to update or create a AppReview.
     * @example
     * // Update or create a AppReview
     * const appReview = await prisma.appReview.upsert({
     *   create: {
     *     // ... data to create a AppReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppReview we want to update
     *   }
     * })
    **/
    upsert<T extends AppReviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppReviewUpsertArgs<ExtArgs>>
    ): Prisma__AppReviewClient<$Result.GetResult<Prisma.$AppReviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AppReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppReviewCountArgs} args - Arguments to filter AppReviews to count.
     * @example
     * // Count the number of AppReviews
     * const count = await prisma.appReview.count({
     *   where: {
     *     // ... the filter for the AppReviews we want to count
     *   }
     * })
    **/
    count<T extends AppReviewCountArgs>(
      args?: Subset<T, AppReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppReviewAggregateArgs>(args: Subset<T, AppReviewAggregateArgs>): Prisma.PrismaPromise<GetAppReviewAggregateType<T>>

    /**
     * Group by AppReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppReviewGroupByArgs['orderBy'] }
        : { orderBy?: AppReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppReview model
   */
  readonly fields: AppReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AppReview model
   */ 
  interface AppReviewFieldRefs {
    readonly id: FieldRef<"AppReview", 'Int'>
    readonly appId: FieldRef<"AppReview", 'String'>
    readonly reviewId: FieldRef<"AppReview", 'String'>
    readonly uid: FieldRef<"AppReview", 'String'>
    readonly message: FieldRef<"AppReview", 'String'>
    readonly rating: FieldRef<"AppReview", 'Int'>
    readonly type: FieldRef<"AppReview", 'String'>
    readonly createAt: FieldRef<"AppReview", 'DateTime'>
    readonly updatedAt: FieldRef<"AppReview", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AppReview findUnique
   */
  export type AppReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * Filter, which AppReview to fetch.
     */
    where: AppReviewWhereUniqueInput
  }


  /**
   * AppReview findUniqueOrThrow
   */
  export type AppReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * Filter, which AppReview to fetch.
     */
    where: AppReviewWhereUniqueInput
  }


  /**
   * AppReview findFirst
   */
  export type AppReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * Filter, which AppReview to fetch.
     */
    where?: AppReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppReviews to fetch.
     */
    orderBy?: AppReviewOrderByWithRelationInput | AppReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppReviews.
     */
    cursor?: AppReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppReviews.
     */
    distinct?: AppReviewScalarFieldEnum | AppReviewScalarFieldEnum[]
  }


  /**
   * AppReview findFirstOrThrow
   */
  export type AppReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * Filter, which AppReview to fetch.
     */
    where?: AppReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppReviews to fetch.
     */
    orderBy?: AppReviewOrderByWithRelationInput | AppReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppReviews.
     */
    cursor?: AppReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppReviews.
     */
    distinct?: AppReviewScalarFieldEnum | AppReviewScalarFieldEnum[]
  }


  /**
   * AppReview findMany
   */
  export type AppReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * Filter, which AppReviews to fetch.
     */
    where?: AppReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppReviews to fetch.
     */
    orderBy?: AppReviewOrderByWithRelationInput | AppReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppReviews.
     */
    cursor?: AppReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppReviews.
     */
    skip?: number
    distinct?: AppReviewScalarFieldEnum | AppReviewScalarFieldEnum[]
  }


  /**
   * AppReview create
   */
  export type AppReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a AppReview.
     */
    data: XOR<AppReviewCreateInput, AppReviewUncheckedCreateInput>
  }


  /**
   * AppReview createMany
   */
  export type AppReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppReviews.
     */
    data: AppReviewCreateManyInput | AppReviewCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AppReview update
   */
  export type AppReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a AppReview.
     */
    data: XOR<AppReviewUpdateInput, AppReviewUncheckedUpdateInput>
    /**
     * Choose, which AppReview to update.
     */
    where: AppReviewWhereUniqueInput
  }


  /**
   * AppReview updateMany
   */
  export type AppReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppReviews.
     */
    data: XOR<AppReviewUpdateManyMutationInput, AppReviewUncheckedUpdateManyInput>
    /**
     * Filter which AppReviews to update
     */
    where?: AppReviewWhereInput
  }


  /**
   * AppReview upsert
   */
  export type AppReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the AppReview to update in case it exists.
     */
    where: AppReviewWhereUniqueInput
    /**
     * In case the AppReview found by the `where` argument doesn't exist, create a new AppReview with this data.
     */
    create: XOR<AppReviewCreateInput, AppReviewUncheckedCreateInput>
    /**
     * In case the AppReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppReviewUpdateInput, AppReviewUncheckedUpdateInput>
  }


  /**
   * AppReview delete
   */
  export type AppReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
    /**
     * Filter which AppReview to delete.
     */
    where: AppReviewWhereUniqueInput
  }


  /**
   * AppReview deleteMany
   */
  export type AppReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppReviews to delete
     */
    where?: AppReviewWhereInput
  }


  /**
   * AppReview without action
   */
  export type AppReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppReview
     */
    select?: AppReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppReviewInclude<ExtArgs> | null
  }



  /**
   * Model AppTags
   */

  export type AggregateAppTags = {
    _count: AppTagsCountAggregateOutputType | null
    _avg: AppTagsAvgAggregateOutputType | null
    _sum: AppTagsSumAggregateOutputType | null
    _min: AppTagsMinAggregateOutputType | null
    _max: AppTagsMaxAggregateOutputType | null
  }

  export type AppTagsAvgAggregateOutputType = {
    id: number | null
  }

  export type AppTagsSumAggregateOutputType = {
    id: number | null
  }

  export type AppTagsMinAggregateOutputType = {
    id: number | null
    tagId: string | null
    appId: string | null
    uid: string | null
  }

  export type AppTagsMaxAggregateOutputType = {
    id: number | null
    tagId: string | null
    appId: string | null
    uid: string | null
  }

  export type AppTagsCountAggregateOutputType = {
    id: number
    tagId: number
    appId: number
    uid: number
    _all: number
  }


  export type AppTagsAvgAggregateInputType = {
    id?: true
  }

  export type AppTagsSumAggregateInputType = {
    id?: true
  }

  export type AppTagsMinAggregateInputType = {
    id?: true
    tagId?: true
    appId?: true
    uid?: true
  }

  export type AppTagsMaxAggregateInputType = {
    id?: true
    tagId?: true
    appId?: true
    uid?: true
  }

  export type AppTagsCountAggregateInputType = {
    id?: true
    tagId?: true
    appId?: true
    uid?: true
    _all?: true
  }

  export type AppTagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppTags to aggregate.
     */
    where?: AppTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTags to fetch.
     */
    orderBy?: AppTagsOrderByWithRelationInput | AppTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppTags
    **/
    _count?: true | AppTagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppTagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppTagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppTagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppTagsMaxAggregateInputType
  }

  export type GetAppTagsAggregateType<T extends AppTagsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppTags[P]>
      : GetScalarType<T[P], AggregateAppTags[P]>
  }




  export type AppTagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppTagsWhereInput
    orderBy?: AppTagsOrderByWithAggregationInput | AppTagsOrderByWithAggregationInput[]
    by: AppTagsScalarFieldEnum[] | AppTagsScalarFieldEnum
    having?: AppTagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppTagsCountAggregateInputType | true
    _avg?: AppTagsAvgAggregateInputType
    _sum?: AppTagsSumAggregateInputType
    _min?: AppTagsMinAggregateInputType
    _max?: AppTagsMaxAggregateInputType
  }

  export type AppTagsGroupByOutputType = {
    id: number
    tagId: string
    appId: string
    uid: string
    _count: AppTagsCountAggregateOutputType | null
    _avg: AppTagsAvgAggregateOutputType | null
    _sum: AppTagsSumAggregateOutputType | null
    _min: AppTagsMinAggregateOutputType | null
    _max: AppTagsMaxAggregateOutputType | null
  }

  type GetAppTagsGroupByPayload<T extends AppTagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppTagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppTagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppTagsGroupByOutputType[P]>
            : GetScalarType<T[P], AppTagsGroupByOutputType[P]>
        }
      >
    >


  export type AppTagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    appId?: boolean
    uid?: boolean
    tags?: boolean | TagsDefaultArgs<ExtArgs>
    apps?: boolean | ApplicationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appTags"]>

  export type AppTagsSelectScalar = {
    id?: boolean
    tagId?: boolean
    appId?: boolean
    uid?: boolean
  }

  export type AppTagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | TagsDefaultArgs<ExtArgs>
    apps?: boolean | ApplicationDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }


  export type $AppTagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppTags"
    objects: {
      tags: Prisma.$TagsPayload<ExtArgs>
      apps: Prisma.$ApplicationPayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagId: string
      appId: string
      uid: string
    }, ExtArgs["result"]["appTags"]>
    composites: {}
  }


  type AppTagsGetPayload<S extends boolean | null | undefined | AppTagsDefaultArgs> = $Result.GetResult<Prisma.$AppTagsPayload, S>

  type AppTagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppTagsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AppTagsCountAggregateInputType | true
    }

  export interface AppTagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppTags'], meta: { name: 'AppTags' } }
    /**
     * Find zero or one AppTags that matches the filter.
     * @param {AppTagsFindUniqueArgs} args - Arguments to find a AppTags
     * @example
     * // Get one AppTags
     * const appTags = await prisma.appTags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppTagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppTagsFindUniqueArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AppTags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppTagsFindUniqueOrThrowArgs} args - Arguments to find a AppTags
     * @example
     * // Get one AppTags
     * const appTags = await prisma.appTags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppTagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppTagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AppTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTagsFindFirstArgs} args - Arguments to find a AppTags
     * @example
     * // Get one AppTags
     * const appTags = await prisma.appTags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppTagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppTagsFindFirstArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AppTags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTagsFindFirstOrThrowArgs} args - Arguments to find a AppTags
     * @example
     * // Get one AppTags
     * const appTags = await prisma.appTags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppTagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppTagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AppTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppTags
     * const appTags = await prisma.appTags.findMany()
     * 
     * // Get first 10 AppTags
     * const appTags = await prisma.appTags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appTagsWithIdOnly = await prisma.appTags.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppTagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppTagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AppTags.
     * @param {AppTagsCreateArgs} args - Arguments to create a AppTags.
     * @example
     * // Create one AppTags
     * const AppTags = await prisma.appTags.create({
     *   data: {
     *     // ... data to create a AppTags
     *   }
     * })
     * 
    **/
    create<T extends AppTagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppTagsCreateArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AppTags.
     *     @param {AppTagsCreateManyArgs} args - Arguments to create many AppTags.
     *     @example
     *     // Create many AppTags
     *     const appTags = await prisma.appTags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppTagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppTagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppTags.
     * @param {AppTagsDeleteArgs} args - Arguments to delete one AppTags.
     * @example
     * // Delete one AppTags
     * const AppTags = await prisma.appTags.delete({
     *   where: {
     *     // ... filter to delete one AppTags
     *   }
     * })
     * 
    **/
    delete<T extends AppTagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppTagsDeleteArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AppTags.
     * @param {AppTagsUpdateArgs} args - Arguments to update one AppTags.
     * @example
     * // Update one AppTags
     * const appTags = await prisma.appTags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppTagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppTagsUpdateArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AppTags.
     * @param {AppTagsDeleteManyArgs} args - Arguments to filter AppTags to delete.
     * @example
     * // Delete a few AppTags
     * const { count } = await prisma.appTags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppTagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppTagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppTags
     * const appTags = await prisma.appTags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppTagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppTagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppTags.
     * @param {AppTagsUpsertArgs} args - Arguments to update or create a AppTags.
     * @example
     * // Update or create a AppTags
     * const appTags = await prisma.appTags.upsert({
     *   create: {
     *     // ... data to create a AppTags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppTags we want to update
     *   }
     * })
    **/
    upsert<T extends AppTagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppTagsUpsertArgs<ExtArgs>>
    ): Prisma__AppTagsClient<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AppTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTagsCountArgs} args - Arguments to filter AppTags to count.
     * @example
     * // Count the number of AppTags
     * const count = await prisma.appTags.count({
     *   where: {
     *     // ... the filter for the AppTags we want to count
     *   }
     * })
    **/
    count<T extends AppTagsCountArgs>(
      args?: Subset<T, AppTagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppTagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppTagsAggregateArgs>(args: Subset<T, AppTagsAggregateArgs>): Prisma.PrismaPromise<GetAppTagsAggregateType<T>>

    /**
     * Group by AppTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppTagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppTagsGroupByArgs['orderBy'] }
        : { orderBy?: AppTagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppTagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppTags model
   */
  readonly fields: AppTagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppTags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppTagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tags<T extends TagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagsDefaultArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    apps<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AppTags model
   */ 
  interface AppTagsFieldRefs {
    readonly id: FieldRef<"AppTags", 'Int'>
    readonly tagId: FieldRef<"AppTags", 'String'>
    readonly appId: FieldRef<"AppTags", 'String'>
    readonly uid: FieldRef<"AppTags", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AppTags findUnique
   */
  export type AppTagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * Filter, which AppTags to fetch.
     */
    where: AppTagsWhereUniqueInput
  }


  /**
   * AppTags findUniqueOrThrow
   */
  export type AppTagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * Filter, which AppTags to fetch.
     */
    where: AppTagsWhereUniqueInput
  }


  /**
   * AppTags findFirst
   */
  export type AppTagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * Filter, which AppTags to fetch.
     */
    where?: AppTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTags to fetch.
     */
    orderBy?: AppTagsOrderByWithRelationInput | AppTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppTags.
     */
    cursor?: AppTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppTags.
     */
    distinct?: AppTagsScalarFieldEnum | AppTagsScalarFieldEnum[]
  }


  /**
   * AppTags findFirstOrThrow
   */
  export type AppTagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * Filter, which AppTags to fetch.
     */
    where?: AppTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTags to fetch.
     */
    orderBy?: AppTagsOrderByWithRelationInput | AppTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppTags.
     */
    cursor?: AppTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppTags.
     */
    distinct?: AppTagsScalarFieldEnum | AppTagsScalarFieldEnum[]
  }


  /**
   * AppTags findMany
   */
  export type AppTagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * Filter, which AppTags to fetch.
     */
    where?: AppTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTags to fetch.
     */
    orderBy?: AppTagsOrderByWithRelationInput | AppTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppTags.
     */
    cursor?: AppTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTags.
     */
    skip?: number
    distinct?: AppTagsScalarFieldEnum | AppTagsScalarFieldEnum[]
  }


  /**
   * AppTags create
   */
  export type AppTagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * The data needed to create a AppTags.
     */
    data: XOR<AppTagsCreateInput, AppTagsUncheckedCreateInput>
  }


  /**
   * AppTags createMany
   */
  export type AppTagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppTags.
     */
    data: AppTagsCreateManyInput | AppTagsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AppTags update
   */
  export type AppTagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * The data needed to update a AppTags.
     */
    data: XOR<AppTagsUpdateInput, AppTagsUncheckedUpdateInput>
    /**
     * Choose, which AppTags to update.
     */
    where: AppTagsWhereUniqueInput
  }


  /**
   * AppTags updateMany
   */
  export type AppTagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppTags.
     */
    data: XOR<AppTagsUpdateManyMutationInput, AppTagsUncheckedUpdateManyInput>
    /**
     * Filter which AppTags to update
     */
    where?: AppTagsWhereInput
  }


  /**
   * AppTags upsert
   */
  export type AppTagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * The filter to search for the AppTags to update in case it exists.
     */
    where: AppTagsWhereUniqueInput
    /**
     * In case the AppTags found by the `where` argument doesn't exist, create a new AppTags with this data.
     */
    create: XOR<AppTagsCreateInput, AppTagsUncheckedCreateInput>
    /**
     * In case the AppTags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppTagsUpdateInput, AppTagsUncheckedUpdateInput>
  }


  /**
   * AppTags delete
   */
  export type AppTagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    /**
     * Filter which AppTags to delete.
     */
    where: AppTagsWhereUniqueInput
  }


  /**
   * AppTags deleteMany
   */
  export type AppTagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppTags to delete
     */
    where?: AppTagsWhereInput
  }


  /**
   * AppTags without action
   */
  export type AppTagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
  }



  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    tagId: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    tagId: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    tagId: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    tagId?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    tagId?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    tagId?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    tagId: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    tagId?: boolean
    appTags?: boolean | Tags$appTagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    tagId?: boolean
  }

  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appTags?: boolean | Tags$appTagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      appTags: Prisma.$AppTagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      tagId: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }


  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
    **/
    create<T extends TagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsCreateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tags = await prisma.tags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
    **/
    delete<T extends TagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
    **/
    upsert<T extends TagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appTags<T extends Tags$appTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tags$appTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppTagsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tags model
   */ 
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'Int'>
    readonly name: FieldRef<"Tags", 'String'>
    readonly createdAt: FieldRef<"Tags", 'DateTime'>
    readonly tagId: FieldRef<"Tags", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }


  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
  }


  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }


  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
  }


  /**
   * Tags.appTags
   */
  export type Tags$appTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTags
     */
    select?: AppTagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AppTagsInclude<ExtArgs> | null
    where?: AppTagsWhereInput
    orderBy?: AppTagsOrderByWithRelationInput | AppTagsOrderByWithRelationInput[]
    cursor?: AppTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppTagsScalarFieldEnum | AppTagsScalarFieldEnum[]
  }


  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    name: 'name',
    image: 'image',
    loginWith: 'loginWith',
    createdAt: 'createdAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
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

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const AppReviewScalarFieldEnum: {
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

  export type AppReviewScalarFieldEnum = (typeof AppReviewScalarFieldEnum)[keyof typeof AppReviewScalarFieldEnum]


  export const AppTagsScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    appId: 'appId',
    uid: 'uid'
  };

  export type AppTagsScalarFieldEnum = (typeof AppTagsScalarFieldEnum)[keyof typeof AppTagsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    tagId: 'tagId'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'LoginWith'
   */
  export type EnumLoginWithFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoginWith'>
    


  /**
   * Reference to a field of type 'LoginWith[]'
   */
  export type ListEnumLoginWithFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoginWith[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    uid?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    image?: StringFilter<"Profile"> | string
    loginWith?: EnumLoginWithFilter<"Profile"> | $Enums.LoginWith
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    reviews?: AppReviewListRelationFilter
    tags?: AppTagsListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    image?: SortOrder
    loginWith?: SortOrder
    createdAt?: SortOrder
    reviews?: AppReviewOrderByRelationAggregateInput
    tags?: AppTagsOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    image?: StringFilter<"Profile"> | string
    loginWith?: EnumLoginWithFilter<"Profile"> | $Enums.LoginWith
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    reviews?: AppReviewListRelationFilter
    tags?: AppTagsListRelationFilter
  }, "id" | "uid">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    image?: SortOrder
    loginWith?: SortOrder
    createdAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    uid?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    image?: StringWithAggregatesFilter<"Profile"> | string
    loginWith?: EnumLoginWithWithAggregatesFilter<"Profile"> | $Enums.LoginWith
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    appId?: StringFilter<"Application"> | string
    appUrl?: StringFilter<"Application"> | string
    title?: StringFilter<"Application"> | string
    icon?: StringFilter<"Application"> | string
    minInstalls?: IntFilter<"Application"> | number
    maxInstalls?: IntFilter<"Application"> | number
    score?: IntFilter<"Application"> | number
    ratings?: IntFilter<"Application"> | number
    reviews?: IntFilter<"Application"> | number
    price?: IntFilter<"Application"> | number
    free?: BoolFilter<"Application"> | boolean
    developer?: StringFilter<"Application"> | string
    isAndroid?: BoolFilter<"Application"> | boolean
    usage_rating?: IntFilter<"Application"> | number
    tags?: AppTagsListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    appId?: SortOrder
    appUrl?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    minInstalls?: SortOrder
    maxInstalls?: SortOrder
    score?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
    free?: SortOrder
    developer?: SortOrder
    isAndroid?: SortOrder
    usage_rating?: SortOrder
    tags?: AppTagsOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    appId?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    appUrl?: StringFilter<"Application"> | string
    title?: StringFilter<"Application"> | string
    icon?: StringFilter<"Application"> | string
    minInstalls?: IntFilter<"Application"> | number
    maxInstalls?: IntFilter<"Application"> | number
    score?: IntFilter<"Application"> | number
    ratings?: IntFilter<"Application"> | number
    reviews?: IntFilter<"Application"> | number
    price?: IntFilter<"Application"> | number
    free?: BoolFilter<"Application"> | boolean
    developer?: StringFilter<"Application"> | string
    isAndroid?: BoolFilter<"Application"> | boolean
    usage_rating?: IntFilter<"Application"> | number
    tags?: AppTagsListRelationFilter
  }, "id" | "appId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    appId?: SortOrder
    appUrl?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    minInstalls?: SortOrder
    maxInstalls?: SortOrder
    score?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
    free?: SortOrder
    developer?: SortOrder
    isAndroid?: SortOrder
    usage_rating?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    appId?: StringWithAggregatesFilter<"Application"> | string
    appUrl?: StringWithAggregatesFilter<"Application"> | string
    title?: StringWithAggregatesFilter<"Application"> | string
    icon?: StringWithAggregatesFilter<"Application"> | string
    minInstalls?: IntWithAggregatesFilter<"Application"> | number
    maxInstalls?: IntWithAggregatesFilter<"Application"> | number
    score?: IntWithAggregatesFilter<"Application"> | number
    ratings?: IntWithAggregatesFilter<"Application"> | number
    reviews?: IntWithAggregatesFilter<"Application"> | number
    price?: IntWithAggregatesFilter<"Application"> | number
    free?: BoolWithAggregatesFilter<"Application"> | boolean
    developer?: StringWithAggregatesFilter<"Application"> | string
    isAndroid?: BoolWithAggregatesFilter<"Application"> | boolean
    usage_rating?: IntWithAggregatesFilter<"Application"> | number
  }

  export type AppReviewWhereInput = {
    AND?: AppReviewWhereInput | AppReviewWhereInput[]
    OR?: AppReviewWhereInput[]
    NOT?: AppReviewWhereInput | AppReviewWhereInput[]
    id?: IntFilter<"AppReview"> | number
    appId?: StringFilter<"AppReview"> | string
    reviewId?: StringFilter<"AppReview"> | string
    uid?: StringFilter<"AppReview"> | string
    message?: StringNullableFilter<"AppReview"> | string | null
    rating?: IntFilter<"AppReview"> | number
    type?: StringNullableFilter<"AppReview"> | string | null
    createAt?: DateTimeFilter<"AppReview"> | Date | string
    updatedAt?: DateTimeFilter<"AppReview"> | Date | string
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput>
  }

  export type AppReviewOrderByWithRelationInput = {
    id?: SortOrder
    appId?: SortOrder
    reviewId?: SortOrder
    uid?: SortOrder
    message?: SortOrderInput | SortOrder
    rating?: SortOrder
    type?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type AppReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reviewId?: string
    AND?: AppReviewWhereInput | AppReviewWhereInput[]
    OR?: AppReviewWhereInput[]
    NOT?: AppReviewWhereInput | AppReviewWhereInput[]
    appId?: StringFilter<"AppReview"> | string
    uid?: StringFilter<"AppReview"> | string
    message?: StringNullableFilter<"AppReview"> | string | null
    rating?: IntFilter<"AppReview"> | number
    type?: StringNullableFilter<"AppReview"> | string | null
    createAt?: DateTimeFilter<"AppReview"> | Date | string
    updatedAt?: DateTimeFilter<"AppReview"> | Date | string
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput>
  }, "id" | "reviewId">

  export type AppReviewOrderByWithAggregationInput = {
    id?: SortOrder
    appId?: SortOrder
    reviewId?: SortOrder
    uid?: SortOrder
    message?: SortOrderInput | SortOrder
    rating?: SortOrder
    type?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppReviewCountOrderByAggregateInput
    _avg?: AppReviewAvgOrderByAggregateInput
    _max?: AppReviewMaxOrderByAggregateInput
    _min?: AppReviewMinOrderByAggregateInput
    _sum?: AppReviewSumOrderByAggregateInput
  }

  export type AppReviewScalarWhereWithAggregatesInput = {
    AND?: AppReviewScalarWhereWithAggregatesInput | AppReviewScalarWhereWithAggregatesInput[]
    OR?: AppReviewScalarWhereWithAggregatesInput[]
    NOT?: AppReviewScalarWhereWithAggregatesInput | AppReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppReview"> | number
    appId?: StringWithAggregatesFilter<"AppReview"> | string
    reviewId?: StringWithAggregatesFilter<"AppReview"> | string
    uid?: StringWithAggregatesFilter<"AppReview"> | string
    message?: StringNullableWithAggregatesFilter<"AppReview"> | string | null
    rating?: IntWithAggregatesFilter<"AppReview"> | number
    type?: StringNullableWithAggregatesFilter<"AppReview"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"AppReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppReview"> | Date | string
  }

  export type AppTagsWhereInput = {
    AND?: AppTagsWhereInput | AppTagsWhereInput[]
    OR?: AppTagsWhereInput[]
    NOT?: AppTagsWhereInput | AppTagsWhereInput[]
    id?: IntFilter<"AppTags"> | number
    tagId?: StringFilter<"AppTags"> | string
    appId?: StringFilter<"AppTags"> | string
    uid?: StringFilter<"AppTags"> | string
    tags?: XOR<TagsRelationFilter, TagsWhereInput>
    apps?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput>
  }

  export type AppTagsOrderByWithRelationInput = {
    id?: SortOrder
    tagId?: SortOrder
    appId?: SortOrder
    uid?: SortOrder
    tags?: TagsOrderByWithRelationInput
    apps?: ApplicationOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type AppTagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tagId?: string
    AND?: AppTagsWhereInput | AppTagsWhereInput[]
    OR?: AppTagsWhereInput[]
    NOT?: AppTagsWhereInput | AppTagsWhereInput[]
    appId?: StringFilter<"AppTags"> | string
    uid?: StringFilter<"AppTags"> | string
    tags?: XOR<TagsRelationFilter, TagsWhereInput>
    apps?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput>
  }, "id" | "tagId">

  export type AppTagsOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    appId?: SortOrder
    uid?: SortOrder
    _count?: AppTagsCountOrderByAggregateInput
    _avg?: AppTagsAvgOrderByAggregateInput
    _max?: AppTagsMaxOrderByAggregateInput
    _min?: AppTagsMinOrderByAggregateInput
    _sum?: AppTagsSumOrderByAggregateInput
  }

  export type AppTagsScalarWhereWithAggregatesInput = {
    AND?: AppTagsScalarWhereWithAggregatesInput | AppTagsScalarWhereWithAggregatesInput[]
    OR?: AppTagsScalarWhereWithAggregatesInput[]
    NOT?: AppTagsScalarWhereWithAggregatesInput | AppTagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppTags"> | number
    tagId?: StringWithAggregatesFilter<"AppTags"> | string
    appId?: StringWithAggregatesFilter<"AppTags"> | string
    uid?: StringWithAggregatesFilter<"AppTags"> | string
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: IntFilter<"Tags"> | number
    name?: StringFilter<"Tags"> | string
    createdAt?: DateTimeFilter<"Tags"> | Date | string
    tagId?: StringFilter<"Tags"> | string
    appTags?: AppTagsListRelationFilter
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    tagId?: SortOrder
    appTags?: AppTagsOrderByRelationAggregateInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tagId?: string
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    name?: StringFilter<"Tags"> | string
    createdAt?: DateTimeFilter<"Tags"> | Date | string
    appTags?: AppTagsListRelationFilter
  }, "id" | "tagId">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    tagId?: SortOrder
    _count?: TagsCountOrderByAggregateInput
    _avg?: TagsAvgOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
    _sum?: TagsSumOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tags"> | number
    name?: StringWithAggregatesFilter<"Tags"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tags"> | Date | string
    tagId?: StringWithAggregatesFilter<"Tags"> | string
  }

  export type ProfileCreateInput = {
    uid: string
    name: string
    image: string
    loginWith?: $Enums.LoginWith
    createdAt?: Date | string
    reviews?: AppReviewCreateNestedManyWithoutProfileInput
    tags?: AppTagsCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    uid: string
    name: string
    image: string
    loginWith?: $Enums.LoginWith
    createdAt?: Date | string
    reviews?: AppReviewUncheckedCreateNestedManyWithoutProfileInput
    tags?: AppTagsUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: AppReviewUpdateManyWithoutProfileNestedInput
    tags?: AppTagsUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: AppReviewUncheckedUpdateManyWithoutProfileNestedInput
    tags?: AppTagsUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: number
    uid: string
    name: string
    image: string
    loginWith?: $Enums.LoginWith
    createdAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    appId: string
    appUrl: string
    title: string
    icon: string
    minInstalls: number
    maxInstalls: number
    score: number
    ratings: number
    reviews: number
    price: number
    free: boolean
    developer: string
    isAndroid?: boolean
    usage_rating?: number
    tags?: AppTagsCreateNestedManyWithoutAppsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    appId: string
    appUrl: string
    title: string
    icon: string
    minInstalls: number
    maxInstalls: number
    score: number
    ratings: number
    reviews: number
    price: number
    free: boolean
    developer: string
    isAndroid?: boolean
    usage_rating?: number
    tags?: AppTagsUncheckedCreateNestedManyWithoutAppsInput
  }

  export type ApplicationUpdateInput = {
    appId?: StringFieldUpdateOperationsInput | string
    appUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    minInstalls?: IntFieldUpdateOperationsInput | number
    maxInstalls?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ratings?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    free?: BoolFieldUpdateOperationsInput | boolean
    developer?: StringFieldUpdateOperationsInput | string
    isAndroid?: BoolFieldUpdateOperationsInput | boolean
    usage_rating?: IntFieldUpdateOperationsInput | number
    tags?: AppTagsUpdateManyWithoutAppsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    appUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    minInstalls?: IntFieldUpdateOperationsInput | number
    maxInstalls?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ratings?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    free?: BoolFieldUpdateOperationsInput | boolean
    developer?: StringFieldUpdateOperationsInput | string
    isAndroid?: BoolFieldUpdateOperationsInput | boolean
    usage_rating?: IntFieldUpdateOperationsInput | number
    tags?: AppTagsUncheckedUpdateManyWithoutAppsNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: number
    appId: string
    appUrl: string
    title: string
    icon: string
    minInstalls: number
    maxInstalls: number
    score: number
    ratings: number
    reviews: number
    price: number
    free: boolean
    developer: string
    isAndroid?: boolean
    usage_rating?: number
  }

  export type ApplicationUpdateManyMutationInput = {
    appId?: StringFieldUpdateOperationsInput | string
    appUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    minInstalls?: IntFieldUpdateOperationsInput | number
    maxInstalls?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ratings?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    free?: BoolFieldUpdateOperationsInput | boolean
    developer?: StringFieldUpdateOperationsInput | string
    isAndroid?: BoolFieldUpdateOperationsInput | boolean
    usage_rating?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    appUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    minInstalls?: IntFieldUpdateOperationsInput | number
    maxInstalls?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ratings?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    free?: BoolFieldUpdateOperationsInput | boolean
    developer?: StringFieldUpdateOperationsInput | string
    isAndroid?: BoolFieldUpdateOperationsInput | boolean
    usage_rating?: IntFieldUpdateOperationsInput | number
  }

  export type AppReviewCreateInput = {
    appId: string
    reviewId: string
    message?: string | null
    rating?: number
    type?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutReviewsInput
  }

  export type AppReviewUncheckedCreateInput = {
    id?: number
    appId: string
    reviewId: string
    uid: string
    message?: string | null
    rating?: number
    type?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppReviewUpdateInput = {
    appId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type AppReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppReviewCreateManyInput = {
    id?: number
    appId: string
    reviewId: string
    uid: string
    message?: string | null
    rating?: number
    type?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppReviewUpdateManyMutationInput = {
    appId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppTagsCreateInput = {
    tags: TagsCreateNestedOneWithoutAppTagsInput
    apps: ApplicationCreateNestedOneWithoutTagsInput
    profile: ProfileCreateNestedOneWithoutTagsInput
  }

  export type AppTagsUncheckedCreateInput = {
    id?: number
    tagId: string
    appId: string
    uid: string
  }

  export type AppTagsUpdateInput = {
    tags?: TagsUpdateOneRequiredWithoutAppTagsNestedInput
    apps?: ApplicationUpdateOneRequiredWithoutTagsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutTagsNestedInput
  }

  export type AppTagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type AppTagsCreateManyInput = {
    id?: number
    tagId: string
    appId: string
    uid: string
  }

  export type AppTagsUpdateManyMutationInput = {

  }

  export type AppTagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type TagsCreateInput = {
    name: string
    createdAt?: Date | string
    tagId: string
    appTags?: AppTagsCreateNestedManyWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    tagId: string
    appTags?: AppTagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tagId?: StringFieldUpdateOperationsInput | string
    appTags?: AppTagsUpdateManyWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tagId?: StringFieldUpdateOperationsInput | string
    appTags?: AppTagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagsCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    tagId: string
  }

  export type TagsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumLoginWithFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginWith | EnumLoginWithFieldRefInput<$PrismaModel>
    in?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginWithFilter<$PrismaModel> | $Enums.LoginWith
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppReviewListRelationFilter = {
    every?: AppReviewWhereInput
    some?: AppReviewWhereInput
    none?: AppReviewWhereInput
  }

  export type AppTagsListRelationFilter = {
    every?: AppTagsWhereInput
    some?: AppTagsWhereInput
    none?: AppTagsWhereInput
  }

  export type AppReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppTagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    image?: SortOrder
    loginWith?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    image?: SortOrder
    loginWith?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    image?: SortOrder
    loginWith?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumLoginWithWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginWith | EnumLoginWithFieldRefInput<$PrismaModel>
    in?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginWithWithAggregatesFilter<$PrismaModel> | $Enums.LoginWith
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginWithFilter<$PrismaModel>
    _max?: NestedEnumLoginWithFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    appUrl?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    minInstalls?: SortOrder
    maxInstalls?: SortOrder
    score?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
    free?: SortOrder
    developer?: SortOrder
    isAndroid?: SortOrder
    usage_rating?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    minInstalls?: SortOrder
    maxInstalls?: SortOrder
    score?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
    usage_rating?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    appUrl?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    minInstalls?: SortOrder
    maxInstalls?: SortOrder
    score?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
    free?: SortOrder
    developer?: SortOrder
    isAndroid?: SortOrder
    usage_rating?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    appUrl?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    minInstalls?: SortOrder
    maxInstalls?: SortOrder
    score?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
    free?: SortOrder
    developer?: SortOrder
    isAndroid?: SortOrder
    usage_rating?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    minInstalls?: SortOrder
    maxInstalls?: SortOrder
    score?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
    usage_rating?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppReviewCountOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    reviewId?: SortOrder
    uid?: SortOrder
    message?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type AppReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    reviewId?: SortOrder
    uid?: SortOrder
    message?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppReviewMinOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    reviewId?: SortOrder
    uid?: SortOrder
    message?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TagsRelationFilter = {
    is?: TagsWhereInput
    isNot?: TagsWhereInput
  }

  export type ApplicationRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type AppTagsCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    appId?: SortOrder
    uid?: SortOrder
  }

  export type AppTagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppTagsMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    appId?: SortOrder
    uid?: SortOrder
  }

  export type AppTagsMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    appId?: SortOrder
    uid?: SortOrder
  }

  export type AppTagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    tagId?: SortOrder
  }

  export type TagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    tagId?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    tagId?: SortOrder
  }

  export type TagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppReviewCreateNestedManyWithoutProfileInput = {
    create?: XOR<AppReviewCreateWithoutProfileInput, AppReviewUncheckedCreateWithoutProfileInput> | AppReviewCreateWithoutProfileInput[] | AppReviewUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppReviewCreateOrConnectWithoutProfileInput | AppReviewCreateOrConnectWithoutProfileInput[]
    createMany?: AppReviewCreateManyProfileInputEnvelope
    connect?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
  }

  export type AppTagsCreateNestedManyWithoutProfileInput = {
    create?: XOR<AppTagsCreateWithoutProfileInput, AppTagsUncheckedCreateWithoutProfileInput> | AppTagsCreateWithoutProfileInput[] | AppTagsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutProfileInput | AppTagsCreateOrConnectWithoutProfileInput[]
    createMany?: AppTagsCreateManyProfileInputEnvelope
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
  }

  export type AppReviewUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<AppReviewCreateWithoutProfileInput, AppReviewUncheckedCreateWithoutProfileInput> | AppReviewCreateWithoutProfileInput[] | AppReviewUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppReviewCreateOrConnectWithoutProfileInput | AppReviewCreateOrConnectWithoutProfileInput[]
    createMany?: AppReviewCreateManyProfileInputEnvelope
    connect?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
  }

  export type AppTagsUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<AppTagsCreateWithoutProfileInput, AppTagsUncheckedCreateWithoutProfileInput> | AppTagsCreateWithoutProfileInput[] | AppTagsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutProfileInput | AppTagsCreateOrConnectWithoutProfileInput[]
    createMany?: AppTagsCreateManyProfileInputEnvelope
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLoginWithFieldUpdateOperationsInput = {
    set?: $Enums.LoginWith
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppReviewUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AppReviewCreateWithoutProfileInput, AppReviewUncheckedCreateWithoutProfileInput> | AppReviewCreateWithoutProfileInput[] | AppReviewUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppReviewCreateOrConnectWithoutProfileInput | AppReviewCreateOrConnectWithoutProfileInput[]
    upsert?: AppReviewUpsertWithWhereUniqueWithoutProfileInput | AppReviewUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AppReviewCreateManyProfileInputEnvelope
    set?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    disconnect?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    delete?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    connect?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    update?: AppReviewUpdateWithWhereUniqueWithoutProfileInput | AppReviewUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AppReviewUpdateManyWithWhereWithoutProfileInput | AppReviewUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AppReviewScalarWhereInput | AppReviewScalarWhereInput[]
  }

  export type AppTagsUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AppTagsCreateWithoutProfileInput, AppTagsUncheckedCreateWithoutProfileInput> | AppTagsCreateWithoutProfileInput[] | AppTagsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutProfileInput | AppTagsCreateOrConnectWithoutProfileInput[]
    upsert?: AppTagsUpsertWithWhereUniqueWithoutProfileInput | AppTagsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AppTagsCreateManyProfileInputEnvelope
    set?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    disconnect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    delete?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    update?: AppTagsUpdateWithWhereUniqueWithoutProfileInput | AppTagsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AppTagsUpdateManyWithWhereWithoutProfileInput | AppTagsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppReviewUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AppReviewCreateWithoutProfileInput, AppReviewUncheckedCreateWithoutProfileInput> | AppReviewCreateWithoutProfileInput[] | AppReviewUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppReviewCreateOrConnectWithoutProfileInput | AppReviewCreateOrConnectWithoutProfileInput[]
    upsert?: AppReviewUpsertWithWhereUniqueWithoutProfileInput | AppReviewUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AppReviewCreateManyProfileInputEnvelope
    set?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    disconnect?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    delete?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    connect?: AppReviewWhereUniqueInput | AppReviewWhereUniqueInput[]
    update?: AppReviewUpdateWithWhereUniqueWithoutProfileInput | AppReviewUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AppReviewUpdateManyWithWhereWithoutProfileInput | AppReviewUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AppReviewScalarWhereInput | AppReviewScalarWhereInput[]
  }

  export type AppTagsUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AppTagsCreateWithoutProfileInput, AppTagsUncheckedCreateWithoutProfileInput> | AppTagsCreateWithoutProfileInput[] | AppTagsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutProfileInput | AppTagsCreateOrConnectWithoutProfileInput[]
    upsert?: AppTagsUpsertWithWhereUniqueWithoutProfileInput | AppTagsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AppTagsCreateManyProfileInputEnvelope
    set?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    disconnect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    delete?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    update?: AppTagsUpdateWithWhereUniqueWithoutProfileInput | AppTagsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AppTagsUpdateManyWithWhereWithoutProfileInput | AppTagsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
  }

  export type AppTagsCreateNestedManyWithoutAppsInput = {
    create?: XOR<AppTagsCreateWithoutAppsInput, AppTagsUncheckedCreateWithoutAppsInput> | AppTagsCreateWithoutAppsInput[] | AppTagsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutAppsInput | AppTagsCreateOrConnectWithoutAppsInput[]
    createMany?: AppTagsCreateManyAppsInputEnvelope
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
  }

  export type AppTagsUncheckedCreateNestedManyWithoutAppsInput = {
    create?: XOR<AppTagsCreateWithoutAppsInput, AppTagsUncheckedCreateWithoutAppsInput> | AppTagsCreateWithoutAppsInput[] | AppTagsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutAppsInput | AppTagsCreateOrConnectWithoutAppsInput[]
    createMany?: AppTagsCreateManyAppsInputEnvelope
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AppTagsUpdateManyWithoutAppsNestedInput = {
    create?: XOR<AppTagsCreateWithoutAppsInput, AppTagsUncheckedCreateWithoutAppsInput> | AppTagsCreateWithoutAppsInput[] | AppTagsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutAppsInput | AppTagsCreateOrConnectWithoutAppsInput[]
    upsert?: AppTagsUpsertWithWhereUniqueWithoutAppsInput | AppTagsUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: AppTagsCreateManyAppsInputEnvelope
    set?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    disconnect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    delete?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    update?: AppTagsUpdateWithWhereUniqueWithoutAppsInput | AppTagsUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: AppTagsUpdateManyWithWhereWithoutAppsInput | AppTagsUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
  }

  export type AppTagsUncheckedUpdateManyWithoutAppsNestedInput = {
    create?: XOR<AppTagsCreateWithoutAppsInput, AppTagsUncheckedCreateWithoutAppsInput> | AppTagsCreateWithoutAppsInput[] | AppTagsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutAppsInput | AppTagsCreateOrConnectWithoutAppsInput[]
    upsert?: AppTagsUpsertWithWhereUniqueWithoutAppsInput | AppTagsUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: AppTagsCreateManyAppsInputEnvelope
    set?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    disconnect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    delete?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    update?: AppTagsUpdateWithWhereUniqueWithoutAppsInput | AppTagsUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: AppTagsUpdateManyWithWhereWithoutAppsInput | AppTagsUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReviewsInput
    connect?: ProfileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReviewsInput
    upsert?: ProfileUpsertWithoutReviewsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutReviewsInput, ProfileUpdateWithoutReviewsInput>, ProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type TagsCreateNestedOneWithoutAppTagsInput = {
    create?: XOR<TagsCreateWithoutAppTagsInput, TagsUncheckedCreateWithoutAppTagsInput>
    connectOrCreate?: TagsCreateOrConnectWithoutAppTagsInput
    connect?: TagsWhereUniqueInput
  }

  export type ApplicationCreateNestedOneWithoutTagsInput = {
    create?: XOR<ApplicationCreateWithoutTagsInput, ApplicationUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutTagsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutTagsInput = {
    create?: XOR<ProfileCreateWithoutTagsInput, ProfileUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTagsInput
    connect?: ProfileWhereUniqueInput
  }

  export type TagsUpdateOneRequiredWithoutAppTagsNestedInput = {
    create?: XOR<TagsCreateWithoutAppTagsInput, TagsUncheckedCreateWithoutAppTagsInput>
    connectOrCreate?: TagsCreateOrConnectWithoutAppTagsInput
    upsert?: TagsUpsertWithoutAppTagsInput
    connect?: TagsWhereUniqueInput
    update?: XOR<XOR<TagsUpdateToOneWithWhereWithoutAppTagsInput, TagsUpdateWithoutAppTagsInput>, TagsUncheckedUpdateWithoutAppTagsInput>
  }

  export type ApplicationUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ApplicationCreateWithoutTagsInput, ApplicationUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutTagsInput
    upsert?: ApplicationUpsertWithoutTagsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutTagsInput, ApplicationUpdateWithoutTagsInput>, ApplicationUncheckedUpdateWithoutTagsInput>
  }

  export type ProfileUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ProfileCreateWithoutTagsInput, ProfileUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTagsInput
    upsert?: ProfileUpsertWithoutTagsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutTagsInput, ProfileUpdateWithoutTagsInput>, ProfileUncheckedUpdateWithoutTagsInput>
  }

  export type AppTagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<AppTagsCreateWithoutTagsInput, AppTagsUncheckedCreateWithoutTagsInput> | AppTagsCreateWithoutTagsInput[] | AppTagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutTagsInput | AppTagsCreateOrConnectWithoutTagsInput[]
    createMany?: AppTagsCreateManyTagsInputEnvelope
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
  }

  export type AppTagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<AppTagsCreateWithoutTagsInput, AppTagsUncheckedCreateWithoutTagsInput> | AppTagsCreateWithoutTagsInput[] | AppTagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutTagsInput | AppTagsCreateOrConnectWithoutTagsInput[]
    createMany?: AppTagsCreateManyTagsInputEnvelope
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
  }

  export type AppTagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<AppTagsCreateWithoutTagsInput, AppTagsUncheckedCreateWithoutTagsInput> | AppTagsCreateWithoutTagsInput[] | AppTagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutTagsInput | AppTagsCreateOrConnectWithoutTagsInput[]
    upsert?: AppTagsUpsertWithWhereUniqueWithoutTagsInput | AppTagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: AppTagsCreateManyTagsInputEnvelope
    set?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    disconnect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    delete?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    update?: AppTagsUpdateWithWhereUniqueWithoutTagsInput | AppTagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: AppTagsUpdateManyWithWhereWithoutTagsInput | AppTagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
  }

  export type AppTagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<AppTagsCreateWithoutTagsInput, AppTagsUncheckedCreateWithoutTagsInput> | AppTagsCreateWithoutTagsInput[] | AppTagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AppTagsCreateOrConnectWithoutTagsInput | AppTagsCreateOrConnectWithoutTagsInput[]
    upsert?: AppTagsUpsertWithWhereUniqueWithoutTagsInput | AppTagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: AppTagsCreateManyTagsInputEnvelope
    set?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    disconnect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    delete?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    connect?: AppTagsWhereUniqueInput | AppTagsWhereUniqueInput[]
    update?: AppTagsUpdateWithWhereUniqueWithoutTagsInput | AppTagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: AppTagsUpdateManyWithWhereWithoutTagsInput | AppTagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumLoginWithFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginWith | EnumLoginWithFieldRefInput<$PrismaModel>
    in?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginWithFilter<$PrismaModel> | $Enums.LoginWith
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumLoginWithWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginWith | EnumLoginWithFieldRefInput<$PrismaModel>
    in?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginWith[] | ListEnumLoginWithFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginWithWithAggregatesFilter<$PrismaModel> | $Enums.LoginWith
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginWithFilter<$PrismaModel>
    _max?: NestedEnumLoginWithFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AppReviewCreateWithoutProfileInput = {
    appId: string
    reviewId: string
    message?: string | null
    rating?: number
    type?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppReviewUncheckedCreateWithoutProfileInput = {
    id?: number
    appId: string
    reviewId: string
    message?: string | null
    rating?: number
    type?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppReviewCreateOrConnectWithoutProfileInput = {
    where: AppReviewWhereUniqueInput
    create: XOR<AppReviewCreateWithoutProfileInput, AppReviewUncheckedCreateWithoutProfileInput>
  }

  export type AppReviewCreateManyProfileInputEnvelope = {
    data: AppReviewCreateManyProfileInput | AppReviewCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type AppTagsCreateWithoutProfileInput = {
    tags: TagsCreateNestedOneWithoutAppTagsInput
    apps: ApplicationCreateNestedOneWithoutTagsInput
  }

  export type AppTagsUncheckedCreateWithoutProfileInput = {
    id?: number
    tagId: string
    appId: string
  }

  export type AppTagsCreateOrConnectWithoutProfileInput = {
    where: AppTagsWhereUniqueInput
    create: XOR<AppTagsCreateWithoutProfileInput, AppTagsUncheckedCreateWithoutProfileInput>
  }

  export type AppTagsCreateManyProfileInputEnvelope = {
    data: AppTagsCreateManyProfileInput | AppTagsCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type AppReviewUpsertWithWhereUniqueWithoutProfileInput = {
    where: AppReviewWhereUniqueInput
    update: XOR<AppReviewUpdateWithoutProfileInput, AppReviewUncheckedUpdateWithoutProfileInput>
    create: XOR<AppReviewCreateWithoutProfileInput, AppReviewUncheckedCreateWithoutProfileInput>
  }

  export type AppReviewUpdateWithWhereUniqueWithoutProfileInput = {
    where: AppReviewWhereUniqueInput
    data: XOR<AppReviewUpdateWithoutProfileInput, AppReviewUncheckedUpdateWithoutProfileInput>
  }

  export type AppReviewUpdateManyWithWhereWithoutProfileInput = {
    where: AppReviewScalarWhereInput
    data: XOR<AppReviewUpdateManyMutationInput, AppReviewUncheckedUpdateManyWithoutProfileInput>
  }

  export type AppReviewScalarWhereInput = {
    AND?: AppReviewScalarWhereInput | AppReviewScalarWhereInput[]
    OR?: AppReviewScalarWhereInput[]
    NOT?: AppReviewScalarWhereInput | AppReviewScalarWhereInput[]
    id?: IntFilter<"AppReview"> | number
    appId?: StringFilter<"AppReview"> | string
    reviewId?: StringFilter<"AppReview"> | string
    uid?: StringFilter<"AppReview"> | string
    message?: StringNullableFilter<"AppReview"> | string | null
    rating?: IntFilter<"AppReview"> | number
    type?: StringNullableFilter<"AppReview"> | string | null
    createAt?: DateTimeFilter<"AppReview"> | Date | string
    updatedAt?: DateTimeFilter<"AppReview"> | Date | string
  }

  export type AppTagsUpsertWithWhereUniqueWithoutProfileInput = {
    where: AppTagsWhereUniqueInput
    update: XOR<AppTagsUpdateWithoutProfileInput, AppTagsUncheckedUpdateWithoutProfileInput>
    create: XOR<AppTagsCreateWithoutProfileInput, AppTagsUncheckedCreateWithoutProfileInput>
  }

  export type AppTagsUpdateWithWhereUniqueWithoutProfileInput = {
    where: AppTagsWhereUniqueInput
    data: XOR<AppTagsUpdateWithoutProfileInput, AppTagsUncheckedUpdateWithoutProfileInput>
  }

  export type AppTagsUpdateManyWithWhereWithoutProfileInput = {
    where: AppTagsScalarWhereInput
    data: XOR<AppTagsUpdateManyMutationInput, AppTagsUncheckedUpdateManyWithoutProfileInput>
  }

  export type AppTagsScalarWhereInput = {
    AND?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
    OR?: AppTagsScalarWhereInput[]
    NOT?: AppTagsScalarWhereInput | AppTagsScalarWhereInput[]
    id?: IntFilter<"AppTags"> | number
    tagId?: StringFilter<"AppTags"> | string
    appId?: StringFilter<"AppTags"> | string
    uid?: StringFilter<"AppTags"> | string
  }

  export type AppTagsCreateWithoutAppsInput = {
    tags: TagsCreateNestedOneWithoutAppTagsInput
    profile: ProfileCreateNestedOneWithoutTagsInput
  }

  export type AppTagsUncheckedCreateWithoutAppsInput = {
    id?: number
    tagId: string
    uid: string
  }

  export type AppTagsCreateOrConnectWithoutAppsInput = {
    where: AppTagsWhereUniqueInput
    create: XOR<AppTagsCreateWithoutAppsInput, AppTagsUncheckedCreateWithoutAppsInput>
  }

  export type AppTagsCreateManyAppsInputEnvelope = {
    data: AppTagsCreateManyAppsInput | AppTagsCreateManyAppsInput[]
    skipDuplicates?: boolean
  }

  export type AppTagsUpsertWithWhereUniqueWithoutAppsInput = {
    where: AppTagsWhereUniqueInput
    update: XOR<AppTagsUpdateWithoutAppsInput, AppTagsUncheckedUpdateWithoutAppsInput>
    create: XOR<AppTagsCreateWithoutAppsInput, AppTagsUncheckedCreateWithoutAppsInput>
  }

  export type AppTagsUpdateWithWhereUniqueWithoutAppsInput = {
    where: AppTagsWhereUniqueInput
    data: XOR<AppTagsUpdateWithoutAppsInput, AppTagsUncheckedUpdateWithoutAppsInput>
  }

  export type AppTagsUpdateManyWithWhereWithoutAppsInput = {
    where: AppTagsScalarWhereInput
    data: XOR<AppTagsUpdateManyMutationInput, AppTagsUncheckedUpdateManyWithoutAppsInput>
  }

  export type ProfileCreateWithoutReviewsInput = {
    uid: string
    name: string
    image: string
    loginWith?: $Enums.LoginWith
    createdAt?: Date | string
    tags?: AppTagsCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutReviewsInput = {
    id?: number
    uid: string
    name: string
    image: string
    loginWith?: $Enums.LoginWith
    createdAt?: Date | string
    tags?: AppTagsUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutReviewsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
  }

  export type ProfileUpsertWithoutReviewsInput = {
    update: XOR<ProfileUpdateWithoutReviewsInput, ProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutReviewsInput, ProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type ProfileUpdateWithoutReviewsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: AppTagsUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: AppTagsUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type TagsCreateWithoutAppTagsInput = {
    name: string
    createdAt?: Date | string
    tagId: string
  }

  export type TagsUncheckedCreateWithoutAppTagsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    tagId: string
  }

  export type TagsCreateOrConnectWithoutAppTagsInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutAppTagsInput, TagsUncheckedCreateWithoutAppTagsInput>
  }

  export type ApplicationCreateWithoutTagsInput = {
    appId: string
    appUrl: string
    title: string
    icon: string
    minInstalls: number
    maxInstalls: number
    score: number
    ratings: number
    reviews: number
    price: number
    free: boolean
    developer: string
    isAndroid?: boolean
    usage_rating?: number
  }

  export type ApplicationUncheckedCreateWithoutTagsInput = {
    id?: number
    appId: string
    appUrl: string
    title: string
    icon: string
    minInstalls: number
    maxInstalls: number
    score: number
    ratings: number
    reviews: number
    price: number
    free: boolean
    developer: string
    isAndroid?: boolean
    usage_rating?: number
  }

  export type ApplicationCreateOrConnectWithoutTagsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutTagsInput, ApplicationUncheckedCreateWithoutTagsInput>
  }

  export type ProfileCreateWithoutTagsInput = {
    uid: string
    name: string
    image: string
    loginWith?: $Enums.LoginWith
    createdAt?: Date | string
    reviews?: AppReviewCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutTagsInput = {
    id?: number
    uid: string
    name: string
    image: string
    loginWith?: $Enums.LoginWith
    createdAt?: Date | string
    reviews?: AppReviewUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutTagsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutTagsInput, ProfileUncheckedCreateWithoutTagsInput>
  }

  export type TagsUpsertWithoutAppTagsInput = {
    update: XOR<TagsUpdateWithoutAppTagsInput, TagsUncheckedUpdateWithoutAppTagsInput>
    create: XOR<TagsCreateWithoutAppTagsInput, TagsUncheckedCreateWithoutAppTagsInput>
    where?: TagsWhereInput
  }

  export type TagsUpdateToOneWithWhereWithoutAppTagsInput = {
    where?: TagsWhereInput
    data: XOR<TagsUpdateWithoutAppTagsInput, TagsUncheckedUpdateWithoutAppTagsInput>
  }

  export type TagsUpdateWithoutAppTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateWithoutAppTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpsertWithoutTagsInput = {
    update: XOR<ApplicationUpdateWithoutTagsInput, ApplicationUncheckedUpdateWithoutTagsInput>
    create: XOR<ApplicationCreateWithoutTagsInput, ApplicationUncheckedCreateWithoutTagsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutTagsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutTagsInput, ApplicationUncheckedUpdateWithoutTagsInput>
  }

  export type ApplicationUpdateWithoutTagsInput = {
    appId?: StringFieldUpdateOperationsInput | string
    appUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    minInstalls?: IntFieldUpdateOperationsInput | number
    maxInstalls?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ratings?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    free?: BoolFieldUpdateOperationsInput | boolean
    developer?: StringFieldUpdateOperationsInput | string
    isAndroid?: BoolFieldUpdateOperationsInput | boolean
    usage_rating?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    appUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    minInstalls?: IntFieldUpdateOperationsInput | number
    maxInstalls?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ratings?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    free?: BoolFieldUpdateOperationsInput | boolean
    developer?: StringFieldUpdateOperationsInput | string
    isAndroid?: BoolFieldUpdateOperationsInput | boolean
    usage_rating?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileUpsertWithoutTagsInput = {
    update: XOR<ProfileUpdateWithoutTagsInput, ProfileUncheckedUpdateWithoutTagsInput>
    create: XOR<ProfileCreateWithoutTagsInput, ProfileUncheckedCreateWithoutTagsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutTagsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutTagsInput, ProfileUncheckedUpdateWithoutTagsInput>
  }

  export type ProfileUpdateWithoutTagsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: AppReviewUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    loginWith?: EnumLoginWithFieldUpdateOperationsInput | $Enums.LoginWith
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: AppReviewUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type AppTagsCreateWithoutTagsInput = {
    apps: ApplicationCreateNestedOneWithoutTagsInput
    profile: ProfileCreateNestedOneWithoutTagsInput
  }

  export type AppTagsUncheckedCreateWithoutTagsInput = {
    id?: number
    appId: string
    uid: string
  }

  export type AppTagsCreateOrConnectWithoutTagsInput = {
    where: AppTagsWhereUniqueInput
    create: XOR<AppTagsCreateWithoutTagsInput, AppTagsUncheckedCreateWithoutTagsInput>
  }

  export type AppTagsCreateManyTagsInputEnvelope = {
    data: AppTagsCreateManyTagsInput | AppTagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type AppTagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: AppTagsWhereUniqueInput
    update: XOR<AppTagsUpdateWithoutTagsInput, AppTagsUncheckedUpdateWithoutTagsInput>
    create: XOR<AppTagsCreateWithoutTagsInput, AppTagsUncheckedCreateWithoutTagsInput>
  }

  export type AppTagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: AppTagsWhereUniqueInput
    data: XOR<AppTagsUpdateWithoutTagsInput, AppTagsUncheckedUpdateWithoutTagsInput>
  }

  export type AppTagsUpdateManyWithWhereWithoutTagsInput = {
    where: AppTagsScalarWhereInput
    data: XOR<AppTagsUpdateManyMutationInput, AppTagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type AppReviewCreateManyProfileInput = {
    id?: number
    appId: string
    reviewId: string
    message?: string | null
    rating?: number
    type?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppTagsCreateManyProfileInput = {
    id?: number
    tagId: string
    appId: string
  }

  export type AppReviewUpdateWithoutProfileInput = {
    appId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppReviewUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppReviewUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppTagsUpdateWithoutProfileInput = {
    tags?: TagsUpdateOneRequiredWithoutAppTagsNestedInput
    apps?: ApplicationUpdateOneRequiredWithoutTagsNestedInput
  }

  export type AppTagsUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
  }

  export type AppTagsUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
  }

  export type AppTagsCreateManyAppsInput = {
    id?: number
    tagId: string
    uid: string
  }

  export type AppTagsUpdateWithoutAppsInput = {
    tags?: TagsUpdateOneRequiredWithoutAppTagsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutTagsNestedInput
  }

  export type AppTagsUncheckedUpdateWithoutAppsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type AppTagsUncheckedUpdateManyWithoutAppsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type AppTagsCreateManyTagsInput = {
    id?: number
    appId: string
    uid: string
  }

  export type AppTagsUpdateWithoutTagsInput = {
    apps?: ApplicationUpdateOneRequiredWithoutTagsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutTagsNestedInput
  }

  export type AppTagsUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type AppTagsUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    appId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProfileCountOutputTypeDefaultArgs instead
     */
    export type ProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationCountOutputTypeDefaultArgs instead
     */
    export type ApplicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsCountOutputTypeDefaultArgs instead
     */
    export type TagsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationDefaultArgs instead
     */
    export type ApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppReviewDefaultArgs instead
     */
    export type AppReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppTagsDefaultArgs instead
     */
    export type AppTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppTagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsDefaultArgs instead
     */
    export type TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}