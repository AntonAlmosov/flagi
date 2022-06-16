
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model About
 * 
 */
export type About = {
  id: string
  vk: string
  telegram: string
  facebook: string
  phoneNumber: string
  email: string
  content: Prisma.JsonValue
}

/**
 * Model Author
 * 
 */
export type Author = {
  id: string
  name: string
  slug: string
  biography: Prisma.JsonValue
  imageId: string
}

/**
 * Model Piece
 * 
 */
export type Piece = {
  id: string
  title: string
  content: Prisma.JsonValue
  slug: string
  imageId: string
  createdAt: Date
  authorId: string | null
}

/**
 * Model Corpus
 * 
 */
export type Corpus = {
  id: string
  kind: Kind
  title: string
  referee: string
  content: Prisma.JsonValue
  slug: string
  createdAt: Date
  imageId: string
}

/**
 * Model CorpusAuthor
 * 
 */
export type CorpusAuthor = {
  id: string
  authorId: string
  corpusId: string
}

/**
 * Model News
 * 
 */
export type News = {
  id: string
  content: Prisma.JsonValue
  referee: string
  createdAt: Date
}

/**
 * Model Image
 * 
 */
export type Image = {
  id: string
  name: string
  url: string
  caption: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Kind: {
  MAGAZINE: 'MAGAZINE',
  PROJECT: 'PROJECT'
};

export type Kind = (typeof Kind)[keyof typeof Kind]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Abouts
 * const abouts = await prisma.about.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Abouts
   * const abouts = await prisma.about.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.about`: Exposes CRUD operations for the **About** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abouts
    * const abouts = await prisma.about.findMany()
    * ```
    */
  get about(): Prisma.AboutDelegate<GlobalReject>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<GlobalReject>;

  /**
   * `prisma.piece`: Exposes CRUD operations for the **Piece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pieces
    * const pieces = await prisma.piece.findMany()
    * ```
    */
  get piece(): Prisma.PieceDelegate<GlobalReject>;

  /**
   * `prisma.corpus`: Exposes CRUD operations for the **Corpus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Corpuses
    * const corpuses = await prisma.corpus.findMany()
    * ```
    */
  get corpus(): Prisma.CorpusDelegate<GlobalReject>;

  /**
   * `prisma.corpusAuthor`: Exposes CRUD operations for the **CorpusAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CorpusAuthors
    * const corpusAuthors = await prisma.corpusAuthor.findMany()
    * ```
    */
  get corpusAuthor(): Prisma.CorpusAuthorDelegate<GlobalReject>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
   * Prisma Client JS version: 3.15.1
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    About: 'About',
    Author: 'Author',
    Piece: 'Piece',
    Corpus: 'Corpus',
    CorpusAuthor: 'CorpusAuthor',
    News: 'News',
    Image: 'Image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */


  export type AuthorCountOutputType = {
    pieces: number
    CorpusAuthor: number
  }

  export type AuthorCountOutputTypeSelect = {
    pieces?: boolean
    CorpusAuthor?: boolean
  }

  export type AuthorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AuthorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AuthorCountOutputType
    : S extends undefined
    ? never
    : S extends AuthorCountOutputTypeArgs
    ?'include' extends U
    ? AuthorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AuthorCountOutputType ? AuthorCountOutputType[P] : never
  } 
    : AuthorCountOutputType
  : AuthorCountOutputType




  // Custom InputTypes

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     * 
    **/
    select?: AuthorCountOutputTypeSelect | null
  }



  /**
   * Count Type CorpusCountOutputType
   */


  export type CorpusCountOutputType = {
    CorpusAuthor: number
  }

  export type CorpusCountOutputTypeSelect = {
    CorpusAuthor?: boolean
  }

  export type CorpusCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CorpusCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CorpusCountOutputType
    : S extends undefined
    ? never
    : S extends CorpusCountOutputTypeArgs
    ?'include' extends U
    ? CorpusCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CorpusCountOutputType ? CorpusCountOutputType[P] : never
  } 
    : CorpusCountOutputType
  : CorpusCountOutputType




  // Custom InputTypes

  /**
   * CorpusCountOutputType without action
   */
  export type CorpusCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CorpusCountOutputType
     * 
    **/
    select?: CorpusCountOutputTypeSelect | null
  }



  /**
   * Count Type ImageCountOutputType
   */


  export type ImageCountOutputType = {
    Piece: number
    Corpus: number
    Author: number
  }

  export type ImageCountOutputTypeSelect = {
    Piece?: boolean
    Corpus?: boolean
    Author?: boolean
  }

  export type ImageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ImageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ImageCountOutputType
    : S extends undefined
    ? never
    : S extends ImageCountOutputTypeArgs
    ?'include' extends U
    ? ImageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ImageCountOutputType ? ImageCountOutputType[P] : never
  } 
    : ImageCountOutputType
  : ImageCountOutputType




  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     * 
    **/
    select?: ImageCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model About
   */


  export type AggregateAbout = {
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  export type AboutMinAggregateOutputType = {
    id: string | null
    vk: string | null
    telegram: string | null
    facebook: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type AboutMaxAggregateOutputType = {
    id: string | null
    vk: string | null
    telegram: string | null
    facebook: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type AboutCountAggregateOutputType = {
    id: number
    vk: number
    telegram: number
    facebook: number
    phoneNumber: number
    email: number
    content: number
    _all: number
  }


  export type AboutMinAggregateInputType = {
    id?: true
    vk?: true
    telegram?: true
    facebook?: true
    phoneNumber?: true
    email?: true
  }

  export type AboutMaxAggregateInputType = {
    id?: true
    vk?: true
    telegram?: true
    facebook?: true
    phoneNumber?: true
    email?: true
  }

  export type AboutCountAggregateInputType = {
    id?: true
    vk?: true
    telegram?: true
    facebook?: true
    phoneNumber?: true
    email?: true
    content?: true
    _all?: true
  }

  export type AboutAggregateArgs = {
    /**
     * Filter which About to aggregate.
     * 
    **/
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     * 
    **/
    orderBy?: Enumerable<AboutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abouts
    **/
    _count?: true | AboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutMaxAggregateInputType
  }

  export type GetAboutAggregateType<T extends AboutAggregateArgs> = {
        [P in keyof T & keyof AggregateAbout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbout[P]>
      : GetScalarType<T[P], AggregateAbout[P]>
  }




  export type AboutGroupByArgs = {
    where?: AboutWhereInput
    orderBy?: Enumerable<AboutOrderByWithAggregationInput>
    by: Array<AboutScalarFieldEnum>
    having?: AboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutCountAggregateInputType | true
    _min?: AboutMinAggregateInputType
    _max?: AboutMaxAggregateInputType
  }


  export type AboutGroupByOutputType = {
    id: string
    vk: string
    telegram: string
    facebook: string
    phoneNumber: string
    email: string
    content: JsonValue
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  type GetAboutGroupByPayload<T extends AboutGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGroupByOutputType[P]>
        }
      >
    >


  export type AboutSelect = {
    id?: boolean
    vk?: boolean
    telegram?: boolean
    facebook?: boolean
    phoneNumber?: boolean
    email?: boolean
    content?: boolean
  }

  export type AboutGetPayload<
    S extends boolean | null | undefined | AboutArgs,
    U = keyof S
      > = S extends true
        ? About
    : S extends undefined
    ? never
    : S extends AboutArgs | AboutFindManyArgs
    ?'include' extends U
    ? About 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof About ? About[P] : never
  } 
    : About
  : About


  type AboutCountArgs = Merge<
    Omit<AboutFindManyArgs, 'select' | 'include'> & {
      select?: AboutCountAggregateInputType | true
    }
  >

  export interface AboutDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one About that matches the filter.
     * @param {AboutFindUniqueArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AboutFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AboutFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'About'> extends True ? CheckSelect<T, Prisma__AboutClient<About>, Prisma__AboutClient<AboutGetPayload<T>>> : CheckSelect<T, Prisma__AboutClient<About | null >, Prisma__AboutClient<AboutGetPayload<T> | null >>

    /**
     * Find the first About that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindFirstArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AboutFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AboutFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'About'> extends True ? CheckSelect<T, Prisma__AboutClient<About>, Prisma__AboutClient<AboutGetPayload<T>>> : CheckSelect<T, Prisma__AboutClient<About | null >, Prisma__AboutClient<AboutGetPayload<T> | null >>

    /**
     * Find zero or more Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouts
     * const abouts = await prisma.about.findMany()
     * 
     * // Get first 10 Abouts
     * const abouts = await prisma.about.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutWithIdOnly = await prisma.about.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AboutFindManyArgs>(
      args?: SelectSubset<T, AboutFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<About>>, PrismaPromise<Array<AboutGetPayload<T>>>>

    /**
     * Create a About.
     * @param {AboutCreateArgs} args - Arguments to create a About.
     * @example
     * // Create one About
     * const About = await prisma.about.create({
     *   data: {
     *     // ... data to create a About
     *   }
     * })
     * 
    **/
    create<T extends AboutCreateArgs>(
      args: SelectSubset<T, AboutCreateArgs>
    ): CheckSelect<T, Prisma__AboutClient<About>, Prisma__AboutClient<AboutGetPayload<T>>>

    /**
     * Create many Abouts.
     *     @param {AboutCreateManyArgs} args - Arguments to create many Abouts.
     *     @example
     *     // Create many Abouts
     *     const about = await prisma.about.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AboutCreateManyArgs>(
      args?: SelectSubset<T, AboutCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a About.
     * @param {AboutDeleteArgs} args - Arguments to delete one About.
     * @example
     * // Delete one About
     * const About = await prisma.about.delete({
     *   where: {
     *     // ... filter to delete one About
     *   }
     * })
     * 
    **/
    delete<T extends AboutDeleteArgs>(
      args: SelectSubset<T, AboutDeleteArgs>
    ): CheckSelect<T, Prisma__AboutClient<About>, Prisma__AboutClient<AboutGetPayload<T>>>

    /**
     * Update one About.
     * @param {AboutUpdateArgs} args - Arguments to update one About.
     * @example
     * // Update one About
     * const about = await prisma.about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AboutUpdateArgs>(
      args: SelectSubset<T, AboutUpdateArgs>
    ): CheckSelect<T, Prisma__AboutClient<About>, Prisma__AboutClient<AboutGetPayload<T>>>

    /**
     * Delete zero or more Abouts.
     * @param {AboutDeleteManyArgs} args - Arguments to filter Abouts to delete.
     * @example
     * // Delete a few Abouts
     * const { count } = await prisma.about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AboutDeleteManyArgs>(
      args?: SelectSubset<T, AboutDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AboutUpdateManyArgs>(
      args: SelectSubset<T, AboutUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one About.
     * @param {AboutUpsertArgs} args - Arguments to update or create a About.
     * @example
     * // Update or create a About
     * const about = await prisma.about.upsert({
     *   create: {
     *     // ... data to create a About
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the About we want to update
     *   }
     * })
    **/
    upsert<T extends AboutUpsertArgs>(
      args: SelectSubset<T, AboutUpsertArgs>
    ): CheckSelect<T, Prisma__AboutClient<About>, Prisma__AboutClient<AboutGetPayload<T>>>

    /**
     * Find zero or more Abouts that matches the filter.
     * @param {AboutFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const about = await prisma.about.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AboutFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a About.
     * @param {AboutAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const about = await prisma.about.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AboutAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCountArgs} args - Arguments to filter Abouts to count.
     * @example
     * // Count the number of Abouts
     * const count = await prisma.about.count({
     *   where: {
     *     // ... the filter for the Abouts we want to count
     *   }
     * })
    **/
    count<T extends AboutCountArgs>(
      args?: Subset<T, AboutCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutAggregateArgs>(args: Subset<T, AboutAggregateArgs>): PrismaPromise<GetAboutAggregateType<T>>

    /**
     * Group by About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGroupByArgs} args - Group by arguments.
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
      T extends AboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutGroupByArgs['orderBy'] }
        : { orderBy?: AboutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for About.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AboutClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * About findUnique
   */
  export type AboutFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
    /**
     * Throw an Error if a About can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which About to fetch.
     * 
    **/
    where: AboutWhereUniqueInput
  }


  /**
   * About findFirst
   */
  export type AboutFindFirstArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
    /**
     * Throw an Error if a About can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which About to fetch.
     * 
    **/
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     * 
    **/
    orderBy?: Enumerable<AboutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abouts.
     * 
    **/
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abouts.
     * 
    **/
    distinct?: Enumerable<AboutScalarFieldEnum>
  }


  /**
   * About findMany
   */
  export type AboutFindManyArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
    /**
     * Filter, which Abouts to fetch.
     * 
    **/
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     * 
    **/
    orderBy?: Enumerable<AboutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abouts.
     * 
    **/
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AboutScalarFieldEnum>
  }


  /**
   * About create
   */
  export type AboutCreateArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
    /**
     * The data needed to create a About.
     * 
    **/
    data: XOR<AboutCreateInput, AboutUncheckedCreateInput>
  }


  /**
   * About createMany
   */
  export type AboutCreateManyArgs = {
    /**
     * The data used to create many Abouts.
     * 
    **/
    data: Enumerable<AboutCreateManyInput>
  }


  /**
   * About update
   */
  export type AboutUpdateArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
    /**
     * The data needed to update a About.
     * 
    **/
    data: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
    /**
     * Choose, which About to update.
     * 
    **/
    where: AboutWhereUniqueInput
  }


  /**
   * About updateMany
   */
  export type AboutUpdateManyArgs = {
    /**
     * The data used to update Abouts.
     * 
    **/
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>
    /**
     * Filter which Abouts to update
     * 
    **/
    where?: AboutWhereInput
  }


  /**
   * About upsert
   */
  export type AboutUpsertArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
    /**
     * The filter to search for the About to update in case it exists.
     * 
    **/
    where: AboutWhereUniqueInput
    /**
     * In case the About found by the `where` argument doesn't exist, create a new About with this data.
     * 
    **/
    create: XOR<AboutCreateInput, AboutUncheckedCreateInput>
    /**
     * In case the About was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
  }


  /**
   * About delete
   */
  export type AboutDeleteArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
    /**
     * Filter which About to delete.
     * 
    **/
    where: AboutWhereUniqueInput
  }


  /**
   * About deleteMany
   */
  export type AboutDeleteManyArgs = {
    /**
     * Filter which Abouts to delete
     * 
    **/
    where?: AboutWhereInput
  }


  /**
   * About findRaw
   */
  export type AboutFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * About aggregateRaw
   */
  export type AboutAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * About without action
   */
  export type AboutArgs = {
    /**
     * Select specific fields to fetch from the About
     * 
    **/
    select?: AboutSelect | null
  }



  /**
   * Model Author
   */


  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imageId: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imageId: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    biography: number
    imageId: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageId?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageId?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    biography?: true
    imageId?: true
    _all?: true
  }

  export type AuthorAggregateArgs = {
    /**
     * Filter which Author to aggregate.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs = {
    where?: AuthorWhereInput
    orderBy?: Enumerable<AuthorOrderByWithAggregationInput>
    by: Array<AuthorScalarFieldEnum>
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }


  export type AuthorGroupByOutputType = {
    id: string
    name: string
    slug: string
    biography: JsonValue
    imageId: string
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect = {
    id?: boolean
    name?: boolean
    cover?: boolean | ImageArgs
    pieces?: boolean | PieceFindManyArgs
    slug?: boolean
    biography?: boolean
    imageId?: boolean
    CorpusAuthor?: boolean | CorpusAuthorFindManyArgs
    _count?: boolean | AuthorCountOutputTypeArgs
  }

  export type AuthorInclude = {
    cover?: boolean | ImageArgs
    pieces?: boolean | PieceFindManyArgs
    CorpusAuthor?: boolean | CorpusAuthorFindManyArgs
    _count?: boolean | AuthorCountOutputTypeArgs
  }

  export type AuthorGetPayload<
    S extends boolean | null | undefined | AuthorArgs,
    U = keyof S
      > = S extends true
        ? Author
    : S extends undefined
    ? never
    : S extends AuthorArgs | AuthorFindManyArgs
    ?'include' extends U
    ? Author  & {
    [P in TrueKeys<S['include']>]:
        P extends 'cover' ? ImageGetPayload<S['include'][P]> :
        P extends 'pieces' ? Array < PieceGetPayload<S['include'][P]>>  :
        P extends 'CorpusAuthor' ? Array < CorpusAuthorGetPayload<S['include'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'cover' ? ImageGetPayload<S['select'][P]> :
        P extends 'pieces' ? Array < PieceGetPayload<S['select'][P]>>  :
        P extends 'CorpusAuthor' ? Array < CorpusAuthorGetPayload<S['select'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Author ? Author[P] : never
  } 
    : Author
  : Author


  type AuthorCountArgs = Merge<
    Omit<AuthorFindManyArgs, 'select' | 'include'> & {
      select?: AuthorCountAggregateInputType | true
    }
  >

  export interface AuthorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Author'> extends True ? CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>> : CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Author'> extends True ? CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>> : CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthorFindManyArgs>(
      args?: SelectSubset<T, AuthorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Author>>, PrismaPromise<Array<AuthorGetPayload<T>>>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends AuthorCreateArgs>(
      args: SelectSubset<T, AuthorCreateArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Create many Authors.
     *     @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorCreateManyArgs>(
      args?: SelectSubset<T, AuthorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends AuthorDeleteArgs>(
      args: SelectSubset<T, AuthorDeleteArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorUpdateArgs>(
      args: SelectSubset<T, AuthorUpdateArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorDeleteManyArgs>(
      args?: SelectSubset<T, AuthorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorUpdateManyArgs>(
      args: SelectSubset<T, AuthorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorUpsertArgs>(
      args: SelectSubset<T, AuthorUpsertArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Find zero or more Authors that matches the filter.
     * @param {AuthorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const author = await prisma.author.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AuthorFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Author.
     * @param {AuthorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const author = await prisma.author.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AuthorAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
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
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cover<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    pieces<T extends PieceFindManyArgs = {}>(args?: Subset<T, PieceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Piece>>, PrismaPromise<Array<PieceGetPayload<T>>>>;

    CorpusAuthor<T extends CorpusAuthorFindManyArgs = {}>(args?: Subset<T, CorpusAuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CorpusAuthor>>, PrismaPromise<Array<CorpusAuthorGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Throw an Error if a Author can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Throw an Error if a Author can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     * 
    **/
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author findMany
   */
  export type AuthorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Authors to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author create
   */
  export type AuthorCreateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to create a Author.
     * 
    **/
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }


  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs = {
    /**
     * The data used to create many Authors.
     * 
    **/
    data: Enumerable<AuthorCreateManyInput>
  }


  /**
   * Author update
   */
  export type AuthorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to update a Author.
     * 
    **/
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs = {
    /**
     * The data used to update Authors.
     * 
    **/
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author upsert
   */
  export type AuthorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The filter to search for the Author to update in case it exists.
     * 
    **/
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     * 
    **/
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }


  /**
   * Author delete
   */
  export type AuthorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter which Author to delete.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs = {
    /**
     * Filter which Authors to delete
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author findRaw
   */
  export type AuthorFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Author aggregateRaw
   */
  export type AuthorAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Author without action
   */
  export type AuthorArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
  }



  /**
   * Model Piece
   */


  export type AggregatePiece = {
    _count: PieceCountAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  export type PieceMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    imageId: string | null
    createdAt: Date | null
    authorId: string | null
  }

  export type PieceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    imageId: string | null
    createdAt: Date | null
    authorId: string | null
  }

  export type PieceCountAggregateOutputType = {
    id: number
    title: number
    content: number
    slug: number
    imageId: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type PieceMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    imageId?: true
    createdAt?: true
    authorId?: true
  }

  export type PieceMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    imageId?: true
    createdAt?: true
    authorId?: true
  }

  export type PieceCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    slug?: true
    imageId?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type PieceAggregateArgs = {
    /**
     * Filter which Piece to aggregate.
     * 
    **/
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     * 
    **/
    orderBy?: Enumerable<PieceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pieces
    **/
    _count?: true | PieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PieceMaxAggregateInputType
  }

  export type GetPieceAggregateType<T extends PieceAggregateArgs> = {
        [P in keyof T & keyof AggregatePiece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiece[P]>
      : GetScalarType<T[P], AggregatePiece[P]>
  }




  export type PieceGroupByArgs = {
    where?: PieceWhereInput
    orderBy?: Enumerable<PieceOrderByWithAggregationInput>
    by: Array<PieceScalarFieldEnum>
    having?: PieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PieceCountAggregateInputType | true
    _min?: PieceMinAggregateInputType
    _max?: PieceMaxAggregateInputType
  }


  export type PieceGroupByOutputType = {
    id: string
    title: string
    content: JsonValue
    slug: string
    imageId: string
    createdAt: Date
    authorId: string | null
    _count: PieceCountAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  type GetPieceGroupByPayload<T extends PieceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PieceGroupByOutputType[P]>
            : GetScalarType<T[P], PieceGroupByOutputType[P]>
        }
      >
    >


  export type PieceSelect = {
    id?: boolean
    title?: boolean
    content?: boolean
    cover?: boolean | ImageArgs
    slug?: boolean
    imageId?: boolean
    createdAt?: boolean
    author?: boolean | AuthorArgs
    authorId?: boolean
  }

  export type PieceInclude = {
    cover?: boolean | ImageArgs
    author?: boolean | AuthorArgs
  }

  export type PieceGetPayload<
    S extends boolean | null | undefined | PieceArgs,
    U = keyof S
      > = S extends true
        ? Piece
    : S extends undefined
    ? never
    : S extends PieceArgs | PieceFindManyArgs
    ?'include' extends U
    ? Piece  & {
    [P in TrueKeys<S['include']>]:
        P extends 'cover' ? ImageGetPayload<S['include'][P]> | null :
        P extends 'author' ? AuthorGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'cover' ? ImageGetPayload<S['select'][P]> | null :
        P extends 'author' ? AuthorGetPayload<S['select'][P]> | null :  P extends keyof Piece ? Piece[P] : never
  } 
    : Piece
  : Piece


  type PieceCountArgs = Merge<
    Omit<PieceFindManyArgs, 'select' | 'include'> & {
      select?: PieceCountAggregateInputType | true
    }
  >

  export interface PieceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Piece that matches the filter.
     * @param {PieceFindUniqueArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PieceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PieceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Piece'> extends True ? CheckSelect<T, Prisma__PieceClient<Piece>, Prisma__PieceClient<PieceGetPayload<T>>> : CheckSelect<T, Prisma__PieceClient<Piece | null >, Prisma__PieceClient<PieceGetPayload<T> | null >>

    /**
     * Find the first Piece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindFirstArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PieceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PieceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Piece'> extends True ? CheckSelect<T, Prisma__PieceClient<Piece>, Prisma__PieceClient<PieceGetPayload<T>>> : CheckSelect<T, Prisma__PieceClient<Piece | null >, Prisma__PieceClient<PieceGetPayload<T> | null >>

    /**
     * Find zero or more Pieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pieces
     * const pieces = await prisma.piece.findMany()
     * 
     * // Get first 10 Pieces
     * const pieces = await prisma.piece.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pieceWithIdOnly = await prisma.piece.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PieceFindManyArgs>(
      args?: SelectSubset<T, PieceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Piece>>, PrismaPromise<Array<PieceGetPayload<T>>>>

    /**
     * Create a Piece.
     * @param {PieceCreateArgs} args - Arguments to create a Piece.
     * @example
     * // Create one Piece
     * const Piece = await prisma.piece.create({
     *   data: {
     *     // ... data to create a Piece
     *   }
     * })
     * 
    **/
    create<T extends PieceCreateArgs>(
      args: SelectSubset<T, PieceCreateArgs>
    ): CheckSelect<T, Prisma__PieceClient<Piece>, Prisma__PieceClient<PieceGetPayload<T>>>

    /**
     * Create many Pieces.
     *     @param {PieceCreateManyArgs} args - Arguments to create many Pieces.
     *     @example
     *     // Create many Pieces
     *     const piece = await prisma.piece.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PieceCreateManyArgs>(
      args?: SelectSubset<T, PieceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Piece.
     * @param {PieceDeleteArgs} args - Arguments to delete one Piece.
     * @example
     * // Delete one Piece
     * const Piece = await prisma.piece.delete({
     *   where: {
     *     // ... filter to delete one Piece
     *   }
     * })
     * 
    **/
    delete<T extends PieceDeleteArgs>(
      args: SelectSubset<T, PieceDeleteArgs>
    ): CheckSelect<T, Prisma__PieceClient<Piece>, Prisma__PieceClient<PieceGetPayload<T>>>

    /**
     * Update one Piece.
     * @param {PieceUpdateArgs} args - Arguments to update one Piece.
     * @example
     * // Update one Piece
     * const piece = await prisma.piece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PieceUpdateArgs>(
      args: SelectSubset<T, PieceUpdateArgs>
    ): CheckSelect<T, Prisma__PieceClient<Piece>, Prisma__PieceClient<PieceGetPayload<T>>>

    /**
     * Delete zero or more Pieces.
     * @param {PieceDeleteManyArgs} args - Arguments to filter Pieces to delete.
     * @example
     * // Delete a few Pieces
     * const { count } = await prisma.piece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PieceDeleteManyArgs>(
      args?: SelectSubset<T, PieceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PieceUpdateManyArgs>(
      args: SelectSubset<T, PieceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Piece.
     * @param {PieceUpsertArgs} args - Arguments to update or create a Piece.
     * @example
     * // Update or create a Piece
     * const piece = await prisma.piece.upsert({
     *   create: {
     *     // ... data to create a Piece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piece we want to update
     *   }
     * })
    **/
    upsert<T extends PieceUpsertArgs>(
      args: SelectSubset<T, PieceUpsertArgs>
    ): CheckSelect<T, Prisma__PieceClient<Piece>, Prisma__PieceClient<PieceGetPayload<T>>>

    /**
     * Find zero or more Pieces that matches the filter.
     * @param {PieceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const piece = await prisma.piece.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PieceFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Piece.
     * @param {PieceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const piece = await prisma.piece.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PieceAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceCountArgs} args - Arguments to filter Pieces to count.
     * @example
     * // Count the number of Pieces
     * const count = await prisma.piece.count({
     *   where: {
     *     // ... the filter for the Pieces we want to count
     *   }
     * })
    **/
    count<T extends PieceCountArgs>(
      args?: Subset<T, PieceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PieceAggregateArgs>(args: Subset<T, PieceAggregateArgs>): PrismaPromise<GetPieceAggregateType<T>>

    /**
     * Group by Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceGroupByArgs} args - Group by arguments.
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
      T extends PieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PieceGroupByArgs['orderBy'] }
        : { orderBy?: PieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPieceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Piece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PieceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cover<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    author<T extends AuthorArgs = {}>(args?: Subset<T, AuthorArgs>): CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Piece findUnique
   */
  export type PieceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
    /**
     * Throw an Error if a Piece can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Piece to fetch.
     * 
    **/
    where: PieceWhereUniqueInput
  }


  /**
   * Piece findFirst
   */
  export type PieceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
    /**
     * Throw an Error if a Piece can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Piece to fetch.
     * 
    **/
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     * 
    **/
    orderBy?: Enumerable<PieceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pieces.
     * 
    **/
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pieces.
     * 
    **/
    distinct?: Enumerable<PieceScalarFieldEnum>
  }


  /**
   * Piece findMany
   */
  export type PieceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
    /**
     * Filter, which Pieces to fetch.
     * 
    **/
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     * 
    **/
    orderBy?: Enumerable<PieceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pieces.
     * 
    **/
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PieceScalarFieldEnum>
  }


  /**
   * Piece create
   */
  export type PieceCreateArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
    /**
     * The data needed to create a Piece.
     * 
    **/
    data: XOR<PieceCreateInput, PieceUncheckedCreateInput>
  }


  /**
   * Piece createMany
   */
  export type PieceCreateManyArgs = {
    /**
     * The data used to create many Pieces.
     * 
    **/
    data: Enumerable<PieceCreateManyInput>
  }


  /**
   * Piece update
   */
  export type PieceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
    /**
     * The data needed to update a Piece.
     * 
    **/
    data: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
    /**
     * Choose, which Piece to update.
     * 
    **/
    where: PieceWhereUniqueInput
  }


  /**
   * Piece updateMany
   */
  export type PieceUpdateManyArgs = {
    /**
     * The data used to update Pieces.
     * 
    **/
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyInput>
    /**
     * Filter which Pieces to update
     * 
    **/
    where?: PieceWhereInput
  }


  /**
   * Piece upsert
   */
  export type PieceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
    /**
     * The filter to search for the Piece to update in case it exists.
     * 
    **/
    where: PieceWhereUniqueInput
    /**
     * In case the Piece found by the `where` argument doesn't exist, create a new Piece with this data.
     * 
    **/
    create: XOR<PieceCreateInput, PieceUncheckedCreateInput>
    /**
     * In case the Piece was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
  }


  /**
   * Piece delete
   */
  export type PieceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
    /**
     * Filter which Piece to delete.
     * 
    **/
    where: PieceWhereUniqueInput
  }


  /**
   * Piece deleteMany
   */
  export type PieceDeleteManyArgs = {
    /**
     * Filter which Pieces to delete
     * 
    **/
    where?: PieceWhereInput
  }


  /**
   * Piece findRaw
   */
  export type PieceFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Piece aggregateRaw
   */
  export type PieceAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Piece without action
   */
  export type PieceArgs = {
    /**
     * Select specific fields to fetch from the Piece
     * 
    **/
    select?: PieceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PieceInclude | null
  }



  /**
   * Model Corpus
   */


  export type AggregateCorpus = {
    _count: CorpusCountAggregateOutputType | null
    _min: CorpusMinAggregateOutputType | null
    _max: CorpusMaxAggregateOutputType | null
  }

  export type CorpusMinAggregateOutputType = {
    id: string | null
    kind: Kind | null
    title: string | null
    referee: string | null
    slug: string | null
    createdAt: Date | null
    imageId: string | null
  }

  export type CorpusMaxAggregateOutputType = {
    id: string | null
    kind: Kind | null
    title: string | null
    referee: string | null
    slug: string | null
    createdAt: Date | null
    imageId: string | null
  }

  export type CorpusCountAggregateOutputType = {
    id: number
    kind: number
    title: number
    referee: number
    content: number
    slug: number
    createdAt: number
    imageId: number
    _all: number
  }


  export type CorpusMinAggregateInputType = {
    id?: true
    kind?: true
    title?: true
    referee?: true
    slug?: true
    createdAt?: true
    imageId?: true
  }

  export type CorpusMaxAggregateInputType = {
    id?: true
    kind?: true
    title?: true
    referee?: true
    slug?: true
    createdAt?: true
    imageId?: true
  }

  export type CorpusCountAggregateInputType = {
    id?: true
    kind?: true
    title?: true
    referee?: true
    content?: true
    slug?: true
    createdAt?: true
    imageId?: true
    _all?: true
  }

  export type CorpusAggregateArgs = {
    /**
     * Filter which Corpus to aggregate.
     * 
    **/
    where?: CorpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Corpuses to fetch.
     * 
    **/
    orderBy?: Enumerable<CorpusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CorpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Corpuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Corpuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Corpuses
    **/
    _count?: true | CorpusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorpusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorpusMaxAggregateInputType
  }

  export type GetCorpusAggregateType<T extends CorpusAggregateArgs> = {
        [P in keyof T & keyof AggregateCorpus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorpus[P]>
      : GetScalarType<T[P], AggregateCorpus[P]>
  }




  export type CorpusGroupByArgs = {
    where?: CorpusWhereInput
    orderBy?: Enumerable<CorpusOrderByWithAggregationInput>
    by: Array<CorpusScalarFieldEnum>
    having?: CorpusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorpusCountAggregateInputType | true
    _min?: CorpusMinAggregateInputType
    _max?: CorpusMaxAggregateInputType
  }


  export type CorpusGroupByOutputType = {
    id: string
    kind: Kind
    title: string
    referee: string
    content: JsonValue
    slug: string
    createdAt: Date
    imageId: string
    _count: CorpusCountAggregateOutputType | null
    _min: CorpusMinAggregateOutputType | null
    _max: CorpusMaxAggregateOutputType | null
  }

  type GetCorpusGroupByPayload<T extends CorpusGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CorpusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorpusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorpusGroupByOutputType[P]>
            : GetScalarType<T[P], CorpusGroupByOutputType[P]>
        }
      >
    >


  export type CorpusSelect = {
    id?: boolean
    kind?: boolean
    title?: boolean
    cover?: boolean | ImageArgs
    referee?: boolean
    content?: boolean
    slug?: boolean
    createdAt?: boolean
    imageId?: boolean
    CorpusAuthor?: boolean | CorpusAuthorFindManyArgs
    _count?: boolean | CorpusCountOutputTypeArgs
  }

  export type CorpusInclude = {
    cover?: boolean | ImageArgs
    CorpusAuthor?: boolean | CorpusAuthorFindManyArgs
    _count?: boolean | CorpusCountOutputTypeArgs
  }

  export type CorpusGetPayload<
    S extends boolean | null | undefined | CorpusArgs,
    U = keyof S
      > = S extends true
        ? Corpus
    : S extends undefined
    ? never
    : S extends CorpusArgs | CorpusFindManyArgs
    ?'include' extends U
    ? Corpus  & {
    [P in TrueKeys<S['include']>]:
        P extends 'cover' ? ImageGetPayload<S['include'][P]> | null :
        P extends 'CorpusAuthor' ? Array < CorpusAuthorGetPayload<S['include'][P]>>  :
        P extends '_count' ? CorpusCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'cover' ? ImageGetPayload<S['select'][P]> | null :
        P extends 'CorpusAuthor' ? Array < CorpusAuthorGetPayload<S['select'][P]>>  :
        P extends '_count' ? CorpusCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Corpus ? Corpus[P] : never
  } 
    : Corpus
  : Corpus


  type CorpusCountArgs = Merge<
    Omit<CorpusFindManyArgs, 'select' | 'include'> & {
      select?: CorpusCountAggregateInputType | true
    }
  >

  export interface CorpusDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Corpus that matches the filter.
     * @param {CorpusFindUniqueArgs} args - Arguments to find a Corpus
     * @example
     * // Get one Corpus
     * const corpus = await prisma.corpus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CorpusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CorpusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Corpus'> extends True ? CheckSelect<T, Prisma__CorpusClient<Corpus>, Prisma__CorpusClient<CorpusGetPayload<T>>> : CheckSelect<T, Prisma__CorpusClient<Corpus | null >, Prisma__CorpusClient<CorpusGetPayload<T> | null >>

    /**
     * Find the first Corpus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusFindFirstArgs} args - Arguments to find a Corpus
     * @example
     * // Get one Corpus
     * const corpus = await prisma.corpus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CorpusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CorpusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Corpus'> extends True ? CheckSelect<T, Prisma__CorpusClient<Corpus>, Prisma__CorpusClient<CorpusGetPayload<T>>> : CheckSelect<T, Prisma__CorpusClient<Corpus | null >, Prisma__CorpusClient<CorpusGetPayload<T> | null >>

    /**
     * Find zero or more Corpuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Corpuses
     * const corpuses = await prisma.corpus.findMany()
     * 
     * // Get first 10 Corpuses
     * const corpuses = await prisma.corpus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corpusWithIdOnly = await prisma.corpus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CorpusFindManyArgs>(
      args?: SelectSubset<T, CorpusFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Corpus>>, PrismaPromise<Array<CorpusGetPayload<T>>>>

    /**
     * Create a Corpus.
     * @param {CorpusCreateArgs} args - Arguments to create a Corpus.
     * @example
     * // Create one Corpus
     * const Corpus = await prisma.corpus.create({
     *   data: {
     *     // ... data to create a Corpus
     *   }
     * })
     * 
    **/
    create<T extends CorpusCreateArgs>(
      args: SelectSubset<T, CorpusCreateArgs>
    ): CheckSelect<T, Prisma__CorpusClient<Corpus>, Prisma__CorpusClient<CorpusGetPayload<T>>>

    /**
     * Create many Corpuses.
     *     @param {CorpusCreateManyArgs} args - Arguments to create many Corpuses.
     *     @example
     *     // Create many Corpuses
     *     const corpus = await prisma.corpus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CorpusCreateManyArgs>(
      args?: SelectSubset<T, CorpusCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Corpus.
     * @param {CorpusDeleteArgs} args - Arguments to delete one Corpus.
     * @example
     * // Delete one Corpus
     * const Corpus = await prisma.corpus.delete({
     *   where: {
     *     // ... filter to delete one Corpus
     *   }
     * })
     * 
    **/
    delete<T extends CorpusDeleteArgs>(
      args: SelectSubset<T, CorpusDeleteArgs>
    ): CheckSelect<T, Prisma__CorpusClient<Corpus>, Prisma__CorpusClient<CorpusGetPayload<T>>>

    /**
     * Update one Corpus.
     * @param {CorpusUpdateArgs} args - Arguments to update one Corpus.
     * @example
     * // Update one Corpus
     * const corpus = await prisma.corpus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CorpusUpdateArgs>(
      args: SelectSubset<T, CorpusUpdateArgs>
    ): CheckSelect<T, Prisma__CorpusClient<Corpus>, Prisma__CorpusClient<CorpusGetPayload<T>>>

    /**
     * Delete zero or more Corpuses.
     * @param {CorpusDeleteManyArgs} args - Arguments to filter Corpuses to delete.
     * @example
     * // Delete a few Corpuses
     * const { count } = await prisma.corpus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CorpusDeleteManyArgs>(
      args?: SelectSubset<T, CorpusDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corpuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Corpuses
     * const corpus = await prisma.corpus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CorpusUpdateManyArgs>(
      args: SelectSubset<T, CorpusUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Corpus.
     * @param {CorpusUpsertArgs} args - Arguments to update or create a Corpus.
     * @example
     * // Update or create a Corpus
     * const corpus = await prisma.corpus.upsert({
     *   create: {
     *     // ... data to create a Corpus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Corpus we want to update
     *   }
     * })
    **/
    upsert<T extends CorpusUpsertArgs>(
      args: SelectSubset<T, CorpusUpsertArgs>
    ): CheckSelect<T, Prisma__CorpusClient<Corpus>, Prisma__CorpusClient<CorpusGetPayload<T>>>

    /**
     * Find zero or more Corpuses that matches the filter.
     * @param {CorpusFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const corpus = await prisma.corpus.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CorpusFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Corpus.
     * @param {CorpusAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const corpus = await prisma.corpus.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CorpusAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Corpuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusCountArgs} args - Arguments to filter Corpuses to count.
     * @example
     * // Count the number of Corpuses
     * const count = await prisma.corpus.count({
     *   where: {
     *     // ... the filter for the Corpuses we want to count
     *   }
     * })
    **/
    count<T extends CorpusCountArgs>(
      args?: Subset<T, CorpusCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorpusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Corpus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorpusAggregateArgs>(args: Subset<T, CorpusAggregateArgs>): PrismaPromise<GetCorpusAggregateType<T>>

    /**
     * Group by Corpus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusGroupByArgs} args - Group by arguments.
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
      T extends CorpusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CorpusGroupByArgs['orderBy'] }
        : { orderBy?: CorpusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CorpusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorpusGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Corpus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CorpusClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cover<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    CorpusAuthor<T extends CorpusAuthorFindManyArgs = {}>(args?: Subset<T, CorpusAuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CorpusAuthor>>, PrismaPromise<Array<CorpusAuthorGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Corpus findUnique
   */
  export type CorpusFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
    /**
     * Throw an Error if a Corpus can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Corpus to fetch.
     * 
    **/
    where: CorpusWhereUniqueInput
  }


  /**
   * Corpus findFirst
   */
  export type CorpusFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
    /**
     * Throw an Error if a Corpus can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Corpus to fetch.
     * 
    **/
    where?: CorpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Corpuses to fetch.
     * 
    **/
    orderBy?: Enumerable<CorpusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Corpuses.
     * 
    **/
    cursor?: CorpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Corpuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Corpuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Corpuses.
     * 
    **/
    distinct?: Enumerable<CorpusScalarFieldEnum>
  }


  /**
   * Corpus findMany
   */
  export type CorpusFindManyArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
    /**
     * Filter, which Corpuses to fetch.
     * 
    **/
    where?: CorpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Corpuses to fetch.
     * 
    **/
    orderBy?: Enumerable<CorpusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Corpuses.
     * 
    **/
    cursor?: CorpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Corpuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Corpuses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CorpusScalarFieldEnum>
  }


  /**
   * Corpus create
   */
  export type CorpusCreateArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
    /**
     * The data needed to create a Corpus.
     * 
    **/
    data: XOR<CorpusCreateInput, CorpusUncheckedCreateInput>
  }


  /**
   * Corpus createMany
   */
  export type CorpusCreateManyArgs = {
    /**
     * The data used to create many Corpuses.
     * 
    **/
    data: Enumerable<CorpusCreateManyInput>
  }


  /**
   * Corpus update
   */
  export type CorpusUpdateArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
    /**
     * The data needed to update a Corpus.
     * 
    **/
    data: XOR<CorpusUpdateInput, CorpusUncheckedUpdateInput>
    /**
     * Choose, which Corpus to update.
     * 
    **/
    where: CorpusWhereUniqueInput
  }


  /**
   * Corpus updateMany
   */
  export type CorpusUpdateManyArgs = {
    /**
     * The data used to update Corpuses.
     * 
    **/
    data: XOR<CorpusUpdateManyMutationInput, CorpusUncheckedUpdateManyInput>
    /**
     * Filter which Corpuses to update
     * 
    **/
    where?: CorpusWhereInput
  }


  /**
   * Corpus upsert
   */
  export type CorpusUpsertArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
    /**
     * The filter to search for the Corpus to update in case it exists.
     * 
    **/
    where: CorpusWhereUniqueInput
    /**
     * In case the Corpus found by the `where` argument doesn't exist, create a new Corpus with this data.
     * 
    **/
    create: XOR<CorpusCreateInput, CorpusUncheckedCreateInput>
    /**
     * In case the Corpus was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CorpusUpdateInput, CorpusUncheckedUpdateInput>
  }


  /**
   * Corpus delete
   */
  export type CorpusDeleteArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
    /**
     * Filter which Corpus to delete.
     * 
    **/
    where: CorpusWhereUniqueInput
  }


  /**
   * Corpus deleteMany
   */
  export type CorpusDeleteManyArgs = {
    /**
     * Filter which Corpuses to delete
     * 
    **/
    where?: CorpusWhereInput
  }


  /**
   * Corpus findRaw
   */
  export type CorpusFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Corpus aggregateRaw
   */
  export type CorpusAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Corpus without action
   */
  export type CorpusArgs = {
    /**
     * Select specific fields to fetch from the Corpus
     * 
    **/
    select?: CorpusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusInclude | null
  }



  /**
   * Model CorpusAuthor
   */


  export type AggregateCorpusAuthor = {
    _count: CorpusAuthorCountAggregateOutputType | null
    _min: CorpusAuthorMinAggregateOutputType | null
    _max: CorpusAuthorMaxAggregateOutputType | null
  }

  export type CorpusAuthorMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    corpusId: string | null
  }

  export type CorpusAuthorMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    corpusId: string | null
  }

  export type CorpusAuthorCountAggregateOutputType = {
    id: number
    authorId: number
    corpusId: number
    _all: number
  }


  export type CorpusAuthorMinAggregateInputType = {
    id?: true
    authorId?: true
    corpusId?: true
  }

  export type CorpusAuthorMaxAggregateInputType = {
    id?: true
    authorId?: true
    corpusId?: true
  }

  export type CorpusAuthorCountAggregateInputType = {
    id?: true
    authorId?: true
    corpusId?: true
    _all?: true
  }

  export type CorpusAuthorAggregateArgs = {
    /**
     * Filter which CorpusAuthor to aggregate.
     * 
    **/
    where?: CorpusAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorpusAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<CorpusAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CorpusAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorpusAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorpusAuthors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CorpusAuthors
    **/
    _count?: true | CorpusAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorpusAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorpusAuthorMaxAggregateInputType
  }

  export type GetCorpusAuthorAggregateType<T extends CorpusAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateCorpusAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorpusAuthor[P]>
      : GetScalarType<T[P], AggregateCorpusAuthor[P]>
  }




  export type CorpusAuthorGroupByArgs = {
    where?: CorpusAuthorWhereInput
    orderBy?: Enumerable<CorpusAuthorOrderByWithAggregationInput>
    by: Array<CorpusAuthorScalarFieldEnum>
    having?: CorpusAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorpusAuthorCountAggregateInputType | true
    _min?: CorpusAuthorMinAggregateInputType
    _max?: CorpusAuthorMaxAggregateInputType
  }


  export type CorpusAuthorGroupByOutputType = {
    id: string
    authorId: string
    corpusId: string
    _count: CorpusAuthorCountAggregateOutputType | null
    _min: CorpusAuthorMinAggregateOutputType | null
    _max: CorpusAuthorMaxAggregateOutputType | null
  }

  type GetCorpusAuthorGroupByPayload<T extends CorpusAuthorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CorpusAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorpusAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorpusAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], CorpusAuthorGroupByOutputType[P]>
        }
      >
    >


  export type CorpusAuthorSelect = {
    id?: boolean
    author?: boolean | AuthorArgs
    corpus?: boolean | CorpusArgs
    authorId?: boolean
    corpusId?: boolean
  }

  export type CorpusAuthorInclude = {
    author?: boolean | AuthorArgs
    corpus?: boolean | CorpusArgs
  }

  export type CorpusAuthorGetPayload<
    S extends boolean | null | undefined | CorpusAuthorArgs,
    U = keyof S
      > = S extends true
        ? CorpusAuthor
    : S extends undefined
    ? never
    : S extends CorpusAuthorArgs | CorpusAuthorFindManyArgs
    ?'include' extends U
    ? CorpusAuthor  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? AuthorGetPayload<S['include'][P]> :
        P extends 'corpus' ? CorpusGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? AuthorGetPayload<S['select'][P]> :
        P extends 'corpus' ? CorpusGetPayload<S['select'][P]> :  P extends keyof CorpusAuthor ? CorpusAuthor[P] : never
  } 
    : CorpusAuthor
  : CorpusAuthor


  type CorpusAuthorCountArgs = Merge<
    Omit<CorpusAuthorFindManyArgs, 'select' | 'include'> & {
      select?: CorpusAuthorCountAggregateInputType | true
    }
  >

  export interface CorpusAuthorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CorpusAuthor that matches the filter.
     * @param {CorpusAuthorFindUniqueArgs} args - Arguments to find a CorpusAuthor
     * @example
     * // Get one CorpusAuthor
     * const corpusAuthor = await prisma.corpusAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CorpusAuthorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CorpusAuthorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CorpusAuthor'> extends True ? CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor>, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T>>> : CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor | null >, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T> | null >>

    /**
     * Find the first CorpusAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAuthorFindFirstArgs} args - Arguments to find a CorpusAuthor
     * @example
     * // Get one CorpusAuthor
     * const corpusAuthor = await prisma.corpusAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CorpusAuthorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CorpusAuthorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CorpusAuthor'> extends True ? CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor>, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T>>> : CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor | null >, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T> | null >>

    /**
     * Find zero or more CorpusAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CorpusAuthors
     * const corpusAuthors = await prisma.corpusAuthor.findMany()
     * 
     * // Get first 10 CorpusAuthors
     * const corpusAuthors = await prisma.corpusAuthor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corpusAuthorWithIdOnly = await prisma.corpusAuthor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CorpusAuthorFindManyArgs>(
      args?: SelectSubset<T, CorpusAuthorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CorpusAuthor>>, PrismaPromise<Array<CorpusAuthorGetPayload<T>>>>

    /**
     * Create a CorpusAuthor.
     * @param {CorpusAuthorCreateArgs} args - Arguments to create a CorpusAuthor.
     * @example
     * // Create one CorpusAuthor
     * const CorpusAuthor = await prisma.corpusAuthor.create({
     *   data: {
     *     // ... data to create a CorpusAuthor
     *   }
     * })
     * 
    **/
    create<T extends CorpusAuthorCreateArgs>(
      args: SelectSubset<T, CorpusAuthorCreateArgs>
    ): CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor>, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T>>>

    /**
     * Create many CorpusAuthors.
     *     @param {CorpusAuthorCreateManyArgs} args - Arguments to create many CorpusAuthors.
     *     @example
     *     // Create many CorpusAuthors
     *     const corpusAuthor = await prisma.corpusAuthor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CorpusAuthorCreateManyArgs>(
      args?: SelectSubset<T, CorpusAuthorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CorpusAuthor.
     * @param {CorpusAuthorDeleteArgs} args - Arguments to delete one CorpusAuthor.
     * @example
     * // Delete one CorpusAuthor
     * const CorpusAuthor = await prisma.corpusAuthor.delete({
     *   where: {
     *     // ... filter to delete one CorpusAuthor
     *   }
     * })
     * 
    **/
    delete<T extends CorpusAuthorDeleteArgs>(
      args: SelectSubset<T, CorpusAuthorDeleteArgs>
    ): CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor>, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T>>>

    /**
     * Update one CorpusAuthor.
     * @param {CorpusAuthorUpdateArgs} args - Arguments to update one CorpusAuthor.
     * @example
     * // Update one CorpusAuthor
     * const corpusAuthor = await prisma.corpusAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CorpusAuthorUpdateArgs>(
      args: SelectSubset<T, CorpusAuthorUpdateArgs>
    ): CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor>, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T>>>

    /**
     * Delete zero or more CorpusAuthors.
     * @param {CorpusAuthorDeleteManyArgs} args - Arguments to filter CorpusAuthors to delete.
     * @example
     * // Delete a few CorpusAuthors
     * const { count } = await prisma.corpusAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CorpusAuthorDeleteManyArgs>(
      args?: SelectSubset<T, CorpusAuthorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorpusAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CorpusAuthors
     * const corpusAuthor = await prisma.corpusAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CorpusAuthorUpdateManyArgs>(
      args: SelectSubset<T, CorpusAuthorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CorpusAuthor.
     * @param {CorpusAuthorUpsertArgs} args - Arguments to update or create a CorpusAuthor.
     * @example
     * // Update or create a CorpusAuthor
     * const corpusAuthor = await prisma.corpusAuthor.upsert({
     *   create: {
     *     // ... data to create a CorpusAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CorpusAuthor we want to update
     *   }
     * })
    **/
    upsert<T extends CorpusAuthorUpsertArgs>(
      args: SelectSubset<T, CorpusAuthorUpsertArgs>
    ): CheckSelect<T, Prisma__CorpusAuthorClient<CorpusAuthor>, Prisma__CorpusAuthorClient<CorpusAuthorGetPayload<T>>>

    /**
     * Find zero or more CorpusAuthors that matches the filter.
     * @param {CorpusAuthorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const corpusAuthor = await prisma.corpusAuthor.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CorpusAuthorFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CorpusAuthor.
     * @param {CorpusAuthorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const corpusAuthor = await prisma.corpusAuthor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CorpusAuthorAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of CorpusAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAuthorCountArgs} args - Arguments to filter CorpusAuthors to count.
     * @example
     * // Count the number of CorpusAuthors
     * const count = await prisma.corpusAuthor.count({
     *   where: {
     *     // ... the filter for the CorpusAuthors we want to count
     *   }
     * })
    **/
    count<T extends CorpusAuthorCountArgs>(
      args?: Subset<T, CorpusAuthorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorpusAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CorpusAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorpusAuthorAggregateArgs>(args: Subset<T, CorpusAuthorAggregateArgs>): PrismaPromise<GetCorpusAuthorAggregateType<T>>

    /**
     * Group by CorpusAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAuthorGroupByArgs} args - Group by arguments.
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
      T extends CorpusAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CorpusAuthorGroupByArgs['orderBy'] }
        : { orderBy?: CorpusAuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CorpusAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorpusAuthorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CorpusAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CorpusAuthorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends AuthorArgs = {}>(args?: Subset<T, AuthorArgs>): CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>;

    corpus<T extends CorpusArgs = {}>(args?: Subset<T, CorpusArgs>): CheckSelect<T, Prisma__CorpusClient<Corpus | null >, Prisma__CorpusClient<CorpusGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CorpusAuthor findUnique
   */
  export type CorpusAuthorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
    /**
     * Throw an Error if a CorpusAuthor can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CorpusAuthor to fetch.
     * 
    **/
    where: CorpusAuthorWhereUniqueInput
  }


  /**
   * CorpusAuthor findFirst
   */
  export type CorpusAuthorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
    /**
     * Throw an Error if a CorpusAuthor can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CorpusAuthor to fetch.
     * 
    **/
    where?: CorpusAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorpusAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<CorpusAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CorpusAuthors.
     * 
    **/
    cursor?: CorpusAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorpusAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorpusAuthors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorpusAuthors.
     * 
    **/
    distinct?: Enumerable<CorpusAuthorScalarFieldEnum>
  }


  /**
   * CorpusAuthor findMany
   */
  export type CorpusAuthorFindManyArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
    /**
     * Filter, which CorpusAuthors to fetch.
     * 
    **/
    where?: CorpusAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorpusAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<CorpusAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CorpusAuthors.
     * 
    **/
    cursor?: CorpusAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorpusAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorpusAuthors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CorpusAuthorScalarFieldEnum>
  }


  /**
   * CorpusAuthor create
   */
  export type CorpusAuthorCreateArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
    /**
     * The data needed to create a CorpusAuthor.
     * 
    **/
    data: XOR<CorpusAuthorCreateInput, CorpusAuthorUncheckedCreateInput>
  }


  /**
   * CorpusAuthor createMany
   */
  export type CorpusAuthorCreateManyArgs = {
    /**
     * The data used to create many CorpusAuthors.
     * 
    **/
    data: Enumerable<CorpusAuthorCreateManyInput>
  }


  /**
   * CorpusAuthor update
   */
  export type CorpusAuthorUpdateArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
    /**
     * The data needed to update a CorpusAuthor.
     * 
    **/
    data: XOR<CorpusAuthorUpdateInput, CorpusAuthorUncheckedUpdateInput>
    /**
     * Choose, which CorpusAuthor to update.
     * 
    **/
    where: CorpusAuthorWhereUniqueInput
  }


  /**
   * CorpusAuthor updateMany
   */
  export type CorpusAuthorUpdateManyArgs = {
    /**
     * The data used to update CorpusAuthors.
     * 
    **/
    data: XOR<CorpusAuthorUpdateManyMutationInput, CorpusAuthorUncheckedUpdateManyInput>
    /**
     * Filter which CorpusAuthors to update
     * 
    **/
    where?: CorpusAuthorWhereInput
  }


  /**
   * CorpusAuthor upsert
   */
  export type CorpusAuthorUpsertArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
    /**
     * The filter to search for the CorpusAuthor to update in case it exists.
     * 
    **/
    where: CorpusAuthorWhereUniqueInput
    /**
     * In case the CorpusAuthor found by the `where` argument doesn't exist, create a new CorpusAuthor with this data.
     * 
    **/
    create: XOR<CorpusAuthorCreateInput, CorpusAuthorUncheckedCreateInput>
    /**
     * In case the CorpusAuthor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CorpusAuthorUpdateInput, CorpusAuthorUncheckedUpdateInput>
  }


  /**
   * CorpusAuthor delete
   */
  export type CorpusAuthorDeleteArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
    /**
     * Filter which CorpusAuthor to delete.
     * 
    **/
    where: CorpusAuthorWhereUniqueInput
  }


  /**
   * CorpusAuthor deleteMany
   */
  export type CorpusAuthorDeleteManyArgs = {
    /**
     * Filter which CorpusAuthors to delete
     * 
    **/
    where?: CorpusAuthorWhereInput
  }


  /**
   * CorpusAuthor findRaw
   */
  export type CorpusAuthorFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CorpusAuthor aggregateRaw
   */
  export type CorpusAuthorAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CorpusAuthor without action
   */
  export type CorpusAuthorArgs = {
    /**
     * Select specific fields to fetch from the CorpusAuthor
     * 
    **/
    select?: CorpusAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CorpusAuthorInclude | null
  }



  /**
   * Model News
   */


  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    referee: string | null
    createdAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    referee: string | null
    createdAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    content: number
    referee: number
    createdAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    referee?: true
    createdAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    referee?: true
    createdAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    content?: true
    referee?: true
    createdAt?: true
    _all?: true
  }

  export type NewsAggregateArgs = {
    /**
     * Filter which News to aggregate.
     * 
    **/
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     * 
    **/
    orderBy?: Enumerable<NewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs = {
    where?: NewsWhereInput
    orderBy?: Enumerable<NewsOrderByWithAggregationInput>
    by: Array<NewsScalarFieldEnum>
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }


  export type NewsGroupByOutputType = {
    id: string
    content: JsonValue
    referee: string
    createdAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect = {
    id?: boolean
    content?: boolean
    referee?: boolean
    createdAt?: boolean
  }

  export type NewsGetPayload<
    S extends boolean | null | undefined | NewsArgs,
    U = keyof S
      > = S extends true
        ? News
    : S extends undefined
    ? never
    : S extends NewsArgs | NewsFindManyArgs
    ?'include' extends U
    ? News 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof News ? News[P] : never
  } 
    : News
  : News


  type NewsCountArgs = Merge<
    Omit<NewsFindManyArgs, 'select' | 'include'> & {
      select?: NewsCountAggregateInputType | true
    }
  >

  export interface NewsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NewsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NewsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'News'> extends True ? CheckSelect<T, Prisma__NewsClient<News>, Prisma__NewsClient<NewsGetPayload<T>>> : CheckSelect<T, Prisma__NewsClient<News | null >, Prisma__NewsClient<NewsGetPayload<T> | null >>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NewsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NewsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'News'> extends True ? CheckSelect<T, Prisma__NewsClient<News>, Prisma__NewsClient<NewsGetPayload<T>>> : CheckSelect<T, Prisma__NewsClient<News | null >, Prisma__NewsClient<NewsGetPayload<T> | null >>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NewsFindManyArgs>(
      args?: SelectSubset<T, NewsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<News>>, PrismaPromise<Array<NewsGetPayload<T>>>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
    **/
    create<T extends NewsCreateArgs>(
      args: SelectSubset<T, NewsCreateArgs>
    ): CheckSelect<T, Prisma__NewsClient<News>, Prisma__NewsClient<NewsGetPayload<T>>>

    /**
     * Create many News.
     *     @param {NewsCreateManyArgs} args - Arguments to create many News.
     *     @example
     *     // Create many News
     *     const news = await prisma.news.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NewsCreateManyArgs>(
      args?: SelectSubset<T, NewsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
    **/
    delete<T extends NewsDeleteArgs>(
      args: SelectSubset<T, NewsDeleteArgs>
    ): CheckSelect<T, Prisma__NewsClient<News>, Prisma__NewsClient<NewsGetPayload<T>>>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NewsUpdateArgs>(
      args: SelectSubset<T, NewsUpdateArgs>
    ): CheckSelect<T, Prisma__NewsClient<News>, Prisma__NewsClient<NewsGetPayload<T>>>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NewsDeleteManyArgs>(
      args?: SelectSubset<T, NewsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NewsUpdateManyArgs>(
      args: SelectSubset<T, NewsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
    **/
    upsert<T extends NewsUpsertArgs>(
      args: SelectSubset<T, NewsUpsertArgs>
    ): CheckSelect<T, Prisma__NewsClient<News>, Prisma__NewsClient<NewsGetPayload<T>>>

    /**
     * Find zero or more News that matches the filter.
     * @param {NewsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const news = await prisma.news.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: NewsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a News.
     * @param {NewsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const news = await prisma.news.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: NewsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NewsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
    /**
     * Throw an Error if a News can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which News to fetch.
     * 
    **/
    where: NewsWhereUniqueInput
  }


  /**
   * News findFirst
   */
  export type NewsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
    /**
     * Throw an Error if a News can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which News to fetch.
     * 
    **/
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     * 
    **/
    orderBy?: Enumerable<NewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     * 
    **/
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     * 
    **/
    distinct?: Enumerable<NewsScalarFieldEnum>
  }


  /**
   * News findMany
   */
  export type NewsFindManyArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
    /**
     * Filter, which News to fetch.
     * 
    **/
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     * 
    **/
    orderBy?: Enumerable<NewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     * 
    **/
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NewsScalarFieldEnum>
  }


  /**
   * News create
   */
  export type NewsCreateArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
    /**
     * The data needed to create a News.
     * 
    **/
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }


  /**
   * News createMany
   */
  export type NewsCreateManyArgs = {
    /**
     * The data used to create many News.
     * 
    **/
    data: Enumerable<NewsCreateManyInput>
  }


  /**
   * News update
   */
  export type NewsUpdateArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
    /**
     * The data needed to update a News.
     * 
    **/
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     * 
    **/
    where: NewsWhereUniqueInput
  }


  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs = {
    /**
     * The data used to update News.
     * 
    **/
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     * 
    **/
    where?: NewsWhereInput
  }


  /**
   * News upsert
   */
  export type NewsUpsertArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
    /**
     * The filter to search for the News to update in case it exists.
     * 
    **/
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     * 
    **/
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }


  /**
   * News delete
   */
  export type NewsDeleteArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
    /**
     * Filter which News to delete.
     * 
    **/
    where: NewsWhereUniqueInput
  }


  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs = {
    /**
     * Filter which News to delete
     * 
    **/
    where?: NewsWhereInput
  }


  /**
   * News findRaw
   */
  export type NewsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * News aggregateRaw
   */
  export type NewsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * News without action
   */
  export type NewsArgs = {
    /**
     * Select specific fields to fetch from the News
     * 
    **/
    select?: NewsSelect | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    caption: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    caption: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    name: number
    url: number
    caption: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    caption?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    caption?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    caption?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: Array<ImageScalarFieldEnum>
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: string
    name: string
    url: string
    caption: string | null
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    caption?: boolean
    Piece?: boolean | PieceFindManyArgs
    Corpus?: boolean | CorpusFindManyArgs
    Author?: boolean | AuthorFindManyArgs
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageInclude = {
    Piece?: boolean | PieceFindManyArgs
    Corpus?: boolean | CorpusFindManyArgs
    Author?: boolean | AuthorFindManyArgs
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageGetPayload<
    S extends boolean | null | undefined | ImageArgs,
    U = keyof S
      > = S extends true
        ? Image
    : S extends undefined
    ? never
    : S extends ImageArgs | ImageFindManyArgs
    ?'include' extends U
    ? Image  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Piece' ? Array < PieceGetPayload<S['include'][P]>>  :
        P extends 'Corpus' ? Array < CorpusGetPayload<S['include'][P]>>  :
        P extends 'Author' ? Array < AuthorGetPayload<S['include'][P]>>  :
        P extends '_count' ? ImageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Piece' ? Array < PieceGetPayload<S['select'][P]>>  :
        P extends 'Corpus' ? Array < CorpusGetPayload<S['select'][P]>>  :
        P extends 'Author' ? Array < AuthorGetPayload<S['select'][P]>>  :
        P extends '_count' ? ImageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Image ? Image[P] : never
  } 
    : Image
  : Image


  type ImageCountArgs = Merge<
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }
  >

  export interface ImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Find zero or more Images that matches the filter.
     * @param {ImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const image = await prisma.image.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ImageFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Image.
     * @param {ImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const image = await prisma.image.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ImageAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Piece<T extends PieceFindManyArgs = {}>(args?: Subset<T, PieceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Piece>>, PrismaPromise<Array<PieceGetPayload<T>>>>;

    Corpus<T extends CorpusFindManyArgs = {}>(args?: Subset<T, CorpusFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Corpus>>, PrismaPromise<Array<CorpusGetPayload<T>>>>;

    Author<T extends AuthorFindManyArgs = {}>(args?: Subset<T, AuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Author>>, PrismaPromise<Array<AuthorGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
     * 
    **/
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs = {
    /**
     * The data used to create many Images.
     * 
    **/
    data: Enumerable<ImageCreateManyInput>
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
     * 
    **/
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    /**
     * The data used to update Images.
     * 
    **/
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
     * 
    **/
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     * 
    **/
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    /**
     * Filter which Images to delete
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image findRaw
   */
  export type ImageFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Image aggregateRaw
   */
  export type ImageAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AboutScalarFieldEnum: {
    id: 'id',
    vk: 'vk',
    telegram: 'telegram',
    facebook: 'facebook',
    phoneNumber: 'phoneNumber',
    email: 'email',
    content: 'content'
  };

  export type AboutScalarFieldEnum = (typeof AboutScalarFieldEnum)[keyof typeof AboutScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    biography: 'biography',
    imageId: 'imageId'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const PieceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    slug: 'slug',
    imageId: 'imageId',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type PieceScalarFieldEnum = (typeof PieceScalarFieldEnum)[keyof typeof PieceScalarFieldEnum]


  export const CorpusScalarFieldEnum: {
    id: 'id',
    kind: 'kind',
    title: 'title',
    referee: 'referee',
    content: 'content',
    slug: 'slug',
    createdAt: 'createdAt',
    imageId: 'imageId'
  };

  export type CorpusScalarFieldEnum = (typeof CorpusScalarFieldEnum)[keyof typeof CorpusScalarFieldEnum]


  export const CorpusAuthorScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    corpusId: 'corpusId'
  };

  export type CorpusAuthorScalarFieldEnum = (typeof CorpusAuthorScalarFieldEnum)[keyof typeof CorpusAuthorScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    referee: 'referee',
    createdAt: 'createdAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    caption: 'caption'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type AboutWhereInput = {
    AND?: Enumerable<AboutWhereInput>
    OR?: Enumerable<AboutWhereInput>
    NOT?: Enumerable<AboutWhereInput>
    id?: StringFilter | string
    vk?: StringFilter | string
    telegram?: StringFilter | string
    facebook?: StringFilter | string
    phoneNumber?: StringFilter | string
    email?: StringFilter | string
    content?: JsonFilter
  }

  export type AboutOrderByWithRelationInput = {
    id?: SortOrder
    vk?: SortOrder
    telegram?: SortOrder
    facebook?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    content?: SortOrder
  }

  export type AboutWhereUniqueInput = {
    id?: string
  }

  export type AboutOrderByWithAggregationInput = {
    id?: SortOrder
    vk?: SortOrder
    telegram?: SortOrder
    facebook?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    content?: SortOrder
    _count?: AboutCountOrderByAggregateInput
    _max?: AboutMaxOrderByAggregateInput
    _min?: AboutMinOrderByAggregateInput
  }

  export type AboutScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AboutScalarWhereWithAggregatesInput>
    OR?: Enumerable<AboutScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AboutScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    vk?: StringWithAggregatesFilter | string
    telegram?: StringWithAggregatesFilter | string
    facebook?: StringWithAggregatesFilter | string
    phoneNumber?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    content?: JsonWithAggregatesFilter
  }

  export type AuthorWhereInput = {
    AND?: Enumerable<AuthorWhereInput>
    OR?: Enumerable<AuthorWhereInput>
    NOT?: Enumerable<AuthorWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    cover?: XOR<ImageRelationFilter, ImageWhereInput>
    pieces?: PieceListRelationFilter
    slug?: StringFilter | string
    biography?: JsonFilter
    imageId?: StringFilter | string
    CorpusAuthor?: CorpusAuthorListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: ImageOrderByWithRelationInput
    pieces?: PieceOrderByRelationAggregateInput
    slug?: SortOrder
    biography?: SortOrder
    imageId?: SortOrder
    CorpusAuthor?: CorpusAuthorOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    biography?: SortOrder
    imageId?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    biography?: JsonWithAggregatesFilter
    imageId?: StringWithAggregatesFilter | string
  }

  export type PieceWhereInput = {
    AND?: Enumerable<PieceWhereInput>
    OR?: Enumerable<PieceWhereInput>
    NOT?: Enumerable<PieceWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: JsonFilter
    cover?: XOR<ImageRelationFilter, ImageWhereInput> | null
    slug?: StringFilter | string
    imageId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    author?: XOR<AuthorRelationFilter, AuthorWhereInput> | null
    authorId?: StringNullableFilter | string | null
  }

  export type PieceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    cover?: ImageOrderByWithRelationInput
    slug?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    author?: AuthorOrderByWithRelationInput
    authorId?: SortOrder
  }

  export type PieceWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type PieceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    _count?: PieceCountOrderByAggregateInput
    _max?: PieceMaxOrderByAggregateInput
    _min?: PieceMinOrderByAggregateInput
  }

  export type PieceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PieceScalarWhereWithAggregatesInput>
    OR?: Enumerable<PieceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PieceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: JsonWithAggregatesFilter
    slug?: StringWithAggregatesFilter | string
    imageId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    authorId?: StringNullableWithAggregatesFilter | string | null
  }

  export type CorpusWhereInput = {
    AND?: Enumerable<CorpusWhereInput>
    OR?: Enumerable<CorpusWhereInput>
    NOT?: Enumerable<CorpusWhereInput>
    id?: StringFilter | string
    kind?: EnumKindFilter | Kind
    title?: StringFilter | string
    cover?: XOR<ImageRelationFilter, ImageWhereInput> | null
    referee?: StringFilter | string
    content?: JsonFilter
    slug?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    imageId?: StringFilter | string
    CorpusAuthor?: CorpusAuthorListRelationFilter
  }

  export type CorpusOrderByWithRelationInput = {
    id?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    cover?: ImageOrderByWithRelationInput
    referee?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    imageId?: SortOrder
    CorpusAuthor?: CorpusAuthorOrderByRelationAggregateInput
  }

  export type CorpusWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type CorpusOrderByWithAggregationInput = {
    id?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    referee?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    imageId?: SortOrder
    _count?: CorpusCountOrderByAggregateInput
    _max?: CorpusMaxOrderByAggregateInput
    _min?: CorpusMinOrderByAggregateInput
  }

  export type CorpusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CorpusScalarWhereWithAggregatesInput>
    OR?: Enumerable<CorpusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CorpusScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    kind?: EnumKindWithAggregatesFilter | Kind
    title?: StringWithAggregatesFilter | string
    referee?: StringWithAggregatesFilter | string
    content?: JsonWithAggregatesFilter
    slug?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    imageId?: StringWithAggregatesFilter | string
  }

  export type CorpusAuthorWhereInput = {
    AND?: Enumerable<CorpusAuthorWhereInput>
    OR?: Enumerable<CorpusAuthorWhereInput>
    NOT?: Enumerable<CorpusAuthorWhereInput>
    id?: StringFilter | string
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
    corpus?: XOR<CorpusRelationFilter, CorpusWhereInput>
    authorId?: StringFilter | string
    corpusId?: StringFilter | string
  }

  export type CorpusAuthorOrderByWithRelationInput = {
    id?: SortOrder
    author?: AuthorOrderByWithRelationInput
    corpus?: CorpusOrderByWithRelationInput
    authorId?: SortOrder
    corpusId?: SortOrder
  }

  export type CorpusAuthorWhereUniqueInput = {
    id?: string
  }

  export type CorpusAuthorOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    corpusId?: SortOrder
    _count?: CorpusAuthorCountOrderByAggregateInput
    _max?: CorpusAuthorMaxOrderByAggregateInput
    _min?: CorpusAuthorMinOrderByAggregateInput
  }

  export type CorpusAuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CorpusAuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<CorpusAuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CorpusAuthorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
    corpusId?: StringWithAggregatesFilter | string
  }

  export type NewsWhereInput = {
    AND?: Enumerable<NewsWhereInput>
    OR?: Enumerable<NewsWhereInput>
    NOT?: Enumerable<NewsWhereInput>
    id?: StringFilter | string
    content?: JsonFilter
    referee?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    referee?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsWhereUniqueInput = {
    id?: string
  }

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    referee?: SortOrder
    createdAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NewsScalarWhereWithAggregatesInput>
    OR?: Enumerable<NewsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NewsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    content?: JsonWithAggregatesFilter
    referee?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    caption?: StringNullableFilter | string | null
    Piece?: PieceListRelationFilter
    Corpus?: CorpusListRelationFilter
    Author?: AuthorListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    Piece?: PieceOrderByRelationAggregateInput
    Corpus?: CorpusOrderByRelationAggregateInput
    Author?: AuthorOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = {
    id?: string
  }

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    caption?: StringNullableWithAggregatesFilter | string | null
  }

  export type AboutCreateInput = {
    id?: string
    vk: string
    telegram: string
    facebook: string
    phoneNumber: string
    email: string
    content: InputJsonValue
  }

  export type AboutUncheckedCreateInput = {
    id?: string
    vk: string
    telegram: string
    facebook: string
    phoneNumber: string
    email: string
    content: InputJsonValue
  }

  export type AboutUpdateInput = {
    vk?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
  }

  export type AboutUncheckedUpdateInput = {
    vk?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
  }

  export type AboutCreateManyInput = {
    id?: string
    vk: string
    telegram: string
    facebook: string
    phoneNumber: string
    email: string
    content: InputJsonValue
  }

  export type AboutUpdateManyMutationInput = {
    vk?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
  }

  export type AboutUncheckedUpdateManyInput = {
    vk?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
  }

  export type AuthorCreateInput = {
    id?: string
    name: string
    cover: ImageCreateNestedOneWithoutAuthorInput
    pieces?: PieceCreateNestedManyWithoutAuthorInput
    slug: string
    biography: InputJsonValue
    CorpusAuthor?: CorpusAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    name: string
    pieces?: PieceUncheckedCreateNestedManyWithoutAuthorInput
    slug: string
    biography: InputJsonValue
    imageId: string
    CorpusAuthor?: CorpusAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: ImageUpdateOneRequiredWithoutAuthorInput
    pieces?: PieceUpdateManyWithoutAuthorInput
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    CorpusAuthor?: CorpusAuthorUpdateManyWithoutAuthorInput
  }

  export type AuthorUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pieces?: PieceUncheckedUpdateManyWithoutAuthorInput
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    imageId?: StringFieldUpdateOperationsInput | string
    CorpusAuthor?: CorpusAuthorUncheckedUpdateManyWithoutAuthorInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    name: string
    slug: string
    biography: InputJsonValue
    imageId: string
  }

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
  }

  export type AuthorUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type PieceCreateInput = {
    id?: string
    title: string
    content: InputJsonValue
    cover?: ImageCreateNestedOneWithoutPieceInput
    slug: string
    createdAt?: Date | string
    author?: AuthorCreateNestedOneWithoutPiecesInput
  }

  export type PieceUncheckedCreateInput = {
    id?: string
    title: string
    content: InputJsonValue
    slug: string
    imageId: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type PieceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    cover?: ImageUpdateOneWithoutPieceInput
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneWithoutPiecesInput
  }

  export type PieceUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PieceCreateManyInput = {
    id?: string
    title: string
    content: InputJsonValue
    slug: string
    imageId: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type PieceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PieceUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CorpusCreateInput = {
    id?: string
    kind: Kind
    title: string
    cover?: ImageCreateNestedOneWithoutCorpusInput
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    CorpusAuthor?: CorpusAuthorCreateNestedManyWithoutCorpusInput
  }

  export type CorpusUncheckedCreateInput = {
    id?: string
    kind: Kind
    title: string
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    imageId: string
    CorpusAuthor?: CorpusAuthorUncheckedCreateNestedManyWithoutCorpusInput
  }

  export type CorpusUpdateInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    cover?: ImageUpdateOneWithoutCorpusInput
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CorpusAuthor?: CorpusAuthorUpdateManyWithoutCorpusInput
  }

  export type CorpusUncheckedUpdateInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: StringFieldUpdateOperationsInput | string
    CorpusAuthor?: CorpusAuthorUncheckedUpdateManyWithoutCorpusInput
  }

  export type CorpusCreateManyInput = {
    id?: string
    kind: Kind
    title: string
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    imageId: string
  }

  export type CorpusUpdateManyMutationInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorpusUncheckedUpdateManyInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type CorpusAuthorCreateInput = {
    id?: string
    author: AuthorCreateNestedOneWithoutCorpusAuthorInput
    corpus: CorpusCreateNestedOneWithoutCorpusAuthorInput
  }

  export type CorpusAuthorUncheckedCreateInput = {
    id?: string
    authorId: string
    corpusId: string
  }

  export type CorpusAuthorUpdateInput = {
    author?: AuthorUpdateOneRequiredWithoutCorpusAuthorInput
    corpus?: CorpusUpdateOneRequiredWithoutCorpusAuthorInput
  }

  export type CorpusAuthorUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    corpusId?: StringFieldUpdateOperationsInput | string
  }

  export type CorpusAuthorCreateManyInput = {
    id?: string
    authorId: string
    corpusId: string
  }

  export type CorpusAuthorUpdateManyMutationInput = {

  }

  export type CorpusAuthorUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    corpusId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCreateInput = {
    id?: string
    content: InputJsonValue
    referee: string
    createdAt?: Date | string
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    content: InputJsonValue
    referee: string
    createdAt?: Date | string
  }

  export type NewsUpdateInput = {
    content?: InputJsonValue | InputJsonValue
    referee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateInput = {
    content?: InputJsonValue | InputJsonValue
    referee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    content: InputJsonValue
    referee: string
    createdAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    content?: InputJsonValue | InputJsonValue
    referee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    content?: InputJsonValue | InputJsonValue
    referee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Piece?: PieceCreateNestedManyWithoutCoverInput
    Corpus?: CorpusCreateNestedManyWithoutCoverInput
    Author?: AuthorCreateNestedManyWithoutCoverInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Piece?: PieceUncheckedCreateNestedManyWithoutCoverInput
    Corpus?: CorpusUncheckedCreateNestedManyWithoutCoverInput
    Author?: AuthorUncheckedCreateNestedManyWithoutCoverInput
  }

  export type ImageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Piece?: PieceUpdateManyWithoutCoverInput
    Corpus?: CorpusUpdateManyWithoutCoverInput
    Author?: AuthorUpdateManyWithoutCoverInput
  }

  export type ImageUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Piece?: PieceUncheckedUpdateManyWithoutCoverInput
    Corpus?: CorpusUncheckedUpdateManyWithoutCoverInput
    Author?: AuthorUncheckedUpdateManyWithoutCoverInput
  }

  export type ImageCreateManyInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type AboutCountOrderByAggregateInput = {
    id?: SortOrder
    vk?: SortOrder
    telegram?: SortOrder
    facebook?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    content?: SortOrder
  }

  export type AboutMaxOrderByAggregateInput = {
    id?: SortOrder
    vk?: SortOrder
    telegram?: SortOrder
    facebook?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type AboutMinOrderByAggregateInput = {
    id?: SortOrder
    vk?: SortOrder
    telegram?: SortOrder
    facebook?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type ImageRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type PieceListRelationFilter = {
    every?: PieceWhereInput
    some?: PieceWhereInput
    none?: PieceWhereInput
  }

  export type CorpusAuthorListRelationFilter = {
    every?: CorpusAuthorWhereInput
    some?: CorpusAuthorWhereInput
    none?: CorpusAuthorWhereInput
  }

  export type PieceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CorpusAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    biography?: SortOrder
    imageId?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageId?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type AuthorRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type PieceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type PieceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type PieceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type EnumKindFilter = {
    equals?: Kind
    in?: Enumerable<Kind>
    notIn?: Enumerable<Kind>
    not?: NestedEnumKindFilter | Kind
  }

  export type CorpusCountOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    referee?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    imageId?: SortOrder
  }

  export type CorpusMaxOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    referee?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    imageId?: SortOrder
  }

  export type CorpusMinOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    referee?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    imageId?: SortOrder
  }

  export type EnumKindWithAggregatesFilter = {
    equals?: Kind
    in?: Enumerable<Kind>
    notIn?: Enumerable<Kind>
    not?: NestedEnumKindWithAggregatesFilter | Kind
    _count?: NestedIntFilter
    _min?: NestedEnumKindFilter
    _max?: NestedEnumKindFilter
  }

  export type CorpusRelationFilter = {
    is?: CorpusWhereInput
    isNot?: CorpusWhereInput
  }

  export type CorpusAuthorCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    corpusId?: SortOrder
  }

  export type CorpusAuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    corpusId?: SortOrder
  }

  export type CorpusAuthorMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    corpusId?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    referee?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    referee?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    referee?: SortOrder
    createdAt?: SortOrder
  }

  export type CorpusListRelationFilter = {
    every?: CorpusWhereInput
    some?: CorpusWhereInput
    none?: CorpusWhereInput
  }

  export type AuthorListRelationFilter = {
    every?: AuthorWhereInput
    some?: AuthorWhereInput
    none?: AuthorWhereInput
  }

  export type CorpusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    caption?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    caption?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    caption?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ImageCreateNestedOneWithoutAuthorInput = {
    create?: XOR<ImageCreateWithoutAuthorInput, ImageUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: ImageCreateOrConnectWithoutAuthorInput
    connect?: ImageWhereUniqueInput
  }

  export type PieceCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PieceCreateWithoutAuthorInput>, Enumerable<PieceUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutAuthorInput>
    createMany?: PieceCreateManyAuthorInputEnvelope
    connect?: Enumerable<PieceWhereUniqueInput>
  }

  export type CorpusAuthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutAuthorInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutAuthorInput>
    createMany?: CorpusAuthorCreateManyAuthorInputEnvelope
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
  }

  export type PieceUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PieceCreateWithoutAuthorInput>, Enumerable<PieceUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutAuthorInput>
    createMany?: PieceCreateManyAuthorInputEnvelope
    connect?: Enumerable<PieceWhereUniqueInput>
  }

  export type CorpusAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutAuthorInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutAuthorInput>
    createMany?: CorpusAuthorCreateManyAuthorInputEnvelope
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
  }

  export type ImageUpdateOneRequiredWithoutAuthorInput = {
    create?: XOR<ImageCreateWithoutAuthorInput, ImageUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: ImageCreateOrConnectWithoutAuthorInput
    upsert?: ImageUpsertWithoutAuthorInput
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutAuthorInput, ImageUncheckedUpdateWithoutAuthorInput>
  }

  export type PieceUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PieceCreateWithoutAuthorInput>, Enumerable<PieceUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PieceUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PieceCreateManyAuthorInputEnvelope
    set?: Enumerable<PieceWhereUniqueInput>
    disconnect?: Enumerable<PieceWhereUniqueInput>
    delete?: Enumerable<PieceWhereUniqueInput>
    connect?: Enumerable<PieceWhereUniqueInput>
    update?: Enumerable<PieceUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PieceUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PieceScalarWhereInput>
  }

  export type CorpusAuthorUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutAuthorInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CorpusAuthorUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CorpusAuthorCreateManyAuthorInputEnvelope
    set?: Enumerable<CorpusAuthorWhereUniqueInput>
    disconnect?: Enumerable<CorpusAuthorWhereUniqueInput>
    delete?: Enumerable<CorpusAuthorWhereUniqueInput>
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
    update?: Enumerable<CorpusAuthorUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CorpusAuthorUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CorpusAuthorScalarWhereInput>
  }

  export type PieceUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PieceCreateWithoutAuthorInput>, Enumerable<PieceUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PieceUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PieceCreateManyAuthorInputEnvelope
    set?: Enumerable<PieceWhereUniqueInput>
    disconnect?: Enumerable<PieceWhereUniqueInput>
    delete?: Enumerable<PieceWhereUniqueInput>
    connect?: Enumerable<PieceWhereUniqueInput>
    update?: Enumerable<PieceUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PieceUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PieceScalarWhereInput>
  }

  export type CorpusAuthorUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutAuthorInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CorpusAuthorUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CorpusAuthorCreateManyAuthorInputEnvelope
    set?: Enumerable<CorpusAuthorWhereUniqueInput>
    disconnect?: Enumerable<CorpusAuthorWhereUniqueInput>
    delete?: Enumerable<CorpusAuthorWhereUniqueInput>
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
    update?: Enumerable<CorpusAuthorUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CorpusAuthorUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CorpusAuthorScalarWhereInput>
  }

  export type ImageCreateNestedOneWithoutPieceInput = {
    create?: XOR<ImageCreateWithoutPieceInput, ImageUncheckedCreateWithoutPieceInput>
    connectOrCreate?: ImageCreateOrConnectWithoutPieceInput
    connect?: ImageWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutPiecesInput = {
    create?: XOR<AuthorCreateWithoutPiecesInput, AuthorUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPiecesInput
    connect?: AuthorWhereUniqueInput
  }

  export type ImageUpdateOneWithoutPieceInput = {
    create?: XOR<ImageCreateWithoutPieceInput, ImageUncheckedCreateWithoutPieceInput>
    connectOrCreate?: ImageCreateOrConnectWithoutPieceInput
    upsert?: ImageUpsertWithoutPieceInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutPieceInput, ImageUncheckedUpdateWithoutPieceInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthorUpdateOneWithoutPiecesInput = {
    create?: XOR<AuthorCreateWithoutPiecesInput, AuthorUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPiecesInput
    upsert?: AuthorUpsertWithoutPiecesInput
    disconnect?: boolean
    delete?: boolean
    connect?: AuthorWhereUniqueInput
    update?: XOR<AuthorUpdateWithoutPiecesInput, AuthorUncheckedUpdateWithoutPiecesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ImageCreateNestedOneWithoutCorpusInput = {
    create?: XOR<ImageCreateWithoutCorpusInput, ImageUncheckedCreateWithoutCorpusInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCorpusInput
    connect?: ImageWhereUniqueInput
  }

  export type CorpusAuthorCreateNestedManyWithoutCorpusInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutCorpusInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutCorpusInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutCorpusInput>
    createMany?: CorpusAuthorCreateManyCorpusInputEnvelope
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
  }

  export type CorpusAuthorUncheckedCreateNestedManyWithoutCorpusInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutCorpusInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutCorpusInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutCorpusInput>
    createMany?: CorpusAuthorCreateManyCorpusInputEnvelope
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
  }

  export type EnumKindFieldUpdateOperationsInput = {
    set?: Kind
  }

  export type ImageUpdateOneWithoutCorpusInput = {
    create?: XOR<ImageCreateWithoutCorpusInput, ImageUncheckedCreateWithoutCorpusInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCorpusInput
    upsert?: ImageUpsertWithoutCorpusInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutCorpusInput, ImageUncheckedUpdateWithoutCorpusInput>
  }

  export type CorpusAuthorUpdateManyWithoutCorpusInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutCorpusInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutCorpusInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutCorpusInput>
    upsert?: Enumerable<CorpusAuthorUpsertWithWhereUniqueWithoutCorpusInput>
    createMany?: CorpusAuthorCreateManyCorpusInputEnvelope
    set?: Enumerable<CorpusAuthorWhereUniqueInput>
    disconnect?: Enumerable<CorpusAuthorWhereUniqueInput>
    delete?: Enumerable<CorpusAuthorWhereUniqueInput>
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
    update?: Enumerable<CorpusAuthorUpdateWithWhereUniqueWithoutCorpusInput>
    updateMany?: Enumerable<CorpusAuthorUpdateManyWithWhereWithoutCorpusInput>
    deleteMany?: Enumerable<CorpusAuthorScalarWhereInput>
  }

  export type CorpusAuthorUncheckedUpdateManyWithoutCorpusInput = {
    create?: XOR<Enumerable<CorpusAuthorCreateWithoutCorpusInput>, Enumerable<CorpusAuthorUncheckedCreateWithoutCorpusInput>>
    connectOrCreate?: Enumerable<CorpusAuthorCreateOrConnectWithoutCorpusInput>
    upsert?: Enumerable<CorpusAuthorUpsertWithWhereUniqueWithoutCorpusInput>
    createMany?: CorpusAuthorCreateManyCorpusInputEnvelope
    set?: Enumerable<CorpusAuthorWhereUniqueInput>
    disconnect?: Enumerable<CorpusAuthorWhereUniqueInput>
    delete?: Enumerable<CorpusAuthorWhereUniqueInput>
    connect?: Enumerable<CorpusAuthorWhereUniqueInput>
    update?: Enumerable<CorpusAuthorUpdateWithWhereUniqueWithoutCorpusInput>
    updateMany?: Enumerable<CorpusAuthorUpdateManyWithWhereWithoutCorpusInput>
    deleteMany?: Enumerable<CorpusAuthorScalarWhereInput>
  }

  export type AuthorCreateNestedOneWithoutCorpusAuthorInput = {
    create?: XOR<AuthorCreateWithoutCorpusAuthorInput, AuthorUncheckedCreateWithoutCorpusAuthorInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutCorpusAuthorInput
    connect?: AuthorWhereUniqueInput
  }

  export type CorpusCreateNestedOneWithoutCorpusAuthorInput = {
    create?: XOR<CorpusCreateWithoutCorpusAuthorInput, CorpusUncheckedCreateWithoutCorpusAuthorInput>
    connectOrCreate?: CorpusCreateOrConnectWithoutCorpusAuthorInput
    connect?: CorpusWhereUniqueInput
  }

  export type AuthorUpdateOneRequiredWithoutCorpusAuthorInput = {
    create?: XOR<AuthorCreateWithoutCorpusAuthorInput, AuthorUncheckedCreateWithoutCorpusAuthorInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutCorpusAuthorInput
    upsert?: AuthorUpsertWithoutCorpusAuthorInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<AuthorUpdateWithoutCorpusAuthorInput, AuthorUncheckedUpdateWithoutCorpusAuthorInput>
  }

  export type CorpusUpdateOneRequiredWithoutCorpusAuthorInput = {
    create?: XOR<CorpusCreateWithoutCorpusAuthorInput, CorpusUncheckedCreateWithoutCorpusAuthorInput>
    connectOrCreate?: CorpusCreateOrConnectWithoutCorpusAuthorInput
    upsert?: CorpusUpsertWithoutCorpusAuthorInput
    connect?: CorpusWhereUniqueInput
    update?: XOR<CorpusUpdateWithoutCorpusAuthorInput, CorpusUncheckedUpdateWithoutCorpusAuthorInput>
  }

  export type PieceCreateNestedManyWithoutCoverInput = {
    create?: XOR<Enumerable<PieceCreateWithoutCoverInput>, Enumerable<PieceUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutCoverInput>
    createMany?: PieceCreateManyCoverInputEnvelope
    connect?: Enumerable<PieceWhereUniqueInput>
  }

  export type CorpusCreateNestedManyWithoutCoverInput = {
    create?: XOR<Enumerable<CorpusCreateWithoutCoverInput>, Enumerable<CorpusUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<CorpusCreateOrConnectWithoutCoverInput>
    createMany?: CorpusCreateManyCoverInputEnvelope
    connect?: Enumerable<CorpusWhereUniqueInput>
  }

  export type AuthorCreateNestedManyWithoutCoverInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCoverInput>, Enumerable<AuthorUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCoverInput>
    createMany?: AuthorCreateManyCoverInputEnvelope
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type PieceUncheckedCreateNestedManyWithoutCoverInput = {
    create?: XOR<Enumerable<PieceCreateWithoutCoverInput>, Enumerable<PieceUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutCoverInput>
    createMany?: PieceCreateManyCoverInputEnvelope
    connect?: Enumerable<PieceWhereUniqueInput>
  }

  export type CorpusUncheckedCreateNestedManyWithoutCoverInput = {
    create?: XOR<Enumerable<CorpusCreateWithoutCoverInput>, Enumerable<CorpusUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<CorpusCreateOrConnectWithoutCoverInput>
    createMany?: CorpusCreateManyCoverInputEnvelope
    connect?: Enumerable<CorpusWhereUniqueInput>
  }

  export type AuthorUncheckedCreateNestedManyWithoutCoverInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCoverInput>, Enumerable<AuthorUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCoverInput>
    createMany?: AuthorCreateManyCoverInputEnvelope
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type PieceUpdateManyWithoutCoverInput = {
    create?: XOR<Enumerable<PieceCreateWithoutCoverInput>, Enumerable<PieceUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutCoverInput>
    upsert?: Enumerable<PieceUpsertWithWhereUniqueWithoutCoverInput>
    createMany?: PieceCreateManyCoverInputEnvelope
    set?: Enumerable<PieceWhereUniqueInput>
    disconnect?: Enumerable<PieceWhereUniqueInput>
    delete?: Enumerable<PieceWhereUniqueInput>
    connect?: Enumerable<PieceWhereUniqueInput>
    update?: Enumerable<PieceUpdateWithWhereUniqueWithoutCoverInput>
    updateMany?: Enumerable<PieceUpdateManyWithWhereWithoutCoverInput>
    deleteMany?: Enumerable<PieceScalarWhereInput>
  }

  export type CorpusUpdateManyWithoutCoverInput = {
    create?: XOR<Enumerable<CorpusCreateWithoutCoverInput>, Enumerable<CorpusUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<CorpusCreateOrConnectWithoutCoverInput>
    upsert?: Enumerable<CorpusUpsertWithWhereUniqueWithoutCoverInput>
    createMany?: CorpusCreateManyCoverInputEnvelope
    set?: Enumerable<CorpusWhereUniqueInput>
    disconnect?: Enumerable<CorpusWhereUniqueInput>
    delete?: Enumerable<CorpusWhereUniqueInput>
    connect?: Enumerable<CorpusWhereUniqueInput>
    update?: Enumerable<CorpusUpdateWithWhereUniqueWithoutCoverInput>
    updateMany?: Enumerable<CorpusUpdateManyWithWhereWithoutCoverInput>
    deleteMany?: Enumerable<CorpusScalarWhereInput>
  }

  export type AuthorUpdateManyWithoutCoverInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCoverInput>, Enumerable<AuthorUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCoverInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutCoverInput>
    createMany?: AuthorCreateManyCoverInputEnvelope
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutCoverInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutCoverInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type PieceUncheckedUpdateManyWithoutCoverInput = {
    create?: XOR<Enumerable<PieceCreateWithoutCoverInput>, Enumerable<PieceUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<PieceCreateOrConnectWithoutCoverInput>
    upsert?: Enumerable<PieceUpsertWithWhereUniqueWithoutCoverInput>
    createMany?: PieceCreateManyCoverInputEnvelope
    set?: Enumerable<PieceWhereUniqueInput>
    disconnect?: Enumerable<PieceWhereUniqueInput>
    delete?: Enumerable<PieceWhereUniqueInput>
    connect?: Enumerable<PieceWhereUniqueInput>
    update?: Enumerable<PieceUpdateWithWhereUniqueWithoutCoverInput>
    updateMany?: Enumerable<PieceUpdateManyWithWhereWithoutCoverInput>
    deleteMany?: Enumerable<PieceScalarWhereInput>
  }

  export type CorpusUncheckedUpdateManyWithoutCoverInput = {
    create?: XOR<Enumerable<CorpusCreateWithoutCoverInput>, Enumerable<CorpusUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<CorpusCreateOrConnectWithoutCoverInput>
    upsert?: Enumerable<CorpusUpsertWithWhereUniqueWithoutCoverInput>
    createMany?: CorpusCreateManyCoverInputEnvelope
    set?: Enumerable<CorpusWhereUniqueInput>
    disconnect?: Enumerable<CorpusWhereUniqueInput>
    delete?: Enumerable<CorpusWhereUniqueInput>
    connect?: Enumerable<CorpusWhereUniqueInput>
    update?: Enumerable<CorpusUpdateWithWhereUniqueWithoutCoverInput>
    updateMany?: Enumerable<CorpusUpdateManyWithWhereWithoutCoverInput>
    deleteMany?: Enumerable<CorpusScalarWhereInput>
  }

  export type AuthorUncheckedUpdateManyWithoutCoverInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCoverInput>, Enumerable<AuthorUncheckedCreateWithoutCoverInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCoverInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutCoverInput>
    createMany?: AuthorCreateManyCoverInputEnvelope
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutCoverInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutCoverInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedEnumKindFilter = {
    equals?: Kind
    in?: Enumerable<Kind>
    notIn?: Enumerable<Kind>
    not?: NestedEnumKindFilter | Kind
  }

  export type NestedEnumKindWithAggregatesFilter = {
    equals?: Kind
    in?: Enumerable<Kind>
    notIn?: Enumerable<Kind>
    not?: NestedEnumKindWithAggregatesFilter | Kind
    _count?: NestedIntFilter
    _min?: NestedEnumKindFilter
    _max?: NestedEnumKindFilter
  }

  export type ImageCreateWithoutAuthorInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Piece?: PieceCreateNestedManyWithoutCoverInput
    Corpus?: CorpusCreateNestedManyWithoutCoverInput
  }

  export type ImageUncheckedCreateWithoutAuthorInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Piece?: PieceUncheckedCreateNestedManyWithoutCoverInput
    Corpus?: CorpusUncheckedCreateNestedManyWithoutCoverInput
  }

  export type ImageCreateOrConnectWithoutAuthorInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAuthorInput, ImageUncheckedCreateWithoutAuthorInput>
  }

  export type PieceCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: InputJsonValue
    cover?: ImageCreateNestedOneWithoutPieceInput
    slug: string
    createdAt?: Date | string
  }

  export type PieceUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: InputJsonValue
    slug: string
    imageId: string
    createdAt?: Date | string
  }

  export type PieceCreateOrConnectWithoutAuthorInput = {
    where: PieceWhereUniqueInput
    create: XOR<PieceCreateWithoutAuthorInput, PieceUncheckedCreateWithoutAuthorInput>
  }

  export type PieceCreateManyAuthorInputEnvelope = {
    data: Enumerable<PieceCreateManyAuthorInput>
  }

  export type CorpusAuthorCreateWithoutAuthorInput = {
    id?: string
    corpus: CorpusCreateNestedOneWithoutCorpusAuthorInput
  }

  export type CorpusAuthorUncheckedCreateWithoutAuthorInput = {
    id?: string
    corpusId: string
  }

  export type CorpusAuthorCreateOrConnectWithoutAuthorInput = {
    where: CorpusAuthorWhereUniqueInput
    create: XOR<CorpusAuthorCreateWithoutAuthorInput, CorpusAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type CorpusAuthorCreateManyAuthorInputEnvelope = {
    data: Enumerable<CorpusAuthorCreateManyAuthorInput>
  }

  export type ImageUpsertWithoutAuthorInput = {
    update: XOR<ImageUpdateWithoutAuthorInput, ImageUncheckedUpdateWithoutAuthorInput>
    create: XOR<ImageCreateWithoutAuthorInput, ImageUncheckedCreateWithoutAuthorInput>
  }

  export type ImageUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Piece?: PieceUpdateManyWithoutCoverInput
    Corpus?: CorpusUpdateManyWithoutCoverInput
  }

  export type ImageUncheckedUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Piece?: PieceUncheckedUpdateManyWithoutCoverInput
    Corpus?: CorpusUncheckedUpdateManyWithoutCoverInput
  }

  export type PieceUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PieceWhereUniqueInput
    update: XOR<PieceUpdateWithoutAuthorInput, PieceUncheckedUpdateWithoutAuthorInput>
    create: XOR<PieceCreateWithoutAuthorInput, PieceUncheckedCreateWithoutAuthorInput>
  }

  export type PieceUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PieceWhereUniqueInput
    data: XOR<PieceUpdateWithoutAuthorInput, PieceUncheckedUpdateWithoutAuthorInput>
  }

  export type PieceUpdateManyWithWhereWithoutAuthorInput = {
    where: PieceScalarWhereInput
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyWithoutPiecesInput>
  }

  export type PieceScalarWhereInput = {
    AND?: Enumerable<PieceScalarWhereInput>
    OR?: Enumerable<PieceScalarWhereInput>
    NOT?: Enumerable<PieceScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: JsonFilter
    slug?: StringFilter | string
    imageId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    authorId?: StringNullableFilter | string | null
  }

  export type CorpusAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CorpusAuthorWhereUniqueInput
    update: XOR<CorpusAuthorUpdateWithoutAuthorInput, CorpusAuthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<CorpusAuthorCreateWithoutAuthorInput, CorpusAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type CorpusAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CorpusAuthorWhereUniqueInput
    data: XOR<CorpusAuthorUpdateWithoutAuthorInput, CorpusAuthorUncheckedUpdateWithoutAuthorInput>
  }

  export type CorpusAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: CorpusAuthorScalarWhereInput
    data: XOR<CorpusAuthorUpdateManyMutationInput, CorpusAuthorUncheckedUpdateManyWithoutCorpusAuthorInput>
  }

  export type CorpusAuthorScalarWhereInput = {
    AND?: Enumerable<CorpusAuthorScalarWhereInput>
    OR?: Enumerable<CorpusAuthorScalarWhereInput>
    NOT?: Enumerable<CorpusAuthorScalarWhereInput>
    id?: StringFilter | string
    authorId?: StringFilter | string
    corpusId?: StringFilter | string
  }

  export type ImageCreateWithoutPieceInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Corpus?: CorpusCreateNestedManyWithoutCoverInput
    Author?: AuthorCreateNestedManyWithoutCoverInput
  }

  export type ImageUncheckedCreateWithoutPieceInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Corpus?: CorpusUncheckedCreateNestedManyWithoutCoverInput
    Author?: AuthorUncheckedCreateNestedManyWithoutCoverInput
  }

  export type ImageCreateOrConnectWithoutPieceInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPieceInput, ImageUncheckedCreateWithoutPieceInput>
  }

  export type AuthorCreateWithoutPiecesInput = {
    id?: string
    name: string
    cover: ImageCreateNestedOneWithoutAuthorInput
    slug: string
    biography: InputJsonValue
    CorpusAuthor?: CorpusAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutPiecesInput = {
    id?: string
    name: string
    slug: string
    biography: InputJsonValue
    imageId: string
    CorpusAuthor?: CorpusAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutPiecesInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutPiecesInput, AuthorUncheckedCreateWithoutPiecesInput>
  }

  export type ImageUpsertWithoutPieceInput = {
    update: XOR<ImageUpdateWithoutPieceInput, ImageUncheckedUpdateWithoutPieceInput>
    create: XOR<ImageCreateWithoutPieceInput, ImageUncheckedCreateWithoutPieceInput>
  }

  export type ImageUpdateWithoutPieceInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Corpus?: CorpusUpdateManyWithoutCoverInput
    Author?: AuthorUpdateManyWithoutCoverInput
  }

  export type ImageUncheckedUpdateWithoutPieceInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Corpus?: CorpusUncheckedUpdateManyWithoutCoverInput
    Author?: AuthorUncheckedUpdateManyWithoutCoverInput
  }

  export type AuthorUpsertWithoutPiecesInput = {
    update: XOR<AuthorUpdateWithoutPiecesInput, AuthorUncheckedUpdateWithoutPiecesInput>
    create: XOR<AuthorCreateWithoutPiecesInput, AuthorUncheckedCreateWithoutPiecesInput>
  }

  export type AuthorUpdateWithoutPiecesInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: ImageUpdateOneRequiredWithoutAuthorInput
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    CorpusAuthor?: CorpusAuthorUpdateManyWithoutAuthorInput
  }

  export type AuthorUncheckedUpdateWithoutPiecesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    imageId?: StringFieldUpdateOperationsInput | string
    CorpusAuthor?: CorpusAuthorUncheckedUpdateManyWithoutAuthorInput
  }

  export type ImageCreateWithoutCorpusInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Piece?: PieceCreateNestedManyWithoutCoverInput
    Author?: AuthorCreateNestedManyWithoutCoverInput
  }

  export type ImageUncheckedCreateWithoutCorpusInput = {
    id?: string
    name: string
    url: string
    caption?: string | null
    Piece?: PieceUncheckedCreateNestedManyWithoutCoverInput
    Author?: AuthorUncheckedCreateNestedManyWithoutCoverInput
  }

  export type ImageCreateOrConnectWithoutCorpusInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCorpusInput, ImageUncheckedCreateWithoutCorpusInput>
  }

  export type CorpusAuthorCreateWithoutCorpusInput = {
    id?: string
    author: AuthorCreateNestedOneWithoutCorpusAuthorInput
  }

  export type CorpusAuthorUncheckedCreateWithoutCorpusInput = {
    id?: string
    authorId: string
  }

  export type CorpusAuthorCreateOrConnectWithoutCorpusInput = {
    where: CorpusAuthorWhereUniqueInput
    create: XOR<CorpusAuthorCreateWithoutCorpusInput, CorpusAuthorUncheckedCreateWithoutCorpusInput>
  }

  export type CorpusAuthorCreateManyCorpusInputEnvelope = {
    data: Enumerable<CorpusAuthorCreateManyCorpusInput>
  }

  export type ImageUpsertWithoutCorpusInput = {
    update: XOR<ImageUpdateWithoutCorpusInput, ImageUncheckedUpdateWithoutCorpusInput>
    create: XOR<ImageCreateWithoutCorpusInput, ImageUncheckedCreateWithoutCorpusInput>
  }

  export type ImageUpdateWithoutCorpusInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Piece?: PieceUpdateManyWithoutCoverInput
    Author?: AuthorUpdateManyWithoutCoverInput
  }

  export type ImageUncheckedUpdateWithoutCorpusInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    Piece?: PieceUncheckedUpdateManyWithoutCoverInput
    Author?: AuthorUncheckedUpdateManyWithoutCoverInput
  }

  export type CorpusAuthorUpsertWithWhereUniqueWithoutCorpusInput = {
    where: CorpusAuthorWhereUniqueInput
    update: XOR<CorpusAuthorUpdateWithoutCorpusInput, CorpusAuthorUncheckedUpdateWithoutCorpusInput>
    create: XOR<CorpusAuthorCreateWithoutCorpusInput, CorpusAuthorUncheckedCreateWithoutCorpusInput>
  }

  export type CorpusAuthorUpdateWithWhereUniqueWithoutCorpusInput = {
    where: CorpusAuthorWhereUniqueInput
    data: XOR<CorpusAuthorUpdateWithoutCorpusInput, CorpusAuthorUncheckedUpdateWithoutCorpusInput>
  }

  export type CorpusAuthorUpdateManyWithWhereWithoutCorpusInput = {
    where: CorpusAuthorScalarWhereInput
    data: XOR<CorpusAuthorUpdateManyMutationInput, CorpusAuthorUncheckedUpdateManyWithoutCorpusAuthorInput>
  }

  export type AuthorCreateWithoutCorpusAuthorInput = {
    id?: string
    name: string
    cover: ImageCreateNestedOneWithoutAuthorInput
    pieces?: PieceCreateNestedManyWithoutAuthorInput
    slug: string
    biography: InputJsonValue
  }

  export type AuthorUncheckedCreateWithoutCorpusAuthorInput = {
    id?: string
    name: string
    pieces?: PieceUncheckedCreateNestedManyWithoutAuthorInput
    slug: string
    biography: InputJsonValue
    imageId: string
  }

  export type AuthorCreateOrConnectWithoutCorpusAuthorInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutCorpusAuthorInput, AuthorUncheckedCreateWithoutCorpusAuthorInput>
  }

  export type CorpusCreateWithoutCorpusAuthorInput = {
    id?: string
    kind: Kind
    title: string
    cover?: ImageCreateNestedOneWithoutCorpusInput
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
  }

  export type CorpusUncheckedCreateWithoutCorpusAuthorInput = {
    id?: string
    kind: Kind
    title: string
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    imageId: string
  }

  export type CorpusCreateOrConnectWithoutCorpusAuthorInput = {
    where: CorpusWhereUniqueInput
    create: XOR<CorpusCreateWithoutCorpusAuthorInput, CorpusUncheckedCreateWithoutCorpusAuthorInput>
  }

  export type AuthorUpsertWithoutCorpusAuthorInput = {
    update: XOR<AuthorUpdateWithoutCorpusAuthorInput, AuthorUncheckedUpdateWithoutCorpusAuthorInput>
    create: XOR<AuthorCreateWithoutCorpusAuthorInput, AuthorUncheckedCreateWithoutCorpusAuthorInput>
  }

  export type AuthorUpdateWithoutCorpusAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: ImageUpdateOneRequiredWithoutAuthorInput
    pieces?: PieceUpdateManyWithoutAuthorInput
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
  }

  export type AuthorUncheckedUpdateWithoutCorpusAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    pieces?: PieceUncheckedUpdateManyWithoutAuthorInput
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type CorpusUpsertWithoutCorpusAuthorInput = {
    update: XOR<CorpusUpdateWithoutCorpusAuthorInput, CorpusUncheckedUpdateWithoutCorpusAuthorInput>
    create: XOR<CorpusCreateWithoutCorpusAuthorInput, CorpusUncheckedCreateWithoutCorpusAuthorInput>
  }

  export type CorpusUpdateWithoutCorpusAuthorInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    cover?: ImageUpdateOneWithoutCorpusInput
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorpusUncheckedUpdateWithoutCorpusAuthorInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type PieceCreateWithoutCoverInput = {
    id?: string
    title: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    author?: AuthorCreateNestedOneWithoutPiecesInput
  }

  export type PieceUncheckedCreateWithoutCoverInput = {
    id?: string
    title: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type PieceCreateOrConnectWithoutCoverInput = {
    where: PieceWhereUniqueInput
    create: XOR<PieceCreateWithoutCoverInput, PieceUncheckedCreateWithoutCoverInput>
  }

  export type PieceCreateManyCoverInputEnvelope = {
    data: Enumerable<PieceCreateManyCoverInput>
  }

  export type CorpusCreateWithoutCoverInput = {
    id?: string
    kind: Kind
    title: string
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    CorpusAuthor?: CorpusAuthorCreateNestedManyWithoutCorpusInput
  }

  export type CorpusUncheckedCreateWithoutCoverInput = {
    id?: string
    kind: Kind
    title: string
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    CorpusAuthor?: CorpusAuthorUncheckedCreateNestedManyWithoutCorpusInput
  }

  export type CorpusCreateOrConnectWithoutCoverInput = {
    where: CorpusWhereUniqueInput
    create: XOR<CorpusCreateWithoutCoverInput, CorpusUncheckedCreateWithoutCoverInput>
  }

  export type CorpusCreateManyCoverInputEnvelope = {
    data: Enumerable<CorpusCreateManyCoverInput>
  }

  export type AuthorCreateWithoutCoverInput = {
    id?: string
    name: string
    pieces?: PieceCreateNestedManyWithoutAuthorInput
    slug: string
    biography: InputJsonValue
    CorpusAuthor?: CorpusAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutCoverInput = {
    id?: string
    name: string
    pieces?: PieceUncheckedCreateNestedManyWithoutAuthorInput
    slug: string
    biography: InputJsonValue
    CorpusAuthor?: CorpusAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutCoverInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutCoverInput, AuthorUncheckedCreateWithoutCoverInput>
  }

  export type AuthorCreateManyCoverInputEnvelope = {
    data: Enumerable<AuthorCreateManyCoverInput>
  }

  export type PieceUpsertWithWhereUniqueWithoutCoverInput = {
    where: PieceWhereUniqueInput
    update: XOR<PieceUpdateWithoutCoverInput, PieceUncheckedUpdateWithoutCoverInput>
    create: XOR<PieceCreateWithoutCoverInput, PieceUncheckedCreateWithoutCoverInput>
  }

  export type PieceUpdateWithWhereUniqueWithoutCoverInput = {
    where: PieceWhereUniqueInput
    data: XOR<PieceUpdateWithoutCoverInput, PieceUncheckedUpdateWithoutCoverInput>
  }

  export type PieceUpdateManyWithWhereWithoutCoverInput = {
    where: PieceScalarWhereInput
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyWithoutPieceInput>
  }

  export type CorpusUpsertWithWhereUniqueWithoutCoverInput = {
    where: CorpusWhereUniqueInput
    update: XOR<CorpusUpdateWithoutCoverInput, CorpusUncheckedUpdateWithoutCoverInput>
    create: XOR<CorpusCreateWithoutCoverInput, CorpusUncheckedCreateWithoutCoverInput>
  }

  export type CorpusUpdateWithWhereUniqueWithoutCoverInput = {
    where: CorpusWhereUniqueInput
    data: XOR<CorpusUpdateWithoutCoverInput, CorpusUncheckedUpdateWithoutCoverInput>
  }

  export type CorpusUpdateManyWithWhereWithoutCoverInput = {
    where: CorpusScalarWhereInput
    data: XOR<CorpusUpdateManyMutationInput, CorpusUncheckedUpdateManyWithoutCorpusInput>
  }

  export type CorpusScalarWhereInput = {
    AND?: Enumerable<CorpusScalarWhereInput>
    OR?: Enumerable<CorpusScalarWhereInput>
    NOT?: Enumerable<CorpusScalarWhereInput>
    id?: StringFilter | string
    kind?: EnumKindFilter | Kind
    title?: StringFilter | string
    referee?: StringFilter | string
    content?: JsonFilter
    slug?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    imageId?: StringFilter | string
  }

  export type AuthorUpsertWithWhereUniqueWithoutCoverInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutCoverInput, AuthorUncheckedUpdateWithoutCoverInput>
    create: XOR<AuthorCreateWithoutCoverInput, AuthorUncheckedCreateWithoutCoverInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutCoverInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutCoverInput, AuthorUncheckedUpdateWithoutCoverInput>
  }

  export type AuthorUpdateManyWithWhereWithoutCoverInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AuthorScalarWhereInput = {
    AND?: Enumerable<AuthorScalarWhereInput>
    OR?: Enumerable<AuthorScalarWhereInput>
    NOT?: Enumerable<AuthorScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    slug?: StringFilter | string
    biography?: JsonFilter
    imageId?: StringFilter | string
  }

  export type PieceCreateManyAuthorInput = {
    id?: string
    title: string
    content: InputJsonValue
    slug: string
    imageId: string
    createdAt?: Date | string
  }

  export type CorpusAuthorCreateManyAuthorInput = {
    id?: string
    corpusId: string
  }

  export type PieceUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    cover?: ImageUpdateOneWithoutPieceInput
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PieceUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PieceUncheckedUpdateManyWithoutPiecesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorpusAuthorUpdateWithoutAuthorInput = {
    corpus?: CorpusUpdateOneRequiredWithoutCorpusAuthorInput
  }

  export type CorpusAuthorUncheckedUpdateWithoutAuthorInput = {
    corpusId?: StringFieldUpdateOperationsInput | string
  }

  export type CorpusAuthorUncheckedUpdateManyWithoutCorpusAuthorInput = {
    corpusId?: StringFieldUpdateOperationsInput | string
  }

  export type CorpusAuthorCreateManyCorpusInput = {
    id?: string
    authorId: string
  }

  export type CorpusAuthorUpdateWithoutCorpusInput = {
    author?: AuthorUpdateOneRequiredWithoutCorpusAuthorInput
  }

  export type CorpusAuthorUncheckedUpdateWithoutCorpusInput = {
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type PieceCreateManyCoverInput = {
    id?: string
    title: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type CorpusCreateManyCoverInput = {
    id?: string
    kind: Kind
    title: string
    referee: string
    content: InputJsonValue
    slug: string
    createdAt?: Date | string
  }

  export type AuthorCreateManyCoverInput = {
    id?: string
    name: string
    slug: string
    biography: InputJsonValue
  }

  export type PieceUpdateWithoutCoverInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneWithoutPiecesInput
  }

  export type PieceUncheckedUpdateWithoutCoverInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PieceUncheckedUpdateManyWithoutPieceInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CorpusUpdateWithoutCoverInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CorpusAuthor?: CorpusAuthorUpdateManyWithoutCorpusInput
  }

  export type CorpusUncheckedUpdateWithoutCoverInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CorpusAuthor?: CorpusAuthorUncheckedUpdateManyWithoutCorpusInput
  }

  export type CorpusUncheckedUpdateManyWithoutCorpusInput = {
    kind?: EnumKindFieldUpdateOperationsInput | Kind
    title?: StringFieldUpdateOperationsInput | string
    referee?: StringFieldUpdateOperationsInput | string
    content?: InputJsonValue | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUpdateWithoutCoverInput = {
    name?: StringFieldUpdateOperationsInput | string
    pieces?: PieceUpdateManyWithoutAuthorInput
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    CorpusAuthor?: CorpusAuthorUpdateManyWithoutAuthorInput
  }

  export type AuthorUncheckedUpdateWithoutCoverInput = {
    name?: StringFieldUpdateOperationsInput | string
    pieces?: PieceUncheckedUpdateManyWithoutAuthorInput
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
    CorpusAuthor?: CorpusAuthorUncheckedUpdateManyWithoutAuthorInput
  }

  export type AuthorUncheckedUpdateManyWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    biography?: InputJsonValue | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}