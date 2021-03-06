const Models = require('../../models');

describe('userDetails: check if data matches model', () => {
  test('check if returned seeded data matches users model', () => Models.userDetails.findAll().then((result) => {
    expect.assertions(result.length * 8);
    result.forEach((user) => {
      expect(user.userId).toBeDefined();
      expect(user.image).toBeDefined();
      expect(user.aadharNo).toBeDefined();
      expect(user.phone).toBeDefined();
      expect(user.accountNo).toBeDefined();
      expect(user.balance).toBeDefined();
      expect(user.firstName).toBeDefined();
      expect(user.lastName).toBeDefined();
    });
  }));
});

