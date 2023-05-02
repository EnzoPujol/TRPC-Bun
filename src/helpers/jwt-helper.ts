import jwt from 'jsonwebtoken'
import { IUserToken } from '../type/session-type'
import dayjs from 'dayjs'

const JWT_TOKEN =
  'GZ89hhHv733ygzNumoZqB30iJ5hq3TqXBwq0ksDs75yNCmYHhhJdBvPIKYuUB4AKE64nEZKSk9f64tuRHTUAdw=='

export class JWT {
  static verify<T>(token: string): T {
    return jwt.verify(token, JWT_TOKEN) as T
  }

  static decode<T>(token: string): T {
    return jwt.decode(token) as T
  }

  static sign(
    encode: Omit<IUserToken, 'token_expired_at'>,
    expiredAt?: string
  ) {
    const token_expired_at = dayjs().add(8, 'hour').valueOf()
    return jwt.sign({ ...encode, token_expired_at }, JWT_TOKEN, {
      expiresIn: expiredAt ?? JWT_EXPIRED_AT,
      algorithm: 'HS256',
      mutatePayload: false,
    })
  }
}

export const JWT_EXPIRED_AT = '8h'
