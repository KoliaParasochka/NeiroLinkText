import { RecognizeTextModel } from "./recognize-text.model";

export class LearnSymolModel extends RecognizeTextModel {
  constructor(symbolToLearn: string, image: string, width: number = 400, height: number = 400) {
    super(image, width, height);
    this.symbolToLearn = symbolToLearn;
  }

  public symbolToLearn: string;
}
