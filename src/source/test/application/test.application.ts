import { CreateTestMessageDto } from "../domain/test.entity";
import {
	TestRepository,
	TestRepositoryResponse,
} from "../domain/test.repository";
import { TestModel } from "../model/test.model";

export class TestUseCase implements TestRepository {
	constructor(private readonly testRepository: TestRepository) {}

	testExample(): TestRepositoryResponse["testExample"] {
		return this.testRepository.testExample();
	}

	createMessage(
		props: CreateTestMessageDto,
	): TestRepositoryResponse["createMessage"] {
		return this.testRepository.createMessage(props);
	}
}
