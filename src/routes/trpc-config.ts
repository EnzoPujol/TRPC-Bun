import { initTRPC, inferAsyncReturnType } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import cookies from 'cookie'
import {
  IUserToken,
  ZOD_VALIDATE_TOKEN,
} from '../type/session-type'
import { ErrorResponse } from '../helpers/error-response'
import { ERROR_MESSAGE } from '../helpers/error-message'
import { JWT } from '../helpers/jwt-helper'

export const t = initTRPC.context<Context>().create()

export const router = t.router
export const middleware = t.middleware
export const publicRoute = t.procedure

const withToken = middleware(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new ErrorResponse({
      code: 'UNAUTHORIZED',
      message: ERROR_MESSAGE.UNAUTHORIZED,
    })
  }

  return next({ ctx })
})

export const privateRoute = publicRoute.use(withToken)

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const token = req.headers.authorization
  const allCookies = cookies.parse(req.headers.cookie ?? '')
  const authorization = allCookies['authorization'] ?? token

  if (!authorization) {
    return {
      req,
      res,
    }
  }
  try {
    const decodeToken = JWT.verify<IUserToken>(authorization)
    ZOD_VALIDATE_TOKEN.parse(decodeToken)

    return {
      req,
      res,
      user: decodeToken,
    }
  } catch (_error) {
    throw new ErrorResponse({
      code: 'UNAUTHORIZED',
      message: ERROR_MESSAGE.SESSION_EXPIRED,
    })
  }
}

type Context = inferAsyncReturnType<typeof createContext>
