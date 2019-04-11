const db = require('../data/dbConfig.js');
const Users = require('./user-model.js');

describe('users', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('Add()', () => {
    it('should add a user', async () => {
      await Users.add({ name: 'Jake' });
    
      const user = await db('users');
      expect(user).toHaveLength(1);
    });

    it('should add the appropriate user', async () => {
      let user = await Users.add({ name: 'Zech' });
      expect(user.name).toBe('Zech');

      user = await Users.add({ name: 'Brett' });
      expect(user.name).toBe('Brett');
    });
  });

  describe('Delete()', () => {
    // it('should delete a user', async (id) => {
    //   await Users.add([{ name: 'jake' },{ name: 'zech'}])
    //   user = await Users.remove({ id: 1 })
    //   expect(user.length).toBe(1)
    // });

  });

  describe('Get()', () => {
    it('should add a user and compare it the result', async () => {
      let users = await Users.add({ name: 'jake' });
      expect(users).toEqual({
        id: 1,
        name: 'jake'
      })

      users = await Users.add({ name: 'Zech' });
      expect(users).toEqual({
        id: 2,
        name: 'Zech'
      }
    )
    });

  });
});
