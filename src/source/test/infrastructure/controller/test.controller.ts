import { ParseData } from "../../../parse-data";
import { TestUseCase } from "../../application/test.application";
import { CreateTestMessageDto, TestMessage } from "../../domain/test.entity";
import { ITestController, RouteResponse } from "./test.controller.type";

export class TestController implements ITestController {
	constructor(private readonly testUseCase: TestUseCase) {}

	async testExample(): RouteResponse["testExample"] {
		const response = await this.testUseCase.testExample();

		return response.map((el) => ParseData.parseTestMessage(el));
	}

	async createMessage(
		props: CreateTestMessageDto,
	): RouteResponse["createMessage"] {
		const response = await this.testUseCase.createMessage(props);

		return ParseData.parseTestMessage(response);
	}
}
