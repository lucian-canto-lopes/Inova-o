
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
 * Model Dimensao
 * 
 */
export type Dimensao = $Result.DefaultSelection<Prisma.$DimensaoPayload>
/**
 * Model Dimensao_Dimensao
 * 
 */
export type Dimensao_Dimensao = $Result.DefaultSelection<Prisma.$Dimensao_DimensaoPayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Motor
 * 
 */
export type Motor = $Result.DefaultSelection<Prisma.$MotorPayload>
/**
 * Model Negocio
 * 
 */
export type Negocio = $Result.DefaultSelection<Prisma.$NegocioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dimensaos
 * const dimensaos = await prisma.dimensao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Dimensaos
   * const dimensaos = await prisma.dimensao.findMany()
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
   * `prisma.dimensao`: Exposes CRUD operations for the **Dimensao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dimensaos
    * const dimensaos = await prisma.dimensao.findMany()
    * ```
    */
  get dimensao(): Prisma.DimensaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dimensao_Dimensao`: Exposes CRUD operations for the **Dimensao_Dimensao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dimensao_Dimensaos
    * const dimensao_Dimensaos = await prisma.dimensao_Dimensao.findMany()
    * ```
    */
  get dimensao_Dimensao(): Prisma.Dimensao_DimensaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motor`: Exposes CRUD operations for the **Motor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motors
    * const motors = await prisma.motor.findMany()
    * ```
    */
  get motor(): Prisma.MotorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.negocio`: Exposes CRUD operations for the **Negocio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Negocios
    * const negocios = await prisma.negocio.findMany()
    * ```
    */
  get negocio(): Prisma.NegocioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Dimensao: 'Dimensao',
    Dimensao_Dimensao: 'Dimensao_Dimensao',
    Disciplina: 'Disciplina',
    Evento: 'Evento',
    Motor: 'Motor',
    Negocio: 'Negocio'
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
      modelProps: "dimensao" | "dimensao_Dimensao" | "disciplina" | "evento" | "motor" | "negocio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dimensao: {
        payload: Prisma.$DimensaoPayload<ExtArgs>
        fields: Prisma.DimensaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DimensaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DimensaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>
          }
          findFirst: {
            args: Prisma.DimensaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DimensaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>
          }
          findMany: {
            args: Prisma.DimensaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>[]
          }
          create: {
            args: Prisma.DimensaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>
          }
          createMany: {
            args: Prisma.DimensaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DimensaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>[]
          }
          delete: {
            args: Prisma.DimensaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>
          }
          update: {
            args: Prisma.DimensaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>
          }
          deleteMany: {
            args: Prisma.DimensaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DimensaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DimensaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>[]
          }
          upsert: {
            args: Prisma.DimensaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DimensaoPayload>
          }
          aggregate: {
            args: Prisma.DimensaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDimensao>
          }
          groupBy: {
            args: Prisma.DimensaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DimensaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DimensaoCountArgs<ExtArgs>
            result: $Utils.Optional<DimensaoCountAggregateOutputType> | number
          }
        }
      }
      Dimensao_Dimensao: {
        payload: Prisma.$Dimensao_DimensaoPayload<ExtArgs>
        fields: Prisma.Dimensao_DimensaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Dimensao_DimensaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Dimensao_DimensaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>
          }
          findFirst: {
            args: Prisma.Dimensao_DimensaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Dimensao_DimensaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>
          }
          findMany: {
            args: Prisma.Dimensao_DimensaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>[]
          }
          create: {
            args: Prisma.Dimensao_DimensaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>
          }
          createMany: {
            args: Prisma.Dimensao_DimensaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Dimensao_DimensaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>[]
          }
          delete: {
            args: Prisma.Dimensao_DimensaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>
          }
          update: {
            args: Prisma.Dimensao_DimensaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>
          }
          deleteMany: {
            args: Prisma.Dimensao_DimensaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Dimensao_DimensaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Dimensao_DimensaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>[]
          }
          upsert: {
            args: Prisma.Dimensao_DimensaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dimensao_DimensaoPayload>
          }
          aggregate: {
            args: Prisma.Dimensao_DimensaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDimensao_Dimensao>
          }
          groupBy: {
            args: Prisma.Dimensao_DimensaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dimensao_DimensaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Dimensao_DimensaoCountArgs<ExtArgs>
            result: $Utils.Optional<Dimensao_DimensaoCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Motor: {
        payload: Prisma.$MotorPayload<ExtArgs>
        fields: Prisma.MotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          findFirst: {
            args: Prisma.MotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          findMany: {
            args: Prisma.MotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          create: {
            args: Prisma.MotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          createMany: {
            args: Prisma.MotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          delete: {
            args: Prisma.MotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          update: {
            args: Prisma.MotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          deleteMany: {
            args: Prisma.MotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          upsert: {
            args: Prisma.MotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          aggregate: {
            args: Prisma.MotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotor>
          }
          groupBy: {
            args: Prisma.MotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotorCountArgs<ExtArgs>
            result: $Utils.Optional<MotorCountAggregateOutputType> | number
          }
        }
      }
      Negocio: {
        payload: Prisma.$NegocioPayload<ExtArgs>
        fields: Prisma.NegocioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NegocioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NegocioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          findFirst: {
            args: Prisma.NegocioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NegocioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          findMany: {
            args: Prisma.NegocioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>[]
          }
          create: {
            args: Prisma.NegocioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          createMany: {
            args: Prisma.NegocioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NegocioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>[]
          }
          delete: {
            args: Prisma.NegocioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          update: {
            args: Prisma.NegocioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          deleteMany: {
            args: Prisma.NegocioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NegocioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NegocioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>[]
          }
          upsert: {
            args: Prisma.NegocioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          aggregate: {
            args: Prisma.NegocioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNegocio>
          }
          groupBy: {
            args: Prisma.NegocioGroupByArgs<ExtArgs>
            result: $Utils.Optional<NegocioGroupByOutputType>[]
          }
          count: {
            args: Prisma.NegocioCountArgs<ExtArgs>
            result: $Utils.Optional<NegocioCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    dimensao?: DimensaoOmit
    dimensao_Dimensao?: Dimensao_DimensaoOmit
    disciplina?: DisciplinaOmit
    evento?: EventoOmit
    motor?: MotorOmit
    negocio?: NegocioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DimensaoCountOutputType
   */

  export type DimensaoCountOutputType = {
    Dimensao_DimensaoA: number
    Dimensao_DimensaoB: number
  }

  export type DimensaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dimensao_DimensaoA?: boolean | DimensaoCountOutputTypeCountDimensao_DimensaoAArgs
    Dimensao_DimensaoB?: boolean | DimensaoCountOutputTypeCountDimensao_DimensaoBArgs
  }

  // Custom InputTypes
  /**
   * DimensaoCountOutputType without action
   */
  export type DimensaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DimensaoCountOutputType
     */
    select?: DimensaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DimensaoCountOutputType without action
   */
  export type DimensaoCountOutputTypeCountDimensao_DimensaoAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dimensao_DimensaoWhereInput
  }

  /**
   * DimensaoCountOutputType without action
   */
  export type DimensaoCountOutputTypeCountDimensao_DimensaoBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dimensao_DimensaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dimensao
   */

  export type AggregateDimensao = {
    _count: DimensaoCountAggregateOutputType | null
    _avg: DimensaoAvgAggregateOutputType | null
    _sum: DimensaoSumAggregateOutputType | null
    _min: DimensaoMinAggregateOutputType | null
    _max: DimensaoMaxAggregateOutputType | null
  }

  export type DimensaoAvgAggregateOutputType = {
    id: number | null
  }

  export type DimensaoSumAggregateOutputType = {
    id: number | null
  }

  export type DimensaoMinAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type DimensaoMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type DimensaoCountAggregateOutputType = {
    id: number
    tipo: number
    _all: number
  }


  export type DimensaoAvgAggregateInputType = {
    id?: true
  }

  export type DimensaoSumAggregateInputType = {
    id?: true
  }

  export type DimensaoMinAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type DimensaoMaxAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type DimensaoCountAggregateInputType = {
    id?: true
    tipo?: true
    _all?: true
  }

  export type DimensaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dimensao to aggregate.
     */
    where?: DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensaos to fetch.
     */
    orderBy?: DimensaoOrderByWithRelationInput | DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dimensaos
    **/
    _count?: true | DimensaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DimensaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DimensaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DimensaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DimensaoMaxAggregateInputType
  }

  export type GetDimensaoAggregateType<T extends DimensaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDimensao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDimensao[P]>
      : GetScalarType<T[P], AggregateDimensao[P]>
  }




  export type DimensaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DimensaoWhereInput
    orderBy?: DimensaoOrderByWithAggregationInput | DimensaoOrderByWithAggregationInput[]
    by: DimensaoScalarFieldEnum[] | DimensaoScalarFieldEnum
    having?: DimensaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DimensaoCountAggregateInputType | true
    _avg?: DimensaoAvgAggregateInputType
    _sum?: DimensaoSumAggregateInputType
    _min?: DimensaoMinAggregateInputType
    _max?: DimensaoMaxAggregateInputType
  }

  export type DimensaoGroupByOutputType = {
    id: number
    tipo: string
    _count: DimensaoCountAggregateOutputType | null
    _avg: DimensaoAvgAggregateOutputType | null
    _sum: DimensaoSumAggregateOutputType | null
    _min: DimensaoMinAggregateOutputType | null
    _max: DimensaoMaxAggregateOutputType | null
  }

  type GetDimensaoGroupByPayload<T extends DimensaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DimensaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DimensaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DimensaoGroupByOutputType[P]>
            : GetScalarType<T[P], DimensaoGroupByOutputType[P]>
        }
      >
    >


  export type DimensaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    Dimensao_DimensaoA?: boolean | Dimensao$Dimensao_DimensaoAArgs<ExtArgs>
    Dimensao_DimensaoB?: boolean | Dimensao$Dimensao_DimensaoBArgs<ExtArgs>
    Disciplina?: boolean | Dimensao$DisciplinaArgs<ExtArgs>
    Evento?: boolean | Dimensao$EventoArgs<ExtArgs>
    Motor?: boolean | Dimensao$MotorArgs<ExtArgs>
    Negocio?: boolean | Dimensao$NegocioArgs<ExtArgs>
    _count?: boolean | DimensaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dimensao"]>

  export type DimensaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["dimensao"]>

  export type DimensaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["dimensao"]>

  export type DimensaoSelectScalar = {
    id?: boolean
    tipo?: boolean
  }

  export type DimensaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo", ExtArgs["result"]["dimensao"]>
  export type DimensaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dimensao_DimensaoA?: boolean | Dimensao$Dimensao_DimensaoAArgs<ExtArgs>
    Dimensao_DimensaoB?: boolean | Dimensao$Dimensao_DimensaoBArgs<ExtArgs>
    Disciplina?: boolean | Dimensao$DisciplinaArgs<ExtArgs>
    Evento?: boolean | Dimensao$EventoArgs<ExtArgs>
    Motor?: boolean | Dimensao$MotorArgs<ExtArgs>
    Negocio?: boolean | Dimensao$NegocioArgs<ExtArgs>
    _count?: boolean | DimensaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DimensaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DimensaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DimensaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dimensao"
    objects: {
      Dimensao_DimensaoA: Prisma.$Dimensao_DimensaoPayload<ExtArgs>[]
      Dimensao_DimensaoB: Prisma.$Dimensao_DimensaoPayload<ExtArgs>[]
      Disciplina: Prisma.$DisciplinaPayload<ExtArgs> | null
      Evento: Prisma.$EventoPayload<ExtArgs> | null
      Motor: Prisma.$MotorPayload<ExtArgs> | null
      Negocio: Prisma.$NegocioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
    }, ExtArgs["result"]["dimensao"]>
    composites: {}
  }

  type DimensaoGetPayload<S extends boolean | null | undefined | DimensaoDefaultArgs> = $Result.GetResult<Prisma.$DimensaoPayload, S>

  type DimensaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DimensaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DimensaoCountAggregateInputType | true
    }

  export interface DimensaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dimensao'], meta: { name: 'Dimensao' } }
    /**
     * Find zero or one Dimensao that matches the filter.
     * @param {DimensaoFindUniqueArgs} args - Arguments to find a Dimensao
     * @example
     * // Get one Dimensao
     * const dimensao = await prisma.dimensao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DimensaoFindUniqueArgs>(args: SelectSubset<T, DimensaoFindUniqueArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dimensao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DimensaoFindUniqueOrThrowArgs} args - Arguments to find a Dimensao
     * @example
     * // Get one Dimensao
     * const dimensao = await prisma.dimensao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DimensaoFindUniqueOrThrowArgs>(args: SelectSubset<T, DimensaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dimensao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoFindFirstArgs} args - Arguments to find a Dimensao
     * @example
     * // Get one Dimensao
     * const dimensao = await prisma.dimensao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DimensaoFindFirstArgs>(args?: SelectSubset<T, DimensaoFindFirstArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dimensao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoFindFirstOrThrowArgs} args - Arguments to find a Dimensao
     * @example
     * // Get one Dimensao
     * const dimensao = await prisma.dimensao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DimensaoFindFirstOrThrowArgs>(args?: SelectSubset<T, DimensaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dimensaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dimensaos
     * const dimensaos = await prisma.dimensao.findMany()
     * 
     * // Get first 10 Dimensaos
     * const dimensaos = await prisma.dimensao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dimensaoWithIdOnly = await prisma.dimensao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DimensaoFindManyArgs>(args?: SelectSubset<T, DimensaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dimensao.
     * @param {DimensaoCreateArgs} args - Arguments to create a Dimensao.
     * @example
     * // Create one Dimensao
     * const Dimensao = await prisma.dimensao.create({
     *   data: {
     *     // ... data to create a Dimensao
     *   }
     * })
     * 
     */
    create<T extends DimensaoCreateArgs>(args: SelectSubset<T, DimensaoCreateArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dimensaos.
     * @param {DimensaoCreateManyArgs} args - Arguments to create many Dimensaos.
     * @example
     * // Create many Dimensaos
     * const dimensao = await prisma.dimensao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DimensaoCreateManyArgs>(args?: SelectSubset<T, DimensaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dimensaos and returns the data saved in the database.
     * @param {DimensaoCreateManyAndReturnArgs} args - Arguments to create many Dimensaos.
     * @example
     * // Create many Dimensaos
     * const dimensao = await prisma.dimensao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dimensaos and only return the `id`
     * const dimensaoWithIdOnly = await prisma.dimensao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DimensaoCreateManyAndReturnArgs>(args?: SelectSubset<T, DimensaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dimensao.
     * @param {DimensaoDeleteArgs} args - Arguments to delete one Dimensao.
     * @example
     * // Delete one Dimensao
     * const Dimensao = await prisma.dimensao.delete({
     *   where: {
     *     // ... filter to delete one Dimensao
     *   }
     * })
     * 
     */
    delete<T extends DimensaoDeleteArgs>(args: SelectSubset<T, DimensaoDeleteArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dimensao.
     * @param {DimensaoUpdateArgs} args - Arguments to update one Dimensao.
     * @example
     * // Update one Dimensao
     * const dimensao = await prisma.dimensao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DimensaoUpdateArgs>(args: SelectSubset<T, DimensaoUpdateArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dimensaos.
     * @param {DimensaoDeleteManyArgs} args - Arguments to filter Dimensaos to delete.
     * @example
     * // Delete a few Dimensaos
     * const { count } = await prisma.dimensao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DimensaoDeleteManyArgs>(args?: SelectSubset<T, DimensaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dimensaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dimensaos
     * const dimensao = await prisma.dimensao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DimensaoUpdateManyArgs>(args: SelectSubset<T, DimensaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dimensaos and returns the data updated in the database.
     * @param {DimensaoUpdateManyAndReturnArgs} args - Arguments to update many Dimensaos.
     * @example
     * // Update many Dimensaos
     * const dimensao = await prisma.dimensao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dimensaos and only return the `id`
     * const dimensaoWithIdOnly = await prisma.dimensao.updateManyAndReturn({
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
    updateManyAndReturn<T extends DimensaoUpdateManyAndReturnArgs>(args: SelectSubset<T, DimensaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dimensao.
     * @param {DimensaoUpsertArgs} args - Arguments to update or create a Dimensao.
     * @example
     * // Update or create a Dimensao
     * const dimensao = await prisma.dimensao.upsert({
     *   create: {
     *     // ... data to create a Dimensao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dimensao we want to update
     *   }
     * })
     */
    upsert<T extends DimensaoUpsertArgs>(args: SelectSubset<T, DimensaoUpsertArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dimensaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoCountArgs} args - Arguments to filter Dimensaos to count.
     * @example
     * // Count the number of Dimensaos
     * const count = await prisma.dimensao.count({
     *   where: {
     *     // ... the filter for the Dimensaos we want to count
     *   }
     * })
    **/
    count<T extends DimensaoCountArgs>(
      args?: Subset<T, DimensaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DimensaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dimensao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DimensaoAggregateArgs>(args: Subset<T, DimensaoAggregateArgs>): Prisma.PrismaPromise<GetDimensaoAggregateType<T>>

    /**
     * Group by Dimensao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoGroupByArgs} args - Group by arguments.
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
      T extends DimensaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DimensaoGroupByArgs['orderBy'] }
        : { orderBy?: DimensaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DimensaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDimensaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dimensao model
   */
  readonly fields: DimensaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dimensao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DimensaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dimensao_DimensaoA<T extends Dimensao$Dimensao_DimensaoAArgs<ExtArgs> = {}>(args?: Subset<T, Dimensao$Dimensao_DimensaoAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Dimensao_DimensaoB<T extends Dimensao$Dimensao_DimensaoBArgs<ExtArgs> = {}>(args?: Subset<T, Dimensao$Dimensao_DimensaoBArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Disciplina<T extends Dimensao$DisciplinaArgs<ExtArgs> = {}>(args?: Subset<T, Dimensao$DisciplinaArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Evento<T extends Dimensao$EventoArgs<ExtArgs> = {}>(args?: Subset<T, Dimensao$EventoArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Motor<T extends Dimensao$MotorArgs<ExtArgs> = {}>(args?: Subset<T, Dimensao$MotorArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Negocio<T extends Dimensao$NegocioArgs<ExtArgs> = {}>(args?: Subset<T, Dimensao$NegocioArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dimensao model
   */
  interface DimensaoFieldRefs {
    readonly id: FieldRef<"Dimensao", 'Int'>
    readonly tipo: FieldRef<"Dimensao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dimensao findUnique
   */
  export type DimensaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao to fetch.
     */
    where: DimensaoWhereUniqueInput
  }

  /**
   * Dimensao findUniqueOrThrow
   */
  export type DimensaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao to fetch.
     */
    where: DimensaoWhereUniqueInput
  }

  /**
   * Dimensao findFirst
   */
  export type DimensaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao to fetch.
     */
    where?: DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensaos to fetch.
     */
    orderBy?: DimensaoOrderByWithRelationInput | DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dimensaos.
     */
    cursor?: DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dimensaos.
     */
    distinct?: DimensaoScalarFieldEnum | DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao findFirstOrThrow
   */
  export type DimensaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao to fetch.
     */
    where?: DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensaos to fetch.
     */
    orderBy?: DimensaoOrderByWithRelationInput | DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dimensaos.
     */
    cursor?: DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dimensaos.
     */
    distinct?: DimensaoScalarFieldEnum | DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao findMany
   */
  export type DimensaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensaos to fetch.
     */
    where?: DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensaos to fetch.
     */
    orderBy?: DimensaoOrderByWithRelationInput | DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dimensaos.
     */
    cursor?: DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensaos.
     */
    skip?: number
    distinct?: DimensaoScalarFieldEnum | DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao create
   */
  export type DimensaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dimensao.
     */
    data: XOR<DimensaoCreateInput, DimensaoUncheckedCreateInput>
  }

  /**
   * Dimensao createMany
   */
  export type DimensaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dimensaos.
     */
    data: DimensaoCreateManyInput | DimensaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dimensao createManyAndReturn
   */
  export type DimensaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * The data used to create many Dimensaos.
     */
    data: DimensaoCreateManyInput | DimensaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dimensao update
   */
  export type DimensaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dimensao.
     */
    data: XOR<DimensaoUpdateInput, DimensaoUncheckedUpdateInput>
    /**
     * Choose, which Dimensao to update.
     */
    where: DimensaoWhereUniqueInput
  }

  /**
   * Dimensao updateMany
   */
  export type DimensaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dimensaos.
     */
    data: XOR<DimensaoUpdateManyMutationInput, DimensaoUncheckedUpdateManyInput>
    /**
     * Filter which Dimensaos to update
     */
    where?: DimensaoWhereInput
    /**
     * Limit how many Dimensaos to update.
     */
    limit?: number
  }

  /**
   * Dimensao updateManyAndReturn
   */
  export type DimensaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * The data used to update Dimensaos.
     */
    data: XOR<DimensaoUpdateManyMutationInput, DimensaoUncheckedUpdateManyInput>
    /**
     * Filter which Dimensaos to update
     */
    where?: DimensaoWhereInput
    /**
     * Limit how many Dimensaos to update.
     */
    limit?: number
  }

  /**
   * Dimensao upsert
   */
  export type DimensaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dimensao to update in case it exists.
     */
    where: DimensaoWhereUniqueInput
    /**
     * In case the Dimensao found by the `where` argument doesn't exist, create a new Dimensao with this data.
     */
    create: XOR<DimensaoCreateInput, DimensaoUncheckedCreateInput>
    /**
     * In case the Dimensao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DimensaoUpdateInput, DimensaoUncheckedUpdateInput>
  }

  /**
   * Dimensao delete
   */
  export type DimensaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
    /**
     * Filter which Dimensao to delete.
     */
    where: DimensaoWhereUniqueInput
  }

  /**
   * Dimensao deleteMany
   */
  export type DimensaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dimensaos to delete
     */
    where?: DimensaoWhereInput
    /**
     * Limit how many Dimensaos to delete.
     */
    limit?: number
  }

  /**
   * Dimensao.Dimensao_DimensaoA
   */
  export type Dimensao$Dimensao_DimensaoAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    where?: Dimensao_DimensaoWhereInput
    orderBy?: Dimensao_DimensaoOrderByWithRelationInput | Dimensao_DimensaoOrderByWithRelationInput[]
    cursor?: Dimensao_DimensaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dimensao_DimensaoScalarFieldEnum | Dimensao_DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao.Dimensao_DimensaoB
   */
  export type Dimensao$Dimensao_DimensaoBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    where?: Dimensao_DimensaoWhereInput
    orderBy?: Dimensao_DimensaoOrderByWithRelationInput | Dimensao_DimensaoOrderByWithRelationInput[]
    cursor?: Dimensao_DimensaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dimensao_DimensaoScalarFieldEnum | Dimensao_DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao.Disciplina
   */
  export type Dimensao$DisciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    where?: DisciplinaWhereInput
  }

  /**
   * Dimensao.Evento
   */
  export type Dimensao$EventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
  }

  /**
   * Dimensao.Motor
   */
  export type Dimensao$MotorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    where?: MotorWhereInput
  }

  /**
   * Dimensao.Negocio
   */
  export type Dimensao$NegocioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    where?: NegocioWhereInput
  }

  /**
   * Dimensao without action
   */
  export type DimensaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao
     */
    select?: DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao
     */
    omit?: DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DimensaoInclude<ExtArgs> | null
  }


  /**
   * Model Dimensao_Dimensao
   */

  export type AggregateDimensao_Dimensao = {
    _count: Dimensao_DimensaoCountAggregateOutputType | null
    _avg: Dimensao_DimensaoAvgAggregateOutputType | null
    _sum: Dimensao_DimensaoSumAggregateOutputType | null
    _min: Dimensao_DimensaoMinAggregateOutputType | null
    _max: Dimensao_DimensaoMaxAggregateOutputType | null
  }

  export type Dimensao_DimensaoAvgAggregateOutputType = {
    dimensaoAId: number | null
    dimensaoBId: number | null
  }

  export type Dimensao_DimensaoSumAggregateOutputType = {
    dimensaoAId: number | null
    dimensaoBId: number | null
  }

  export type Dimensao_DimensaoMinAggregateOutputType = {
    dimensaoAId: number | null
    dimensaoBId: number | null
  }

  export type Dimensao_DimensaoMaxAggregateOutputType = {
    dimensaoAId: number | null
    dimensaoBId: number | null
  }

  export type Dimensao_DimensaoCountAggregateOutputType = {
    dimensaoAId: number
    dimensaoBId: number
    _all: number
  }


  export type Dimensao_DimensaoAvgAggregateInputType = {
    dimensaoAId?: true
    dimensaoBId?: true
  }

  export type Dimensao_DimensaoSumAggregateInputType = {
    dimensaoAId?: true
    dimensaoBId?: true
  }

  export type Dimensao_DimensaoMinAggregateInputType = {
    dimensaoAId?: true
    dimensaoBId?: true
  }

  export type Dimensao_DimensaoMaxAggregateInputType = {
    dimensaoAId?: true
    dimensaoBId?: true
  }

  export type Dimensao_DimensaoCountAggregateInputType = {
    dimensaoAId?: true
    dimensaoBId?: true
    _all?: true
  }

  export type Dimensao_DimensaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dimensao_Dimensao to aggregate.
     */
    where?: Dimensao_DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensao_Dimensaos to fetch.
     */
    orderBy?: Dimensao_DimensaoOrderByWithRelationInput | Dimensao_DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Dimensao_DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensao_Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensao_Dimensaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dimensao_Dimensaos
    **/
    _count?: true | Dimensao_DimensaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dimensao_DimensaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dimensao_DimensaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dimensao_DimensaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dimensao_DimensaoMaxAggregateInputType
  }

  export type GetDimensao_DimensaoAggregateType<T extends Dimensao_DimensaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDimensao_Dimensao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDimensao_Dimensao[P]>
      : GetScalarType<T[P], AggregateDimensao_Dimensao[P]>
  }




  export type Dimensao_DimensaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dimensao_DimensaoWhereInput
    orderBy?: Dimensao_DimensaoOrderByWithAggregationInput | Dimensao_DimensaoOrderByWithAggregationInput[]
    by: Dimensao_DimensaoScalarFieldEnum[] | Dimensao_DimensaoScalarFieldEnum
    having?: Dimensao_DimensaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dimensao_DimensaoCountAggregateInputType | true
    _avg?: Dimensao_DimensaoAvgAggregateInputType
    _sum?: Dimensao_DimensaoSumAggregateInputType
    _min?: Dimensao_DimensaoMinAggregateInputType
    _max?: Dimensao_DimensaoMaxAggregateInputType
  }

  export type Dimensao_DimensaoGroupByOutputType = {
    dimensaoAId: number
    dimensaoBId: number
    _count: Dimensao_DimensaoCountAggregateOutputType | null
    _avg: Dimensao_DimensaoAvgAggregateOutputType | null
    _sum: Dimensao_DimensaoSumAggregateOutputType | null
    _min: Dimensao_DimensaoMinAggregateOutputType | null
    _max: Dimensao_DimensaoMaxAggregateOutputType | null
  }

  type GetDimensao_DimensaoGroupByPayload<T extends Dimensao_DimensaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dimensao_DimensaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dimensao_DimensaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dimensao_DimensaoGroupByOutputType[P]>
            : GetScalarType<T[P], Dimensao_DimensaoGroupByOutputType[P]>
        }
      >
    >


  export type Dimensao_DimensaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoAId?: boolean
    dimensaoBId?: boolean
    dimensaoA?: boolean | DimensaoDefaultArgs<ExtArgs>
    dimensaoB?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dimensao_Dimensao"]>

  export type Dimensao_DimensaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoAId?: boolean
    dimensaoBId?: boolean
    dimensaoA?: boolean | DimensaoDefaultArgs<ExtArgs>
    dimensaoB?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dimensao_Dimensao"]>

  export type Dimensao_DimensaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoAId?: boolean
    dimensaoBId?: boolean
    dimensaoA?: boolean | DimensaoDefaultArgs<ExtArgs>
    dimensaoB?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dimensao_Dimensao"]>

  export type Dimensao_DimensaoSelectScalar = {
    dimensaoAId?: boolean
    dimensaoBId?: boolean
  }

  export type Dimensao_DimensaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dimensaoAId" | "dimensaoBId", ExtArgs["result"]["dimensao_Dimensao"]>
  export type Dimensao_DimensaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensaoA?: boolean | DimensaoDefaultArgs<ExtArgs>
    dimensaoB?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type Dimensao_DimensaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensaoA?: boolean | DimensaoDefaultArgs<ExtArgs>
    dimensaoB?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type Dimensao_DimensaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensaoA?: boolean | DimensaoDefaultArgs<ExtArgs>
    dimensaoB?: boolean | DimensaoDefaultArgs<ExtArgs>
  }

  export type $Dimensao_DimensaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dimensao_Dimensao"
    objects: {
      dimensaoA: Prisma.$DimensaoPayload<ExtArgs>
      dimensaoB: Prisma.$DimensaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dimensaoAId: number
      dimensaoBId: number
    }, ExtArgs["result"]["dimensao_Dimensao"]>
    composites: {}
  }

  type Dimensao_DimensaoGetPayload<S extends boolean | null | undefined | Dimensao_DimensaoDefaultArgs> = $Result.GetResult<Prisma.$Dimensao_DimensaoPayload, S>

  type Dimensao_DimensaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Dimensao_DimensaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dimensao_DimensaoCountAggregateInputType | true
    }

  export interface Dimensao_DimensaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dimensao_Dimensao'], meta: { name: 'Dimensao_Dimensao' } }
    /**
     * Find zero or one Dimensao_Dimensao that matches the filter.
     * @param {Dimensao_DimensaoFindUniqueArgs} args - Arguments to find a Dimensao_Dimensao
     * @example
     * // Get one Dimensao_Dimensao
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Dimensao_DimensaoFindUniqueArgs>(args: SelectSubset<T, Dimensao_DimensaoFindUniqueArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dimensao_Dimensao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Dimensao_DimensaoFindUniqueOrThrowArgs} args - Arguments to find a Dimensao_Dimensao
     * @example
     * // Get one Dimensao_Dimensao
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Dimensao_DimensaoFindUniqueOrThrowArgs>(args: SelectSubset<T, Dimensao_DimensaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dimensao_Dimensao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dimensao_DimensaoFindFirstArgs} args - Arguments to find a Dimensao_Dimensao
     * @example
     * // Get one Dimensao_Dimensao
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Dimensao_DimensaoFindFirstArgs>(args?: SelectSubset<T, Dimensao_DimensaoFindFirstArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dimensao_Dimensao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dimensao_DimensaoFindFirstOrThrowArgs} args - Arguments to find a Dimensao_Dimensao
     * @example
     * // Get one Dimensao_Dimensao
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Dimensao_DimensaoFindFirstOrThrowArgs>(args?: SelectSubset<T, Dimensao_DimensaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dimensao_Dimensaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dimensao_DimensaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dimensao_Dimensaos
     * const dimensao_Dimensaos = await prisma.dimensao_Dimensao.findMany()
     * 
     * // Get first 10 Dimensao_Dimensaos
     * const dimensao_Dimensaos = await prisma.dimensao_Dimensao.findMany({ take: 10 })
     * 
     * // Only select the `dimensaoAId`
     * const dimensao_DimensaoWithDimensaoAIdOnly = await prisma.dimensao_Dimensao.findMany({ select: { dimensaoAId: true } })
     * 
     */
    findMany<T extends Dimensao_DimensaoFindManyArgs>(args?: SelectSubset<T, Dimensao_DimensaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dimensao_Dimensao.
     * @param {Dimensao_DimensaoCreateArgs} args - Arguments to create a Dimensao_Dimensao.
     * @example
     * // Create one Dimensao_Dimensao
     * const Dimensao_Dimensao = await prisma.dimensao_Dimensao.create({
     *   data: {
     *     // ... data to create a Dimensao_Dimensao
     *   }
     * })
     * 
     */
    create<T extends Dimensao_DimensaoCreateArgs>(args: SelectSubset<T, Dimensao_DimensaoCreateArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dimensao_Dimensaos.
     * @param {Dimensao_DimensaoCreateManyArgs} args - Arguments to create many Dimensao_Dimensaos.
     * @example
     * // Create many Dimensao_Dimensaos
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Dimensao_DimensaoCreateManyArgs>(args?: SelectSubset<T, Dimensao_DimensaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dimensao_Dimensaos and returns the data saved in the database.
     * @param {Dimensao_DimensaoCreateManyAndReturnArgs} args - Arguments to create many Dimensao_Dimensaos.
     * @example
     * // Create many Dimensao_Dimensaos
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dimensao_Dimensaos and only return the `dimensaoAId`
     * const dimensao_DimensaoWithDimensaoAIdOnly = await prisma.dimensao_Dimensao.createManyAndReturn({
     *   select: { dimensaoAId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Dimensao_DimensaoCreateManyAndReturnArgs>(args?: SelectSubset<T, Dimensao_DimensaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dimensao_Dimensao.
     * @param {Dimensao_DimensaoDeleteArgs} args - Arguments to delete one Dimensao_Dimensao.
     * @example
     * // Delete one Dimensao_Dimensao
     * const Dimensao_Dimensao = await prisma.dimensao_Dimensao.delete({
     *   where: {
     *     // ... filter to delete one Dimensao_Dimensao
     *   }
     * })
     * 
     */
    delete<T extends Dimensao_DimensaoDeleteArgs>(args: SelectSubset<T, Dimensao_DimensaoDeleteArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dimensao_Dimensao.
     * @param {Dimensao_DimensaoUpdateArgs} args - Arguments to update one Dimensao_Dimensao.
     * @example
     * // Update one Dimensao_Dimensao
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Dimensao_DimensaoUpdateArgs>(args: SelectSubset<T, Dimensao_DimensaoUpdateArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dimensao_Dimensaos.
     * @param {Dimensao_DimensaoDeleteManyArgs} args - Arguments to filter Dimensao_Dimensaos to delete.
     * @example
     * // Delete a few Dimensao_Dimensaos
     * const { count } = await prisma.dimensao_Dimensao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Dimensao_DimensaoDeleteManyArgs>(args?: SelectSubset<T, Dimensao_DimensaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dimensao_Dimensaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dimensao_DimensaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dimensao_Dimensaos
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Dimensao_DimensaoUpdateManyArgs>(args: SelectSubset<T, Dimensao_DimensaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dimensao_Dimensaos and returns the data updated in the database.
     * @param {Dimensao_DimensaoUpdateManyAndReturnArgs} args - Arguments to update many Dimensao_Dimensaos.
     * @example
     * // Update many Dimensao_Dimensaos
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dimensao_Dimensaos and only return the `dimensaoAId`
     * const dimensao_DimensaoWithDimensaoAIdOnly = await prisma.dimensao_Dimensao.updateManyAndReturn({
     *   select: { dimensaoAId: true },
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
    updateManyAndReturn<T extends Dimensao_DimensaoUpdateManyAndReturnArgs>(args: SelectSubset<T, Dimensao_DimensaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dimensao_Dimensao.
     * @param {Dimensao_DimensaoUpsertArgs} args - Arguments to update or create a Dimensao_Dimensao.
     * @example
     * // Update or create a Dimensao_Dimensao
     * const dimensao_Dimensao = await prisma.dimensao_Dimensao.upsert({
     *   create: {
     *     // ... data to create a Dimensao_Dimensao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dimensao_Dimensao we want to update
     *   }
     * })
     */
    upsert<T extends Dimensao_DimensaoUpsertArgs>(args: SelectSubset<T, Dimensao_DimensaoUpsertArgs<ExtArgs>>): Prisma__Dimensao_DimensaoClient<$Result.GetResult<Prisma.$Dimensao_DimensaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dimensao_Dimensaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dimensao_DimensaoCountArgs} args - Arguments to filter Dimensao_Dimensaos to count.
     * @example
     * // Count the number of Dimensao_Dimensaos
     * const count = await prisma.dimensao_Dimensao.count({
     *   where: {
     *     // ... the filter for the Dimensao_Dimensaos we want to count
     *   }
     * })
    **/
    count<T extends Dimensao_DimensaoCountArgs>(
      args?: Subset<T, Dimensao_DimensaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dimensao_DimensaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dimensao_Dimensao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dimensao_DimensaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dimensao_DimensaoAggregateArgs>(args: Subset<T, Dimensao_DimensaoAggregateArgs>): Prisma.PrismaPromise<GetDimensao_DimensaoAggregateType<T>>

    /**
     * Group by Dimensao_Dimensao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dimensao_DimensaoGroupByArgs} args - Group by arguments.
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
      T extends Dimensao_DimensaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Dimensao_DimensaoGroupByArgs['orderBy'] }
        : { orderBy?: Dimensao_DimensaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Dimensao_DimensaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDimensao_DimensaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dimensao_Dimensao model
   */
  readonly fields: Dimensao_DimensaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dimensao_Dimensao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Dimensao_DimensaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dimensaoA<T extends DimensaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DimensaoDefaultArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dimensaoB<T extends DimensaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DimensaoDefaultArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dimensao_Dimensao model
   */
  interface Dimensao_DimensaoFieldRefs {
    readonly dimensaoAId: FieldRef<"Dimensao_Dimensao", 'Int'>
    readonly dimensaoBId: FieldRef<"Dimensao_Dimensao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dimensao_Dimensao findUnique
   */
  export type Dimensao_DimensaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao_Dimensao to fetch.
     */
    where: Dimensao_DimensaoWhereUniqueInput
  }

  /**
   * Dimensao_Dimensao findUniqueOrThrow
   */
  export type Dimensao_DimensaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao_Dimensao to fetch.
     */
    where: Dimensao_DimensaoWhereUniqueInput
  }

  /**
   * Dimensao_Dimensao findFirst
   */
  export type Dimensao_DimensaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao_Dimensao to fetch.
     */
    where?: Dimensao_DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensao_Dimensaos to fetch.
     */
    orderBy?: Dimensao_DimensaoOrderByWithRelationInput | Dimensao_DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dimensao_Dimensaos.
     */
    cursor?: Dimensao_DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensao_Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensao_Dimensaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dimensao_Dimensaos.
     */
    distinct?: Dimensao_DimensaoScalarFieldEnum | Dimensao_DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao_Dimensao findFirstOrThrow
   */
  export type Dimensao_DimensaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao_Dimensao to fetch.
     */
    where?: Dimensao_DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensao_Dimensaos to fetch.
     */
    orderBy?: Dimensao_DimensaoOrderByWithRelationInput | Dimensao_DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dimensao_Dimensaos.
     */
    cursor?: Dimensao_DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensao_Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensao_Dimensaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dimensao_Dimensaos.
     */
    distinct?: Dimensao_DimensaoScalarFieldEnum | Dimensao_DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao_Dimensao findMany
   */
  export type Dimensao_DimensaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * Filter, which Dimensao_Dimensaos to fetch.
     */
    where?: Dimensao_DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensao_Dimensaos to fetch.
     */
    orderBy?: Dimensao_DimensaoOrderByWithRelationInput | Dimensao_DimensaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dimensao_Dimensaos.
     */
    cursor?: Dimensao_DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensao_Dimensaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensao_Dimensaos.
     */
    skip?: number
    distinct?: Dimensao_DimensaoScalarFieldEnum | Dimensao_DimensaoScalarFieldEnum[]
  }

  /**
   * Dimensao_Dimensao create
   */
  export type Dimensao_DimensaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dimensao_Dimensao.
     */
    data: XOR<Dimensao_DimensaoCreateInput, Dimensao_DimensaoUncheckedCreateInput>
  }

  /**
   * Dimensao_Dimensao createMany
   */
  export type Dimensao_DimensaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dimensao_Dimensaos.
     */
    data: Dimensao_DimensaoCreateManyInput | Dimensao_DimensaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dimensao_Dimensao createManyAndReturn
   */
  export type Dimensao_DimensaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * The data used to create many Dimensao_Dimensaos.
     */
    data: Dimensao_DimensaoCreateManyInput | Dimensao_DimensaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dimensao_Dimensao update
   */
  export type Dimensao_DimensaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dimensao_Dimensao.
     */
    data: XOR<Dimensao_DimensaoUpdateInput, Dimensao_DimensaoUncheckedUpdateInput>
    /**
     * Choose, which Dimensao_Dimensao to update.
     */
    where: Dimensao_DimensaoWhereUniqueInput
  }

  /**
   * Dimensao_Dimensao updateMany
   */
  export type Dimensao_DimensaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dimensao_Dimensaos.
     */
    data: XOR<Dimensao_DimensaoUpdateManyMutationInput, Dimensao_DimensaoUncheckedUpdateManyInput>
    /**
     * Filter which Dimensao_Dimensaos to update
     */
    where?: Dimensao_DimensaoWhereInput
    /**
     * Limit how many Dimensao_Dimensaos to update.
     */
    limit?: number
  }

  /**
   * Dimensao_Dimensao updateManyAndReturn
   */
  export type Dimensao_DimensaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * The data used to update Dimensao_Dimensaos.
     */
    data: XOR<Dimensao_DimensaoUpdateManyMutationInput, Dimensao_DimensaoUncheckedUpdateManyInput>
    /**
     * Filter which Dimensao_Dimensaos to update
     */
    where?: Dimensao_DimensaoWhereInput
    /**
     * Limit how many Dimensao_Dimensaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dimensao_Dimensao upsert
   */
  export type Dimensao_DimensaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dimensao_Dimensao to update in case it exists.
     */
    where: Dimensao_DimensaoWhereUniqueInput
    /**
     * In case the Dimensao_Dimensao found by the `where` argument doesn't exist, create a new Dimensao_Dimensao with this data.
     */
    create: XOR<Dimensao_DimensaoCreateInput, Dimensao_DimensaoUncheckedCreateInput>
    /**
     * In case the Dimensao_Dimensao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Dimensao_DimensaoUpdateInput, Dimensao_DimensaoUncheckedUpdateInput>
  }

  /**
   * Dimensao_Dimensao delete
   */
  export type Dimensao_DimensaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
    /**
     * Filter which Dimensao_Dimensao to delete.
     */
    where: Dimensao_DimensaoWhereUniqueInput
  }

  /**
   * Dimensao_Dimensao deleteMany
   */
  export type Dimensao_DimensaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dimensao_Dimensaos to delete
     */
    where?: Dimensao_DimensaoWhereInput
    /**
     * Limit how many Dimensao_Dimensaos to delete.
     */
    limit?: number
  }

  /**
   * Dimensao_Dimensao without action
   */
  export type Dimensao_DimensaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensao_Dimensao
     */
    select?: Dimensao_DimensaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensao_Dimensao
     */
    omit?: Dimensao_DimensaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dimensao_DimensaoInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    dimensaoId: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    dimensaoId: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    coordenador: string | null
    semestre: string | null
    codigo: string | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    coordenador: string | null
    semestre: string | null
    codigo: string | null
  }

  export type DisciplinaCountAggregateOutputType = {
    dimensaoId: number
    nome: number
    coordenador: number
    semestre: number
    codigo: number
    alunos_matriculados: number
    alunos_aprovados: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    dimensaoId?: true
  }

  export type DisciplinaSumAggregateInputType = {
    dimensaoId?: true
  }

  export type DisciplinaMinAggregateInputType = {
    dimensaoId?: true
    nome?: true
    coordenador?: true
    semestre?: true
    codigo?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    dimensaoId?: true
    nome?: true
    coordenador?: true
    semestre?: true
    codigo?: true
  }

  export type DisciplinaCountAggregateInputType = {
    dimensaoId?: true
    nome?: true
    coordenador?: true
    semestre?: true
    codigo?: true
    alunos_matriculados?: true
    alunos_aprovados?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    dimensaoId: number
    nome: string
    coordenador: string
    semestre: string
    codigo: string
    alunos_matriculados: string[]
    alunos_aprovados: string[]
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectScalar = {
    dimensaoId?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dimensaoId" | "nome" | "coordenador" | "semestre" | "codigo" | "alunos_matriculados" | "alunos_aprovados", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      dimensao: Prisma.$DimensaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dimensaoId: number
      nome: string
      coordenador: string
      semestre: string
      codigo: string
      alunos_matriculados: string[]
      alunos_aprovados: string[]
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `dimensaoId`
     * const disciplinaWithDimensaoIdOnly = await prisma.disciplina.findMany({ select: { dimensaoId: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {DisciplinaCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `dimensaoId`
     * const disciplinaWithDimensaoIdOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { dimensaoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas and returns the data updated in the database.
     * @param {DisciplinaUpdateManyAndReturnArgs} args - Arguments to update many Disciplinas.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplinas and only return the `dimensaoId`
     * const disciplinaWithDimensaoIdOnly = await prisma.disciplina.updateManyAndReturn({
     *   select: { dimensaoId: true },
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
    updateManyAndReturn<T extends DisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
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
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dimensao<T extends DimensaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DimensaoDefaultArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly dimensaoId: FieldRef<"Disciplina", 'Int'>
    readonly nome: FieldRef<"Disciplina", 'String'>
    readonly coordenador: FieldRef<"Disciplina", 'String'>
    readonly semestre: FieldRef<"Disciplina", 'String'>
    readonly codigo: FieldRef<"Disciplina", 'String'>
    readonly alunos_matriculados: FieldRef<"Disciplina", 'String[]'>
    readonly alunos_aprovados: FieldRef<"Disciplina", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina createManyAndReturn
   */
  export type DisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina updateManyAndReturn
   */
  export type DisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    dimensaoId: number | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoSumAggregateOutputType = {
    dimensaoId: number | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoMinAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    duracao: string | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoMaxAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    duracao: string | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoCountAggregateOutputType = {
    dimensaoId: number
    nome: number
    descricao: number
    data_inicio: number
    duracao: number
    custo: number
    receita: number
    publico_participante: number
    qtd_publico: number
    equipe: number
    coordenadores: number
    parceiros: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    dimensaoId?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoSumAggregateInputType = {
    dimensaoId?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoMinAggregateInputType = {
    dimensaoId?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    duracao?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoMaxAggregateInputType = {
    dimensaoId?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    duracao?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoCountAggregateInputType = {
    dimensaoId?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    duracao?: true
    custo?: true
    receita?: true
    publico_participante?: true
    qtd_publico?: true
    equipe?: true
    coordenadores?: true
    parceiros?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    dimensaoId: number
    nome: string
    descricao: string
    data_inicio: Date
    duracao: string
    custo: number
    receita: number
    publico_participante: string[]
    qtd_publico: number
    equipe: string[]
    coordenadores: string[]
    parceiros: string[]
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    duracao?: boolean
    custo?: boolean
    receita?: boolean
    publico_participante?: boolean
    qtd_publico?: boolean
    equipe?: boolean
    coordenadores?: boolean
    parceiros?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    duracao?: boolean
    custo?: boolean
    receita?: boolean
    publico_participante?: boolean
    qtd_publico?: boolean
    equipe?: boolean
    coordenadores?: boolean
    parceiros?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    duracao?: boolean
    custo?: boolean
    receita?: boolean
    publico_participante?: boolean
    qtd_publico?: boolean
    equipe?: boolean
    coordenadores?: boolean
    parceiros?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    data_inicio?: boolean
    duracao?: boolean
    custo?: boolean
    receita?: boolean
    publico_participante?: boolean
    qtd_publico?: boolean
    equipe?: boolean
    coordenadores?: boolean
    parceiros?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dimensaoId" | "nome" | "descricao" | "data_inicio" | "duracao" | "custo" | "receita" | "publico_participante" | "qtd_publico" | "equipe" | "coordenadores" | "parceiros", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      dimensao: Prisma.$DimensaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dimensaoId: number
      nome: string
      descricao: string
      data_inicio: Date
      duracao: string
      custo: number
      receita: number
      publico_participante: string[]
      qtd_publico: number
      equipe: string[]
      coordenadores: string[]
      parceiros: string[]
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `dimensaoId`
     * const eventoWithDimensaoIdOnly = await prisma.evento.findMany({ select: { dimensaoId: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `dimensaoId`
     * const eventoWithDimensaoIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { dimensaoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `dimensaoId`
     * const eventoWithDimensaoIdOnly = await prisma.evento.updateManyAndReturn({
     *   select: { dimensaoId: true },
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
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
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
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dimensao<T extends DimensaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DimensaoDefaultArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly dimensaoId: FieldRef<"Evento", 'Int'>
    readonly nome: FieldRef<"Evento", 'String'>
    readonly descricao: FieldRef<"Evento", 'String'>
    readonly data_inicio: FieldRef<"Evento", 'DateTime'>
    readonly duracao: FieldRef<"Evento", 'String'>
    readonly custo: FieldRef<"Evento", 'Float'>
    readonly receita: FieldRef<"Evento", 'Float'>
    readonly publico_participante: FieldRef<"Evento", 'String[]'>
    readonly qtd_publico: FieldRef<"Evento", 'Int'>
    readonly equipe: FieldRef<"Evento", 'String[]'>
    readonly coordenadores: FieldRef<"Evento", 'String[]'>
    readonly parceiros: FieldRef<"Evento", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Motor
   */

  export type AggregateMotor = {
    _count: MotorCountAggregateOutputType | null
    _avg: MotorAvgAggregateOutputType | null
    _sum: MotorSumAggregateOutputType | null
    _min: MotorMinAggregateOutputType | null
    _max: MotorMaxAggregateOutputType | null
  }

  export type MotorAvgAggregateOutputType = {
    dimensaoId: number | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorSumAggregateOutputType = {
    dimensaoId: number | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorMinAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    descricao: string | null
    motor_tipo: string | null
    data_criacao: Date | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorMaxAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    descricao: string | null
    motor_tipo: string | null
    data_criacao: Date | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorCountAggregateOutputType = {
    dimensaoId: number
    nome: number
    descricao: number
    projetos: number
    motor_tipo: number
    data_criacao: number
    lideres: number
    equipe: number
    qtd_empresas_atendidas: number
    faturamento: number
    _all: number
  }


  export type MotorAvgAggregateInputType = {
    dimensaoId?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorSumAggregateInputType = {
    dimensaoId?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorMinAggregateInputType = {
    dimensaoId?: true
    nome?: true
    descricao?: true
    motor_tipo?: true
    data_criacao?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorMaxAggregateInputType = {
    dimensaoId?: true
    nome?: true
    descricao?: true
    motor_tipo?: true
    data_criacao?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorCountAggregateInputType = {
    dimensaoId?: true
    nome?: true
    descricao?: true
    projetos?: true
    motor_tipo?: true
    data_criacao?: true
    lideres?: true
    equipe?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
    _all?: true
  }

  export type MotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motor to aggregate.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motors
    **/
    _count?: true | MotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotorMaxAggregateInputType
  }

  export type GetMotorAggregateType<T extends MotorAggregateArgs> = {
        [P in keyof T & keyof AggregateMotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotor[P]>
      : GetScalarType<T[P], AggregateMotor[P]>
  }




  export type MotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorWhereInput
    orderBy?: MotorOrderByWithAggregationInput | MotorOrderByWithAggregationInput[]
    by: MotorScalarFieldEnum[] | MotorScalarFieldEnum
    having?: MotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotorCountAggregateInputType | true
    _avg?: MotorAvgAggregateInputType
    _sum?: MotorSumAggregateInputType
    _min?: MotorMinAggregateInputType
    _max?: MotorMaxAggregateInputType
  }

  export type MotorGroupByOutputType = {
    dimensaoId: number
    nome: string
    descricao: string
    projetos: string[]
    motor_tipo: string
    data_criacao: Date
    lideres: string[]
    equipe: string[]
    qtd_empresas_atendidas: number
    faturamento: number
    _count: MotorCountAggregateOutputType | null
    _avg: MotorAvgAggregateOutputType | null
    _sum: MotorSumAggregateOutputType | null
    _min: MotorMinAggregateOutputType | null
    _max: MotorMaxAggregateOutputType | null
  }

  type GetMotorGroupByPayload<T extends MotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotorGroupByOutputType[P]>
            : GetScalarType<T[P], MotorGroupByOutputType[P]>
        }
      >
    >


  export type MotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    projetos?: boolean
    motor_tipo?: boolean
    data_criacao?: boolean
    lideres?: boolean
    equipe?: boolean
    qtd_empresas_atendidas?: boolean
    faturamento?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    projetos?: boolean
    motor_tipo?: boolean
    data_criacao?: boolean
    lideres?: boolean
    equipe?: boolean
    qtd_empresas_atendidas?: boolean
    faturamento?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    projetos?: boolean
    motor_tipo?: boolean
    data_criacao?: boolean
    lideres?: boolean
    equipe?: boolean
    qtd_empresas_atendidas?: boolean
    faturamento?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectScalar = {
    dimensaoId?: boolean
    nome?: boolean
    descricao?: boolean
    projetos?: boolean
    motor_tipo?: boolean
    data_criacao?: boolean
    lideres?: boolean
    equipe?: boolean
    qtd_empresas_atendidas?: boolean
    faturamento?: boolean
  }

  export type MotorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dimensaoId" | "nome" | "descricao" | "projetos" | "motor_tipo" | "data_criacao" | "lideres" | "equipe" | "qtd_empresas_atendidas" | "faturamento", ExtArgs["result"]["motor"]>
  export type MotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type MotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type MotorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }

  export type $MotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motor"
    objects: {
      dimensao: Prisma.$DimensaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dimensaoId: number
      nome: string
      descricao: string
      projetos: string[]
      motor_tipo: string
      data_criacao: Date
      lideres: string[]
      equipe: string[]
      qtd_empresas_atendidas: number
      faturamento: number
    }, ExtArgs["result"]["motor"]>
    composites: {}
  }

  type MotorGetPayload<S extends boolean | null | undefined | MotorDefaultArgs> = $Result.GetResult<Prisma.$MotorPayload, S>

  type MotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotorCountAggregateInputType | true
    }

  export interface MotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motor'], meta: { name: 'Motor' } }
    /**
     * Find zero or one Motor that matches the filter.
     * @param {MotorFindUniqueArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotorFindUniqueArgs>(args: SelectSubset<T, MotorFindUniqueArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Motor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotorFindUniqueOrThrowArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotorFindUniqueOrThrowArgs>(args: SelectSubset<T, MotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindFirstArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotorFindFirstArgs>(args?: SelectSubset<T, MotorFindFirstArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindFirstOrThrowArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotorFindFirstOrThrowArgs>(args?: SelectSubset<T, MotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Motors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motors
     * const motors = await prisma.motor.findMany()
     * 
     * // Get first 10 Motors
     * const motors = await prisma.motor.findMany({ take: 10 })
     * 
     * // Only select the `dimensaoId`
     * const motorWithDimensaoIdOnly = await prisma.motor.findMany({ select: { dimensaoId: true } })
     * 
     */
    findMany<T extends MotorFindManyArgs>(args?: SelectSubset<T, MotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Motor.
     * @param {MotorCreateArgs} args - Arguments to create a Motor.
     * @example
     * // Create one Motor
     * const Motor = await prisma.motor.create({
     *   data: {
     *     // ... data to create a Motor
     *   }
     * })
     * 
     */
    create<T extends MotorCreateArgs>(args: SelectSubset<T, MotorCreateArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Motors.
     * @param {MotorCreateManyArgs} args - Arguments to create many Motors.
     * @example
     * // Create many Motors
     * const motor = await prisma.motor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotorCreateManyArgs>(args?: SelectSubset<T, MotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motors and returns the data saved in the database.
     * @param {MotorCreateManyAndReturnArgs} args - Arguments to create many Motors.
     * @example
     * // Create many Motors
     * const motor = await prisma.motor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motors and only return the `dimensaoId`
     * const motorWithDimensaoIdOnly = await prisma.motor.createManyAndReturn({
     *   select: { dimensaoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotorCreateManyAndReturnArgs>(args?: SelectSubset<T, MotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Motor.
     * @param {MotorDeleteArgs} args - Arguments to delete one Motor.
     * @example
     * // Delete one Motor
     * const Motor = await prisma.motor.delete({
     *   where: {
     *     // ... filter to delete one Motor
     *   }
     * })
     * 
     */
    delete<T extends MotorDeleteArgs>(args: SelectSubset<T, MotorDeleteArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Motor.
     * @param {MotorUpdateArgs} args - Arguments to update one Motor.
     * @example
     * // Update one Motor
     * const motor = await prisma.motor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotorUpdateArgs>(args: SelectSubset<T, MotorUpdateArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Motors.
     * @param {MotorDeleteManyArgs} args - Arguments to filter Motors to delete.
     * @example
     * // Delete a few Motors
     * const { count } = await prisma.motor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotorDeleteManyArgs>(args?: SelectSubset<T, MotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motors
     * const motor = await prisma.motor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotorUpdateManyArgs>(args: SelectSubset<T, MotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motors and returns the data updated in the database.
     * @param {MotorUpdateManyAndReturnArgs} args - Arguments to update many Motors.
     * @example
     * // Update many Motors
     * const motor = await prisma.motor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motors and only return the `dimensaoId`
     * const motorWithDimensaoIdOnly = await prisma.motor.updateManyAndReturn({
     *   select: { dimensaoId: true },
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
    updateManyAndReturn<T extends MotorUpdateManyAndReturnArgs>(args: SelectSubset<T, MotorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Motor.
     * @param {MotorUpsertArgs} args - Arguments to update or create a Motor.
     * @example
     * // Update or create a Motor
     * const motor = await prisma.motor.upsert({
     *   create: {
     *     // ... data to create a Motor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motor we want to update
     *   }
     * })
     */
    upsert<T extends MotorUpsertArgs>(args: SelectSubset<T, MotorUpsertArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Motors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorCountArgs} args - Arguments to filter Motors to count.
     * @example
     * // Count the number of Motors
     * const count = await prisma.motor.count({
     *   where: {
     *     // ... the filter for the Motors we want to count
     *   }
     * })
    **/
    count<T extends MotorCountArgs>(
      args?: Subset<T, MotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MotorAggregateArgs>(args: Subset<T, MotorAggregateArgs>): Prisma.PrismaPromise<GetMotorAggregateType<T>>

    /**
     * Group by Motor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorGroupByArgs} args - Group by arguments.
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
      T extends MotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotorGroupByArgs['orderBy'] }
        : { orderBy?: MotorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motor model
   */
  readonly fields: MotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dimensao<T extends DimensaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DimensaoDefaultArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Motor model
   */
  interface MotorFieldRefs {
    readonly dimensaoId: FieldRef<"Motor", 'Int'>
    readonly nome: FieldRef<"Motor", 'String'>
    readonly descricao: FieldRef<"Motor", 'String'>
    readonly projetos: FieldRef<"Motor", 'String[]'>
    readonly motor_tipo: FieldRef<"Motor", 'String'>
    readonly data_criacao: FieldRef<"Motor", 'DateTime'>
    readonly lideres: FieldRef<"Motor", 'String[]'>
    readonly equipe: FieldRef<"Motor", 'String[]'>
    readonly qtd_empresas_atendidas: FieldRef<"Motor", 'Int'>
    readonly faturamento: FieldRef<"Motor", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Motor findUnique
   */
  export type MotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor findUniqueOrThrow
   */
  export type MotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor findFirst
   */
  export type MotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motors.
     */
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor findFirstOrThrow
   */
  export type MotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motors.
     */
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor findMany
   */
  export type MotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motors to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor create
   */
  export type MotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Motor.
     */
    data: XOR<MotorCreateInput, MotorUncheckedCreateInput>
  }

  /**
   * Motor createMany
   */
  export type MotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motors.
     */
    data: MotorCreateManyInput | MotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motor createManyAndReturn
   */
  export type MotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * The data used to create many Motors.
     */
    data: MotorCreateManyInput | MotorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motor update
   */
  export type MotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Motor.
     */
    data: XOR<MotorUpdateInput, MotorUncheckedUpdateInput>
    /**
     * Choose, which Motor to update.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor updateMany
   */
  export type MotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motors.
     */
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyInput>
    /**
     * Filter which Motors to update
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to update.
     */
    limit?: number
  }

  /**
   * Motor updateManyAndReturn
   */
  export type MotorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * The data used to update Motors.
     */
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyInput>
    /**
     * Filter which Motors to update
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motor upsert
   */
  export type MotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Motor to update in case it exists.
     */
    where: MotorWhereUniqueInput
    /**
     * In case the Motor found by the `where` argument doesn't exist, create a new Motor with this data.
     */
    create: XOR<MotorCreateInput, MotorUncheckedCreateInput>
    /**
     * In case the Motor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotorUpdateInput, MotorUncheckedUpdateInput>
  }

  /**
   * Motor delete
   */
  export type MotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter which Motor to delete.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor deleteMany
   */
  export type MotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motors to delete
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to delete.
     */
    limit?: number
  }

  /**
   * Motor without action
   */
  export type MotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
  }


  /**
   * Model Negocio
   */

  export type AggregateNegocio = {
    _count: NegocioCountAggregateOutputType | null
    _avg: NegocioAvgAggregateOutputType | null
    _sum: NegocioSumAggregateOutputType | null
    _min: NegocioMinAggregateOutputType | null
    _max: NegocioMaxAggregateOutputType | null
  }

  export type NegocioAvgAggregateOutputType = {
    dimensaoId: number | null
    faturamento_anual: number | null
  }

  export type NegocioSumAggregateOutputType = {
    dimensaoId: number | null
    faturamento_anual: number | null
  }

  export type NegocioMinAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    area_atuacao: string | null
    faturamento_anual: number | null
    data_criacao: Date | null
    porte: string | null
  }

  export type NegocioMaxAggregateOutputType = {
    dimensaoId: number | null
    nome: string | null
    area_atuacao: string | null
    faturamento_anual: number | null
    data_criacao: Date | null
    porte: string | null
  }

  export type NegocioCountAggregateOutputType = {
    dimensaoId: number
    nome: number
    area_atuacao: number
    faturamento_anual: number
    data_criacao: number
    fundadores: number
    porte: number
    _all: number
  }


  export type NegocioAvgAggregateInputType = {
    dimensaoId?: true
    faturamento_anual?: true
  }

  export type NegocioSumAggregateInputType = {
    dimensaoId?: true
    faturamento_anual?: true
  }

  export type NegocioMinAggregateInputType = {
    dimensaoId?: true
    nome?: true
    area_atuacao?: true
    faturamento_anual?: true
    data_criacao?: true
    porte?: true
  }

  export type NegocioMaxAggregateInputType = {
    dimensaoId?: true
    nome?: true
    area_atuacao?: true
    faturamento_anual?: true
    data_criacao?: true
    porte?: true
  }

  export type NegocioCountAggregateInputType = {
    dimensaoId?: true
    nome?: true
    area_atuacao?: true
    faturamento_anual?: true
    data_criacao?: true
    fundadores?: true
    porte?: true
    _all?: true
  }

  export type NegocioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Negocio to aggregate.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Negocios
    **/
    _count?: true | NegocioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NegocioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NegocioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NegocioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NegocioMaxAggregateInputType
  }

  export type GetNegocioAggregateType<T extends NegocioAggregateArgs> = {
        [P in keyof T & keyof AggregateNegocio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNegocio[P]>
      : GetScalarType<T[P], AggregateNegocio[P]>
  }




  export type NegocioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegocioWhereInput
    orderBy?: NegocioOrderByWithAggregationInput | NegocioOrderByWithAggregationInput[]
    by: NegocioScalarFieldEnum[] | NegocioScalarFieldEnum
    having?: NegocioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NegocioCountAggregateInputType | true
    _avg?: NegocioAvgAggregateInputType
    _sum?: NegocioSumAggregateInputType
    _min?: NegocioMinAggregateInputType
    _max?: NegocioMaxAggregateInputType
  }

  export type NegocioGroupByOutputType = {
    dimensaoId: number
    nome: string
    area_atuacao: string
    faturamento_anual: number
    data_criacao: Date
    fundadores: string[]
    porte: string
    _count: NegocioCountAggregateOutputType | null
    _avg: NegocioAvgAggregateOutputType | null
    _sum: NegocioSumAggregateOutputType | null
    _min: NegocioMinAggregateOutputType | null
    _max: NegocioMaxAggregateOutputType | null
  }

  type GetNegocioGroupByPayload<T extends NegocioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NegocioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NegocioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NegocioGroupByOutputType[P]>
            : GetScalarType<T[P], NegocioGroupByOutputType[P]>
        }
      >
    >


  export type NegocioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    data_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    data_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dimensaoId?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    data_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectScalar = {
    dimensaoId?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    data_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
  }

  export type NegocioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dimensaoId" | "nome" | "area_atuacao" | "faturamento_anual" | "data_criacao" | "fundadores" | "porte", ExtArgs["result"]["negocio"]>
  export type NegocioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type NegocioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }
  export type NegocioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dimensao?: boolean | DimensaoDefaultArgs<ExtArgs>
  }

  export type $NegocioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Negocio"
    objects: {
      dimensao: Prisma.$DimensaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dimensaoId: number
      nome: string
      area_atuacao: string
      faturamento_anual: number
      data_criacao: Date
      fundadores: string[]
      porte: string
    }, ExtArgs["result"]["negocio"]>
    composites: {}
  }

  type NegocioGetPayload<S extends boolean | null | undefined | NegocioDefaultArgs> = $Result.GetResult<Prisma.$NegocioPayload, S>

  type NegocioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NegocioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NegocioCountAggregateInputType | true
    }

  export interface NegocioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Negocio'], meta: { name: 'Negocio' } }
    /**
     * Find zero or one Negocio that matches the filter.
     * @param {NegocioFindUniqueArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NegocioFindUniqueArgs>(args: SelectSubset<T, NegocioFindUniqueArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Negocio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NegocioFindUniqueOrThrowArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NegocioFindUniqueOrThrowArgs>(args: SelectSubset<T, NegocioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Negocio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioFindFirstArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NegocioFindFirstArgs>(args?: SelectSubset<T, NegocioFindFirstArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Negocio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioFindFirstOrThrowArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NegocioFindFirstOrThrowArgs>(args?: SelectSubset<T, NegocioFindFirstOrThrowArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Negocios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Negocios
     * const negocios = await prisma.negocio.findMany()
     * 
     * // Get first 10 Negocios
     * const negocios = await prisma.negocio.findMany({ take: 10 })
     * 
     * // Only select the `dimensaoId`
     * const negocioWithDimensaoIdOnly = await prisma.negocio.findMany({ select: { dimensaoId: true } })
     * 
     */
    findMany<T extends NegocioFindManyArgs>(args?: SelectSubset<T, NegocioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Negocio.
     * @param {NegocioCreateArgs} args - Arguments to create a Negocio.
     * @example
     * // Create one Negocio
     * const Negocio = await prisma.negocio.create({
     *   data: {
     *     // ... data to create a Negocio
     *   }
     * })
     * 
     */
    create<T extends NegocioCreateArgs>(args: SelectSubset<T, NegocioCreateArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Negocios.
     * @param {NegocioCreateManyArgs} args - Arguments to create many Negocios.
     * @example
     * // Create many Negocios
     * const negocio = await prisma.negocio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NegocioCreateManyArgs>(args?: SelectSubset<T, NegocioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Negocios and returns the data saved in the database.
     * @param {NegocioCreateManyAndReturnArgs} args - Arguments to create many Negocios.
     * @example
     * // Create many Negocios
     * const negocio = await prisma.negocio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Negocios and only return the `dimensaoId`
     * const negocioWithDimensaoIdOnly = await prisma.negocio.createManyAndReturn({
     *   select: { dimensaoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NegocioCreateManyAndReturnArgs>(args?: SelectSubset<T, NegocioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Negocio.
     * @param {NegocioDeleteArgs} args - Arguments to delete one Negocio.
     * @example
     * // Delete one Negocio
     * const Negocio = await prisma.negocio.delete({
     *   where: {
     *     // ... filter to delete one Negocio
     *   }
     * })
     * 
     */
    delete<T extends NegocioDeleteArgs>(args: SelectSubset<T, NegocioDeleteArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Negocio.
     * @param {NegocioUpdateArgs} args - Arguments to update one Negocio.
     * @example
     * // Update one Negocio
     * const negocio = await prisma.negocio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NegocioUpdateArgs>(args: SelectSubset<T, NegocioUpdateArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Negocios.
     * @param {NegocioDeleteManyArgs} args - Arguments to filter Negocios to delete.
     * @example
     * // Delete a few Negocios
     * const { count } = await prisma.negocio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NegocioDeleteManyArgs>(args?: SelectSubset<T, NegocioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Negocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Negocios
     * const negocio = await prisma.negocio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NegocioUpdateManyArgs>(args: SelectSubset<T, NegocioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Negocios and returns the data updated in the database.
     * @param {NegocioUpdateManyAndReturnArgs} args - Arguments to update many Negocios.
     * @example
     * // Update many Negocios
     * const negocio = await prisma.negocio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Negocios and only return the `dimensaoId`
     * const negocioWithDimensaoIdOnly = await prisma.negocio.updateManyAndReturn({
     *   select: { dimensaoId: true },
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
    updateManyAndReturn<T extends NegocioUpdateManyAndReturnArgs>(args: SelectSubset<T, NegocioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Negocio.
     * @param {NegocioUpsertArgs} args - Arguments to update or create a Negocio.
     * @example
     * // Update or create a Negocio
     * const negocio = await prisma.negocio.upsert({
     *   create: {
     *     // ... data to create a Negocio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Negocio we want to update
     *   }
     * })
     */
    upsert<T extends NegocioUpsertArgs>(args: SelectSubset<T, NegocioUpsertArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Negocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioCountArgs} args - Arguments to filter Negocios to count.
     * @example
     * // Count the number of Negocios
     * const count = await prisma.negocio.count({
     *   where: {
     *     // ... the filter for the Negocios we want to count
     *   }
     * })
    **/
    count<T extends NegocioCountArgs>(
      args?: Subset<T, NegocioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NegocioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Negocio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NegocioAggregateArgs>(args: Subset<T, NegocioAggregateArgs>): Prisma.PrismaPromise<GetNegocioAggregateType<T>>

    /**
     * Group by Negocio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioGroupByArgs} args - Group by arguments.
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
      T extends NegocioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NegocioGroupByArgs['orderBy'] }
        : { orderBy?: NegocioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NegocioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNegocioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Negocio model
   */
  readonly fields: NegocioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Negocio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NegocioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dimensao<T extends DimensaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DimensaoDefaultArgs<ExtArgs>>): Prisma__DimensaoClient<$Result.GetResult<Prisma.$DimensaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Negocio model
   */
  interface NegocioFieldRefs {
    readonly dimensaoId: FieldRef<"Negocio", 'Int'>
    readonly nome: FieldRef<"Negocio", 'String'>
    readonly area_atuacao: FieldRef<"Negocio", 'String'>
    readonly faturamento_anual: FieldRef<"Negocio", 'Float'>
    readonly data_criacao: FieldRef<"Negocio", 'DateTime'>
    readonly fundadores: FieldRef<"Negocio", 'String[]'>
    readonly porte: FieldRef<"Negocio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Negocio findUnique
   */
  export type NegocioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio findUniqueOrThrow
   */
  export type NegocioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio findFirst
   */
  export type NegocioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Negocios.
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Negocios.
     */
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Negocio findFirstOrThrow
   */
  export type NegocioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Negocios.
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Negocios.
     */
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Negocio findMany
   */
  export type NegocioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocios to fetch.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Negocios.
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Negocio create
   */
  export type NegocioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * The data needed to create a Negocio.
     */
    data: XOR<NegocioCreateInput, NegocioUncheckedCreateInput>
  }

  /**
   * Negocio createMany
   */
  export type NegocioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Negocios.
     */
    data: NegocioCreateManyInput | NegocioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Negocio createManyAndReturn
   */
  export type NegocioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * The data used to create many Negocios.
     */
    data: NegocioCreateManyInput | NegocioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Negocio update
   */
  export type NegocioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * The data needed to update a Negocio.
     */
    data: XOR<NegocioUpdateInput, NegocioUncheckedUpdateInput>
    /**
     * Choose, which Negocio to update.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio updateMany
   */
  export type NegocioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Negocios.
     */
    data: XOR<NegocioUpdateManyMutationInput, NegocioUncheckedUpdateManyInput>
    /**
     * Filter which Negocios to update
     */
    where?: NegocioWhereInput
    /**
     * Limit how many Negocios to update.
     */
    limit?: number
  }

  /**
   * Negocio updateManyAndReturn
   */
  export type NegocioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * The data used to update Negocios.
     */
    data: XOR<NegocioUpdateManyMutationInput, NegocioUncheckedUpdateManyInput>
    /**
     * Filter which Negocios to update
     */
    where?: NegocioWhereInput
    /**
     * Limit how many Negocios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Negocio upsert
   */
  export type NegocioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * The filter to search for the Negocio to update in case it exists.
     */
    where: NegocioWhereUniqueInput
    /**
     * In case the Negocio found by the `where` argument doesn't exist, create a new Negocio with this data.
     */
    create: XOR<NegocioCreateInput, NegocioUncheckedCreateInput>
    /**
     * In case the Negocio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NegocioUpdateInput, NegocioUncheckedUpdateInput>
  }

  /**
   * Negocio delete
   */
  export type NegocioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter which Negocio to delete.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio deleteMany
   */
  export type NegocioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Negocios to delete
     */
    where?: NegocioWhereInput
    /**
     * Limit how many Negocios to delete.
     */
    limit?: number
  }

  /**
   * Negocio without action
   */
  export type NegocioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
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


  export const DimensaoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo'
  };

  export type DimensaoScalarFieldEnum = (typeof DimensaoScalarFieldEnum)[keyof typeof DimensaoScalarFieldEnum]


  export const Dimensao_DimensaoScalarFieldEnum: {
    dimensaoAId: 'dimensaoAId',
    dimensaoBId: 'dimensaoBId'
  };

  export type Dimensao_DimensaoScalarFieldEnum = (typeof Dimensao_DimensaoScalarFieldEnum)[keyof typeof Dimensao_DimensaoScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    dimensaoId: 'dimensaoId',
    nome: 'nome',
    coordenador: 'coordenador',
    semestre: 'semestre',
    codigo: 'codigo',
    alunos_matriculados: 'alunos_matriculados',
    alunos_aprovados: 'alunos_aprovados'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    dimensaoId: 'dimensaoId',
    nome: 'nome',
    descricao: 'descricao',
    data_inicio: 'data_inicio',
    duracao: 'duracao',
    custo: 'custo',
    receita: 'receita',
    publico_participante: 'publico_participante',
    qtd_publico: 'qtd_publico',
    equipe: 'equipe',
    coordenadores: 'coordenadores',
    parceiros: 'parceiros'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const MotorScalarFieldEnum: {
    dimensaoId: 'dimensaoId',
    nome: 'nome',
    descricao: 'descricao',
    projetos: 'projetos',
    motor_tipo: 'motor_tipo',
    data_criacao: 'data_criacao',
    lideres: 'lideres',
    equipe: 'equipe',
    qtd_empresas_atendidas: 'qtd_empresas_atendidas',
    faturamento: 'faturamento'
  };

  export type MotorScalarFieldEnum = (typeof MotorScalarFieldEnum)[keyof typeof MotorScalarFieldEnum]


  export const NegocioScalarFieldEnum: {
    dimensaoId: 'dimensaoId',
    nome: 'nome',
    area_atuacao: 'area_atuacao',
    faturamento_anual: 'faturamento_anual',
    data_criacao: 'data_criacao',
    fundadores: 'fundadores',
    porte: 'porte'
  };

  export type NegocioScalarFieldEnum = (typeof NegocioScalarFieldEnum)[keyof typeof NegocioScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type DimensaoWhereInput = {
    AND?: DimensaoWhereInput | DimensaoWhereInput[]
    OR?: DimensaoWhereInput[]
    NOT?: DimensaoWhereInput | DimensaoWhereInput[]
    id?: IntFilter<"Dimensao"> | number
    tipo?: StringFilter<"Dimensao"> | string
    Dimensao_DimensaoA?: Dimensao_DimensaoListRelationFilter
    Dimensao_DimensaoB?: Dimensao_DimensaoListRelationFilter
    Disciplina?: XOR<DisciplinaNullableScalarRelationFilter, DisciplinaWhereInput> | null
    Evento?: XOR<EventoNullableScalarRelationFilter, EventoWhereInput> | null
    Motor?: XOR<MotorNullableScalarRelationFilter, MotorWhereInput> | null
    Negocio?: XOR<NegocioNullableScalarRelationFilter, NegocioWhereInput> | null
  }

  export type DimensaoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    Dimensao_DimensaoA?: Dimensao_DimensaoOrderByRelationAggregateInput
    Dimensao_DimensaoB?: Dimensao_DimensaoOrderByRelationAggregateInput
    Disciplina?: DisciplinaOrderByWithRelationInput
    Evento?: EventoOrderByWithRelationInput
    Motor?: MotorOrderByWithRelationInput
    Negocio?: NegocioOrderByWithRelationInput
  }

  export type DimensaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DimensaoWhereInput | DimensaoWhereInput[]
    OR?: DimensaoWhereInput[]
    NOT?: DimensaoWhereInput | DimensaoWhereInput[]
    tipo?: StringFilter<"Dimensao"> | string
    Dimensao_DimensaoA?: Dimensao_DimensaoListRelationFilter
    Dimensao_DimensaoB?: Dimensao_DimensaoListRelationFilter
    Disciplina?: XOR<DisciplinaNullableScalarRelationFilter, DisciplinaWhereInput> | null
    Evento?: XOR<EventoNullableScalarRelationFilter, EventoWhereInput> | null
    Motor?: XOR<MotorNullableScalarRelationFilter, MotorWhereInput> | null
    Negocio?: XOR<NegocioNullableScalarRelationFilter, NegocioWhereInput> | null
  }, "id">

  export type DimensaoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    _count?: DimensaoCountOrderByAggregateInput
    _avg?: DimensaoAvgOrderByAggregateInput
    _max?: DimensaoMaxOrderByAggregateInput
    _min?: DimensaoMinOrderByAggregateInput
    _sum?: DimensaoSumOrderByAggregateInput
  }

  export type DimensaoScalarWhereWithAggregatesInput = {
    AND?: DimensaoScalarWhereWithAggregatesInput | DimensaoScalarWhereWithAggregatesInput[]
    OR?: DimensaoScalarWhereWithAggregatesInput[]
    NOT?: DimensaoScalarWhereWithAggregatesInput | DimensaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dimensao"> | number
    tipo?: StringWithAggregatesFilter<"Dimensao"> | string
  }

  export type Dimensao_DimensaoWhereInput = {
    AND?: Dimensao_DimensaoWhereInput | Dimensao_DimensaoWhereInput[]
    OR?: Dimensao_DimensaoWhereInput[]
    NOT?: Dimensao_DimensaoWhereInput | Dimensao_DimensaoWhereInput[]
    dimensaoAId?: IntFilter<"Dimensao_Dimensao"> | number
    dimensaoBId?: IntFilter<"Dimensao_Dimensao"> | number
    dimensaoA?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
    dimensaoB?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }

  export type Dimensao_DimensaoOrderByWithRelationInput = {
    dimensaoAId?: SortOrder
    dimensaoBId?: SortOrder
    dimensaoA?: DimensaoOrderByWithRelationInput
    dimensaoB?: DimensaoOrderByWithRelationInput
  }

  export type Dimensao_DimensaoWhereUniqueInput = Prisma.AtLeast<{
    dimensaoAId_dimensaoBId?: Dimensao_DimensaoDimensaoAIdDimensaoBIdCompoundUniqueInput
    AND?: Dimensao_DimensaoWhereInput | Dimensao_DimensaoWhereInput[]
    OR?: Dimensao_DimensaoWhereInput[]
    NOT?: Dimensao_DimensaoWhereInput | Dimensao_DimensaoWhereInput[]
    dimensaoAId?: IntFilter<"Dimensao_Dimensao"> | number
    dimensaoBId?: IntFilter<"Dimensao_Dimensao"> | number
    dimensaoA?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
    dimensaoB?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }, "dimensaoAId_dimensaoBId">

  export type Dimensao_DimensaoOrderByWithAggregationInput = {
    dimensaoAId?: SortOrder
    dimensaoBId?: SortOrder
    _count?: Dimensao_DimensaoCountOrderByAggregateInput
    _avg?: Dimensao_DimensaoAvgOrderByAggregateInput
    _max?: Dimensao_DimensaoMaxOrderByAggregateInput
    _min?: Dimensao_DimensaoMinOrderByAggregateInput
    _sum?: Dimensao_DimensaoSumOrderByAggregateInput
  }

  export type Dimensao_DimensaoScalarWhereWithAggregatesInput = {
    AND?: Dimensao_DimensaoScalarWhereWithAggregatesInput | Dimensao_DimensaoScalarWhereWithAggregatesInput[]
    OR?: Dimensao_DimensaoScalarWhereWithAggregatesInput[]
    NOT?: Dimensao_DimensaoScalarWhereWithAggregatesInput | Dimensao_DimensaoScalarWhereWithAggregatesInput[]
    dimensaoAId?: IntWithAggregatesFilter<"Dimensao_Dimensao"> | number
    dimensaoBId?: IntWithAggregatesFilter<"Dimensao_Dimensao"> | number
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    dimensaoId?: IntFilter<"Disciplina"> | number
    nome?: StringFilter<"Disciplina"> | string
    coordenador?: StringFilter<"Disciplina"> | string
    semestre?: StringFilter<"Disciplina"> | string
    codigo?: StringFilter<"Disciplina"> | string
    alunos_matriculados?: StringNullableListFilter<"Disciplina">
    alunos_aprovados?: StringNullableListFilter<"Disciplina">
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }

  export type DisciplinaOrderByWithRelationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
    alunos_matriculados?: SortOrder
    alunos_aprovados?: SortOrder
    dimensao?: DimensaoOrderByWithRelationInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    dimensaoId?: number
    codigo?: string
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    nome?: StringFilter<"Disciplina"> | string
    coordenador?: StringFilter<"Disciplina"> | string
    semestre?: StringFilter<"Disciplina"> | string
    alunos_matriculados?: StringNullableListFilter<"Disciplina">
    alunos_aprovados?: StringNullableListFilter<"Disciplina">
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }, "dimensaoId" | "dimensaoId" | "codigo">

  export type DisciplinaOrderByWithAggregationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
    alunos_matriculados?: SortOrder
    alunos_aprovados?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _avg?: DisciplinaAvgOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
    _sum?: DisciplinaSumOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    dimensaoId?: IntWithAggregatesFilter<"Disciplina"> | number
    nome?: StringWithAggregatesFilter<"Disciplina"> | string
    coordenador?: StringWithAggregatesFilter<"Disciplina"> | string
    semestre?: StringWithAggregatesFilter<"Disciplina"> | string
    codigo?: StringWithAggregatesFilter<"Disciplina"> | string
    alunos_matriculados?: StringNullableListFilter<"Disciplina">
    alunos_aprovados?: StringNullableListFilter<"Disciplina">
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    dimensaoId?: IntFilter<"Evento"> | number
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    data_inicio?: DateTimeFilter<"Evento"> | Date | string
    duracao?: StringFilter<"Evento"> | string
    custo?: FloatFilter<"Evento"> | number
    receita?: FloatFilter<"Evento"> | number
    publico_participante?: StringNullableListFilter<"Evento">
    qtd_publico?: IntFilter<"Evento"> | number
    equipe?: StringNullableListFilter<"Evento">
    coordenadores?: StringNullableListFilter<"Evento">
    parceiros?: StringNullableListFilter<"Evento">
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }

  export type EventoOrderByWithRelationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    duracao?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    publico_participante?: SortOrder
    qtd_publico?: SortOrder
    equipe?: SortOrder
    coordenadores?: SortOrder
    parceiros?: SortOrder
    dimensao?: DimensaoOrderByWithRelationInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    dimensaoId?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    data_inicio?: DateTimeFilter<"Evento"> | Date | string
    duracao?: StringFilter<"Evento"> | string
    custo?: FloatFilter<"Evento"> | number
    receita?: FloatFilter<"Evento"> | number
    publico_participante?: StringNullableListFilter<"Evento">
    qtd_publico?: IntFilter<"Evento"> | number
    equipe?: StringNullableListFilter<"Evento">
    coordenadores?: StringNullableListFilter<"Evento">
    parceiros?: StringNullableListFilter<"Evento">
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }, "dimensaoId" | "dimensaoId">

  export type EventoOrderByWithAggregationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    duracao?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    publico_participante?: SortOrder
    qtd_publico?: SortOrder
    equipe?: SortOrder
    coordenadores?: SortOrder
    parceiros?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    dimensaoId?: IntWithAggregatesFilter<"Evento"> | number
    nome?: StringWithAggregatesFilter<"Evento"> | string
    descricao?: StringWithAggregatesFilter<"Evento"> | string
    data_inicio?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    duracao?: StringWithAggregatesFilter<"Evento"> | string
    custo?: FloatWithAggregatesFilter<"Evento"> | number
    receita?: FloatWithAggregatesFilter<"Evento"> | number
    publico_participante?: StringNullableListFilter<"Evento">
    qtd_publico?: IntWithAggregatesFilter<"Evento"> | number
    equipe?: StringNullableListFilter<"Evento">
    coordenadores?: StringNullableListFilter<"Evento">
    parceiros?: StringNullableListFilter<"Evento">
  }

  export type MotorWhereInput = {
    AND?: MotorWhereInput | MotorWhereInput[]
    OR?: MotorWhereInput[]
    NOT?: MotorWhereInput | MotorWhereInput[]
    dimensaoId?: IntFilter<"Motor"> | number
    nome?: StringFilter<"Motor"> | string
    descricao?: StringFilter<"Motor"> | string
    projetos?: StringNullableListFilter<"Motor">
    motor_tipo?: StringFilter<"Motor"> | string
    data_criacao?: DateTimeFilter<"Motor"> | Date | string
    lideres?: StringNullableListFilter<"Motor">
    equipe?: StringNullableListFilter<"Motor">
    qtd_empresas_atendidas?: IntFilter<"Motor"> | number
    faturamento?: FloatFilter<"Motor"> | number
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }

  export type MotorOrderByWithRelationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    projetos?: SortOrder
    motor_tipo?: SortOrder
    data_criacao?: SortOrder
    lideres?: SortOrder
    equipe?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
    dimensao?: DimensaoOrderByWithRelationInput
  }

  export type MotorWhereUniqueInput = Prisma.AtLeast<{
    dimensaoId?: number
    AND?: MotorWhereInput | MotorWhereInput[]
    OR?: MotorWhereInput[]
    NOT?: MotorWhereInput | MotorWhereInput[]
    nome?: StringFilter<"Motor"> | string
    descricao?: StringFilter<"Motor"> | string
    projetos?: StringNullableListFilter<"Motor">
    motor_tipo?: StringFilter<"Motor"> | string
    data_criacao?: DateTimeFilter<"Motor"> | Date | string
    lideres?: StringNullableListFilter<"Motor">
    equipe?: StringNullableListFilter<"Motor">
    qtd_empresas_atendidas?: IntFilter<"Motor"> | number
    faturamento?: FloatFilter<"Motor"> | number
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }, "dimensaoId" | "dimensaoId">

  export type MotorOrderByWithAggregationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    projetos?: SortOrder
    motor_tipo?: SortOrder
    data_criacao?: SortOrder
    lideres?: SortOrder
    equipe?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
    _count?: MotorCountOrderByAggregateInput
    _avg?: MotorAvgOrderByAggregateInput
    _max?: MotorMaxOrderByAggregateInput
    _min?: MotorMinOrderByAggregateInput
    _sum?: MotorSumOrderByAggregateInput
  }

  export type MotorScalarWhereWithAggregatesInput = {
    AND?: MotorScalarWhereWithAggregatesInput | MotorScalarWhereWithAggregatesInput[]
    OR?: MotorScalarWhereWithAggregatesInput[]
    NOT?: MotorScalarWhereWithAggregatesInput | MotorScalarWhereWithAggregatesInput[]
    dimensaoId?: IntWithAggregatesFilter<"Motor"> | number
    nome?: StringWithAggregatesFilter<"Motor"> | string
    descricao?: StringWithAggregatesFilter<"Motor"> | string
    projetos?: StringNullableListFilter<"Motor">
    motor_tipo?: StringWithAggregatesFilter<"Motor"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"Motor"> | Date | string
    lideres?: StringNullableListFilter<"Motor">
    equipe?: StringNullableListFilter<"Motor">
    qtd_empresas_atendidas?: IntWithAggregatesFilter<"Motor"> | number
    faturamento?: FloatWithAggregatesFilter<"Motor"> | number
  }

  export type NegocioWhereInput = {
    AND?: NegocioWhereInput | NegocioWhereInput[]
    OR?: NegocioWhereInput[]
    NOT?: NegocioWhereInput | NegocioWhereInput[]
    dimensaoId?: IntFilter<"Negocio"> | number
    nome?: StringFilter<"Negocio"> | string
    area_atuacao?: StringFilter<"Negocio"> | string
    faturamento_anual?: FloatFilter<"Negocio"> | number
    data_criacao?: DateTimeFilter<"Negocio"> | Date | string
    fundadores?: StringNullableListFilter<"Negocio">
    porte?: StringFilter<"Negocio"> | string
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }

  export type NegocioOrderByWithRelationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    data_criacao?: SortOrder
    fundadores?: SortOrder
    porte?: SortOrder
    dimensao?: DimensaoOrderByWithRelationInput
  }

  export type NegocioWhereUniqueInput = Prisma.AtLeast<{
    dimensaoId?: number
    AND?: NegocioWhereInput | NegocioWhereInput[]
    OR?: NegocioWhereInput[]
    NOT?: NegocioWhereInput | NegocioWhereInput[]
    nome?: StringFilter<"Negocio"> | string
    area_atuacao?: StringFilter<"Negocio"> | string
    faturamento_anual?: FloatFilter<"Negocio"> | number
    data_criacao?: DateTimeFilter<"Negocio"> | Date | string
    fundadores?: StringNullableListFilter<"Negocio">
    porte?: StringFilter<"Negocio"> | string
    dimensao?: XOR<DimensaoScalarRelationFilter, DimensaoWhereInput>
  }, "dimensaoId" | "dimensaoId">

  export type NegocioOrderByWithAggregationInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    data_criacao?: SortOrder
    fundadores?: SortOrder
    porte?: SortOrder
    _count?: NegocioCountOrderByAggregateInput
    _avg?: NegocioAvgOrderByAggregateInput
    _max?: NegocioMaxOrderByAggregateInput
    _min?: NegocioMinOrderByAggregateInput
    _sum?: NegocioSumOrderByAggregateInput
  }

  export type NegocioScalarWhereWithAggregatesInput = {
    AND?: NegocioScalarWhereWithAggregatesInput | NegocioScalarWhereWithAggregatesInput[]
    OR?: NegocioScalarWhereWithAggregatesInput[]
    NOT?: NegocioScalarWhereWithAggregatesInput | NegocioScalarWhereWithAggregatesInput[]
    dimensaoId?: IntWithAggregatesFilter<"Negocio"> | number
    nome?: StringWithAggregatesFilter<"Negocio"> | string
    area_atuacao?: StringWithAggregatesFilter<"Negocio"> | string
    faturamento_anual?: FloatWithAggregatesFilter<"Negocio"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"Negocio"> | Date | string
    fundadores?: StringNullableListFilter<"Negocio">
    porte?: StringWithAggregatesFilter<"Negocio"> | string
  }

  export type DimensaoCreateInput = {
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaCreateNestedOneWithoutDimensaoInput
    Evento?: EventoCreateNestedOneWithoutDimensaoInput
    Motor?: MotorCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateInput = {
    id?: number
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaUncheckedCreateNestedOneWithoutDimensaoInput
    Evento?: EventoUncheckedCreateNestedOneWithoutDimensaoInput
    Motor?: MotorUncheckedCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioUncheckedCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUncheckedUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUncheckedUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUncheckedUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUncheckedUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoCreateManyInput = {
    id?: number
    tipo: string
  }

  export type DimensaoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type DimensaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type Dimensao_DimensaoCreateInput = {
    dimensaoA: DimensaoCreateNestedOneWithoutDimensao_DimensaoAInput
    dimensaoB: DimensaoCreateNestedOneWithoutDimensao_DimensaoBInput
  }

  export type Dimensao_DimensaoUncheckedCreateInput = {
    dimensaoAId: number
    dimensaoBId: number
  }

  export type Dimensao_DimensaoUpdateInput = {
    dimensaoA?: DimensaoUpdateOneRequiredWithoutDimensao_DimensaoANestedInput
    dimensaoB?: DimensaoUpdateOneRequiredWithoutDimensao_DimensaoBNestedInput
  }

  export type Dimensao_DimensaoUncheckedUpdateInput = {
    dimensaoAId?: IntFieldUpdateOperationsInput | number
    dimensaoBId?: IntFieldUpdateOperationsInput | number
  }

  export type Dimensao_DimensaoCreateManyInput = {
    dimensaoAId: number
    dimensaoBId: number
  }

  export type Dimensao_DimensaoUpdateManyMutationInput = {

  }

  export type Dimensao_DimensaoUncheckedUpdateManyInput = {
    dimensaoAId?: IntFieldUpdateOperationsInput | number
    dimensaoBId?: IntFieldUpdateOperationsInput | number
  }

  export type DisciplinaCreateInput = {
    nome: string
    coordenador: string
    semestre: string
    codigo: string
    alunos_matriculados?: DisciplinaCreatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaCreatealunos_aprovadosInput | string[]
    dimensao: DimensaoCreateNestedOneWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    dimensaoId: number
    nome: string
    coordenador: string
    semestre: string
    codigo: string
    alunos_matriculados?: DisciplinaCreatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaCreatealunos_aprovadosInput | string[]
  }

  export type DisciplinaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    coordenador?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    alunos_matriculados?: DisciplinaUpdatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaUpdatealunos_aprovadosInput | string[]
    dimensao?: DimensaoUpdateOneRequiredWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    coordenador?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    alunos_matriculados?: DisciplinaUpdatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaUpdatealunos_aprovadosInput | string[]
  }

  export type DisciplinaCreateManyInput = {
    dimensaoId: number
    nome: string
    coordenador: string
    semestre: string
    codigo: string
    alunos_matriculados?: DisciplinaCreatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaCreatealunos_aprovadosInput | string[]
  }

  export type DisciplinaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    coordenador?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    alunos_matriculados?: DisciplinaUpdatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaUpdatealunos_aprovadosInput | string[]
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    coordenador?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    alunos_matriculados?: DisciplinaUpdatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaUpdatealunos_aprovadosInput | string[]
  }

  export type EventoCreateInput = {
    nome: string
    descricao: string
    data_inicio: Date | string
    duracao: string
    custo: number
    receita: number
    publico_participante?: EventoCreatepublico_participanteInput | string[]
    qtd_publico: number
    equipe?: EventoCreateequipeInput | string[]
    coordenadores?: EventoCreatecoordenadoresInput | string[]
    parceiros?: EventoCreateparceirosInput | string[]
    dimensao: DimensaoCreateNestedOneWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    dimensaoId: number
    nome: string
    descricao: string
    data_inicio: Date | string
    duracao: string
    custo: number
    receita: number
    publico_participante?: EventoCreatepublico_participanteInput | string[]
    qtd_publico: number
    equipe?: EventoCreateequipeInput | string[]
    coordenadores?: EventoCreatecoordenadoresInput | string[]
    parceiros?: EventoCreateparceirosInput | string[]
  }

  export type EventoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao?: StringFieldUpdateOperationsInput | string
    custo?: FloatFieldUpdateOperationsInput | number
    receita?: FloatFieldUpdateOperationsInput | number
    publico_participante?: EventoUpdatepublico_participanteInput | string[]
    qtd_publico?: IntFieldUpdateOperationsInput | number
    equipe?: EventoUpdateequipeInput | string[]
    coordenadores?: EventoUpdatecoordenadoresInput | string[]
    parceiros?: EventoUpdateparceirosInput | string[]
    dimensao?: DimensaoUpdateOneRequiredWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao?: StringFieldUpdateOperationsInput | string
    custo?: FloatFieldUpdateOperationsInput | number
    receita?: FloatFieldUpdateOperationsInput | number
    publico_participante?: EventoUpdatepublico_participanteInput | string[]
    qtd_publico?: IntFieldUpdateOperationsInput | number
    equipe?: EventoUpdateequipeInput | string[]
    coordenadores?: EventoUpdatecoordenadoresInput | string[]
    parceiros?: EventoUpdateparceirosInput | string[]
  }

  export type EventoCreateManyInput = {
    dimensaoId: number
    nome: string
    descricao: string
    data_inicio: Date | string
    duracao: string
    custo: number
    receita: number
    publico_participante?: EventoCreatepublico_participanteInput | string[]
    qtd_publico: number
    equipe?: EventoCreateequipeInput | string[]
    coordenadores?: EventoCreatecoordenadoresInput | string[]
    parceiros?: EventoCreateparceirosInput | string[]
  }

  export type EventoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao?: StringFieldUpdateOperationsInput | string
    custo?: FloatFieldUpdateOperationsInput | number
    receita?: FloatFieldUpdateOperationsInput | number
    publico_participante?: EventoUpdatepublico_participanteInput | string[]
    qtd_publico?: IntFieldUpdateOperationsInput | number
    equipe?: EventoUpdateequipeInput | string[]
    coordenadores?: EventoUpdatecoordenadoresInput | string[]
    parceiros?: EventoUpdateparceirosInput | string[]
  }

  export type EventoUncheckedUpdateManyInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao?: StringFieldUpdateOperationsInput | string
    custo?: FloatFieldUpdateOperationsInput | number
    receita?: FloatFieldUpdateOperationsInput | number
    publico_participante?: EventoUpdatepublico_participanteInput | string[]
    qtd_publico?: IntFieldUpdateOperationsInput | number
    equipe?: EventoUpdateequipeInput | string[]
    coordenadores?: EventoUpdatecoordenadoresInput | string[]
    parceiros?: EventoUpdateparceirosInput | string[]
  }

  export type MotorCreateInput = {
    nome: string
    descricao: string
    projetos?: MotorCreateprojetosInput | string[]
    motor_tipo: string
    data_criacao: Date | string
    lideres?: MotorCreatelideresInput | string[]
    equipe?: MotorCreateequipeInput | string[]
    qtd_empresas_atendidas: number
    faturamento: number
    dimensao: DimensaoCreateNestedOneWithoutMotorInput
  }

  export type MotorUncheckedCreateInput = {
    dimensaoId: number
    nome: string
    descricao: string
    projetos?: MotorCreateprojetosInput | string[]
    motor_tipo: string
    data_criacao: Date | string
    lideres?: MotorCreatelideresInput | string[]
    equipe?: MotorCreateequipeInput | string[]
    qtd_empresas_atendidas: number
    faturamento: number
  }

  export type MotorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
    dimensao?: DimensaoUpdateOneRequiredWithoutMotorNestedInput
  }

  export type MotorUncheckedUpdateInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type MotorCreateManyInput = {
    dimensaoId: number
    nome: string
    descricao: string
    projetos?: MotorCreateprojetosInput | string[]
    motor_tipo: string
    data_criacao: Date | string
    lideres?: MotorCreatelideresInput | string[]
    equipe?: MotorCreateequipeInput | string[]
    qtd_empresas_atendidas: number
    faturamento: number
  }

  export type MotorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type MotorUncheckedUpdateManyInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type NegocioCreateInput = {
    nome: string
    area_atuacao: string
    faturamento_anual: number
    data_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
    dimensao: DimensaoCreateNestedOneWithoutNegocioInput
  }

  export type NegocioUncheckedCreateInput = {
    dimensaoId: number
    nome: string
    area_atuacao: string
    faturamento_anual: number
    data_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
  }

  export type NegocioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
    dimensao?: DimensaoUpdateOneRequiredWithoutNegocioNestedInput
  }

  export type NegocioUncheckedUpdateInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
  }

  export type NegocioCreateManyInput = {
    dimensaoId: number
    nome: string
    area_atuacao: string
    faturamento_anual: number
    data_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
  }

  export type NegocioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
  }

  export type NegocioUncheckedUpdateManyInput = {
    dimensaoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
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

  export type Dimensao_DimensaoListRelationFilter = {
    every?: Dimensao_DimensaoWhereInput
    some?: Dimensao_DimensaoWhereInput
    none?: Dimensao_DimensaoWhereInput
  }

  export type DisciplinaNullableScalarRelationFilter = {
    is?: DisciplinaWhereInput | null
    isNot?: DisciplinaWhereInput | null
  }

  export type EventoNullableScalarRelationFilter = {
    is?: EventoWhereInput | null
    isNot?: EventoWhereInput | null
  }

  export type MotorNullableScalarRelationFilter = {
    is?: MotorWhereInput | null
    isNot?: MotorWhereInput | null
  }

  export type NegocioNullableScalarRelationFilter = {
    is?: NegocioWhereInput | null
    isNot?: NegocioWhereInput | null
  }

  export type Dimensao_DimensaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DimensaoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type DimensaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DimensaoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type DimensaoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type DimensaoSumOrderByAggregateInput = {
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

  export type DimensaoScalarRelationFilter = {
    is?: DimensaoWhereInput
    isNot?: DimensaoWhereInput
  }

  export type Dimensao_DimensaoDimensaoAIdDimensaoBIdCompoundUniqueInput = {
    dimensaoAId: number
    dimensaoBId: number
  }

  export type Dimensao_DimensaoCountOrderByAggregateInput = {
    dimensaoAId?: SortOrder
    dimensaoBId?: SortOrder
  }

  export type Dimensao_DimensaoAvgOrderByAggregateInput = {
    dimensaoAId?: SortOrder
    dimensaoBId?: SortOrder
  }

  export type Dimensao_DimensaoMaxOrderByAggregateInput = {
    dimensaoAId?: SortOrder
    dimensaoBId?: SortOrder
  }

  export type Dimensao_DimensaoMinOrderByAggregateInput = {
    dimensaoAId?: SortOrder
    dimensaoBId?: SortOrder
  }

  export type Dimensao_DimensaoSumOrderByAggregateInput = {
    dimensaoAId?: SortOrder
    dimensaoBId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DisciplinaCountOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
    alunos_matriculados?: SortOrder
    alunos_aprovados?: SortOrder
  }

  export type DisciplinaAvgOrderByAggregateInput = {
    dimensaoId?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
  }

  export type DisciplinaSumOrderByAggregateInput = {
    dimensaoId?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EventoCountOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    duracao?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    publico_participante?: SortOrder
    qtd_publico?: SortOrder
    equipe?: SortOrder
    coordenadores?: SortOrder
    parceiros?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    dimensaoId?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    qtd_publico?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    duracao?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    qtd_publico?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    duracao?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    qtd_publico?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    dimensaoId?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    qtd_publico?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MotorCountOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    projetos?: SortOrder
    motor_tipo?: SortOrder
    data_criacao?: SortOrder
    lideres?: SortOrder
    equipe?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type MotorAvgOrderByAggregateInput = {
    dimensaoId?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type MotorMaxOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    motor_tipo?: SortOrder
    data_criacao?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type MotorMinOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    motor_tipo?: SortOrder
    data_criacao?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type MotorSumOrderByAggregateInput = {
    dimensaoId?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type NegocioCountOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    data_criacao?: SortOrder
    fundadores?: SortOrder
    porte?: SortOrder
  }

  export type NegocioAvgOrderByAggregateInput = {
    dimensaoId?: SortOrder
    faturamento_anual?: SortOrder
  }

  export type NegocioMaxOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    data_criacao?: SortOrder
    porte?: SortOrder
  }

  export type NegocioMinOrderByAggregateInput = {
    dimensaoId?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    data_criacao?: SortOrder
    porte?: SortOrder
  }

  export type NegocioSumOrderByAggregateInput = {
    dimensaoId?: SortOrder
    faturamento_anual?: SortOrder
  }

  export type Dimensao_DimensaoCreateNestedManyWithoutDimensaoAInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput> | Dimensao_DimensaoCreateWithoutDimensaoAInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoAInputEnvelope
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
  }

  export type Dimensao_DimensaoCreateNestedManyWithoutDimensaoBInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput> | Dimensao_DimensaoCreateWithoutDimensaoBInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoBInputEnvelope
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
  }

  export type DisciplinaCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<DisciplinaCreateWithoutDimensaoInput, DisciplinaUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutDimensaoInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type EventoCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<EventoCreateWithoutDimensaoInput, EventoUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutDimensaoInput
    connect?: EventoWhereUniqueInput
  }

  export type MotorCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<MotorCreateWithoutDimensaoInput, MotorUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: MotorCreateOrConnectWithoutDimensaoInput
    connect?: MotorWhereUniqueInput
  }

  export type NegocioCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<NegocioCreateWithoutDimensaoInput, NegocioUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutDimensaoInput
    connect?: NegocioWhereUniqueInput
  }

  export type Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoAInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput> | Dimensao_DimensaoCreateWithoutDimensaoAInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoAInputEnvelope
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
  }

  export type Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoBInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput> | Dimensao_DimensaoCreateWithoutDimensaoBInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoBInputEnvelope
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
  }

  export type DisciplinaUncheckedCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<DisciplinaCreateWithoutDimensaoInput, DisciplinaUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutDimensaoInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type EventoUncheckedCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<EventoCreateWithoutDimensaoInput, EventoUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutDimensaoInput
    connect?: EventoWhereUniqueInput
  }

  export type MotorUncheckedCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<MotorCreateWithoutDimensaoInput, MotorUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: MotorCreateOrConnectWithoutDimensaoInput
    connect?: MotorWhereUniqueInput
  }

  export type NegocioUncheckedCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<NegocioCreateWithoutDimensaoInput, NegocioUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutDimensaoInput
    connect?: NegocioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Dimensao_DimensaoUpdateManyWithoutDimensaoANestedInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput> | Dimensao_DimensaoCreateWithoutDimensaoAInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput[]
    upsert?: Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoAInput | Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoAInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoAInputEnvelope
    set?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    disconnect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    delete?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    update?: Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoAInput | Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoAInput[]
    updateMany?: Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoAInput | Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoAInput[]
    deleteMany?: Dimensao_DimensaoScalarWhereInput | Dimensao_DimensaoScalarWhereInput[]
  }

  export type Dimensao_DimensaoUpdateManyWithoutDimensaoBNestedInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput> | Dimensao_DimensaoCreateWithoutDimensaoBInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput[]
    upsert?: Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoBInput | Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoBInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoBInputEnvelope
    set?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    disconnect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    delete?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    update?: Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoBInput | Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoBInput[]
    updateMany?: Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoBInput | Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoBInput[]
    deleteMany?: Dimensao_DimensaoScalarWhereInput | Dimensao_DimensaoScalarWhereInput[]
  }

  export type DisciplinaUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutDimensaoInput, DisciplinaUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutDimensaoInput
    upsert?: DisciplinaUpsertWithoutDimensaoInput
    disconnect?: DisciplinaWhereInput | boolean
    delete?: DisciplinaWhereInput | boolean
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutDimensaoInput, DisciplinaUpdateWithoutDimensaoInput>, DisciplinaUncheckedUpdateWithoutDimensaoInput>
  }

  export type EventoUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<EventoCreateWithoutDimensaoInput, EventoUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutDimensaoInput
    upsert?: EventoUpsertWithoutDimensaoInput
    disconnect?: EventoWhereInput | boolean
    delete?: EventoWhereInput | boolean
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutDimensaoInput, EventoUpdateWithoutDimensaoInput>, EventoUncheckedUpdateWithoutDimensaoInput>
  }

  export type MotorUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<MotorCreateWithoutDimensaoInput, MotorUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: MotorCreateOrConnectWithoutDimensaoInput
    upsert?: MotorUpsertWithoutDimensaoInput
    disconnect?: MotorWhereInput | boolean
    delete?: MotorWhereInput | boolean
    connect?: MotorWhereUniqueInput
    update?: XOR<XOR<MotorUpdateToOneWithWhereWithoutDimensaoInput, MotorUpdateWithoutDimensaoInput>, MotorUncheckedUpdateWithoutDimensaoInput>
  }

  export type NegocioUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<NegocioCreateWithoutDimensaoInput, NegocioUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutDimensaoInput
    upsert?: NegocioUpsertWithoutDimensaoInput
    disconnect?: NegocioWhereInput | boolean
    delete?: NegocioWhereInput | boolean
    connect?: NegocioWhereUniqueInput
    update?: XOR<XOR<NegocioUpdateToOneWithWhereWithoutDimensaoInput, NegocioUpdateWithoutDimensaoInput>, NegocioUncheckedUpdateWithoutDimensaoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoANestedInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput> | Dimensao_DimensaoCreateWithoutDimensaoAInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput[]
    upsert?: Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoAInput | Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoAInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoAInputEnvelope
    set?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    disconnect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    delete?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    update?: Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoAInput | Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoAInput[]
    updateMany?: Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoAInput | Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoAInput[]
    deleteMany?: Dimensao_DimensaoScalarWhereInput | Dimensao_DimensaoScalarWhereInput[]
  }

  export type Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBNestedInput = {
    create?: XOR<Dimensao_DimensaoCreateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput> | Dimensao_DimensaoCreateWithoutDimensaoBInput[] | Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput[]
    connectOrCreate?: Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput | Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput[]
    upsert?: Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoBInput | Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoBInput[]
    createMany?: Dimensao_DimensaoCreateManyDimensaoBInputEnvelope
    set?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    disconnect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    delete?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    connect?: Dimensao_DimensaoWhereUniqueInput | Dimensao_DimensaoWhereUniqueInput[]
    update?: Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoBInput | Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoBInput[]
    updateMany?: Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoBInput | Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoBInput[]
    deleteMany?: Dimensao_DimensaoScalarWhereInput | Dimensao_DimensaoScalarWhereInput[]
  }

  export type DisciplinaUncheckedUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutDimensaoInput, DisciplinaUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutDimensaoInput
    upsert?: DisciplinaUpsertWithoutDimensaoInput
    disconnect?: DisciplinaWhereInput | boolean
    delete?: DisciplinaWhereInput | boolean
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutDimensaoInput, DisciplinaUpdateWithoutDimensaoInput>, DisciplinaUncheckedUpdateWithoutDimensaoInput>
  }

  export type EventoUncheckedUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<EventoCreateWithoutDimensaoInput, EventoUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutDimensaoInput
    upsert?: EventoUpsertWithoutDimensaoInput
    disconnect?: EventoWhereInput | boolean
    delete?: EventoWhereInput | boolean
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutDimensaoInput, EventoUpdateWithoutDimensaoInput>, EventoUncheckedUpdateWithoutDimensaoInput>
  }

  export type MotorUncheckedUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<MotorCreateWithoutDimensaoInput, MotorUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: MotorCreateOrConnectWithoutDimensaoInput
    upsert?: MotorUpsertWithoutDimensaoInput
    disconnect?: MotorWhereInput | boolean
    delete?: MotorWhereInput | boolean
    connect?: MotorWhereUniqueInput
    update?: XOR<XOR<MotorUpdateToOneWithWhereWithoutDimensaoInput, MotorUpdateWithoutDimensaoInput>, MotorUncheckedUpdateWithoutDimensaoInput>
  }

  export type NegocioUncheckedUpdateOneWithoutDimensaoNestedInput = {
    create?: XOR<NegocioCreateWithoutDimensaoInput, NegocioUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutDimensaoInput
    upsert?: NegocioUpsertWithoutDimensaoInput
    disconnect?: NegocioWhereInput | boolean
    delete?: NegocioWhereInput | boolean
    connect?: NegocioWhereUniqueInput
    update?: XOR<XOR<NegocioUpdateToOneWithWhereWithoutDimensaoInput, NegocioUpdateWithoutDimensaoInput>, NegocioUncheckedUpdateWithoutDimensaoInput>
  }

  export type DimensaoCreateNestedOneWithoutDimensao_DimensaoAInput = {
    create?: XOR<DimensaoCreateWithoutDimensao_DimensaoAInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoAInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutDimensao_DimensaoAInput
    connect?: DimensaoWhereUniqueInput
  }

  export type DimensaoCreateNestedOneWithoutDimensao_DimensaoBInput = {
    create?: XOR<DimensaoCreateWithoutDimensao_DimensaoBInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoBInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutDimensao_DimensaoBInput
    connect?: DimensaoWhereUniqueInput
  }

  export type DimensaoUpdateOneRequiredWithoutDimensao_DimensaoANestedInput = {
    create?: XOR<DimensaoCreateWithoutDimensao_DimensaoAInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoAInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutDimensao_DimensaoAInput
    upsert?: DimensaoUpsertWithoutDimensao_DimensaoAInput
    connect?: DimensaoWhereUniqueInput
    update?: XOR<XOR<DimensaoUpdateToOneWithWhereWithoutDimensao_DimensaoAInput, DimensaoUpdateWithoutDimensao_DimensaoAInput>, DimensaoUncheckedUpdateWithoutDimensao_DimensaoAInput>
  }

  export type DimensaoUpdateOneRequiredWithoutDimensao_DimensaoBNestedInput = {
    create?: XOR<DimensaoCreateWithoutDimensao_DimensaoBInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoBInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutDimensao_DimensaoBInput
    upsert?: DimensaoUpsertWithoutDimensao_DimensaoBInput
    connect?: DimensaoWhereUniqueInput
    update?: XOR<XOR<DimensaoUpdateToOneWithWhereWithoutDimensao_DimensaoBInput, DimensaoUpdateWithoutDimensao_DimensaoBInput>, DimensaoUncheckedUpdateWithoutDimensao_DimensaoBInput>
  }

  export type DisciplinaCreatealunos_matriculadosInput = {
    set: string[]
  }

  export type DisciplinaCreatealunos_aprovadosInput = {
    set: string[]
  }

  export type DimensaoCreateNestedOneWithoutDisciplinaInput = {
    create?: XOR<DimensaoCreateWithoutDisciplinaInput, DimensaoUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutDisciplinaInput
    connect?: DimensaoWhereUniqueInput
  }

  export type DisciplinaUpdatealunos_matriculadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DisciplinaUpdatealunos_aprovadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DimensaoUpdateOneRequiredWithoutDisciplinaNestedInput = {
    create?: XOR<DimensaoCreateWithoutDisciplinaInput, DimensaoUncheckedCreateWithoutDisciplinaInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutDisciplinaInput
    upsert?: DimensaoUpsertWithoutDisciplinaInput
    connect?: DimensaoWhereUniqueInput
    update?: XOR<XOR<DimensaoUpdateToOneWithWhereWithoutDisciplinaInput, DimensaoUpdateWithoutDisciplinaInput>, DimensaoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type EventoCreatepublico_participanteInput = {
    set: string[]
  }

  export type EventoCreateequipeInput = {
    set: string[]
  }

  export type EventoCreatecoordenadoresInput = {
    set: string[]
  }

  export type EventoCreateparceirosInput = {
    set: string[]
  }

  export type DimensaoCreateNestedOneWithoutEventoInput = {
    create?: XOR<DimensaoCreateWithoutEventoInput, DimensaoUncheckedCreateWithoutEventoInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutEventoInput
    connect?: DimensaoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventoUpdatepublico_participanteInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventoUpdateequipeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventoUpdatecoordenadoresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventoUpdateparceirosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DimensaoUpdateOneRequiredWithoutEventoNestedInput = {
    create?: XOR<DimensaoCreateWithoutEventoInput, DimensaoUncheckedCreateWithoutEventoInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutEventoInput
    upsert?: DimensaoUpsertWithoutEventoInput
    connect?: DimensaoWhereUniqueInput
    update?: XOR<XOR<DimensaoUpdateToOneWithWhereWithoutEventoInput, DimensaoUpdateWithoutEventoInput>, DimensaoUncheckedUpdateWithoutEventoInput>
  }

  export type MotorCreateprojetosInput = {
    set: string[]
  }

  export type MotorCreatelideresInput = {
    set: string[]
  }

  export type MotorCreateequipeInput = {
    set: string[]
  }

  export type DimensaoCreateNestedOneWithoutMotorInput = {
    create?: XOR<DimensaoCreateWithoutMotorInput, DimensaoUncheckedCreateWithoutMotorInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutMotorInput
    connect?: DimensaoWhereUniqueInput
  }

  export type MotorUpdateprojetosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MotorUpdatelideresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MotorUpdateequipeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DimensaoUpdateOneRequiredWithoutMotorNestedInput = {
    create?: XOR<DimensaoCreateWithoutMotorInput, DimensaoUncheckedCreateWithoutMotorInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutMotorInput
    upsert?: DimensaoUpsertWithoutMotorInput
    connect?: DimensaoWhereUniqueInput
    update?: XOR<XOR<DimensaoUpdateToOneWithWhereWithoutMotorInput, DimensaoUpdateWithoutMotorInput>, DimensaoUncheckedUpdateWithoutMotorInput>
  }

  export type NegocioCreatefundadoresInput = {
    set: string[]
  }

  export type DimensaoCreateNestedOneWithoutNegocioInput = {
    create?: XOR<DimensaoCreateWithoutNegocioInput, DimensaoUncheckedCreateWithoutNegocioInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutNegocioInput
    connect?: DimensaoWhereUniqueInput
  }

  export type NegocioUpdatefundadoresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DimensaoUpdateOneRequiredWithoutNegocioNestedInput = {
    create?: XOR<DimensaoCreateWithoutNegocioInput, DimensaoUncheckedCreateWithoutNegocioInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutNegocioInput
    upsert?: DimensaoUpsertWithoutNegocioInput
    connect?: DimensaoWhereUniqueInput
    update?: XOR<XOR<DimensaoUpdateToOneWithWhereWithoutNegocioInput, DimensaoUpdateWithoutNegocioInput>, DimensaoUncheckedUpdateWithoutNegocioInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Dimensao_DimensaoCreateWithoutDimensaoAInput = {
    dimensaoB: DimensaoCreateNestedOneWithoutDimensao_DimensaoBInput
  }

  export type Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput = {
    dimensaoBId: number
  }

  export type Dimensao_DimensaoCreateOrConnectWithoutDimensaoAInput = {
    where: Dimensao_DimensaoWhereUniqueInput
    create: XOR<Dimensao_DimensaoCreateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput>
  }

  export type Dimensao_DimensaoCreateManyDimensaoAInputEnvelope = {
    data: Dimensao_DimensaoCreateManyDimensaoAInput | Dimensao_DimensaoCreateManyDimensaoAInput[]
    skipDuplicates?: boolean
  }

  export type Dimensao_DimensaoCreateWithoutDimensaoBInput = {
    dimensaoA: DimensaoCreateNestedOneWithoutDimensao_DimensaoAInput
  }

  export type Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput = {
    dimensaoAId: number
  }

  export type Dimensao_DimensaoCreateOrConnectWithoutDimensaoBInput = {
    where: Dimensao_DimensaoWhereUniqueInput
    create: XOR<Dimensao_DimensaoCreateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput>
  }

  export type Dimensao_DimensaoCreateManyDimensaoBInputEnvelope = {
    data: Dimensao_DimensaoCreateManyDimensaoBInput | Dimensao_DimensaoCreateManyDimensaoBInput[]
    skipDuplicates?: boolean
  }

  export type DisciplinaCreateWithoutDimensaoInput = {
    nome: string
    coordenador: string
    semestre: string
    codigo: string
    alunos_matriculados?: DisciplinaCreatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaCreatealunos_aprovadosInput | string[]
  }

  export type DisciplinaUncheckedCreateWithoutDimensaoInput = {
    nome: string
    coordenador: string
    semestre: string
    codigo: string
    alunos_matriculados?: DisciplinaCreatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaCreatealunos_aprovadosInput | string[]
  }

  export type DisciplinaCreateOrConnectWithoutDimensaoInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutDimensaoInput, DisciplinaUncheckedCreateWithoutDimensaoInput>
  }

  export type EventoCreateWithoutDimensaoInput = {
    nome: string
    descricao: string
    data_inicio: Date | string
    duracao: string
    custo: number
    receita: number
    publico_participante?: EventoCreatepublico_participanteInput | string[]
    qtd_publico: number
    equipe?: EventoCreateequipeInput | string[]
    coordenadores?: EventoCreatecoordenadoresInput | string[]
    parceiros?: EventoCreateparceirosInput | string[]
  }

  export type EventoUncheckedCreateWithoutDimensaoInput = {
    nome: string
    descricao: string
    data_inicio: Date | string
    duracao: string
    custo: number
    receita: number
    publico_participante?: EventoCreatepublico_participanteInput | string[]
    qtd_publico: number
    equipe?: EventoCreateequipeInput | string[]
    coordenadores?: EventoCreatecoordenadoresInput | string[]
    parceiros?: EventoCreateparceirosInput | string[]
  }

  export type EventoCreateOrConnectWithoutDimensaoInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutDimensaoInput, EventoUncheckedCreateWithoutDimensaoInput>
  }

  export type MotorCreateWithoutDimensaoInput = {
    nome: string
    descricao: string
    projetos?: MotorCreateprojetosInput | string[]
    motor_tipo: string
    data_criacao: Date | string
    lideres?: MotorCreatelideresInput | string[]
    equipe?: MotorCreateequipeInput | string[]
    qtd_empresas_atendidas: number
    faturamento: number
  }

  export type MotorUncheckedCreateWithoutDimensaoInput = {
    nome: string
    descricao: string
    projetos?: MotorCreateprojetosInput | string[]
    motor_tipo: string
    data_criacao: Date | string
    lideres?: MotorCreatelideresInput | string[]
    equipe?: MotorCreateequipeInput | string[]
    qtd_empresas_atendidas: number
    faturamento: number
  }

  export type MotorCreateOrConnectWithoutDimensaoInput = {
    where: MotorWhereUniqueInput
    create: XOR<MotorCreateWithoutDimensaoInput, MotorUncheckedCreateWithoutDimensaoInput>
  }

  export type NegocioCreateWithoutDimensaoInput = {
    nome: string
    area_atuacao: string
    faturamento_anual: number
    data_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
  }

  export type NegocioUncheckedCreateWithoutDimensaoInput = {
    nome: string
    area_atuacao: string
    faturamento_anual: number
    data_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
  }

  export type NegocioCreateOrConnectWithoutDimensaoInput = {
    where: NegocioWhereUniqueInput
    create: XOR<NegocioCreateWithoutDimensaoInput, NegocioUncheckedCreateWithoutDimensaoInput>
  }

  export type Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoAInput = {
    where: Dimensao_DimensaoWhereUniqueInput
    update: XOR<Dimensao_DimensaoUpdateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedUpdateWithoutDimensaoAInput>
    create: XOR<Dimensao_DimensaoCreateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoAInput>
  }

  export type Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoAInput = {
    where: Dimensao_DimensaoWhereUniqueInput
    data: XOR<Dimensao_DimensaoUpdateWithoutDimensaoAInput, Dimensao_DimensaoUncheckedUpdateWithoutDimensaoAInput>
  }

  export type Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoAInput = {
    where: Dimensao_DimensaoScalarWhereInput
    data: XOR<Dimensao_DimensaoUpdateManyMutationInput, Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoAInput>
  }

  export type Dimensao_DimensaoScalarWhereInput = {
    AND?: Dimensao_DimensaoScalarWhereInput | Dimensao_DimensaoScalarWhereInput[]
    OR?: Dimensao_DimensaoScalarWhereInput[]
    NOT?: Dimensao_DimensaoScalarWhereInput | Dimensao_DimensaoScalarWhereInput[]
    dimensaoAId?: IntFilter<"Dimensao_Dimensao"> | number
    dimensaoBId?: IntFilter<"Dimensao_Dimensao"> | number
  }

  export type Dimensao_DimensaoUpsertWithWhereUniqueWithoutDimensaoBInput = {
    where: Dimensao_DimensaoWhereUniqueInput
    update: XOR<Dimensao_DimensaoUpdateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedUpdateWithoutDimensaoBInput>
    create: XOR<Dimensao_DimensaoCreateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedCreateWithoutDimensaoBInput>
  }

  export type Dimensao_DimensaoUpdateWithWhereUniqueWithoutDimensaoBInput = {
    where: Dimensao_DimensaoWhereUniqueInput
    data: XOR<Dimensao_DimensaoUpdateWithoutDimensaoBInput, Dimensao_DimensaoUncheckedUpdateWithoutDimensaoBInput>
  }

  export type Dimensao_DimensaoUpdateManyWithWhereWithoutDimensaoBInput = {
    where: Dimensao_DimensaoScalarWhereInput
    data: XOR<Dimensao_DimensaoUpdateManyMutationInput, Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBInput>
  }

  export type DisciplinaUpsertWithoutDimensaoInput = {
    update: XOR<DisciplinaUpdateWithoutDimensaoInput, DisciplinaUncheckedUpdateWithoutDimensaoInput>
    create: XOR<DisciplinaCreateWithoutDimensaoInput, DisciplinaUncheckedCreateWithoutDimensaoInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutDimensaoInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutDimensaoInput, DisciplinaUncheckedUpdateWithoutDimensaoInput>
  }

  export type DisciplinaUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    coordenador?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    alunos_matriculados?: DisciplinaUpdatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaUpdatealunos_aprovadosInput | string[]
  }

  export type DisciplinaUncheckedUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    coordenador?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    alunos_matriculados?: DisciplinaUpdatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaUpdatealunos_aprovadosInput | string[]
  }

  export type EventoUpsertWithoutDimensaoInput = {
    update: XOR<EventoUpdateWithoutDimensaoInput, EventoUncheckedUpdateWithoutDimensaoInput>
    create: XOR<EventoCreateWithoutDimensaoInput, EventoUncheckedCreateWithoutDimensaoInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutDimensaoInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutDimensaoInput, EventoUncheckedUpdateWithoutDimensaoInput>
  }

  export type EventoUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao?: StringFieldUpdateOperationsInput | string
    custo?: FloatFieldUpdateOperationsInput | number
    receita?: FloatFieldUpdateOperationsInput | number
    publico_participante?: EventoUpdatepublico_participanteInput | string[]
    qtd_publico?: IntFieldUpdateOperationsInput | number
    equipe?: EventoUpdateequipeInput | string[]
    coordenadores?: EventoUpdatecoordenadoresInput | string[]
    parceiros?: EventoUpdateparceirosInput | string[]
  }

  export type EventoUncheckedUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao?: StringFieldUpdateOperationsInput | string
    custo?: FloatFieldUpdateOperationsInput | number
    receita?: FloatFieldUpdateOperationsInput | number
    publico_participante?: EventoUpdatepublico_participanteInput | string[]
    qtd_publico?: IntFieldUpdateOperationsInput | number
    equipe?: EventoUpdateequipeInput | string[]
    coordenadores?: EventoUpdatecoordenadoresInput | string[]
    parceiros?: EventoUpdateparceirosInput | string[]
  }

  export type MotorUpsertWithoutDimensaoInput = {
    update: XOR<MotorUpdateWithoutDimensaoInput, MotorUncheckedUpdateWithoutDimensaoInput>
    create: XOR<MotorCreateWithoutDimensaoInput, MotorUncheckedCreateWithoutDimensaoInput>
    where?: MotorWhereInput
  }

  export type MotorUpdateToOneWithWhereWithoutDimensaoInput = {
    where?: MotorWhereInput
    data: XOR<MotorUpdateWithoutDimensaoInput, MotorUncheckedUpdateWithoutDimensaoInput>
  }

  export type MotorUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type MotorUncheckedUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type NegocioUpsertWithoutDimensaoInput = {
    update: XOR<NegocioUpdateWithoutDimensaoInput, NegocioUncheckedUpdateWithoutDimensaoInput>
    create: XOR<NegocioCreateWithoutDimensaoInput, NegocioUncheckedCreateWithoutDimensaoInput>
    where?: NegocioWhereInput
  }

  export type NegocioUpdateToOneWithWhereWithoutDimensaoInput = {
    where?: NegocioWhereInput
    data: XOR<NegocioUpdateWithoutDimensaoInput, NegocioUncheckedUpdateWithoutDimensaoInput>
  }

  export type NegocioUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
  }

  export type NegocioUncheckedUpdateWithoutDimensaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
  }

  export type DimensaoCreateWithoutDimensao_DimensaoAInput = {
    tipo: string
    Dimensao_DimensaoB?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaCreateNestedOneWithoutDimensaoInput
    Evento?: EventoCreateNestedOneWithoutDimensaoInput
    Motor?: MotorCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateWithoutDimensao_DimensaoAInput = {
    id?: number
    tipo: string
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaUncheckedCreateNestedOneWithoutDimensaoInput
    Evento?: EventoUncheckedCreateNestedOneWithoutDimensaoInput
    Motor?: MotorUncheckedCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioUncheckedCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoCreateOrConnectWithoutDimensao_DimensaoAInput = {
    where: DimensaoWhereUniqueInput
    create: XOR<DimensaoCreateWithoutDimensao_DimensaoAInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoAInput>
  }

  export type DimensaoCreateWithoutDimensao_DimensaoBInput = {
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoAInput
    Disciplina?: DisciplinaCreateNestedOneWithoutDimensaoInput
    Evento?: EventoCreateNestedOneWithoutDimensaoInput
    Motor?: MotorCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateWithoutDimensao_DimensaoBInput = {
    id?: number
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoAInput
    Disciplina?: DisciplinaUncheckedCreateNestedOneWithoutDimensaoInput
    Evento?: EventoUncheckedCreateNestedOneWithoutDimensaoInput
    Motor?: MotorUncheckedCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioUncheckedCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoCreateOrConnectWithoutDimensao_DimensaoBInput = {
    where: DimensaoWhereUniqueInput
    create: XOR<DimensaoCreateWithoutDimensao_DimensaoBInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoBInput>
  }

  export type DimensaoUpsertWithoutDimensao_DimensaoAInput = {
    update: XOR<DimensaoUpdateWithoutDimensao_DimensaoAInput, DimensaoUncheckedUpdateWithoutDimensao_DimensaoAInput>
    create: XOR<DimensaoCreateWithoutDimensao_DimensaoAInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoAInput>
    where?: DimensaoWhereInput
  }

  export type DimensaoUpdateToOneWithWhereWithoutDimensao_DimensaoAInput = {
    where?: DimensaoWhereInput
    data: XOR<DimensaoUpdateWithoutDimensao_DimensaoAInput, DimensaoUncheckedUpdateWithoutDimensao_DimensaoAInput>
  }

  export type DimensaoUpdateWithoutDimensao_DimensaoAInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoB?: Dimensao_DimensaoUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUncheckedUpdateWithoutDimensao_DimensaoAInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUncheckedUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUncheckedUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUncheckedUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUncheckedUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUpsertWithoutDimensao_DimensaoBInput = {
    update: XOR<DimensaoUpdateWithoutDimensao_DimensaoBInput, DimensaoUncheckedUpdateWithoutDimensao_DimensaoBInput>
    create: XOR<DimensaoCreateWithoutDimensao_DimensaoBInput, DimensaoUncheckedCreateWithoutDimensao_DimensaoBInput>
    where?: DimensaoWhereInput
  }

  export type DimensaoUpdateToOneWithWhereWithoutDimensao_DimensaoBInput = {
    where?: DimensaoWhereInput
    data: XOR<DimensaoUpdateWithoutDimensao_DimensaoBInput, DimensaoUncheckedUpdateWithoutDimensao_DimensaoBInput>
  }

  export type DimensaoUpdateWithoutDimensao_DimensaoBInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUpdateManyWithoutDimensaoANestedInput
    Disciplina?: DisciplinaUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUncheckedUpdateWithoutDimensao_DimensaoBInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoANestedInput
    Disciplina?: DisciplinaUncheckedUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUncheckedUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUncheckedUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUncheckedUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoCreateWithoutDisciplinaInput = {
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoBInput
    Evento?: EventoCreateNestedOneWithoutDimensaoInput
    Motor?: MotorCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateWithoutDisciplinaInput = {
    id?: number
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoBInput
    Evento?: EventoUncheckedCreateNestedOneWithoutDimensaoInput
    Motor?: MotorUncheckedCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioUncheckedCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoCreateOrConnectWithoutDisciplinaInput = {
    where: DimensaoWhereUniqueInput
    create: XOR<DimensaoCreateWithoutDisciplinaInput, DimensaoUncheckedCreateWithoutDisciplinaInput>
  }

  export type DimensaoUpsertWithoutDisciplinaInput = {
    update: XOR<DimensaoUpdateWithoutDisciplinaInput, DimensaoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<DimensaoCreateWithoutDisciplinaInput, DimensaoUncheckedCreateWithoutDisciplinaInput>
    where?: DimensaoWhereInput
  }

  export type DimensaoUpdateToOneWithWhereWithoutDisciplinaInput = {
    where?: DimensaoWhereInput
    data: XOR<DimensaoUpdateWithoutDisciplinaInput, DimensaoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type DimensaoUpdateWithoutDisciplinaInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUpdateManyWithoutDimensaoBNestedInput
    Evento?: EventoUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUncheckedUpdateWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBNestedInput
    Evento?: EventoUncheckedUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUncheckedUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUncheckedUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoCreateWithoutEventoInput = {
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaCreateNestedOneWithoutDimensaoInput
    Motor?: MotorCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateWithoutEventoInput = {
    id?: number
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaUncheckedCreateNestedOneWithoutDimensaoInput
    Motor?: MotorUncheckedCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioUncheckedCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoCreateOrConnectWithoutEventoInput = {
    where: DimensaoWhereUniqueInput
    create: XOR<DimensaoCreateWithoutEventoInput, DimensaoUncheckedCreateWithoutEventoInput>
  }

  export type DimensaoUpsertWithoutEventoInput = {
    update: XOR<DimensaoUpdateWithoutEventoInput, DimensaoUncheckedUpdateWithoutEventoInput>
    create: XOR<DimensaoCreateWithoutEventoInput, DimensaoUncheckedCreateWithoutEventoInput>
    where?: DimensaoWhereInput
  }

  export type DimensaoUpdateToOneWithWhereWithoutEventoInput = {
    where?: DimensaoWhereInput
    data: XOR<DimensaoUpdateWithoutEventoInput, DimensaoUncheckedUpdateWithoutEventoInput>
  }

  export type DimensaoUpdateWithoutEventoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUncheckedUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUncheckedUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUncheckedUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoCreateWithoutMotorInput = {
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaCreateNestedOneWithoutDimensaoInput
    Evento?: EventoCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateWithoutMotorInput = {
    id?: number
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaUncheckedCreateNestedOneWithoutDimensaoInput
    Evento?: EventoUncheckedCreateNestedOneWithoutDimensaoInput
    Negocio?: NegocioUncheckedCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoCreateOrConnectWithoutMotorInput = {
    where: DimensaoWhereUniqueInput
    create: XOR<DimensaoCreateWithoutMotorInput, DimensaoUncheckedCreateWithoutMotorInput>
  }

  export type DimensaoUpsertWithoutMotorInput = {
    update: XOR<DimensaoUpdateWithoutMotorInput, DimensaoUncheckedUpdateWithoutMotorInput>
    create: XOR<DimensaoCreateWithoutMotorInput, DimensaoUncheckedCreateWithoutMotorInput>
    where?: DimensaoWhereInput
  }

  export type DimensaoUpdateToOneWithWhereWithoutMotorInput = {
    where?: DimensaoWhereInput
    data: XOR<DimensaoUpdateWithoutMotorInput, DimensaoUncheckedUpdateWithoutMotorInput>
  }

  export type DimensaoUpdateWithoutMotorInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUncheckedUpdateWithoutMotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUncheckedUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUncheckedUpdateOneWithoutDimensaoNestedInput
    Negocio?: NegocioUncheckedUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoCreateWithoutNegocioInput = {
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaCreateNestedOneWithoutDimensaoInput
    Evento?: EventoCreateNestedOneWithoutDimensaoInput
    Motor?: MotorCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateWithoutNegocioInput = {
    id?: number
    tipo: string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoAInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedCreateNestedManyWithoutDimensaoBInput
    Disciplina?: DisciplinaUncheckedCreateNestedOneWithoutDimensaoInput
    Evento?: EventoUncheckedCreateNestedOneWithoutDimensaoInput
    Motor?: MotorUncheckedCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoCreateOrConnectWithoutNegocioInput = {
    where: DimensaoWhereUniqueInput
    create: XOR<DimensaoCreateWithoutNegocioInput, DimensaoUncheckedCreateWithoutNegocioInput>
  }

  export type DimensaoUpsertWithoutNegocioInput = {
    update: XOR<DimensaoUpdateWithoutNegocioInput, DimensaoUncheckedUpdateWithoutNegocioInput>
    create: XOR<DimensaoCreateWithoutNegocioInput, DimensaoUncheckedCreateWithoutNegocioInput>
    where?: DimensaoWhereInput
  }

  export type DimensaoUpdateToOneWithWhereWithoutNegocioInput = {
    where?: DimensaoWhereInput
    data: XOR<DimensaoUpdateWithoutNegocioInput, DimensaoUncheckedUpdateWithoutNegocioInput>
  }

  export type DimensaoUpdateWithoutNegocioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUpdateOneWithoutDimensaoNestedInput
  }

  export type DimensaoUncheckedUpdateWithoutNegocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    Dimensao_DimensaoA?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoANestedInput
    Dimensao_DimensaoB?: Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBNestedInput
    Disciplina?: DisciplinaUncheckedUpdateOneWithoutDimensaoNestedInput
    Evento?: EventoUncheckedUpdateOneWithoutDimensaoNestedInput
    Motor?: MotorUncheckedUpdateOneWithoutDimensaoNestedInput
  }

  export type Dimensao_DimensaoCreateManyDimensaoAInput = {
    dimensaoBId: number
  }

  export type Dimensao_DimensaoCreateManyDimensaoBInput = {
    dimensaoAId: number
  }

  export type Dimensao_DimensaoUpdateWithoutDimensaoAInput = {
    dimensaoB?: DimensaoUpdateOneRequiredWithoutDimensao_DimensaoBNestedInput
  }

  export type Dimensao_DimensaoUncheckedUpdateWithoutDimensaoAInput = {
    dimensaoBId?: IntFieldUpdateOperationsInput | number
  }

  export type Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoAInput = {
    dimensaoBId?: IntFieldUpdateOperationsInput | number
  }

  export type Dimensao_DimensaoUpdateWithoutDimensaoBInput = {
    dimensaoA?: DimensaoUpdateOneRequiredWithoutDimensao_DimensaoANestedInput
  }

  export type Dimensao_DimensaoUncheckedUpdateWithoutDimensaoBInput = {
    dimensaoAId?: IntFieldUpdateOperationsInput | number
  }

  export type Dimensao_DimensaoUncheckedUpdateManyWithoutDimensaoBInput = {
    dimensaoAId?: IntFieldUpdateOperationsInput | number
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