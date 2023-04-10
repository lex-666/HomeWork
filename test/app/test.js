function login() {
  // Получаем значения полей формы
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Проверяем, что поля не пустые
  if (username && password) {
    // Проверяем, что роль пользователя или администратора
    if (role === "user") {
      // Обработка входа пользователя
      // ...
      console.log("User logged in.");
    } else if (role === "admin") {
      // Обработка входа администратора
      // ...
      console.log("Admin logged in.");
    } else {
      console.log("Invalid role.");
    }
  } else {
    console.log("Username or password is empty.");
  }
}





