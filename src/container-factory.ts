import { HTTPEvent, IContainer, IContainerFactory } from "@ifit/fleece";
import llama from "@ifit/llama";
import { Container } from "inversify";
import { TYPES } from "./types";
const log = llama("improved-palm-tree:container-factory");

type ServiceEvent = HTTPEvent;

// initializes and creates the container
export class ContainerFactory implements IContainerFactory<ServiceEvent> {
  private container: Container | undefined;

  public async initializeContainer(): Promise<IContainer> {
    try {
      if (!this.container) {
        this.container = new Container({
          autoBindInjectable: true,
          skipBaseClassChecks: true,
        });
      }

      return this.container;
    } catch (err) {
      log.error(err);
      throw err;
    }
  }
}
