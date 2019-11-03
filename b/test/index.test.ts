import { Foo } from 'a';
import { Bar } from 'src/Bar';

describe('Bar', () => {
  it('should be Bar', () => {
    expect(Bar).toBe('Bar');
  });

  it('should be FooBar', () => {
    expect(Foo + Bar).toBe('FooBar');
  });
});
