import { ContactToStringPipe } from './contact-to-string.pipe';

describe('ContactToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ContactToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
