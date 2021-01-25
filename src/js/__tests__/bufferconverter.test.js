import ArrayBufferConverter from '../bufferconverter';

test('should to return string', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const received = new ArrayBufferConverter();
  received.load(data);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received.toString()).toBe(expected);
});
