const {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser
} = require('./apiClient');

const mockUsers = [
  {
    id: 1,
    name: 'User 1',
    email: 'user1@example.com'
  },
  {
    id: 2,
    name: 'User 2',
    email: 'user2@example.com'
  }
];

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(async (url, options) => {
    if (options?.method === 'POST') {
      return {
        json: async () => ({
          ...JSON.parse(options.body),
          id: 3
        })
      };
    }

    if (options?.method === 'PUT') {
      return {
        json: async () => ({
          id: Number(url.split('/').pop()),
          ...JSON.parse(options.body)
        })
      };
    }

    if (options?.method === 'DELETE') {
      return {
        json: async () => ({
          success: true
        })
      };
    }

    if (url.endsWith('/1')) {
      return {
        json: async () => mockUsers[0]
      };
    }

    return {
      json: async () => mockUsers
    };
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('API Client', () => {
  describe('fetchUsers()', () => {
    it('should return an array of users', async () => {
      const users = await fetchUsers();
      expect(Array.isArray(users)).toBe(true);
      expect(users).toHaveLength(2);
    });
  });

  describe('fetchUserById()', () => {
    it('should return a user with id, name, and email', async () => {
      const user = await fetchUserById(1);
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
      expect(user.id).toBe(1);
    });
  });

  describe('createUser()', () => {
    it('should return a new user object with an ID', async () => {
      const newUser = {
        name: 'New User',
        email: 'newuser@example.com'
      };
      const result = await createUser(newUser);
      expect(result).toHaveProperty('id');
      expect(result.name).toBe('New User');
      expect(result.email).toBe('newuser@example.com');
    });
  });

  describe('updateUser()', () => {
    it('should modify an existing user', async () => {
      const updatedUser = {
        name: 'Updated User',
        email: 'updated@example.com'
      };
      const result = await updateUser(1, updatedUser);
      expect(result.id).toBe(1);
      expect(result.name).toBe('Updated User');
      expect(result.email).toBe('updated@example.com');
    });
  });

  describe('deleteUser()', () => {
    it('should return a success response', async () => {
      const result = await deleteUser(1);
      expect(result.success).toBe(true);
    });
  });
});
