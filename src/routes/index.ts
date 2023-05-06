import { testRoute } from "../source/test/infrastructure/route/test.route";
import { t } from "./trpc-config";
// import { authRoute } from '../source/auth/route/auth.route'
// import { userReviewsRoute } from '../source/user-reviews/infrastructure/route/user-reviews.route'
// import { userRoute } from '../source/user/route/user.route'

export const appRouter = t.router({
	test: testRoute,
	/* auth: authRoute,
  user: userRoute,
  user_reviews: userReviewsRoute, */
});
