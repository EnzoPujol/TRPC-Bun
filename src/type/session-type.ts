import { z } from "zod";

export interface IUserToken {
	readonly id: string;
	readonly email: string;
	email_confirmed_at: string | null;
	token_expired_at: number;
	last_sign_in_at: string;
}

export const ZOD_VALIDATE_TOKEN = z.object({
	email: z.string().email(),
	id: z.string().uuid(),
	token_expired_at: z.number(),
	email_confirmed_at: z.string().nullable(),
	last_sign_in_at: z.string(),
});
