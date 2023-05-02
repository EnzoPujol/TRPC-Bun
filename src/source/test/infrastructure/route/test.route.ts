import { DATABASE_HOST } from '../../../../constants/env'
import { z } from "zod";
import { publicRoute, router } from "../../../../routes/trpc-config";
import { TestUseCase } from "../../application/test.application";
import { TestController } from "../controller/test.controller";
import { RouteResponse } from "../controller/test.controller.type";
import { TestBunRepository } from "../repository/bun.repository";

const testBunRepository = new TestBunRepository()
const testUseCase = new TestUseCase(testBunRepository)
const testController = new TestController(testUseCase)

export const testRoute = router({
    get: publicRoute.input(z.object({})).query(async (): RouteResponse['testExample'] => {
        return await testController.testExample()
    }),
    create: publicRoute.input(z.object({
        message: z.string()
    })).mutation(async ({input}): RouteResponse['createMessage'] => {

        return await testController.createMessage(input)
    })
})