import {
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from "sequelize";
import { sequelize } from "../../../db/sequelize-init";
import { TestMessage } from "../domain/test.entity";

export interface ITestModel
	extends Model<
			InferAttributes<ITestModel>,
			InferCreationAttributes<ITestModel>
		>,
		TestMessage {}

export const TestModel = sequelize.define<ITestModel>("test_messages", {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		allowNull: false,
	},
	message: {
		type: DataTypes.TEXT,
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
	updated_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
});
