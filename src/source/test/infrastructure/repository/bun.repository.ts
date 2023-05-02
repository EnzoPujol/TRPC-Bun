import { CreateTestMessageDto, TestMessage } from "../../domain/test.entity";
import { TestRepository } from "../../domain/test.repository";
import { ITestModel, TestModel } from "../../model/test.model";
import { v4 } from 'uuid'

export class TestBunRepository implements TestRepository {

    async testExample():Promise<ITestModel[]> {

        const response = await TestModel.findAll({})

        
        return response
    }

   async createMessage(props: TestMessage): Promise<ITestModel> {
        const response = await TestModel.create({
            ...props,
            id: v4(),
        })

        if (!response) console.log('error')

        return response
   }
}