import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('converting buffer to string', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = getBuffer(data);
  const arrBuff = new ArrayBufferConverter();
  arrBuff.load(buffer);
  const recived = `${arrBuff}`;
  expect(recived).toBe(data);
});

test('converting empty buffer to string', () => {
  const arrBuff = new ArrayBufferConverter();
  const recived = `${arrBuff}`;
  expect(recived).toBe('');
});
