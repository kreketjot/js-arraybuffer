export default class ArrayBufferConverter {
  constructor(buffer) {
    this.load(buffer);
  }

  load(buffer = null) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    const string = [...bufferView].reduce((str, bytes) => str.concat(String.fromCharCode(bytes)), '');
    return string;
  }
}
