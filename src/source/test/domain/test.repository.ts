import { ITestModel } from "../model/test.model";
import { CreateTestMessageDto } from "./test.entity";

export interface TestRepositoryResponse {
	testExample: Promise<ITestModel[]>;
	createMessage: Promise<ITestModel>;
}

export interface TestRepository {
	testExample(): TestRepositoryResponse["testExample"];
	createMessage(
		props: CreateTestMessageDto,
	): TestRepositoryResponse["createMessage"];
}
