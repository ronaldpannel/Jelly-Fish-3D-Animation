class Slider {
  constructor(name, min, max, value, px, py) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.value = value;
    this.px = px;
    this.py = py;
    this.slider = createSlider(this.min, this.max, this.value);
    this.slider.position(this.px, this.py);
    this.slider.size(100);
    this.value;
  }
  display() {
    this.value = this.slider.value();

    text(this.name, -width / 2 + this.px + 120, -height / 2 + this.py + 16);
    text(this.value, -width / 2 + this.px + 170, -height / 2 + this.py + 16);
  }
}
