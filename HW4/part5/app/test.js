class UserException extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserException';
  }
}

function showUser(id) {
  if (id < 0) {
    throw new UserException('ID не должно быть отрицательным: ' + id);
  }
  return { id: id };
}

function showUsers(ids) {
  const result = [];
  for (let i = 0; i < ids.length; i++) {
    try {
      result.push(showUser(ids[i]));
    } catch (error) {
      console.error(error.message);
    }
  }
  return result;
}

console.log(showUsers([7, 12, 44, -1, 22]));
