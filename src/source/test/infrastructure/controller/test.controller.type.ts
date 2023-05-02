import { CreateTestMessageDto, TestMessage } from "../../domain/test.entity"

export interface RouteResponse {
    testExample: Promise<TestMessage[]>
    createMessage: Promise<TestMessage>
}

export interface ITestController {
    testExample(): RouteResponse['testExample']
    createMessage(props: CreateTestMessageDto): RouteResponse['createMessage']
}