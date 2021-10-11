import { Lambdafy } from "@ifit/fleece";
import { ContainerFactory } from "./container-factory";
import { PingHandler } from "./handlers/http/ping";
import { TestHandler } from './handlers/http/test';

const containerFactory = new ContainerFactory();

// http
export const pingHandler = Lambdafy.create(containerFactory, PingHandler);
export const testHandler = Lambdafy.create(containerFactory, TestHandler);