import { Lambdafy } from "@ifit/fleece";
import { ContainerFactory } from "./container-factory";
import { PingHandler } from "./handlers/http/ping";
import { TestHandler } from "./handlers/http/test";
import { MooHandler } from "./handlers/http/moo";

const containerFactory = new ContainerFactory();

// http
export const pingHandler = Lambdafy.create(containerFactory, PingHandler);
export const testHandler = Lambdafy.create(containerFactory, TestHandler);
export const mooHandler = Lambdafy.create(containerFactory, MooHandler);
