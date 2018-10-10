export class HslColor {
  constructor(
    private hue: number,
    private saturation: number,
    private lightness: number,
    private opacity?: number
  ) {}

  public light(value: number): HslColor {
    return new HslColor(this.hue, this.saturation, value, this.opacity);
  }

  public grey(value: number): HslColor {
    return new HslColor(this.hue, value, this.lightness, this.opacity);
  }

  public alpha(value: number): HslColor {
    return new HslColor(this.hue, this.saturation, this.lightness, value);
  }

  public get value() {
    return this.toString();
  }

  public toString() {
    const { hue, saturation, lightness, opacity } = this;
    if (typeof opacity !== 'undefined') {
      return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    } else {
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
  }
}
