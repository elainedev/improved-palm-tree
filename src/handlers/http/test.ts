import { HTTPEvent, HTTPEventArguments, HTTPHandler, HTTPResult } from "@ifit/fleece";
import llama from "@ifit/llama";

export const log: any = llama("improved-palm-tree:test-handler");

export interface ITestHandlerEvent extends HTTPEventArguments {
  body: null;
  path: null;
  query: null;
}

export interface ITestHandlerResponseBody {
  message?: string;
}

export type ITestHandlerResponse = HTTPResult<ITestHandlerResponseBody>;


export class TestHandler extends HTTPHandler<ITestHandlerEvent> {
  public async run(event: HTTPEvent<ITestHandlerEvent>): Promise<ITestHandlerResponse> {
    const body = {
      message: 'This is a test!',
    };

    log.info("Test Handler response: " + JSON.stringify(body));
    return HTTPResult.OK({ body });
  }
}