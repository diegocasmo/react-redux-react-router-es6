import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('#authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'diego-castillo', firstName: 'Diego', lastName: 'Castillo'}
      ];
      const expected = [
        {value: 'diego-castillo', text: 'Diego Castillo'}
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
