import { inject, injectable } from "inversify";

export interface IMessageHelper {
  countOccurances(message: string, target: string): number;
}

@injectable()
export class FunctionToInject implements IMessageHelper {
  countOccurances(message: string, target: string): number {
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i] == target) {
        count++;
      }
    }
    return count;
  }
}
