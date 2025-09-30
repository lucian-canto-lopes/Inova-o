
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
 * // Fetch zero or more Disciplinas
 * const disciplinas = await prisma.disciplina.findMany()
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
   * // Fetch zero or more Disciplinas
   * const disciplinas = await prisma.disciplina.findMany()
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      modelProps: "disciplina" | "evento" | "motor" | "negocio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
   * Models
   */

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
    id: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    id: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    coordenador: string | null
    semestre: string | null
    codigo: string | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    coordenador: string | null
    semestre: string | null
    codigo: string | null
  }

  export type DisciplinaCountAggregateOutputType = {
    id: number
    nome: number
    coordenador: number
    semestre: number
    codigo: number
    alunos_matriculados: number
    alunos_aprovados: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    id?: true
  }

  export type DisciplinaSumAggregateInputType = {
    id?: true
  }

  export type DisciplinaMinAggregateInputType = {
    id?: true
    nome?: true
    coordenador?: true
    semestre?: true
    codigo?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    id?: true
    nome?: true
    coordenador?: true
    semestre?: true
    codigo?: true
  }

  export type DisciplinaCountAggregateInputType = {
    id?: true
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
    id: number
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
    id?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectScalar = {
    id?: boolean
    nome?: boolean
    coordenador?: boolean
    semestre?: boolean
    codigo?: boolean
    alunos_matriculados?: boolean
    alunos_aprovados?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "coordenador" | "semestre" | "codigo" | "alunos_matriculados" | "alunos_aprovados", ExtArgs["result"]["disciplina"]>

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
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
     * // Only select the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.findMany({ select: { id: true } })
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
     * // Create many Disciplinas and only return the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Disciplinas and only return the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.updateManyAndReturn({
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
    readonly id: FieldRef<"Disciplina", 'Int'>
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
    id: number | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    duracao: string | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    data_inicio: Date | null
    duracao: string | null
    custo: number | null
    receita: number | null
    qtd_publico: number | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
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
    id?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    duracao?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    data_inicio?: true
    duracao?: true
    custo?: true
    receita?: true
    qtd_publico?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
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
    id: number
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
    id?: boolean
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
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
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

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "data_inicio" | "duracao" | "custo" | "receita" | "publico_participante" | "qtd_publico" | "equipe" | "coordenadores" | "parceiros", ExtArgs["result"]["evento"]>

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
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
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
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
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
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
    readonly id: FieldRef<"Evento", 'Int'>
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
    id: number | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorSumAggregateOutputType = {
    id: number | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    motor_tipo: string | null
    data_criacao: string | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    motor_tipo: string | null
    data_criacao: string | null
    qtd_empresas_atendidas: number | null
    faturamento: number | null
  }

  export type MotorCountAggregateOutputType = {
    id: number
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
    id?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorSumAggregateInputType = {
    id?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    motor_tipo?: true
    data_criacao?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    motor_tipo?: true
    data_criacao?: true
    qtd_empresas_atendidas?: true
    faturamento?: true
  }

  export type MotorCountAggregateInputType = {
    id?: true
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
    id: number
    nome: string
    descricao: string
    projetos: string[]
    motor_tipo: string
    data_criacao: string
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
    id?: boolean
    nome?: boolean
    descricao?: boolean
    projetos?: boolean
    motor_tipo?: boolean
    data_criacao?: boolean
    lideres?: boolean
    equipe?: boolean
    qtd_empresas_atendidas?: boolean
    faturamento?: boolean
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    projetos?: boolean
    motor_tipo?: boolean
    data_criacao?: boolean
    lideres?: boolean
    equipe?: boolean
    qtd_empresas_atendidas?: boolean
    faturamento?: boolean
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    projetos?: boolean
    motor_tipo?: boolean
    data_criacao?: boolean
    lideres?: boolean
    equipe?: boolean
    qtd_empresas_atendidas?: boolean
    faturamento?: boolean
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectScalar = {
    id?: boolean
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

  export type MotorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "projetos" | "motor_tipo" | "data_criacao" | "lideres" | "equipe" | "qtd_empresas_atendidas" | "faturamento", ExtArgs["result"]["motor"]>

  export type $MotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      projetos: string[]
      motor_tipo: string
      data_criacao: string
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
     * // Only select the `id`
     * const motorWithIdOnly = await prisma.motor.findMany({ select: { id: true } })
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
     * // Create many Motors and only return the `id`
     * const motorWithIdOnly = await prisma.motor.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Motors and only return the `id`
     * const motorWithIdOnly = await prisma.motor.updateManyAndReturn({
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
    readonly id: FieldRef<"Motor", 'Int'>
    readonly nome: FieldRef<"Motor", 'String'>
    readonly descricao: FieldRef<"Motor", 'String'>
    readonly projetos: FieldRef<"Motor", 'String[]'>
    readonly motor_tipo: FieldRef<"Motor", 'String'>
    readonly data_criacao: FieldRef<"Motor", 'String'>
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
    id: number | null
    faturamento_anual: number | null
  }

  export type NegocioSumAggregateOutputType = {
    id: number | null
    faturamento_anual: number | null
  }

  export type NegocioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    area_atuacao: string | null
    faturamento_anual: number | null
    ano_criacao: Date | null
    porte: string | null
  }

  export type NegocioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    area_atuacao: string | null
    faturamento_anual: number | null
    ano_criacao: Date | null
    porte: string | null
  }

  export type NegocioCountAggregateOutputType = {
    id: number
    nome: number
    area_atuacao: number
    faturamento_anual: number
    ano_criacao: number
    fundadores: number
    porte: number
    _all: number
  }


  export type NegocioAvgAggregateInputType = {
    id?: true
    faturamento_anual?: true
  }

  export type NegocioSumAggregateInputType = {
    id?: true
    faturamento_anual?: true
  }

  export type NegocioMinAggregateInputType = {
    id?: true
    nome?: true
    area_atuacao?: true
    faturamento_anual?: true
    ano_criacao?: true
    porte?: true
  }

  export type NegocioMaxAggregateInputType = {
    id?: true
    nome?: true
    area_atuacao?: true
    faturamento_anual?: true
    ano_criacao?: true
    porte?: true
  }

  export type NegocioCountAggregateInputType = {
    id?: true
    nome?: true
    area_atuacao?: true
    faturamento_anual?: true
    ano_criacao?: true
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
    id: number
    nome: string
    area_atuacao: string
    faturamento_anual: number
    ano_criacao: Date
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
    id?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    ano_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    ano_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    ano_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectScalar = {
    id?: boolean
    nome?: boolean
    area_atuacao?: boolean
    faturamento_anual?: boolean
    ano_criacao?: boolean
    fundadores?: boolean
    porte?: boolean
  }

  export type NegocioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "area_atuacao" | "faturamento_anual" | "ano_criacao" | "fundadores" | "porte", ExtArgs["result"]["negocio"]>

  export type $NegocioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Negocio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      area_atuacao: string
      faturamento_anual: number
      ano_criacao: Date
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
     * // Only select the `id`
     * const negocioWithIdOnly = await prisma.negocio.findMany({ select: { id: true } })
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
     * // Create many Negocios and only return the `id`
     * const negocioWithIdOnly = await prisma.negocio.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Negocios and only return the `id`
     * const negocioWithIdOnly = await prisma.negocio.updateManyAndReturn({
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
    readonly id: FieldRef<"Negocio", 'Int'>
    readonly nome: FieldRef<"Negocio", 'String'>
    readonly area_atuacao: FieldRef<"Negocio", 'String'>
    readonly faturamento_anual: FieldRef<"Negocio", 'Float'>
    readonly ano_criacao: FieldRef<"Negocio", 'DateTime'>
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


  export const DisciplinaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    coordenador: 'coordenador',
    semestre: 'semestre',
    codigo: 'codigo',
    alunos_matriculados: 'alunos_matriculados',
    alunos_aprovados: 'alunos_aprovados'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
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
    id: 'id',
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
    id: 'id',
    nome: 'nome',
    area_atuacao: 'area_atuacao',
    faturamento_anual: 'faturamento_anual',
    ano_criacao: 'ano_criacao',
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


  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    id?: IntFilter<"Disciplina"> | number
    nome?: StringFilter<"Disciplina"> | string
    coordenador?: StringFilter<"Disciplina"> | string
    semestre?: StringFilter<"Disciplina"> | string
    codigo?: StringFilter<"Disciplina"> | string
    alunos_matriculados?: StringNullableListFilter<"Disciplina">
    alunos_aprovados?: StringNullableListFilter<"Disciplina">
  }

  export type DisciplinaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
    alunos_matriculados?: SortOrder
    alunos_aprovados?: SortOrder
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    nome?: StringFilter<"Disciplina"> | string
    coordenador?: StringFilter<"Disciplina"> | string
    semestre?: StringFilter<"Disciplina"> | string
    alunos_matriculados?: StringNullableListFilter<"Disciplina">
    alunos_aprovados?: StringNullableListFilter<"Disciplina">
  }, "id" | "codigo">

  export type DisciplinaOrderByWithAggregationInput = {
    id?: SortOrder
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
    id?: IntWithAggregatesFilter<"Disciplina"> | number
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
    id?: IntFilter<"Evento"> | number
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
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
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

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
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
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
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
    id?: IntWithAggregatesFilter<"Evento"> | number
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
    id?: IntFilter<"Motor"> | number
    nome?: StringFilter<"Motor"> | string
    descricao?: StringFilter<"Motor"> | string
    projetos?: StringNullableListFilter<"Motor">
    motor_tipo?: StringFilter<"Motor"> | string
    data_criacao?: StringFilter<"Motor"> | string
    lideres?: StringNullableListFilter<"Motor">
    equipe?: StringNullableListFilter<"Motor">
    qtd_empresas_atendidas?: IntFilter<"Motor"> | number
    faturamento?: FloatFilter<"Motor"> | number
  }

  export type MotorOrderByWithRelationInput = {
    id?: SortOrder
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

  export type MotorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MotorWhereInput | MotorWhereInput[]
    OR?: MotorWhereInput[]
    NOT?: MotorWhereInput | MotorWhereInput[]
    nome?: StringFilter<"Motor"> | string
    descricao?: StringFilter<"Motor"> | string
    projetos?: StringNullableListFilter<"Motor">
    motor_tipo?: StringFilter<"Motor"> | string
    data_criacao?: StringFilter<"Motor"> | string
    lideres?: StringNullableListFilter<"Motor">
    equipe?: StringNullableListFilter<"Motor">
    qtd_empresas_atendidas?: IntFilter<"Motor"> | number
    faturamento?: FloatFilter<"Motor"> | number
  }, "id">

  export type MotorOrderByWithAggregationInput = {
    id?: SortOrder
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
    id?: IntWithAggregatesFilter<"Motor"> | number
    nome?: StringWithAggregatesFilter<"Motor"> | string
    descricao?: StringWithAggregatesFilter<"Motor"> | string
    projetos?: StringNullableListFilter<"Motor">
    motor_tipo?: StringWithAggregatesFilter<"Motor"> | string
    data_criacao?: StringWithAggregatesFilter<"Motor"> | string
    lideres?: StringNullableListFilter<"Motor">
    equipe?: StringNullableListFilter<"Motor">
    qtd_empresas_atendidas?: IntWithAggregatesFilter<"Motor"> | number
    faturamento?: FloatWithAggregatesFilter<"Motor"> | number
  }

  export type NegocioWhereInput = {
    AND?: NegocioWhereInput | NegocioWhereInput[]
    OR?: NegocioWhereInput[]
    NOT?: NegocioWhereInput | NegocioWhereInput[]
    id?: IntFilter<"Negocio"> | number
    nome?: StringFilter<"Negocio"> | string
    area_atuacao?: StringFilter<"Negocio"> | string
    faturamento_anual?: FloatFilter<"Negocio"> | number
    ano_criacao?: DateTimeFilter<"Negocio"> | Date | string
    fundadores?: StringNullableListFilter<"Negocio">
    porte?: StringFilter<"Negocio"> | string
  }

  export type NegocioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    ano_criacao?: SortOrder
    fundadores?: SortOrder
    porte?: SortOrder
  }

  export type NegocioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NegocioWhereInput | NegocioWhereInput[]
    OR?: NegocioWhereInput[]
    NOT?: NegocioWhereInput | NegocioWhereInput[]
    nome?: StringFilter<"Negocio"> | string
    area_atuacao?: StringFilter<"Negocio"> | string
    faturamento_anual?: FloatFilter<"Negocio"> | number
    ano_criacao?: DateTimeFilter<"Negocio"> | Date | string
    fundadores?: StringNullableListFilter<"Negocio">
    porte?: StringFilter<"Negocio"> | string
  }, "id">

  export type NegocioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    ano_criacao?: SortOrder
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
    id?: IntWithAggregatesFilter<"Negocio"> | number
    nome?: StringWithAggregatesFilter<"Negocio"> | string
    area_atuacao?: StringWithAggregatesFilter<"Negocio"> | string
    faturamento_anual?: FloatWithAggregatesFilter<"Negocio"> | number
    ano_criacao?: DateTimeWithAggregatesFilter<"Negocio"> | Date | string
    fundadores?: StringNullableListFilter<"Negocio">
    porte?: StringWithAggregatesFilter<"Negocio"> | string
  }

  export type DisciplinaCreateInput = {
    nome: string
    coordenador: string
    semestre: string
    codigo: string
    alunos_matriculados?: DisciplinaCreatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaCreatealunos_aprovadosInput | string[]
  }

  export type DisciplinaUncheckedCreateInput = {
    id?: number
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
  }

  export type DisciplinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    coordenador?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    alunos_matriculados?: DisciplinaUpdatealunos_matriculadosInput | string[]
    alunos_aprovados?: DisciplinaUpdatealunos_aprovadosInput | string[]
  }

  export type DisciplinaCreateManyInput = {
    id?: number
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
    id?: IntFieldUpdateOperationsInput | number
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
  }

  export type EventoUncheckedCreateInput = {
    id?: number
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
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
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
    id?: number
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
    id?: IntFieldUpdateOperationsInput | number
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
    data_criacao: string
    lideres?: MotorCreatelideresInput | string[]
    equipe?: MotorCreateequipeInput | string[]
    qtd_empresas_atendidas: number
    faturamento: number
  }

  export type MotorUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    projetos?: MotorCreateprojetosInput | string[]
    motor_tipo: string
    data_criacao: string
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
    data_criacao?: StringFieldUpdateOperationsInput | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type MotorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: StringFieldUpdateOperationsInput | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type MotorCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    projetos?: MotorCreateprojetosInput | string[]
    motor_tipo: string
    data_criacao: string
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
    data_criacao?: StringFieldUpdateOperationsInput | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type MotorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    projetos?: MotorUpdateprojetosInput | string[]
    motor_tipo?: StringFieldUpdateOperationsInput | string
    data_criacao?: StringFieldUpdateOperationsInput | string
    lideres?: MotorUpdatelideresInput | string[]
    equipe?: MotorUpdateequipeInput | string[]
    qtd_empresas_atendidas?: IntFieldUpdateOperationsInput | number
    faturamento?: FloatFieldUpdateOperationsInput | number
  }

  export type NegocioCreateInput = {
    nome: string
    area_atuacao: string
    faturamento_anual: number
    ano_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
  }

  export type NegocioUncheckedCreateInput = {
    id?: number
    nome: string
    area_atuacao: string
    faturamento_anual: number
    ano_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
  }

  export type NegocioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    ano_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
  }

  export type NegocioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    ano_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
  }

  export type NegocioCreateManyInput = {
    id?: number
    nome: string
    area_atuacao: string
    faturamento_anual: number
    ano_criacao: Date | string
    fundadores?: NegocioCreatefundadoresInput | string[]
    porte: string
  }

  export type NegocioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    ano_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fundadores?: NegocioUpdatefundadoresInput | string[]
    porte?: StringFieldUpdateOperationsInput | string
  }

  export type NegocioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    faturamento_anual?: FloatFieldUpdateOperationsInput | number
    ano_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DisciplinaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
    alunos_matriculados?: SortOrder
    alunos_aprovados?: SortOrder
  }

  export type DisciplinaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    coordenador?: SortOrder
    semestre?: SortOrder
    codigo?: SortOrder
  }

  export type DisciplinaSumOrderByAggregateInput = {
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
    id?: SortOrder
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
    id?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    qtd_publico?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    duracao?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    qtd_publico?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    duracao?: SortOrder
    custo?: SortOrder
    receita?: SortOrder
    qtd_publico?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
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
    id?: SortOrder
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
    id?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type MotorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    motor_tipo?: SortOrder
    data_criacao?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type MotorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    motor_tipo?: SortOrder
    data_criacao?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type MotorSumOrderByAggregateInput = {
    id?: SortOrder
    qtd_empresas_atendidas?: SortOrder
    faturamento?: SortOrder
  }

  export type NegocioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    ano_criacao?: SortOrder
    fundadores?: SortOrder
    porte?: SortOrder
  }

  export type NegocioAvgOrderByAggregateInput = {
    id?: SortOrder
    faturamento_anual?: SortOrder
  }

  export type NegocioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    ano_criacao?: SortOrder
    porte?: SortOrder
  }

  export type NegocioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    area_atuacao?: SortOrder
    faturamento_anual?: SortOrder
    ano_criacao?: SortOrder
    porte?: SortOrder
  }

  export type NegocioSumOrderByAggregateInput = {
    id?: SortOrder
    faturamento_anual?: SortOrder
  }

  export type DisciplinaCreatealunos_matriculadosInput = {
    set: string[]
  }

  export type DisciplinaCreatealunos_aprovadosInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DisciplinaUpdatealunos_matriculadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DisciplinaUpdatealunos_aprovadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type MotorCreateprojetosInput = {
    set: string[]
  }

  export type MotorCreatelideresInput = {
    set: string[]
  }

  export type MotorCreateequipeInput = {
    set: string[]
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

  export type NegocioCreatefundadoresInput = {
    set: string[]
  }

  export type NegocioUpdatefundadoresInput = {
    set?: string[]
    push?: string | string[]
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