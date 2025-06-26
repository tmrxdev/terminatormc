
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CommandLog
 * 
 */
export type CommandLog = $Result.DefaultSelection<Prisma.$CommandLogPayload>
/**
 * Model BlacklistedCommand
 * 
 */
export type BlacklistedCommand = $Result.DefaultSelection<Prisma.$BlacklistedCommandPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commandLog`: Exposes CRUD operations for the **CommandLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommandLogs
    * const commandLogs = await prisma.commandLog.findMany()
    * ```
    */
  get commandLog(): Prisma.CommandLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blacklistedCommand`: Exposes CRUD operations for the **BlacklistedCommand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlacklistedCommands
    * const blacklistedCommands = await prisma.blacklistedCommand.findMany()
    * ```
    */
  get blacklistedCommand(): Prisma.BlacklistedCommandDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    CommandLog: 'CommandLog',
    BlacklistedCommand: 'BlacklistedCommand'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "commandLog" | "blacklistedCommand"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CommandLog: {
        payload: Prisma.$CommandLogPayload<ExtArgs>
        fields: Prisma.CommandLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>
          }
          findFirst: {
            args: Prisma.CommandLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>
          }
          findMany: {
            args: Prisma.CommandLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>[]
          }
          create: {
            args: Prisma.CommandLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>
          }
          createMany: {
            args: Prisma.CommandLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>[]
          }
          delete: {
            args: Prisma.CommandLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>
          }
          update: {
            args: Prisma.CommandLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>
          }
          deleteMany: {
            args: Prisma.CommandLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>[]
          }
          upsert: {
            args: Prisma.CommandLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandLogPayload>
          }
          aggregate: {
            args: Prisma.CommandLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommandLog>
          }
          groupBy: {
            args: Prisma.CommandLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandLogCountArgs<ExtArgs>
            result: $Utils.Optional<CommandLogCountAggregateOutputType> | number
          }
        }
      }
      BlacklistedCommand: {
        payload: Prisma.$BlacklistedCommandPayload<ExtArgs>
        fields: Prisma.BlacklistedCommandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlacklistedCommandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlacklistedCommandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>
          }
          findFirst: {
            args: Prisma.BlacklistedCommandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlacklistedCommandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>
          }
          findMany: {
            args: Prisma.BlacklistedCommandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>[]
          }
          create: {
            args: Prisma.BlacklistedCommandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>
          }
          createMany: {
            args: Prisma.BlacklistedCommandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlacklistedCommandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>[]
          }
          delete: {
            args: Prisma.BlacklistedCommandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>
          }
          update: {
            args: Prisma.BlacklistedCommandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>
          }
          deleteMany: {
            args: Prisma.BlacklistedCommandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlacklistedCommandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlacklistedCommandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>[]
          }
          upsert: {
            args: Prisma.BlacklistedCommandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedCommandPayload>
          }
          aggregate: {
            args: Prisma.BlacklistedCommandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlacklistedCommand>
          }
          groupBy: {
            args: Prisma.BlacklistedCommandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlacklistedCommandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlacklistedCommandCountArgs<ExtArgs>
            result: $Utils.Optional<BlacklistedCommandCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    commandLog?: CommandLogOmit
    blacklistedCommand?: BlacklistedCommandOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    commandLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandLogs?: boolean | UserCountOutputTypeCountCommandLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommandLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    banned: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    banned: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    image: number
    banned: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    banned?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    banned?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    banned?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    image: string | null
    banned: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    banned?: boolean
    createdAt?: boolean
    commandLogs?: boolean | User$commandLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    banned?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    banned?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    banned?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "banned" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandLogs?: boolean | User$commandLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      commandLogs: Prisma.$CommandLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      image: string | null
      banned: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commandLogs<T extends User$commandLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$commandLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.commandLogs
   */
  export type User$commandLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    where?: CommandLogWhereInput
    orderBy?: CommandLogOrderByWithRelationInput | CommandLogOrderByWithRelationInput[]
    cursor?: CommandLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandLogScalarFieldEnum | CommandLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CommandLog
   */

  export type AggregateCommandLog = {
    _count: CommandLogCountAggregateOutputType | null
    _min: CommandLogMinAggregateOutputType | null
    _max: CommandLogMaxAggregateOutputType | null
  }

  export type CommandLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    command: string | null
    timestamp: Date | null
  }

  export type CommandLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    command: string | null
    timestamp: Date | null
  }

  export type CommandLogCountAggregateOutputType = {
    id: number
    userId: number
    command: number
    timestamp: number
    _all: number
  }


  export type CommandLogMinAggregateInputType = {
    id?: true
    userId?: true
    command?: true
    timestamp?: true
  }

  export type CommandLogMaxAggregateInputType = {
    id?: true
    userId?: true
    command?: true
    timestamp?: true
  }

  export type CommandLogCountAggregateInputType = {
    id?: true
    userId?: true
    command?: true
    timestamp?: true
    _all?: true
  }

  export type CommandLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommandLog to aggregate.
     */
    where?: CommandLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandLogs to fetch.
     */
    orderBy?: CommandLogOrderByWithRelationInput | CommandLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommandLogs
    **/
    _count?: true | CommandLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandLogMaxAggregateInputType
  }

  export type GetCommandLogAggregateType<T extends CommandLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCommandLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommandLog[P]>
      : GetScalarType<T[P], AggregateCommandLog[P]>
  }




  export type CommandLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandLogWhereInput
    orderBy?: CommandLogOrderByWithAggregationInput | CommandLogOrderByWithAggregationInput[]
    by: CommandLogScalarFieldEnum[] | CommandLogScalarFieldEnum
    having?: CommandLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandLogCountAggregateInputType | true
    _min?: CommandLogMinAggregateInputType
    _max?: CommandLogMaxAggregateInputType
  }

  export type CommandLogGroupByOutputType = {
    id: string
    userId: string
    command: string
    timestamp: Date
    _count: CommandLogCountAggregateOutputType | null
    _min: CommandLogMinAggregateOutputType | null
    _max: CommandLogMaxAggregateOutputType | null
  }

  type GetCommandLogGroupByPayload<T extends CommandLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandLogGroupByOutputType[P]>
            : GetScalarType<T[P], CommandLogGroupByOutputType[P]>
        }
      >
    >


  export type CommandLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    command?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commandLog"]>

  export type CommandLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    command?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commandLog"]>

  export type CommandLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    command?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commandLog"]>

  export type CommandLogSelectScalar = {
    id?: boolean
    userId?: boolean
    command?: boolean
    timestamp?: boolean
  }

  export type CommandLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "command" | "timestamp", ExtArgs["result"]["commandLog"]>
  export type CommandLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommandLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommandLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommandLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommandLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      command: string
      timestamp: Date
    }, ExtArgs["result"]["commandLog"]>
    composites: {}
  }

  type CommandLogGetPayload<S extends boolean | null | undefined | CommandLogDefaultArgs> = $Result.GetResult<Prisma.$CommandLogPayload, S>

  type CommandLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandLogCountAggregateInputType | true
    }

  export interface CommandLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommandLog'], meta: { name: 'CommandLog' } }
    /**
     * Find zero or one CommandLog that matches the filter.
     * @param {CommandLogFindUniqueArgs} args - Arguments to find a CommandLog
     * @example
     * // Get one CommandLog
     * const commandLog = await prisma.commandLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandLogFindUniqueArgs>(args: SelectSubset<T, CommandLogFindUniqueArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommandLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandLogFindUniqueOrThrowArgs} args - Arguments to find a CommandLog
     * @example
     * // Get one CommandLog
     * const commandLog = await prisma.commandLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommandLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandLogFindFirstArgs} args - Arguments to find a CommandLog
     * @example
     * // Get one CommandLog
     * const commandLog = await prisma.commandLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandLogFindFirstArgs>(args?: SelectSubset<T, CommandLogFindFirstArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommandLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandLogFindFirstOrThrowArgs} args - Arguments to find a CommandLog
     * @example
     * // Get one CommandLog
     * const commandLog = await prisma.commandLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommandLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommandLogs
     * const commandLogs = await prisma.commandLog.findMany()
     * 
     * // Get first 10 CommandLogs
     * const commandLogs = await prisma.commandLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandLogWithIdOnly = await prisma.commandLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandLogFindManyArgs>(args?: SelectSubset<T, CommandLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommandLog.
     * @param {CommandLogCreateArgs} args - Arguments to create a CommandLog.
     * @example
     * // Create one CommandLog
     * const CommandLog = await prisma.commandLog.create({
     *   data: {
     *     // ... data to create a CommandLog
     *   }
     * })
     * 
     */
    create<T extends CommandLogCreateArgs>(args: SelectSubset<T, CommandLogCreateArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommandLogs.
     * @param {CommandLogCreateManyArgs} args - Arguments to create many CommandLogs.
     * @example
     * // Create many CommandLogs
     * const commandLog = await prisma.commandLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandLogCreateManyArgs>(args?: SelectSubset<T, CommandLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommandLogs and returns the data saved in the database.
     * @param {CommandLogCreateManyAndReturnArgs} args - Arguments to create many CommandLogs.
     * @example
     * // Create many CommandLogs
     * const commandLog = await prisma.commandLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommandLogs and only return the `id`
     * const commandLogWithIdOnly = await prisma.commandLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommandLog.
     * @param {CommandLogDeleteArgs} args - Arguments to delete one CommandLog.
     * @example
     * // Delete one CommandLog
     * const CommandLog = await prisma.commandLog.delete({
     *   where: {
     *     // ... filter to delete one CommandLog
     *   }
     * })
     * 
     */
    delete<T extends CommandLogDeleteArgs>(args: SelectSubset<T, CommandLogDeleteArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommandLog.
     * @param {CommandLogUpdateArgs} args - Arguments to update one CommandLog.
     * @example
     * // Update one CommandLog
     * const commandLog = await prisma.commandLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandLogUpdateArgs>(args: SelectSubset<T, CommandLogUpdateArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommandLogs.
     * @param {CommandLogDeleteManyArgs} args - Arguments to filter CommandLogs to delete.
     * @example
     * // Delete a few CommandLogs
     * const { count } = await prisma.commandLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandLogDeleteManyArgs>(args?: SelectSubset<T, CommandLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommandLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommandLogs
     * const commandLog = await prisma.commandLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandLogUpdateManyArgs>(args: SelectSubset<T, CommandLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommandLogs and returns the data updated in the database.
     * @param {CommandLogUpdateManyAndReturnArgs} args - Arguments to update many CommandLogs.
     * @example
     * // Update many CommandLogs
     * const commandLog = await prisma.commandLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommandLogs and only return the `id`
     * const commandLogWithIdOnly = await prisma.commandLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommandLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommandLog.
     * @param {CommandLogUpsertArgs} args - Arguments to update or create a CommandLog.
     * @example
     * // Update or create a CommandLog
     * const commandLog = await prisma.commandLog.upsert({
     *   create: {
     *     // ... data to create a CommandLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommandLog we want to update
     *   }
     * })
     */
    upsert<T extends CommandLogUpsertArgs>(args: SelectSubset<T, CommandLogUpsertArgs<ExtArgs>>): Prisma__CommandLogClient<$Result.GetResult<Prisma.$CommandLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommandLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandLogCountArgs} args - Arguments to filter CommandLogs to count.
     * @example
     * // Count the number of CommandLogs
     * const count = await prisma.commandLog.count({
     *   where: {
     *     // ... the filter for the CommandLogs we want to count
     *   }
     * })
    **/
    count<T extends CommandLogCountArgs>(
      args?: Subset<T, CommandLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommandLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandLogAggregateArgs>(args: Subset<T, CommandLogAggregateArgs>): Prisma.PrismaPromise<GetCommandLogAggregateType<T>>

    /**
     * Group by CommandLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandLogGroupByArgs} args - Group by arguments.
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
      T extends CommandLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandLogGroupByArgs['orderBy'] }
        : { orderBy?: CommandLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommandLog model
   */
  readonly fields: CommandLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommandLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommandLog model
   */
  interface CommandLogFieldRefs {
    readonly id: FieldRef<"CommandLog", 'String'>
    readonly userId: FieldRef<"CommandLog", 'String'>
    readonly command: FieldRef<"CommandLog", 'String'>
    readonly timestamp: FieldRef<"CommandLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommandLog findUnique
   */
  export type CommandLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * Filter, which CommandLog to fetch.
     */
    where: CommandLogWhereUniqueInput
  }

  /**
   * CommandLog findUniqueOrThrow
   */
  export type CommandLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * Filter, which CommandLog to fetch.
     */
    where: CommandLogWhereUniqueInput
  }

  /**
   * CommandLog findFirst
   */
  export type CommandLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * Filter, which CommandLog to fetch.
     */
    where?: CommandLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandLogs to fetch.
     */
    orderBy?: CommandLogOrderByWithRelationInput | CommandLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommandLogs.
     */
    cursor?: CommandLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommandLogs.
     */
    distinct?: CommandLogScalarFieldEnum | CommandLogScalarFieldEnum[]
  }

  /**
   * CommandLog findFirstOrThrow
   */
  export type CommandLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * Filter, which CommandLog to fetch.
     */
    where?: CommandLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandLogs to fetch.
     */
    orderBy?: CommandLogOrderByWithRelationInput | CommandLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommandLogs.
     */
    cursor?: CommandLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommandLogs.
     */
    distinct?: CommandLogScalarFieldEnum | CommandLogScalarFieldEnum[]
  }

  /**
   * CommandLog findMany
   */
  export type CommandLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * Filter, which CommandLogs to fetch.
     */
    where?: CommandLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandLogs to fetch.
     */
    orderBy?: CommandLogOrderByWithRelationInput | CommandLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommandLogs.
     */
    cursor?: CommandLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandLogs.
     */
    skip?: number
    distinct?: CommandLogScalarFieldEnum | CommandLogScalarFieldEnum[]
  }

  /**
   * CommandLog create
   */
  export type CommandLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CommandLog.
     */
    data: XOR<CommandLogCreateInput, CommandLogUncheckedCreateInput>
  }

  /**
   * CommandLog createMany
   */
  export type CommandLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommandLogs.
     */
    data: CommandLogCreateManyInput | CommandLogCreateManyInput[]
  }

  /**
   * CommandLog createManyAndReturn
   */
  export type CommandLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * The data used to create many CommandLogs.
     */
    data: CommandLogCreateManyInput | CommandLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommandLog update
   */
  export type CommandLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CommandLog.
     */
    data: XOR<CommandLogUpdateInput, CommandLogUncheckedUpdateInput>
    /**
     * Choose, which CommandLog to update.
     */
    where: CommandLogWhereUniqueInput
  }

  /**
   * CommandLog updateMany
   */
  export type CommandLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommandLogs.
     */
    data: XOR<CommandLogUpdateManyMutationInput, CommandLogUncheckedUpdateManyInput>
    /**
     * Filter which CommandLogs to update
     */
    where?: CommandLogWhereInput
    /**
     * Limit how many CommandLogs to update.
     */
    limit?: number
  }

  /**
   * CommandLog updateManyAndReturn
   */
  export type CommandLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * The data used to update CommandLogs.
     */
    data: XOR<CommandLogUpdateManyMutationInput, CommandLogUncheckedUpdateManyInput>
    /**
     * Filter which CommandLogs to update
     */
    where?: CommandLogWhereInput
    /**
     * Limit how many CommandLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommandLog upsert
   */
  export type CommandLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CommandLog to update in case it exists.
     */
    where: CommandLogWhereUniqueInput
    /**
     * In case the CommandLog found by the `where` argument doesn't exist, create a new CommandLog with this data.
     */
    create: XOR<CommandLogCreateInput, CommandLogUncheckedCreateInput>
    /**
     * In case the CommandLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandLogUpdateInput, CommandLogUncheckedUpdateInput>
  }

  /**
   * CommandLog delete
   */
  export type CommandLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
    /**
     * Filter which CommandLog to delete.
     */
    where: CommandLogWhereUniqueInput
  }

  /**
   * CommandLog deleteMany
   */
  export type CommandLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommandLogs to delete
     */
    where?: CommandLogWhereInput
    /**
     * Limit how many CommandLogs to delete.
     */
    limit?: number
  }

  /**
   * CommandLog without action
   */
  export type CommandLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandLog
     */
    select?: CommandLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandLog
     */
    omit?: CommandLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandLogInclude<ExtArgs> | null
  }


  /**
   * Model BlacklistedCommand
   */

  export type AggregateBlacklistedCommand = {
    _count: BlacklistedCommandCountAggregateOutputType | null
    _min: BlacklistedCommandMinAggregateOutputType | null
    _max: BlacklistedCommandMaxAggregateOutputType | null
  }

  export type BlacklistedCommandMinAggregateOutputType = {
    id: string | null
    command: string | null
    createdAt: Date | null
  }

  export type BlacklistedCommandMaxAggregateOutputType = {
    id: string | null
    command: string | null
    createdAt: Date | null
  }

  export type BlacklistedCommandCountAggregateOutputType = {
    id: number
    command: number
    createdAt: number
    _all: number
  }


  export type BlacklistedCommandMinAggregateInputType = {
    id?: true
    command?: true
    createdAt?: true
  }

  export type BlacklistedCommandMaxAggregateInputType = {
    id?: true
    command?: true
    createdAt?: true
  }

  export type BlacklistedCommandCountAggregateInputType = {
    id?: true
    command?: true
    createdAt?: true
    _all?: true
  }

  export type BlacklistedCommandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlacklistedCommand to aggregate.
     */
    where?: BlacklistedCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedCommands to fetch.
     */
    orderBy?: BlacklistedCommandOrderByWithRelationInput | BlacklistedCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlacklistedCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlacklistedCommands
    **/
    _count?: true | BlacklistedCommandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlacklistedCommandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlacklistedCommandMaxAggregateInputType
  }

  export type GetBlacklistedCommandAggregateType<T extends BlacklistedCommandAggregateArgs> = {
        [P in keyof T & keyof AggregateBlacklistedCommand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlacklistedCommand[P]>
      : GetScalarType<T[P], AggregateBlacklistedCommand[P]>
  }




  export type BlacklistedCommandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistedCommandWhereInput
    orderBy?: BlacklistedCommandOrderByWithAggregationInput | BlacklistedCommandOrderByWithAggregationInput[]
    by: BlacklistedCommandScalarFieldEnum[] | BlacklistedCommandScalarFieldEnum
    having?: BlacklistedCommandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlacklistedCommandCountAggregateInputType | true
    _min?: BlacklistedCommandMinAggregateInputType
    _max?: BlacklistedCommandMaxAggregateInputType
  }

  export type BlacklistedCommandGroupByOutputType = {
    id: string
    command: string
    createdAt: Date
    _count: BlacklistedCommandCountAggregateOutputType | null
    _min: BlacklistedCommandMinAggregateOutputType | null
    _max: BlacklistedCommandMaxAggregateOutputType | null
  }

  type GetBlacklistedCommandGroupByPayload<T extends BlacklistedCommandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlacklistedCommandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlacklistedCommandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlacklistedCommandGroupByOutputType[P]>
            : GetScalarType<T[P], BlacklistedCommandGroupByOutputType[P]>
        }
      >
    >


  export type BlacklistedCommandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    command?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistedCommand"]>

  export type BlacklistedCommandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    command?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistedCommand"]>

  export type BlacklistedCommandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    command?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistedCommand"]>

  export type BlacklistedCommandSelectScalar = {
    id?: boolean
    command?: boolean
    createdAt?: boolean
  }

  export type BlacklistedCommandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "command" | "createdAt", ExtArgs["result"]["blacklistedCommand"]>

  export type $BlacklistedCommandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlacklistedCommand"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      command: string
      createdAt: Date
    }, ExtArgs["result"]["blacklistedCommand"]>
    composites: {}
  }

  type BlacklistedCommandGetPayload<S extends boolean | null | undefined | BlacklistedCommandDefaultArgs> = $Result.GetResult<Prisma.$BlacklistedCommandPayload, S>

  type BlacklistedCommandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlacklistedCommandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlacklistedCommandCountAggregateInputType | true
    }

  export interface BlacklistedCommandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlacklistedCommand'], meta: { name: 'BlacklistedCommand' } }
    /**
     * Find zero or one BlacklistedCommand that matches the filter.
     * @param {BlacklistedCommandFindUniqueArgs} args - Arguments to find a BlacklistedCommand
     * @example
     * // Get one BlacklistedCommand
     * const blacklistedCommand = await prisma.blacklistedCommand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlacklistedCommandFindUniqueArgs>(args: SelectSubset<T, BlacklistedCommandFindUniqueArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlacklistedCommand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlacklistedCommandFindUniqueOrThrowArgs} args - Arguments to find a BlacklistedCommand
     * @example
     * // Get one BlacklistedCommand
     * const blacklistedCommand = await prisma.blacklistedCommand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlacklistedCommandFindUniqueOrThrowArgs>(args: SelectSubset<T, BlacklistedCommandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlacklistedCommand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedCommandFindFirstArgs} args - Arguments to find a BlacklistedCommand
     * @example
     * // Get one BlacklistedCommand
     * const blacklistedCommand = await prisma.blacklistedCommand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlacklistedCommandFindFirstArgs>(args?: SelectSubset<T, BlacklistedCommandFindFirstArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlacklistedCommand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedCommandFindFirstOrThrowArgs} args - Arguments to find a BlacklistedCommand
     * @example
     * // Get one BlacklistedCommand
     * const blacklistedCommand = await prisma.blacklistedCommand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlacklistedCommandFindFirstOrThrowArgs>(args?: SelectSubset<T, BlacklistedCommandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlacklistedCommands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedCommandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlacklistedCommands
     * const blacklistedCommands = await prisma.blacklistedCommand.findMany()
     * 
     * // Get first 10 BlacklistedCommands
     * const blacklistedCommands = await prisma.blacklistedCommand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blacklistedCommandWithIdOnly = await prisma.blacklistedCommand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlacklistedCommandFindManyArgs>(args?: SelectSubset<T, BlacklistedCommandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlacklistedCommand.
     * @param {BlacklistedCommandCreateArgs} args - Arguments to create a BlacklistedCommand.
     * @example
     * // Create one BlacklistedCommand
     * const BlacklistedCommand = await prisma.blacklistedCommand.create({
     *   data: {
     *     // ... data to create a BlacklistedCommand
     *   }
     * })
     * 
     */
    create<T extends BlacklistedCommandCreateArgs>(args: SelectSubset<T, BlacklistedCommandCreateArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlacklistedCommands.
     * @param {BlacklistedCommandCreateManyArgs} args - Arguments to create many BlacklistedCommands.
     * @example
     * // Create many BlacklistedCommands
     * const blacklistedCommand = await prisma.blacklistedCommand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlacklistedCommandCreateManyArgs>(args?: SelectSubset<T, BlacklistedCommandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlacklistedCommands and returns the data saved in the database.
     * @param {BlacklistedCommandCreateManyAndReturnArgs} args - Arguments to create many BlacklistedCommands.
     * @example
     * // Create many BlacklistedCommands
     * const blacklistedCommand = await prisma.blacklistedCommand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlacklistedCommands and only return the `id`
     * const blacklistedCommandWithIdOnly = await prisma.blacklistedCommand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlacklistedCommandCreateManyAndReturnArgs>(args?: SelectSubset<T, BlacklistedCommandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlacklistedCommand.
     * @param {BlacklistedCommandDeleteArgs} args - Arguments to delete one BlacklistedCommand.
     * @example
     * // Delete one BlacklistedCommand
     * const BlacklistedCommand = await prisma.blacklistedCommand.delete({
     *   where: {
     *     // ... filter to delete one BlacklistedCommand
     *   }
     * })
     * 
     */
    delete<T extends BlacklistedCommandDeleteArgs>(args: SelectSubset<T, BlacklistedCommandDeleteArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlacklistedCommand.
     * @param {BlacklistedCommandUpdateArgs} args - Arguments to update one BlacklistedCommand.
     * @example
     * // Update one BlacklistedCommand
     * const blacklistedCommand = await prisma.blacklistedCommand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlacklistedCommandUpdateArgs>(args: SelectSubset<T, BlacklistedCommandUpdateArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlacklistedCommands.
     * @param {BlacklistedCommandDeleteManyArgs} args - Arguments to filter BlacklistedCommands to delete.
     * @example
     * // Delete a few BlacklistedCommands
     * const { count } = await prisma.blacklistedCommand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlacklistedCommandDeleteManyArgs>(args?: SelectSubset<T, BlacklistedCommandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlacklistedCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedCommandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlacklistedCommands
     * const blacklistedCommand = await prisma.blacklistedCommand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlacklistedCommandUpdateManyArgs>(args: SelectSubset<T, BlacklistedCommandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlacklistedCommands and returns the data updated in the database.
     * @param {BlacklistedCommandUpdateManyAndReturnArgs} args - Arguments to update many BlacklistedCommands.
     * @example
     * // Update many BlacklistedCommands
     * const blacklistedCommand = await prisma.blacklistedCommand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlacklistedCommands and only return the `id`
     * const blacklistedCommandWithIdOnly = await prisma.blacklistedCommand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlacklistedCommandUpdateManyAndReturnArgs>(args: SelectSubset<T, BlacklistedCommandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlacklistedCommand.
     * @param {BlacklistedCommandUpsertArgs} args - Arguments to update or create a BlacklistedCommand.
     * @example
     * // Update or create a BlacklistedCommand
     * const blacklistedCommand = await prisma.blacklistedCommand.upsert({
     *   create: {
     *     // ... data to create a BlacklistedCommand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlacklistedCommand we want to update
     *   }
     * })
     */
    upsert<T extends BlacklistedCommandUpsertArgs>(args: SelectSubset<T, BlacklistedCommandUpsertArgs<ExtArgs>>): Prisma__BlacklistedCommandClient<$Result.GetResult<Prisma.$BlacklistedCommandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlacklistedCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedCommandCountArgs} args - Arguments to filter BlacklistedCommands to count.
     * @example
     * // Count the number of BlacklistedCommands
     * const count = await prisma.blacklistedCommand.count({
     *   where: {
     *     // ... the filter for the BlacklistedCommands we want to count
     *   }
     * })
    **/
    count<T extends BlacklistedCommandCountArgs>(
      args?: Subset<T, BlacklistedCommandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlacklistedCommandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlacklistedCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedCommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlacklistedCommandAggregateArgs>(args: Subset<T, BlacklistedCommandAggregateArgs>): Prisma.PrismaPromise<GetBlacklistedCommandAggregateType<T>>

    /**
     * Group by BlacklistedCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedCommandGroupByArgs} args - Group by arguments.
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
      T extends BlacklistedCommandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlacklistedCommandGroupByArgs['orderBy'] }
        : { orderBy?: BlacklistedCommandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlacklistedCommandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlacklistedCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlacklistedCommand model
   */
  readonly fields: BlacklistedCommandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlacklistedCommand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlacklistedCommandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlacklistedCommand model
   */
  interface BlacklistedCommandFieldRefs {
    readonly id: FieldRef<"BlacklistedCommand", 'String'>
    readonly command: FieldRef<"BlacklistedCommand", 'String'>
    readonly createdAt: FieldRef<"BlacklistedCommand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlacklistedCommand findUnique
   */
  export type BlacklistedCommandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedCommand to fetch.
     */
    where: BlacklistedCommandWhereUniqueInput
  }

  /**
   * BlacklistedCommand findUniqueOrThrow
   */
  export type BlacklistedCommandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedCommand to fetch.
     */
    where: BlacklistedCommandWhereUniqueInput
  }

  /**
   * BlacklistedCommand findFirst
   */
  export type BlacklistedCommandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedCommand to fetch.
     */
    where?: BlacklistedCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedCommands to fetch.
     */
    orderBy?: BlacklistedCommandOrderByWithRelationInput | BlacklistedCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlacklistedCommands.
     */
    cursor?: BlacklistedCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlacklistedCommands.
     */
    distinct?: BlacklistedCommandScalarFieldEnum | BlacklistedCommandScalarFieldEnum[]
  }

  /**
   * BlacklistedCommand findFirstOrThrow
   */
  export type BlacklistedCommandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedCommand to fetch.
     */
    where?: BlacklistedCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedCommands to fetch.
     */
    orderBy?: BlacklistedCommandOrderByWithRelationInput | BlacklistedCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlacklistedCommands.
     */
    cursor?: BlacklistedCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlacklistedCommands.
     */
    distinct?: BlacklistedCommandScalarFieldEnum | BlacklistedCommandScalarFieldEnum[]
  }

  /**
   * BlacklistedCommand findMany
   */
  export type BlacklistedCommandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedCommands to fetch.
     */
    where?: BlacklistedCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedCommands to fetch.
     */
    orderBy?: BlacklistedCommandOrderByWithRelationInput | BlacklistedCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlacklistedCommands.
     */
    cursor?: BlacklistedCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedCommands.
     */
    skip?: number
    distinct?: BlacklistedCommandScalarFieldEnum | BlacklistedCommandScalarFieldEnum[]
  }

  /**
   * BlacklistedCommand create
   */
  export type BlacklistedCommandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * The data needed to create a BlacklistedCommand.
     */
    data: XOR<BlacklistedCommandCreateInput, BlacklistedCommandUncheckedCreateInput>
  }

  /**
   * BlacklistedCommand createMany
   */
  export type BlacklistedCommandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlacklistedCommands.
     */
    data: BlacklistedCommandCreateManyInput | BlacklistedCommandCreateManyInput[]
  }

  /**
   * BlacklistedCommand createManyAndReturn
   */
  export type BlacklistedCommandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * The data used to create many BlacklistedCommands.
     */
    data: BlacklistedCommandCreateManyInput | BlacklistedCommandCreateManyInput[]
  }

  /**
   * BlacklistedCommand update
   */
  export type BlacklistedCommandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * The data needed to update a BlacklistedCommand.
     */
    data: XOR<BlacklistedCommandUpdateInput, BlacklistedCommandUncheckedUpdateInput>
    /**
     * Choose, which BlacklistedCommand to update.
     */
    where: BlacklistedCommandWhereUniqueInput
  }

  /**
   * BlacklistedCommand updateMany
   */
  export type BlacklistedCommandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlacklistedCommands.
     */
    data: XOR<BlacklistedCommandUpdateManyMutationInput, BlacklistedCommandUncheckedUpdateManyInput>
    /**
     * Filter which BlacklistedCommands to update
     */
    where?: BlacklistedCommandWhereInput
    /**
     * Limit how many BlacklistedCommands to update.
     */
    limit?: number
  }

  /**
   * BlacklistedCommand updateManyAndReturn
   */
  export type BlacklistedCommandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * The data used to update BlacklistedCommands.
     */
    data: XOR<BlacklistedCommandUpdateManyMutationInput, BlacklistedCommandUncheckedUpdateManyInput>
    /**
     * Filter which BlacklistedCommands to update
     */
    where?: BlacklistedCommandWhereInput
    /**
     * Limit how many BlacklistedCommands to update.
     */
    limit?: number
  }

  /**
   * BlacklistedCommand upsert
   */
  export type BlacklistedCommandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * The filter to search for the BlacklistedCommand to update in case it exists.
     */
    where: BlacklistedCommandWhereUniqueInput
    /**
     * In case the BlacklistedCommand found by the `where` argument doesn't exist, create a new BlacklistedCommand with this data.
     */
    create: XOR<BlacklistedCommandCreateInput, BlacklistedCommandUncheckedCreateInput>
    /**
     * In case the BlacklistedCommand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlacklistedCommandUpdateInput, BlacklistedCommandUncheckedUpdateInput>
  }

  /**
   * BlacklistedCommand delete
   */
  export type BlacklistedCommandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
    /**
     * Filter which BlacklistedCommand to delete.
     */
    where: BlacklistedCommandWhereUniqueInput
  }

  /**
   * BlacklistedCommand deleteMany
   */
  export type BlacklistedCommandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlacklistedCommands to delete
     */
    where?: BlacklistedCommandWhereInput
    /**
     * Limit how many BlacklistedCommands to delete.
     */
    limit?: number
  }

  /**
   * BlacklistedCommand without action
   */
  export type BlacklistedCommandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedCommand
     */
    select?: BlacklistedCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedCommand
     */
    omit?: BlacklistedCommandOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    banned: 'banned',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommandLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    command: 'command',
    timestamp: 'timestamp'
  };

  export type CommandLogScalarFieldEnum = (typeof CommandLogScalarFieldEnum)[keyof typeof CommandLogScalarFieldEnum]


  export const BlacklistedCommandScalarFieldEnum: {
    id: 'id',
    command: 'command',
    createdAt: 'createdAt'
  };

  export type BlacklistedCommandScalarFieldEnum = (typeof BlacklistedCommandScalarFieldEnum)[keyof typeof BlacklistedCommandScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    banned?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    commandLogs?: CommandLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    commandLogs?: CommandLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    banned?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    commandLogs?: CommandLogListRelationFilter
  }, "id" | "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CommandLogWhereInput = {
    AND?: CommandLogWhereInput | CommandLogWhereInput[]
    OR?: CommandLogWhereInput[]
    NOT?: CommandLogWhereInput | CommandLogWhereInput[]
    id?: StringFilter<"CommandLog"> | string
    userId?: StringFilter<"CommandLog"> | string
    command?: StringFilter<"CommandLog"> | string
    timestamp?: DateTimeFilter<"CommandLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommandLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    command?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CommandLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommandLogWhereInput | CommandLogWhereInput[]
    OR?: CommandLogWhereInput[]
    NOT?: CommandLogWhereInput | CommandLogWhereInput[]
    userId?: StringFilter<"CommandLog"> | string
    command?: StringFilter<"CommandLog"> | string
    timestamp?: DateTimeFilter<"CommandLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommandLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    command?: SortOrder
    timestamp?: SortOrder
    _count?: CommandLogCountOrderByAggregateInput
    _max?: CommandLogMaxOrderByAggregateInput
    _min?: CommandLogMinOrderByAggregateInput
  }

  export type CommandLogScalarWhereWithAggregatesInput = {
    AND?: CommandLogScalarWhereWithAggregatesInput | CommandLogScalarWhereWithAggregatesInput[]
    OR?: CommandLogScalarWhereWithAggregatesInput[]
    NOT?: CommandLogScalarWhereWithAggregatesInput | CommandLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommandLog"> | string
    userId?: StringWithAggregatesFilter<"CommandLog"> | string
    command?: StringWithAggregatesFilter<"CommandLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"CommandLog"> | Date | string
  }

  export type BlacklistedCommandWhereInput = {
    AND?: BlacklistedCommandWhereInput | BlacklistedCommandWhereInput[]
    OR?: BlacklistedCommandWhereInput[]
    NOT?: BlacklistedCommandWhereInput | BlacklistedCommandWhereInput[]
    id?: StringFilter<"BlacklistedCommand"> | string
    command?: StringFilter<"BlacklistedCommand"> | string
    createdAt?: DateTimeFilter<"BlacklistedCommand"> | Date | string
  }

  export type BlacklistedCommandOrderByWithRelationInput = {
    id?: SortOrder
    command?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistedCommandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    command?: string
    AND?: BlacklistedCommandWhereInput | BlacklistedCommandWhereInput[]
    OR?: BlacklistedCommandWhereInput[]
    NOT?: BlacklistedCommandWhereInput | BlacklistedCommandWhereInput[]
    createdAt?: DateTimeFilter<"BlacklistedCommand"> | Date | string
  }, "id" | "command">

  export type BlacklistedCommandOrderByWithAggregationInput = {
    id?: SortOrder
    command?: SortOrder
    createdAt?: SortOrder
    _count?: BlacklistedCommandCountOrderByAggregateInput
    _max?: BlacklistedCommandMaxOrderByAggregateInput
    _min?: BlacklistedCommandMinOrderByAggregateInput
  }

  export type BlacklistedCommandScalarWhereWithAggregatesInput = {
    AND?: BlacklistedCommandScalarWhereWithAggregatesInput | BlacklistedCommandScalarWhereWithAggregatesInput[]
    OR?: BlacklistedCommandScalarWhereWithAggregatesInput[]
    NOT?: BlacklistedCommandScalarWhereWithAggregatesInput | BlacklistedCommandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlacklistedCommand"> | string
    command?: StringWithAggregatesFilter<"BlacklistedCommand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlacklistedCommand"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name?: string | null
    image?: string | null
    banned?: boolean
    createdAt?: Date | string
    commandLogs?: CommandLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name?: string | null
    image?: string | null
    banned?: boolean
    createdAt?: Date | string
    commandLogs?: CommandLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandLogs?: CommandLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandLogs?: CommandLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name?: string | null
    image?: string | null
    banned?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandLogCreateInput = {
    id?: string
    command: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommandLogsInput
  }

  export type CommandLogUncheckedCreateInput = {
    id?: string
    userId: string
    command: string
    timestamp?: Date | string
  }

  export type CommandLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommandLogsNestedInput
  }

  export type CommandLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandLogCreateManyInput = {
    id?: string
    userId: string
    command: string
    timestamp?: Date | string
  }

  export type CommandLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistedCommandCreateInput = {
    id?: string
    command: string
    createdAt?: Date | string
  }

  export type BlacklistedCommandUncheckedCreateInput = {
    id?: string
    command: string
    createdAt?: Date | string
  }

  export type BlacklistedCommandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistedCommandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistedCommandCreateManyInput = {
    id?: string
    command: string
    createdAt?: Date | string
  }

  export type BlacklistedCommandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistedCommandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommandLogListRelationFilter = {
    every?: CommandLogWhereInput
    some?: CommandLogWhereInput
    none?: CommandLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommandLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommandLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    command?: SortOrder
    timestamp?: SortOrder
  }

  export type CommandLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    command?: SortOrder
    timestamp?: SortOrder
  }

  export type CommandLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    command?: SortOrder
    timestamp?: SortOrder
  }

  export type BlacklistedCommandCountOrderByAggregateInput = {
    id?: SortOrder
    command?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistedCommandMaxOrderByAggregateInput = {
    id?: SortOrder
    command?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistedCommandMinOrderByAggregateInput = {
    id?: SortOrder
    command?: SortOrder
    createdAt?: SortOrder
  }

  export type CommandLogCreateNestedManyWithoutUserInput = {
    create?: XOR<CommandLogCreateWithoutUserInput, CommandLogUncheckedCreateWithoutUserInput> | CommandLogCreateWithoutUserInput[] | CommandLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandLogCreateOrConnectWithoutUserInput | CommandLogCreateOrConnectWithoutUserInput[]
    createMany?: CommandLogCreateManyUserInputEnvelope
    connect?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
  }

  export type CommandLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommandLogCreateWithoutUserInput, CommandLogUncheckedCreateWithoutUserInput> | CommandLogCreateWithoutUserInput[] | CommandLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandLogCreateOrConnectWithoutUserInput | CommandLogCreateOrConnectWithoutUserInput[]
    createMany?: CommandLogCreateManyUserInputEnvelope
    connect?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommandLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommandLogCreateWithoutUserInput, CommandLogUncheckedCreateWithoutUserInput> | CommandLogCreateWithoutUserInput[] | CommandLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandLogCreateOrConnectWithoutUserInput | CommandLogCreateOrConnectWithoutUserInput[]
    upsert?: CommandLogUpsertWithWhereUniqueWithoutUserInput | CommandLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommandLogCreateManyUserInputEnvelope
    set?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    disconnect?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    delete?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    connect?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    update?: CommandLogUpdateWithWhereUniqueWithoutUserInput | CommandLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommandLogUpdateManyWithWhereWithoutUserInput | CommandLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommandLogScalarWhereInput | CommandLogScalarWhereInput[]
  }

  export type CommandLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommandLogCreateWithoutUserInput, CommandLogUncheckedCreateWithoutUserInput> | CommandLogCreateWithoutUserInput[] | CommandLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandLogCreateOrConnectWithoutUserInput | CommandLogCreateOrConnectWithoutUserInput[]
    upsert?: CommandLogUpsertWithWhereUniqueWithoutUserInput | CommandLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommandLogCreateManyUserInputEnvelope
    set?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    disconnect?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    delete?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    connect?: CommandLogWhereUniqueInput | CommandLogWhereUniqueInput[]
    update?: CommandLogUpdateWithWhereUniqueWithoutUserInput | CommandLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommandLogUpdateManyWithWhereWithoutUserInput | CommandLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommandLogScalarWhereInput | CommandLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommandLogsInput = {
    create?: XOR<UserCreateWithoutCommandLogsInput, UserUncheckedCreateWithoutCommandLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommandLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommandLogsNestedInput = {
    create?: XOR<UserCreateWithoutCommandLogsInput, UserUncheckedCreateWithoutCommandLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommandLogsInput
    upsert?: UserUpsertWithoutCommandLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommandLogsInput, UserUpdateWithoutCommandLogsInput>, UserUncheckedUpdateWithoutCommandLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CommandLogCreateWithoutUserInput = {
    id?: string
    command: string
    timestamp?: Date | string
  }

  export type CommandLogUncheckedCreateWithoutUserInput = {
    id?: string
    command: string
    timestamp?: Date | string
  }

  export type CommandLogCreateOrConnectWithoutUserInput = {
    where: CommandLogWhereUniqueInput
    create: XOR<CommandLogCreateWithoutUserInput, CommandLogUncheckedCreateWithoutUserInput>
  }

  export type CommandLogCreateManyUserInputEnvelope = {
    data: CommandLogCreateManyUserInput | CommandLogCreateManyUserInput[]
  }

  export type CommandLogUpsertWithWhereUniqueWithoutUserInput = {
    where: CommandLogWhereUniqueInput
    update: XOR<CommandLogUpdateWithoutUserInput, CommandLogUncheckedUpdateWithoutUserInput>
    create: XOR<CommandLogCreateWithoutUserInput, CommandLogUncheckedCreateWithoutUserInput>
  }

  export type CommandLogUpdateWithWhereUniqueWithoutUserInput = {
    where: CommandLogWhereUniqueInput
    data: XOR<CommandLogUpdateWithoutUserInput, CommandLogUncheckedUpdateWithoutUserInput>
  }

  export type CommandLogUpdateManyWithWhereWithoutUserInput = {
    where: CommandLogScalarWhereInput
    data: XOR<CommandLogUpdateManyMutationInput, CommandLogUncheckedUpdateManyWithoutUserInput>
  }

  export type CommandLogScalarWhereInput = {
    AND?: CommandLogScalarWhereInput | CommandLogScalarWhereInput[]
    OR?: CommandLogScalarWhereInput[]
    NOT?: CommandLogScalarWhereInput | CommandLogScalarWhereInput[]
    id?: StringFilter<"CommandLog"> | string
    userId?: StringFilter<"CommandLog"> | string
    command?: StringFilter<"CommandLog"> | string
    timestamp?: DateTimeFilter<"CommandLog"> | Date | string
  }

  export type UserCreateWithoutCommandLogsInput = {
    id: string
    name?: string | null
    image?: string | null
    banned?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCommandLogsInput = {
    id: string
    name?: string | null
    image?: string | null
    banned?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCommandLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommandLogsInput, UserUncheckedCreateWithoutCommandLogsInput>
  }

  export type UserUpsertWithoutCommandLogsInput = {
    update: XOR<UserUpdateWithoutCommandLogsInput, UserUncheckedUpdateWithoutCommandLogsInput>
    create: XOR<UserCreateWithoutCommandLogsInput, UserUncheckedCreateWithoutCommandLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommandLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommandLogsInput, UserUncheckedUpdateWithoutCommandLogsInput>
  }

  export type UserUpdateWithoutCommandLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCommandLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandLogCreateManyUserInput = {
    id?: string
    command: string
    timestamp?: Date | string
  }

  export type CommandLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}