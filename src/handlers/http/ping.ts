import { HTTPEvent, HTTPEventArguments, HTTPHandler, HTTPResult } from "@ifit/fleece";
import llama from "@ifit/llama";

export const log: any = llama("improved-palm-tree:ping-handler");
export interface IPingHandlerQuery {
  /**
   * @description If given, this value is included in the response.
   */
  echo?: string;
}

export interface IPingHandlerEvent extends HTTPEventArguments {
  body: null;
  path: null;
  query: IPingHandlerQuery;
}

export interface IPingHandlerResponseBody {
  /**
   * @description Copied from query
   */
  echo?: string;

  /**
   * @description Filled with "pong"
   */
  ping?: string;
}

export type IPingHandlerResponse = HTTPResult<IPingHandlerResponseBody>;

/**
 * @summary Pongs your ping.
 * @description Replies with pong.
 */
export class PingHandler extends HTTPHandler<IPingHandlerEvent> {
  public async run(event: HTTPEvent<IPingHandlerEvent>): Promise<IPingHandlerResponse> {
    const body = {
      ping: "pong",
      echo: event.processed?.queryStringParameters.echo,
    };

    log.info("Ping Handler response=" + JSON.stringify(body));
    return HTTPResult.OK({ body });
  }
}