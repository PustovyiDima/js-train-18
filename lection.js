// try {
//    const a = 10;
//    a = 5;
// } catch (error) {
//    console.log(error);
// } finally {
//    console.log(2);
// }

function getUserData(userId) {
   try {
      // Запит на сервер
      const a = 10;
      a = 5;
   } catch (err) {
      throw new Error(
         `Помилка: неможливо отримати данні користувача ${userId}`,
         {
            cause: err,
         }
      );
      console.error(newError);
   }
}

function updateUserData(userId) {
   try {
      const data = getUserData(userId);
      data.name = "Ivan";
   } catch (err) {
      const newError = new Error(
         `Помилка: неможливо оновити данні користувача ${userId}`,
         {
            cause: err,
         }
      );
      //   console.error(newError.message);
      console.error(newError.message);
   }
}
// updateUserData(4567);
const ERROR_ID_LIST = {
   NOT_NUMBER: 1,
};

function sumNum(a, b) {
   if (typeof a !== "number" || typeof b !== "number") {
      const error = new TypeError("Аргументи не є числами");
      error.name = ERROR_ID_LIST.NOT_NUMBER;
      throw error;
   }
   return a + b;
}

try {
   sumNum(1, "fsvg");
} catch (err) {
   //    console.log(err.message);
   console.log(err.name); //для отримання типу помилки
}
