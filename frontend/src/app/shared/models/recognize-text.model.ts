export class RecognizeTextModel {
  constructor(image: string, width: number = 400, height: number = 400) {
    this.image = image;
    this.width = width;
    this.height = height;
  }

  public readonly image: string;
  public readonly width: number;
  public readonly height: number;
}
