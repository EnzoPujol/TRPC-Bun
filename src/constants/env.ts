import { config } from 'dotenv'

config()

export const DATABASE_HOST = process.env.DATABASE_HOST as string
export const DATABASE_NAME = process.env.DATABASE_NAME as string
export const DATABASE_USER = process.env.DATABASE_USER as string
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string
export const DATABASE_PORT = process.env.PORT as string
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string
export const JWT_TOKEN = process.env.JWT_TOKEN as string
export const CLIENT_URL = process.env.CLIENT_URL as string
export const BACKEND_URL = process.env.BACKEND_URL as string

export const S3_REGION = process.env.S3_REGION as string
export const S3_API_VERSION = process.env.S3_API_VERSION as string
export const S3_BUCKET = process.env.S3_BUCKET as string
export const S3_DOMAIN = process.env.S3_DOMAIN as string
export const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID as string
export const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY as string
