import { TestMessage } from "./test/domain/test.entity";
import { ITestModel } from "./test/model/test.model";

export class ParseData {
	static parseTestMessage(props: ITestModel): TestMessage {
		return {
			id: props.id,
			message: props.message,
			created_at: props.created_at,
			updated_at: props.updated_at,
		};
	}
}
