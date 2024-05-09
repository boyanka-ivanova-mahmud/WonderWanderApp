// Примерни промени в api.js
export const fetchYearlyStatistics = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Промени URL адреса, ако е необходимо
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const users = await response.json();
      const statistics = {
        visits: users.length,
        activeUsers: users.filter(user => user.posts > 5).length, // Пример: Активни потребители с над 5 публикации
        newRegistrations: users.filter(user => user.id % 2 === 0).length, // Пример: Нови регистрации
        topContributors: users.filter(user => user.username.startsWith('A')).length, // Пример: Потребители, чиито имена започват с 'A'
      };
  
      return statistics;
    } catch (error) {
      throw new Error(`There was a problem with the fetch operation: ${error.message}`);
    }
  };
  