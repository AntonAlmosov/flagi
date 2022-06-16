
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.1
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.1",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AboutScalarFieldEnum = makeEnum({
  id: 'id',
  vk: 'vk',
  telegram: 'telegram',
  facebook: 'facebook',
  phoneNumber: 'phoneNumber',
  email: 'email',
  content: 'content'
});

exports.Prisma.AuthorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  biography: 'biography',
  imageId: 'imageId'
});

exports.Prisma.PieceScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  content: 'content',
  slug: 'slug',
  imageId: 'imageId',
  createdAt: 'createdAt',
  authorId: 'authorId'
});

exports.Prisma.CorpusScalarFieldEnum = makeEnum({
  id: 'id',
  kind: 'kind',
  title: 'title',
  referee: 'referee',
  content: 'content',
  slug: 'slug',
  createdAt: 'createdAt',
  imageId: 'imageId'
});

exports.Prisma.CorpusAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  authorId: 'authorId',
  corpusId: 'corpusId'
});

exports.Prisma.NewsScalarFieldEnum = makeEnum({
  id: 'id',
  content: 'content',
  referee: 'referee',
  createdAt: 'createdAt'
});

exports.Prisma.ImageScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  url: 'url',
  caption: 'caption'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Kind = makeEnum({
  MAGAZINE: 'MAGAZINE',
  PROJECT: 'PROJECT'
});

exports.Prisma.ModelName = makeEnum({
  About: 'About',
  Author: 'Author',
  Piece: 'Piece',
  Corpus: 'Corpus',
  CorpusAuthor: 'CorpusAuthor',
  News: 'News',
  Image: 'Image'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
