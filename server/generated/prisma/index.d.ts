
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
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model customers_restaurant
 * 
 */
export type customers_restaurant = $Result.DefaultSelection<Prisma.$customers_restaurantPayload>
/**
 * Model restaurant
 * 
 */
export type restaurant = $Result.DefaultSelection<Prisma.$restaurantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customers.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
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
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers_restaurant`: Exposes CRUD operations for the **customers_restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers_restaurants
    * const customers_restaurants = await prisma.customers_restaurant.findMany()
    * ```
    */
  get customers_restaurant(): Prisma.customers_restaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.restaurantDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    customers: 'customers',
    customers_restaurant: 'customers_restaurant',
    restaurant: 'restaurant'
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
      modelProps: "customers" | "customers_restaurant" | "restaurant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      customers_restaurant: {
        payload: Prisma.$customers_restaurantPayload<ExtArgs>
        fields: Prisma.customers_restaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customers_restaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customers_restaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>
          }
          findFirst: {
            args: Prisma.customers_restaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customers_restaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>
          }
          findMany: {
            args: Prisma.customers_restaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>[]
          }
          create: {
            args: Prisma.customers_restaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>
          }
          createMany: {
            args: Prisma.customers_restaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customers_restaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>[]
          }
          delete: {
            args: Prisma.customers_restaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>
          }
          update: {
            args: Prisma.customers_restaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>
          }
          deleteMany: {
            args: Prisma.customers_restaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customers_restaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customers_restaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>[]
          }
          upsert: {
            args: Prisma.customers_restaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customers_restaurantPayload>
          }
          aggregate: {
            args: Prisma.Customers_restaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers_restaurant>
          }
          groupBy: {
            args: Prisma.customers_restaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<Customers_restaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.customers_restaurantCountArgs<ExtArgs>
            result: $Utils.Optional<Customers_restaurantCountAggregateOutputType> | number
          }
        }
      }
      restaurant: {
        payload: Prisma.$restaurantPayload<ExtArgs>
        fields: Prisma.restaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findFirst: {
            args: Prisma.restaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findMany: {
            args: Prisma.restaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[]
          }
          create: {
            args: Prisma.restaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          createMany: {
            args: Prisma.restaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.restaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[]
          }
          delete: {
            args: Prisma.restaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          update: {
            args: Prisma.restaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          deleteMany: {
            args: Prisma.restaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.restaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[]
          }
          upsert: {
            args: Prisma.restaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.restaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
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
    customers?: customersOmit
    customers_restaurant?: customers_restaurantOmit
    restaurant?: restaurantOmit
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
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    customers_restaurant: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers_restaurant?: boolean | CustomersCountOutputTypeCountCustomers_restaurantArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountCustomers_restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customers_restaurantWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    customers_restaurant: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers_restaurant?: boolean | RestaurantCountOutputTypeCountCustomers_restaurantArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountCustomers_restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customers_restaurantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customers_id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customers_id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customers_id: number | null
    customers_name: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    customers_id: number | null
    customers_name: string | null
  }

  export type CustomersCountAggregateOutputType = {
    customers_id: number
    customers_name: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customers_id?: true
  }

  export type CustomersSumAggregateInputType = {
    customers_id?: true
  }

  export type CustomersMinAggregateInputType = {
    customers_id?: true
    customers_name?: true
  }

  export type CustomersMaxAggregateInputType = {
    customers_id?: true
    customers_name?: true
  }

  export type CustomersCountAggregateInputType = {
    customers_id?: true
    customers_name?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    customers_id: number
    customers_name: string | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customers_id?: boolean
    customers_name?: boolean
    customers_restaurant?: boolean | customers$customers_restaurantArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customers_id?: boolean
    customers_name?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customers_id?: boolean
    customers_name?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    customers_id?: boolean
    customers_name?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customers_id" | "customers_name", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers_restaurant?: boolean | customers$customers_restaurantArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      customers_restaurant: Prisma.$customers_restaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customers_id: number
      customers_name: string | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customers_id`
     * const customersWithCustomers_idOnly = await prisma.customers.findMany({ select: { customers_id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customers_id`
     * const customersWithCustomers_idOnly = await prisma.customers.createManyAndReturn({
     *   select: { customers_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customers_id`
     * const customersWithCustomers_idOnly = await prisma.customers.updateManyAndReturn({
     *   select: { customers_id: true },
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
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
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
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers_restaurant<T extends customers$customers_restaurantArgs<ExtArgs> = {}>(args?: Subset<T, customers$customers_restaurantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly customers_id: FieldRef<"customers", 'Int'>
    readonly customers_name: FieldRef<"customers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.customers_restaurant
   */
  export type customers$customers_restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    where?: customers_restaurantWhereInput
    orderBy?: customers_restaurantOrderByWithRelationInput | customers_restaurantOrderByWithRelationInput[]
    cursor?: customers_restaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customers_restaurantScalarFieldEnum | Customers_restaurantScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model customers_restaurant
   */

  export type AggregateCustomers_restaurant = {
    _count: Customers_restaurantCountAggregateOutputType | null
    _avg: Customers_restaurantAvgAggregateOutputType | null
    _sum: Customers_restaurantSumAggregateOutputType | null
    _min: Customers_restaurantMinAggregateOutputType | null
    _max: Customers_restaurantMaxAggregateOutputType | null
  }

  export type Customers_restaurantAvgAggregateOutputType = {
    customers_id: number | null
    restaurant_id: number | null
  }

  export type Customers_restaurantSumAggregateOutputType = {
    customers_id: number | null
    restaurant_id: number | null
  }

  export type Customers_restaurantMinAggregateOutputType = {
    customers_id: number | null
    restaurant_id: number | null
  }

  export type Customers_restaurantMaxAggregateOutputType = {
    customers_id: number | null
    restaurant_id: number | null
  }

  export type Customers_restaurantCountAggregateOutputType = {
    customers_id: number
    restaurant_id: number
    _all: number
  }


  export type Customers_restaurantAvgAggregateInputType = {
    customers_id?: true
    restaurant_id?: true
  }

  export type Customers_restaurantSumAggregateInputType = {
    customers_id?: true
    restaurant_id?: true
  }

  export type Customers_restaurantMinAggregateInputType = {
    customers_id?: true
    restaurant_id?: true
  }

  export type Customers_restaurantMaxAggregateInputType = {
    customers_id?: true
    restaurant_id?: true
  }

  export type Customers_restaurantCountAggregateInputType = {
    customers_id?: true
    restaurant_id?: true
    _all?: true
  }

  export type Customers_restaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers_restaurant to aggregate.
     */
    where?: customers_restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers_restaurants to fetch.
     */
    orderBy?: customers_restaurantOrderByWithRelationInput | customers_restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customers_restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers_restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers_restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers_restaurants
    **/
    _count?: true | Customers_restaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Customers_restaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Customers_restaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customers_restaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customers_restaurantMaxAggregateInputType
  }

  export type GetCustomers_restaurantAggregateType<T extends Customers_restaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers_restaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers_restaurant[P]>
      : GetScalarType<T[P], AggregateCustomers_restaurant[P]>
  }




  export type customers_restaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customers_restaurantWhereInput
    orderBy?: customers_restaurantOrderByWithAggregationInput | customers_restaurantOrderByWithAggregationInput[]
    by: Customers_restaurantScalarFieldEnum[] | Customers_restaurantScalarFieldEnum
    having?: customers_restaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customers_restaurantCountAggregateInputType | true
    _avg?: Customers_restaurantAvgAggregateInputType
    _sum?: Customers_restaurantSumAggregateInputType
    _min?: Customers_restaurantMinAggregateInputType
    _max?: Customers_restaurantMaxAggregateInputType
  }

  export type Customers_restaurantGroupByOutputType = {
    customers_id: number
    restaurant_id: number
    _count: Customers_restaurantCountAggregateOutputType | null
    _avg: Customers_restaurantAvgAggregateOutputType | null
    _sum: Customers_restaurantSumAggregateOutputType | null
    _min: Customers_restaurantMinAggregateOutputType | null
    _max: Customers_restaurantMaxAggregateOutputType | null
  }

  type GetCustomers_restaurantGroupByPayload<T extends customers_restaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customers_restaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customers_restaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customers_restaurantGroupByOutputType[P]>
            : GetScalarType<T[P], Customers_restaurantGroupByOutputType[P]>
        }
      >
    >


  export type customers_restaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customers_id?: boolean
    restaurant_id?: boolean
    customers?: boolean | customersDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers_restaurant"]>

  export type customers_restaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customers_id?: boolean
    restaurant_id?: boolean
    customers?: boolean | customersDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers_restaurant"]>

  export type customers_restaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customers_id?: boolean
    restaurant_id?: boolean
    customers?: boolean | customersDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers_restaurant"]>

  export type customers_restaurantSelectScalar = {
    customers_id?: boolean
    restaurant_id?: boolean
  }

  export type customers_restaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customers_id" | "restaurant_id", ExtArgs["result"]["customers_restaurant"]>
  export type customers_restaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | customersDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }
  export type customers_restaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | customersDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }
  export type customers_restaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | customersDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }

  export type $customers_restaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers_restaurant"
    objects: {
      customers: Prisma.$customersPayload<ExtArgs>
      restaurant: Prisma.$restaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customers_id: number
      restaurant_id: number
    }, ExtArgs["result"]["customers_restaurant"]>
    composites: {}
  }

  type customers_restaurantGetPayload<S extends boolean | null | undefined | customers_restaurantDefaultArgs> = $Result.GetResult<Prisma.$customers_restaurantPayload, S>

  type customers_restaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customers_restaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Customers_restaurantCountAggregateInputType | true
    }

  export interface customers_restaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers_restaurant'], meta: { name: 'customers_restaurant' } }
    /**
     * Find zero or one Customers_restaurant that matches the filter.
     * @param {customers_restaurantFindUniqueArgs} args - Arguments to find a Customers_restaurant
     * @example
     * // Get one Customers_restaurant
     * const customers_restaurant = await prisma.customers_restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customers_restaurantFindUniqueArgs>(args: SelectSubset<T, customers_restaurantFindUniqueArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers_restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customers_restaurantFindUniqueOrThrowArgs} args - Arguments to find a Customers_restaurant
     * @example
     * // Get one Customers_restaurant
     * const customers_restaurant = await prisma.customers_restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customers_restaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, customers_restaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers_restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customers_restaurantFindFirstArgs} args - Arguments to find a Customers_restaurant
     * @example
     * // Get one Customers_restaurant
     * const customers_restaurant = await prisma.customers_restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customers_restaurantFindFirstArgs>(args?: SelectSubset<T, customers_restaurantFindFirstArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers_restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customers_restaurantFindFirstOrThrowArgs} args - Arguments to find a Customers_restaurant
     * @example
     * // Get one Customers_restaurant
     * const customers_restaurant = await prisma.customers_restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customers_restaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, customers_restaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers_restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customers_restaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers_restaurants
     * const customers_restaurants = await prisma.customers_restaurant.findMany()
     * 
     * // Get first 10 Customers_restaurants
     * const customers_restaurants = await prisma.customers_restaurant.findMany({ take: 10 })
     * 
     * // Only select the `customers_id`
     * const customers_restaurantWithCustomers_idOnly = await prisma.customers_restaurant.findMany({ select: { customers_id: true } })
     * 
     */
    findMany<T extends customers_restaurantFindManyArgs>(args?: SelectSubset<T, customers_restaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers_restaurant.
     * @param {customers_restaurantCreateArgs} args - Arguments to create a Customers_restaurant.
     * @example
     * // Create one Customers_restaurant
     * const Customers_restaurant = await prisma.customers_restaurant.create({
     *   data: {
     *     // ... data to create a Customers_restaurant
     *   }
     * })
     * 
     */
    create<T extends customers_restaurantCreateArgs>(args: SelectSubset<T, customers_restaurantCreateArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers_restaurants.
     * @param {customers_restaurantCreateManyArgs} args - Arguments to create many Customers_restaurants.
     * @example
     * // Create many Customers_restaurants
     * const customers_restaurant = await prisma.customers_restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customers_restaurantCreateManyArgs>(args?: SelectSubset<T, customers_restaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers_restaurants and returns the data saved in the database.
     * @param {customers_restaurantCreateManyAndReturnArgs} args - Arguments to create many Customers_restaurants.
     * @example
     * // Create many Customers_restaurants
     * const customers_restaurant = await prisma.customers_restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers_restaurants and only return the `customers_id`
     * const customers_restaurantWithCustomers_idOnly = await prisma.customers_restaurant.createManyAndReturn({
     *   select: { customers_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customers_restaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, customers_restaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers_restaurant.
     * @param {customers_restaurantDeleteArgs} args - Arguments to delete one Customers_restaurant.
     * @example
     * // Delete one Customers_restaurant
     * const Customers_restaurant = await prisma.customers_restaurant.delete({
     *   where: {
     *     // ... filter to delete one Customers_restaurant
     *   }
     * })
     * 
     */
    delete<T extends customers_restaurantDeleteArgs>(args: SelectSubset<T, customers_restaurantDeleteArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers_restaurant.
     * @param {customers_restaurantUpdateArgs} args - Arguments to update one Customers_restaurant.
     * @example
     * // Update one Customers_restaurant
     * const customers_restaurant = await prisma.customers_restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customers_restaurantUpdateArgs>(args: SelectSubset<T, customers_restaurantUpdateArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers_restaurants.
     * @param {customers_restaurantDeleteManyArgs} args - Arguments to filter Customers_restaurants to delete.
     * @example
     * // Delete a few Customers_restaurants
     * const { count } = await prisma.customers_restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customers_restaurantDeleteManyArgs>(args?: SelectSubset<T, customers_restaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers_restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customers_restaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers_restaurants
     * const customers_restaurant = await prisma.customers_restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customers_restaurantUpdateManyArgs>(args: SelectSubset<T, customers_restaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers_restaurants and returns the data updated in the database.
     * @param {customers_restaurantUpdateManyAndReturnArgs} args - Arguments to update many Customers_restaurants.
     * @example
     * // Update many Customers_restaurants
     * const customers_restaurant = await prisma.customers_restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers_restaurants and only return the `customers_id`
     * const customers_restaurantWithCustomers_idOnly = await prisma.customers_restaurant.updateManyAndReturn({
     *   select: { customers_id: true },
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
    updateManyAndReturn<T extends customers_restaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, customers_restaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers_restaurant.
     * @param {customers_restaurantUpsertArgs} args - Arguments to update or create a Customers_restaurant.
     * @example
     * // Update or create a Customers_restaurant
     * const customers_restaurant = await prisma.customers_restaurant.upsert({
     *   create: {
     *     // ... data to create a Customers_restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers_restaurant we want to update
     *   }
     * })
     */
    upsert<T extends customers_restaurantUpsertArgs>(args: SelectSubset<T, customers_restaurantUpsertArgs<ExtArgs>>): Prisma__customers_restaurantClient<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers_restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customers_restaurantCountArgs} args - Arguments to filter Customers_restaurants to count.
     * @example
     * // Count the number of Customers_restaurants
     * const count = await prisma.customers_restaurant.count({
     *   where: {
     *     // ... the filter for the Customers_restaurants we want to count
     *   }
     * })
    **/
    count<T extends customers_restaurantCountArgs>(
      args?: Subset<T, customers_restaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customers_restaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers_restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customers_restaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Customers_restaurantAggregateArgs>(args: Subset<T, Customers_restaurantAggregateArgs>): Prisma.PrismaPromise<GetCustomers_restaurantAggregateType<T>>

    /**
     * Group by Customers_restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customers_restaurantGroupByArgs} args - Group by arguments.
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
      T extends customers_restaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customers_restaurantGroupByArgs['orderBy'] }
        : { orderBy?: customers_restaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customers_restaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomers_restaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers_restaurant model
   */
  readonly fields: customers_restaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers_restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customers_restaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantDefaultArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the customers_restaurant model
   */
  interface customers_restaurantFieldRefs {
    readonly customers_id: FieldRef<"customers_restaurant", 'Int'>
    readonly restaurant_id: FieldRef<"customers_restaurant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * customers_restaurant findUnique
   */
  export type customers_restaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * Filter, which customers_restaurant to fetch.
     */
    where: customers_restaurantWhereUniqueInput
  }

  /**
   * customers_restaurant findUniqueOrThrow
   */
  export type customers_restaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * Filter, which customers_restaurant to fetch.
     */
    where: customers_restaurantWhereUniqueInput
  }

  /**
   * customers_restaurant findFirst
   */
  export type customers_restaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * Filter, which customers_restaurant to fetch.
     */
    where?: customers_restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers_restaurants to fetch.
     */
    orderBy?: customers_restaurantOrderByWithRelationInput | customers_restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers_restaurants.
     */
    cursor?: customers_restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers_restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers_restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers_restaurants.
     */
    distinct?: Customers_restaurantScalarFieldEnum | Customers_restaurantScalarFieldEnum[]
  }

  /**
   * customers_restaurant findFirstOrThrow
   */
  export type customers_restaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * Filter, which customers_restaurant to fetch.
     */
    where?: customers_restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers_restaurants to fetch.
     */
    orderBy?: customers_restaurantOrderByWithRelationInput | customers_restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers_restaurants.
     */
    cursor?: customers_restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers_restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers_restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers_restaurants.
     */
    distinct?: Customers_restaurantScalarFieldEnum | Customers_restaurantScalarFieldEnum[]
  }

  /**
   * customers_restaurant findMany
   */
  export type customers_restaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * Filter, which customers_restaurants to fetch.
     */
    where?: customers_restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers_restaurants to fetch.
     */
    orderBy?: customers_restaurantOrderByWithRelationInput | customers_restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers_restaurants.
     */
    cursor?: customers_restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers_restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers_restaurants.
     */
    skip?: number
    distinct?: Customers_restaurantScalarFieldEnum | Customers_restaurantScalarFieldEnum[]
  }

  /**
   * customers_restaurant create
   */
  export type customers_restaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a customers_restaurant.
     */
    data: XOR<customers_restaurantCreateInput, customers_restaurantUncheckedCreateInput>
  }

  /**
   * customers_restaurant createMany
   */
  export type customers_restaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers_restaurants.
     */
    data: customers_restaurantCreateManyInput | customers_restaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers_restaurant createManyAndReturn
   */
  export type customers_restaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * The data used to create many customers_restaurants.
     */
    data: customers_restaurantCreateManyInput | customers_restaurantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers_restaurant update
   */
  export type customers_restaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a customers_restaurant.
     */
    data: XOR<customers_restaurantUpdateInput, customers_restaurantUncheckedUpdateInput>
    /**
     * Choose, which customers_restaurant to update.
     */
    where: customers_restaurantWhereUniqueInput
  }

  /**
   * customers_restaurant updateMany
   */
  export type customers_restaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers_restaurants.
     */
    data: XOR<customers_restaurantUpdateManyMutationInput, customers_restaurantUncheckedUpdateManyInput>
    /**
     * Filter which customers_restaurants to update
     */
    where?: customers_restaurantWhereInput
    /**
     * Limit how many customers_restaurants to update.
     */
    limit?: number
  }

  /**
   * customers_restaurant updateManyAndReturn
   */
  export type customers_restaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * The data used to update customers_restaurants.
     */
    data: XOR<customers_restaurantUpdateManyMutationInput, customers_restaurantUncheckedUpdateManyInput>
    /**
     * Filter which customers_restaurants to update
     */
    where?: customers_restaurantWhereInput
    /**
     * Limit how many customers_restaurants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers_restaurant upsert
   */
  export type customers_restaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the customers_restaurant to update in case it exists.
     */
    where: customers_restaurantWhereUniqueInput
    /**
     * In case the customers_restaurant found by the `where` argument doesn't exist, create a new customers_restaurant with this data.
     */
    create: XOR<customers_restaurantCreateInput, customers_restaurantUncheckedCreateInput>
    /**
     * In case the customers_restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customers_restaurantUpdateInput, customers_restaurantUncheckedUpdateInput>
  }

  /**
   * customers_restaurant delete
   */
  export type customers_restaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    /**
     * Filter which customers_restaurant to delete.
     */
    where: customers_restaurantWhereUniqueInput
  }

  /**
   * customers_restaurant deleteMany
   */
  export type customers_restaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers_restaurants to delete
     */
    where?: customers_restaurantWhereInput
    /**
     * Limit how many customers_restaurants to delete.
     */
    limit?: number
  }

  /**
   * customers_restaurant without action
   */
  export type customers_restaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
  }


  /**
   * Model restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    restaurant_id: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    restaurant_id: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    restaurant_id: number | null
    restaurant_name: string | null
  }

  export type RestaurantMaxAggregateOutputType = {
    restaurant_id: number | null
    restaurant_name: string | null
  }

  export type RestaurantCountAggregateOutputType = {
    restaurant_id: number
    restaurant_name: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    restaurant_id?: true
  }

  export type RestaurantSumAggregateInputType = {
    restaurant_id?: true
  }

  export type RestaurantMinAggregateInputType = {
    restaurant_id?: true
    restaurant_name?: true
  }

  export type RestaurantMaxAggregateInputType = {
    restaurant_id?: true
    restaurant_name?: true
  }

  export type RestaurantCountAggregateInputType = {
    restaurant_id?: true
    restaurant_name?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant to aggregate.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type restaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantWhereInput
    orderBy?: restaurantOrderByWithAggregationInput | restaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: restaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    restaurant_id: number
    restaurant_name: string | null
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends restaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type restaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    restaurant_id?: boolean
    restaurant_name?: boolean
    customers_restaurant?: boolean | restaurant$customers_restaurantArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type restaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    restaurant_id?: boolean
    restaurant_name?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type restaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    restaurant_id?: boolean
    restaurant_name?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type restaurantSelectScalar = {
    restaurant_id?: boolean
    restaurant_name?: boolean
  }

  export type restaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"restaurant_id" | "restaurant_name", ExtArgs["result"]["restaurant"]>
  export type restaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers_restaurant?: boolean | restaurant$customers_restaurantArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type restaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type restaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $restaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurant"
    objects: {
      customers_restaurant: Prisma.$customers_restaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      restaurant_id: number
      restaurant_name: string | null
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type restaurantGetPayload<S extends boolean | null | undefined | restaurantDefaultArgs> = $Result.GetResult<Prisma.$restaurantPayload, S>

  type restaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface restaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurant'], meta: { name: 'restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {restaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurantFindUniqueArgs>(args: SelectSubset<T, restaurantFindUniqueArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurantFindFirstArgs>(args?: SelectSubset<T, restaurantFindFirstArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `restaurant_id`
     * const restaurantWithRestaurant_idOnly = await prisma.restaurant.findMany({ select: { restaurant_id: true } })
     * 
     */
    findMany<T extends restaurantFindManyArgs>(args?: SelectSubset<T, restaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {restaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends restaurantCreateArgs>(args: SelectSubset<T, restaurantCreateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {restaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurantCreateManyArgs>(args?: SelectSubset<T, restaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {restaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `restaurant_id`
     * const restaurantWithRestaurant_idOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { restaurant_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends restaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, restaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurant.
     * @param {restaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends restaurantDeleteArgs>(args: SelectSubset<T, restaurantDeleteArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {restaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurantUpdateArgs>(args: SelectSubset<T, restaurantUpdateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurantDeleteManyArgs>(args?: SelectSubset<T, restaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurantUpdateManyArgs>(args: SelectSubset<T, restaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {restaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `restaurant_id`
     * const restaurantWithRestaurant_idOnly = await prisma.restaurant.updateManyAndReturn({
     *   select: { restaurant_id: true },
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
    updateManyAndReturn<T extends restaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, restaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurant.
     * @param {restaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends restaurantUpsertArgs>(args: SelectSubset<T, restaurantUpsertArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends restaurantCountArgs>(
      args?: Subset<T, restaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantGroupByArgs} args - Group by arguments.
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
      T extends restaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantGroupByArgs['orderBy'] }
        : { orderBy?: restaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, restaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurant model
   */
  readonly fields: restaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers_restaurant<T extends restaurant$customers_restaurantArgs<ExtArgs> = {}>(args?: Subset<T, restaurant$customers_restaurantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customers_restaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the restaurant model
   */
  interface restaurantFieldRefs {
    readonly restaurant_id: FieldRef<"restaurant", 'Int'>
    readonly restaurant_name: FieldRef<"restaurant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * restaurant findUnique
   */
  export type restaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findUniqueOrThrow
   */
  export type restaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findFirst
   */
  export type restaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findFirstOrThrow
   */
  export type restaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findMany
   */
  export type restaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant create
   */
  export type restaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a restaurant.
     */
    data: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
  }

  /**
   * restaurant createMany
   */
  export type restaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantCreateManyInput | restaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurant createManyAndReturn
   */
  export type restaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * The data used to create many restaurants.
     */
    data: restaurantCreateManyInput | restaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurant update
   */
  export type restaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a restaurant.
     */
    data: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
    /**
     * Choose, which restaurant to update.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant updateMany
   */
  export type restaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurant updateManyAndReturn
   */
  export type restaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurant upsert
   */
  export type restaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the restaurant to update in case it exists.
     */
    where: restaurantWhereUniqueInput
    /**
     * In case the restaurant found by the `where` argument doesn't exist, create a new restaurant with this data.
     */
    create: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
    /**
     * In case the restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
  }

  /**
   * restaurant delete
   */
  export type restaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter which restaurant to delete.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant deleteMany
   */
  export type restaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to delete.
     */
    limit?: number
  }

  /**
   * restaurant.customers_restaurant
   */
  export type restaurant$customers_restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers_restaurant
     */
    select?: customers_restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers_restaurant
     */
    omit?: customers_restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customers_restaurantInclude<ExtArgs> | null
    where?: customers_restaurantWhereInput
    orderBy?: customers_restaurantOrderByWithRelationInput | customers_restaurantOrderByWithRelationInput[]
    cursor?: customers_restaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customers_restaurantScalarFieldEnum | Customers_restaurantScalarFieldEnum[]
  }

  /**
   * restaurant without action
   */
  export type restaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
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


  export const CustomersScalarFieldEnum: {
    customers_id: 'customers_id',
    customers_name: 'customers_name'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const Customers_restaurantScalarFieldEnum: {
    customers_id: 'customers_id',
    restaurant_id: 'restaurant_id'
  };

  export type Customers_restaurantScalarFieldEnum = (typeof Customers_restaurantScalarFieldEnum)[keyof typeof Customers_restaurantScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    restaurant_id: 'restaurant_id',
    restaurant_name: 'restaurant_name'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


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


  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customers_id?: IntFilter<"customers"> | number
    customers_name?: StringNullableFilter<"customers"> | string | null
    customers_restaurant?: Customers_restaurantListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    customers_id?: SortOrder
    customers_name?: SortOrderInput | SortOrder
    customers_restaurant?: customers_restaurantOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    customers_id?: number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customers_name?: StringNullableFilter<"customers"> | string | null
    customers_restaurant?: Customers_restaurantListRelationFilter
  }, "customers_id">

  export type customersOrderByWithAggregationInput = {
    customers_id?: SortOrder
    customers_name?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    customers_id?: IntWithAggregatesFilter<"customers"> | number
    customers_name?: StringNullableWithAggregatesFilter<"customers"> | string | null
  }

  export type customers_restaurantWhereInput = {
    AND?: customers_restaurantWhereInput | customers_restaurantWhereInput[]
    OR?: customers_restaurantWhereInput[]
    NOT?: customers_restaurantWhereInput | customers_restaurantWhereInput[]
    customers_id?: IntFilter<"customers_restaurant"> | number
    restaurant_id?: IntFilter<"customers_restaurant"> | number
    customers?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }

  export type customers_restaurantOrderByWithRelationInput = {
    customers_id?: SortOrder
    restaurant_id?: SortOrder
    customers?: customersOrderByWithRelationInput
    restaurant?: restaurantOrderByWithRelationInput
  }

  export type customers_restaurantWhereUniqueInput = Prisma.AtLeast<{
    customers_id_restaurant_id?: customers_restaurantCustomers_idRestaurant_idCompoundUniqueInput
    AND?: customers_restaurantWhereInput | customers_restaurantWhereInput[]
    OR?: customers_restaurantWhereInput[]
    NOT?: customers_restaurantWhereInput | customers_restaurantWhereInput[]
    customers_id?: IntFilter<"customers_restaurant"> | number
    restaurant_id?: IntFilter<"customers_restaurant"> | number
    customers?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }, "customers_id_restaurant_id">

  export type customers_restaurantOrderByWithAggregationInput = {
    customers_id?: SortOrder
    restaurant_id?: SortOrder
    _count?: customers_restaurantCountOrderByAggregateInput
    _avg?: customers_restaurantAvgOrderByAggregateInput
    _max?: customers_restaurantMaxOrderByAggregateInput
    _min?: customers_restaurantMinOrderByAggregateInput
    _sum?: customers_restaurantSumOrderByAggregateInput
  }

  export type customers_restaurantScalarWhereWithAggregatesInput = {
    AND?: customers_restaurantScalarWhereWithAggregatesInput | customers_restaurantScalarWhereWithAggregatesInput[]
    OR?: customers_restaurantScalarWhereWithAggregatesInput[]
    NOT?: customers_restaurantScalarWhereWithAggregatesInput | customers_restaurantScalarWhereWithAggregatesInput[]
    customers_id?: IntWithAggregatesFilter<"customers_restaurant"> | number
    restaurant_id?: IntWithAggregatesFilter<"customers_restaurant"> | number
  }

  export type restaurantWhereInput = {
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    restaurant_id?: IntFilter<"restaurant"> | number
    restaurant_name?: StringNullableFilter<"restaurant"> | string | null
    customers_restaurant?: Customers_restaurantListRelationFilter
  }

  export type restaurantOrderByWithRelationInput = {
    restaurant_id?: SortOrder
    restaurant_name?: SortOrderInput | SortOrder
    customers_restaurant?: customers_restaurantOrderByRelationAggregateInput
  }

  export type restaurantWhereUniqueInput = Prisma.AtLeast<{
    restaurant_id?: number
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    restaurant_name?: StringNullableFilter<"restaurant"> | string | null
    customers_restaurant?: Customers_restaurantListRelationFilter
  }, "restaurant_id">

  export type restaurantOrderByWithAggregationInput = {
    restaurant_id?: SortOrder
    restaurant_name?: SortOrderInput | SortOrder
    _count?: restaurantCountOrderByAggregateInput
    _avg?: restaurantAvgOrderByAggregateInput
    _max?: restaurantMaxOrderByAggregateInput
    _min?: restaurantMinOrderByAggregateInput
    _sum?: restaurantSumOrderByAggregateInput
  }

  export type restaurantScalarWhereWithAggregatesInput = {
    AND?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    OR?: restaurantScalarWhereWithAggregatesInput[]
    NOT?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    restaurant_id?: IntWithAggregatesFilter<"restaurant"> | number
    restaurant_name?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
  }

  export type customersCreateInput = {
    customers_id: number
    customers_name?: string | null
    customers_restaurant?: customers_restaurantCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    customers_id: number
    customers_name?: string | null
    customers_restaurant?: customers_restaurantUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    customers_name?: NullableStringFieldUpdateOperationsInput | string | null
    customers_restaurant?: customers_restaurantUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    customers_name?: NullableStringFieldUpdateOperationsInput | string | null
    customers_restaurant?: customers_restaurantUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    customers_id: number
    customers_name?: string | null
  }

  export type customersUpdateManyMutationInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    customers_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    customers_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customers_restaurantCreateInput = {
    customers: customersCreateNestedOneWithoutCustomers_restaurantInput
    restaurant: restaurantCreateNestedOneWithoutCustomers_restaurantInput
  }

  export type customers_restaurantUncheckedCreateInput = {
    customers_id: number
    restaurant_id: number
  }

  export type customers_restaurantUpdateInput = {
    customers?: customersUpdateOneRequiredWithoutCustomers_restaurantNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutCustomers_restaurantNestedInput
  }

  export type customers_restaurantUncheckedUpdateInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
  }

  export type customers_restaurantCreateManyInput = {
    customers_id: number
    restaurant_id: number
  }

  export type customers_restaurantUpdateManyMutationInput = {

  }

  export type customers_restaurantUncheckedUpdateManyInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
  }

  export type restaurantCreateInput = {
    restaurant_id: number
    restaurant_name?: string | null
    customers_restaurant?: customers_restaurantCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateInput = {
    restaurant_id: number
    restaurant_name?: string | null
    customers_restaurant?: customers_restaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUpdateInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_name?: NullableStringFieldUpdateOperationsInput | string | null
    customers_restaurant?: customers_restaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_name?: NullableStringFieldUpdateOperationsInput | string | null
    customers_restaurant?: customers_restaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantCreateManyInput = {
    restaurant_id: number
    restaurant_name?: string | null
  }

  export type restaurantUpdateManyMutationInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantUncheckedUpdateManyInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_name?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type Customers_restaurantListRelationFilter = {
    every?: customers_restaurantWhereInput
    some?: customers_restaurantWhereInput
    none?: customers_restaurantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type customers_restaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    customers_id?: SortOrder
    customers_name?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    customers_id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    customers_id?: SortOrder
    customers_name?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    customers_id?: SortOrder
    customers_name?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    customers_id?: SortOrder
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

  export type CustomersScalarRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type RestaurantScalarRelationFilter = {
    is?: restaurantWhereInput
    isNot?: restaurantWhereInput
  }

  export type customers_restaurantCustomers_idRestaurant_idCompoundUniqueInput = {
    customers_id: number
    restaurant_id: number
  }

  export type customers_restaurantCountOrderByAggregateInput = {
    customers_id?: SortOrder
    restaurant_id?: SortOrder
  }

  export type customers_restaurantAvgOrderByAggregateInput = {
    customers_id?: SortOrder
    restaurant_id?: SortOrder
  }

  export type customers_restaurantMaxOrderByAggregateInput = {
    customers_id?: SortOrder
    restaurant_id?: SortOrder
  }

  export type customers_restaurantMinOrderByAggregateInput = {
    customers_id?: SortOrder
    restaurant_id?: SortOrder
  }

  export type customers_restaurantSumOrderByAggregateInput = {
    customers_id?: SortOrder
    restaurant_id?: SortOrder
  }

  export type restaurantCountOrderByAggregateInput = {
    restaurant_id?: SortOrder
    restaurant_name?: SortOrder
  }

  export type restaurantAvgOrderByAggregateInput = {
    restaurant_id?: SortOrder
  }

  export type restaurantMaxOrderByAggregateInput = {
    restaurant_id?: SortOrder
    restaurant_name?: SortOrder
  }

  export type restaurantMinOrderByAggregateInput = {
    restaurant_id?: SortOrder
    restaurant_name?: SortOrder
  }

  export type restaurantSumOrderByAggregateInput = {
    restaurant_id?: SortOrder
  }

  export type customers_restaurantCreateNestedManyWithoutCustomersInput = {
    create?: XOR<customers_restaurantCreateWithoutCustomersInput, customers_restaurantUncheckedCreateWithoutCustomersInput> | customers_restaurantCreateWithoutCustomersInput[] | customers_restaurantUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutCustomersInput | customers_restaurantCreateOrConnectWithoutCustomersInput[]
    createMany?: customers_restaurantCreateManyCustomersInputEnvelope
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
  }

  export type customers_restaurantUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<customers_restaurantCreateWithoutCustomersInput, customers_restaurantUncheckedCreateWithoutCustomersInput> | customers_restaurantCreateWithoutCustomersInput[] | customers_restaurantUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutCustomersInput | customers_restaurantCreateOrConnectWithoutCustomersInput[]
    createMany?: customers_restaurantCreateManyCustomersInputEnvelope
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type customers_restaurantUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<customers_restaurantCreateWithoutCustomersInput, customers_restaurantUncheckedCreateWithoutCustomersInput> | customers_restaurantCreateWithoutCustomersInput[] | customers_restaurantUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutCustomersInput | customers_restaurantCreateOrConnectWithoutCustomersInput[]
    upsert?: customers_restaurantUpsertWithWhereUniqueWithoutCustomersInput | customers_restaurantUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: customers_restaurantCreateManyCustomersInputEnvelope
    set?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    disconnect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    delete?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    update?: customers_restaurantUpdateWithWhereUniqueWithoutCustomersInput | customers_restaurantUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: customers_restaurantUpdateManyWithWhereWithoutCustomersInput | customers_restaurantUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: customers_restaurantScalarWhereInput | customers_restaurantScalarWhereInput[]
  }

  export type customers_restaurantUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<customers_restaurantCreateWithoutCustomersInput, customers_restaurantUncheckedCreateWithoutCustomersInput> | customers_restaurantCreateWithoutCustomersInput[] | customers_restaurantUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutCustomersInput | customers_restaurantCreateOrConnectWithoutCustomersInput[]
    upsert?: customers_restaurantUpsertWithWhereUniqueWithoutCustomersInput | customers_restaurantUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: customers_restaurantCreateManyCustomersInputEnvelope
    set?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    disconnect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    delete?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    update?: customers_restaurantUpdateWithWhereUniqueWithoutCustomersInput | customers_restaurantUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: customers_restaurantUpdateManyWithWhereWithoutCustomersInput | customers_restaurantUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: customers_restaurantScalarWhereInput | customers_restaurantScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutCustomers_restaurantInput = {
    create?: XOR<customersCreateWithoutCustomers_restaurantInput, customersUncheckedCreateWithoutCustomers_restaurantInput>
    connectOrCreate?: customersCreateOrConnectWithoutCustomers_restaurantInput
    connect?: customersWhereUniqueInput
  }

  export type restaurantCreateNestedOneWithoutCustomers_restaurantInput = {
    create?: XOR<restaurantCreateWithoutCustomers_restaurantInput, restaurantUncheckedCreateWithoutCustomers_restaurantInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutCustomers_restaurantInput
    connect?: restaurantWhereUniqueInput
  }

  export type customersUpdateOneRequiredWithoutCustomers_restaurantNestedInput = {
    create?: XOR<customersCreateWithoutCustomers_restaurantInput, customersUncheckedCreateWithoutCustomers_restaurantInput>
    connectOrCreate?: customersCreateOrConnectWithoutCustomers_restaurantInput
    upsert?: customersUpsertWithoutCustomers_restaurantInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutCustomers_restaurantInput, customersUpdateWithoutCustomers_restaurantInput>, customersUncheckedUpdateWithoutCustomers_restaurantInput>
  }

  export type restaurantUpdateOneRequiredWithoutCustomers_restaurantNestedInput = {
    create?: XOR<restaurantCreateWithoutCustomers_restaurantInput, restaurantUncheckedCreateWithoutCustomers_restaurantInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutCustomers_restaurantInput
    upsert?: restaurantUpsertWithoutCustomers_restaurantInput
    connect?: restaurantWhereUniqueInput
    update?: XOR<XOR<restaurantUpdateToOneWithWhereWithoutCustomers_restaurantInput, restaurantUpdateWithoutCustomers_restaurantInput>, restaurantUncheckedUpdateWithoutCustomers_restaurantInput>
  }

  export type customers_restaurantCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<customers_restaurantCreateWithoutRestaurantInput, customers_restaurantUncheckedCreateWithoutRestaurantInput> | customers_restaurantCreateWithoutRestaurantInput[] | customers_restaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutRestaurantInput | customers_restaurantCreateOrConnectWithoutRestaurantInput[]
    createMany?: customers_restaurantCreateManyRestaurantInputEnvelope
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
  }

  export type customers_restaurantUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<customers_restaurantCreateWithoutRestaurantInput, customers_restaurantUncheckedCreateWithoutRestaurantInput> | customers_restaurantCreateWithoutRestaurantInput[] | customers_restaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutRestaurantInput | customers_restaurantCreateOrConnectWithoutRestaurantInput[]
    createMany?: customers_restaurantCreateManyRestaurantInputEnvelope
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
  }

  export type customers_restaurantUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<customers_restaurantCreateWithoutRestaurantInput, customers_restaurantUncheckedCreateWithoutRestaurantInput> | customers_restaurantCreateWithoutRestaurantInput[] | customers_restaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutRestaurantInput | customers_restaurantCreateOrConnectWithoutRestaurantInput[]
    upsert?: customers_restaurantUpsertWithWhereUniqueWithoutRestaurantInput | customers_restaurantUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: customers_restaurantCreateManyRestaurantInputEnvelope
    set?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    disconnect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    delete?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    update?: customers_restaurantUpdateWithWhereUniqueWithoutRestaurantInput | customers_restaurantUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: customers_restaurantUpdateManyWithWhereWithoutRestaurantInput | customers_restaurantUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: customers_restaurantScalarWhereInput | customers_restaurantScalarWhereInput[]
  }

  export type customers_restaurantUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<customers_restaurantCreateWithoutRestaurantInput, customers_restaurantUncheckedCreateWithoutRestaurantInput> | customers_restaurantCreateWithoutRestaurantInput[] | customers_restaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: customers_restaurantCreateOrConnectWithoutRestaurantInput | customers_restaurantCreateOrConnectWithoutRestaurantInput[]
    upsert?: customers_restaurantUpsertWithWhereUniqueWithoutRestaurantInput | customers_restaurantUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: customers_restaurantCreateManyRestaurantInputEnvelope
    set?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    disconnect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    delete?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    connect?: customers_restaurantWhereUniqueInput | customers_restaurantWhereUniqueInput[]
    update?: customers_restaurantUpdateWithWhereUniqueWithoutRestaurantInput | customers_restaurantUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: customers_restaurantUpdateManyWithWhereWithoutRestaurantInput | customers_restaurantUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: customers_restaurantScalarWhereInput | customers_restaurantScalarWhereInput[]
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

  export type customers_restaurantCreateWithoutCustomersInput = {
    restaurant: restaurantCreateNestedOneWithoutCustomers_restaurantInput
  }

  export type customers_restaurantUncheckedCreateWithoutCustomersInput = {
    restaurant_id: number
  }

  export type customers_restaurantCreateOrConnectWithoutCustomersInput = {
    where: customers_restaurantWhereUniqueInput
    create: XOR<customers_restaurantCreateWithoutCustomersInput, customers_restaurantUncheckedCreateWithoutCustomersInput>
  }

  export type customers_restaurantCreateManyCustomersInputEnvelope = {
    data: customers_restaurantCreateManyCustomersInput | customers_restaurantCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type customers_restaurantUpsertWithWhereUniqueWithoutCustomersInput = {
    where: customers_restaurantWhereUniqueInput
    update: XOR<customers_restaurantUpdateWithoutCustomersInput, customers_restaurantUncheckedUpdateWithoutCustomersInput>
    create: XOR<customers_restaurantCreateWithoutCustomersInput, customers_restaurantUncheckedCreateWithoutCustomersInput>
  }

  export type customers_restaurantUpdateWithWhereUniqueWithoutCustomersInput = {
    where: customers_restaurantWhereUniqueInput
    data: XOR<customers_restaurantUpdateWithoutCustomersInput, customers_restaurantUncheckedUpdateWithoutCustomersInput>
  }

  export type customers_restaurantUpdateManyWithWhereWithoutCustomersInput = {
    where: customers_restaurantScalarWhereInput
    data: XOR<customers_restaurantUpdateManyMutationInput, customers_restaurantUncheckedUpdateManyWithoutCustomersInput>
  }

  export type customers_restaurantScalarWhereInput = {
    AND?: customers_restaurantScalarWhereInput | customers_restaurantScalarWhereInput[]
    OR?: customers_restaurantScalarWhereInput[]
    NOT?: customers_restaurantScalarWhereInput | customers_restaurantScalarWhereInput[]
    customers_id?: IntFilter<"customers_restaurant"> | number
    restaurant_id?: IntFilter<"customers_restaurant"> | number
  }

  export type customersCreateWithoutCustomers_restaurantInput = {
    customers_id: number
    customers_name?: string | null
  }

  export type customersUncheckedCreateWithoutCustomers_restaurantInput = {
    customers_id: number
    customers_name?: string | null
  }

  export type customersCreateOrConnectWithoutCustomers_restaurantInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutCustomers_restaurantInput, customersUncheckedCreateWithoutCustomers_restaurantInput>
  }

  export type restaurantCreateWithoutCustomers_restaurantInput = {
    restaurant_id: number
    restaurant_name?: string | null
  }

  export type restaurantUncheckedCreateWithoutCustomers_restaurantInput = {
    restaurant_id: number
    restaurant_name?: string | null
  }

  export type restaurantCreateOrConnectWithoutCustomers_restaurantInput = {
    where: restaurantWhereUniqueInput
    create: XOR<restaurantCreateWithoutCustomers_restaurantInput, restaurantUncheckedCreateWithoutCustomers_restaurantInput>
  }

  export type customersUpsertWithoutCustomers_restaurantInput = {
    update: XOR<customersUpdateWithoutCustomers_restaurantInput, customersUncheckedUpdateWithoutCustomers_restaurantInput>
    create: XOR<customersCreateWithoutCustomers_restaurantInput, customersUncheckedCreateWithoutCustomers_restaurantInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutCustomers_restaurantInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutCustomers_restaurantInput, customersUncheckedUpdateWithoutCustomers_restaurantInput>
  }

  export type customersUpdateWithoutCustomers_restaurantInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    customers_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateWithoutCustomers_restaurantInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
    customers_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantUpsertWithoutCustomers_restaurantInput = {
    update: XOR<restaurantUpdateWithoutCustomers_restaurantInput, restaurantUncheckedUpdateWithoutCustomers_restaurantInput>
    create: XOR<restaurantCreateWithoutCustomers_restaurantInput, restaurantUncheckedCreateWithoutCustomers_restaurantInput>
    where?: restaurantWhereInput
  }

  export type restaurantUpdateToOneWithWhereWithoutCustomers_restaurantInput = {
    where?: restaurantWhereInput
    data: XOR<restaurantUpdateWithoutCustomers_restaurantInput, restaurantUncheckedUpdateWithoutCustomers_restaurantInput>
  }

  export type restaurantUpdateWithoutCustomers_restaurantInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantUncheckedUpdateWithoutCustomers_restaurantInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customers_restaurantCreateWithoutRestaurantInput = {
    customers: customersCreateNestedOneWithoutCustomers_restaurantInput
  }

  export type customers_restaurantUncheckedCreateWithoutRestaurantInput = {
    customers_id: number
  }

  export type customers_restaurantCreateOrConnectWithoutRestaurantInput = {
    where: customers_restaurantWhereUniqueInput
    create: XOR<customers_restaurantCreateWithoutRestaurantInput, customers_restaurantUncheckedCreateWithoutRestaurantInput>
  }

  export type customers_restaurantCreateManyRestaurantInputEnvelope = {
    data: customers_restaurantCreateManyRestaurantInput | customers_restaurantCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type customers_restaurantUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: customers_restaurantWhereUniqueInput
    update: XOR<customers_restaurantUpdateWithoutRestaurantInput, customers_restaurantUncheckedUpdateWithoutRestaurantInput>
    create: XOR<customers_restaurantCreateWithoutRestaurantInput, customers_restaurantUncheckedCreateWithoutRestaurantInput>
  }

  export type customers_restaurantUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: customers_restaurantWhereUniqueInput
    data: XOR<customers_restaurantUpdateWithoutRestaurantInput, customers_restaurantUncheckedUpdateWithoutRestaurantInput>
  }

  export type customers_restaurantUpdateManyWithWhereWithoutRestaurantInput = {
    where: customers_restaurantScalarWhereInput
    data: XOR<customers_restaurantUpdateManyMutationInput, customers_restaurantUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type customers_restaurantCreateManyCustomersInput = {
    restaurant_id: number
  }

  export type customers_restaurantUpdateWithoutCustomersInput = {
    restaurant?: restaurantUpdateOneRequiredWithoutCustomers_restaurantNestedInput
  }

  export type customers_restaurantUncheckedUpdateWithoutCustomersInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
  }

  export type customers_restaurantUncheckedUpdateManyWithoutCustomersInput = {
    restaurant_id?: IntFieldUpdateOperationsInput | number
  }

  export type customers_restaurantCreateManyRestaurantInput = {
    customers_id: number
  }

  export type customers_restaurantUpdateWithoutRestaurantInput = {
    customers?: customersUpdateOneRequiredWithoutCustomers_restaurantNestedInput
  }

  export type customers_restaurantUncheckedUpdateWithoutRestaurantInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
  }

  export type customers_restaurantUncheckedUpdateManyWithoutRestaurantInput = {
    customers_id?: IntFieldUpdateOperationsInput | number
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