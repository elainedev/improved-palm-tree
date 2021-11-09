import {
  HTTPEvent,
  HTTPHandler,
  HTTPEventArguments,
  HTTPResult,
} from "@ifit/fleece";
import { inject, injectable } from "inversify";
import { FunctionToInject } from "../../helpers/mooHelper";

export interface BodyInterface {
  message: string;
  target: string;
}
// body: { message: string; target: string }; // type of the input the user passes in, e.g. with Postman

export interface IMooHandlerEvent extends HTTPEventArguments {
  body: BodyInterface;
  path: null;
  query: null;
}

export interface IMooHandlerResponseBody {
  message?: string;
}

export type IMooHandlerResponse = HTTPResult<IMooHandlerResponseBody>;

@injectable()
export class MooHandler extends HTTPHandler<IMooHandlerEvent> {
  public constructor(
    @inject(FunctionToInject) private functionToInject: FunctionToInject
  ) {
    super();
  }
  // functionToInject is variable name by which to call FunctionToInject (the variable is private); then it's typed again as FunctionToInject

  // below is logic of what you want the container to do
  public async run(
    event: HTTPEvent<IMooHandlerEvent>
  ): Promise<IMooHandlerResponse> {
    const body = event.processed.body; // what we receive from the user event
    console.log("body", event.processed.body);
    console.log("processed", event.processed);

    // const body = {
    //   message: "mooo",
    //   target: "o",
    // };
    //^hardcoded

    this.functionToInject.countOccurances(body.message, body.target);

    return HTTPResult.OK({ body });
  }
}
