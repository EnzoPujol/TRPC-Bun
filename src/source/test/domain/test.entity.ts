export interface TestMessage {
	id: string;
	message: string;
	created_at: string;
	updated_at: string;
}

export type CreateTestMessageDto = Pick<TestMessage, "message">;
