import { User } from '../src/case7';

describe('User', () => {
  let user: User;
  let subordinates: User[];

  beforeEach(() => {
    subordinates = [new User('Subordinate1', '1990-01-01', [])];
    user = new User('TestUser', '1980-01-01', subordinates);
  });

  it('should create a user with correct properties', () => {
    expect(user).toBeDefined();
    expect(user.toString()).toBe(
      'User [dateOfBirth=1980-01-01, name=TestUser, isAdmin=false, subordinates=[{"bAdmin":false,"dBirth":"1990-01-01","sName":"Subordinate1","subordinateArray":[]}], rating=undefined]'
    );
  });

  it('should allow setting the rating', () => {
    user.setRating(5);
    expect(user.toString()).toBe(
      'User [dateOfBirth=1980-01-01, name=TestUser, isAdmin=false, subordinates=[{"bAdmin":false,"dBirth":"1990-01-01","sName":"Subordinate1","subordinateArray":[]}], rating=5]'
    );
  });
});
