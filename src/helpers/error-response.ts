import { TRPCError } from '@trpc/server'
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc'
import { ValidationErrorItem, DatabaseError } from 'sequelize'
import { ERROR_MESSAGE } from './error-message'

export class ErrorResponse extends TRPCError {
  public readonly cause?: Error
  // @ts-ignore
  public readonly code: TRPC_ERROR_CODE_KEY

  constructor(props: {
    code: TRPC_ERROR_CODE_KEY
    error?: unknown
    message?: string
  }) {
    if (props.code === 'INTERNAL_SERVER_ERROR') {
      console.log({
        error: props.error,
        code: props.code,
        message: props.message,
      })
    }
    const message = getMessageFromUnknownError(props.error, props.message)
    const cause = getErrorFromUnknown(props.error)
    // @ts-ignore
    super(message, { cause })
    this.code = props.code
    this.message = message
    this.cause = cause
    this.stack = undefined
    this.name = this.constructor.name
  }
}

function getMessageFromUnknownError(error: unknown, message?: string): string {
  if (message) return message

  if (Array.isArray(error) && error[0] instanceof ValidationErrorItem) {
    return error[0].message
  }

  if (error instanceof DatabaseError) {
    return 'Internal Error'
  }

  if (typeof error === 'string') {
    return error
  }
  if (error instanceof Error && typeof error.message === 'string') {
    return error.message
  }
  return ERROR_MESSAGE.UNKNOWN_ERROR
}

function getErrorFromUnknown(cause: unknown): Error {
  if (cause instanceof Error) {
    return cause
  }
  const message = getMessageFromUnknownError(cause, ERROR_MESSAGE.UNKNOWN_ERROR)
  return new Error(message)
}
