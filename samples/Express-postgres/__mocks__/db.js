// __mocks__/db.js

const mockPool = {
    query: jest.fn().mockImplementation((query, values) => {
        // Assuming the query is for selecting todos
        if (query.startsWith('SELECT')) {
            return Promise.resolve({
                rows: [
                    {
                        id: 1,
                        title: 'Test Todo 1',
                        description: 'Description 1',
                        category_id: 1,
                        user_id: 1
                    },
                    {
                        id: 2,
                        title: 'Test Todo 2',
                        description: 'Description 2',
                        category_id: 2,
                        user_id: 2
                    },
                    {
                        id: 2,
                        title: 'Test Todo 2',
                        description: 'Description 2',
                        category_id: 2,
                        user_id: 2
                    },
                    {
                        id: 2,
                        title: 'Test Todo 2',
                        description: 'Description 2',
                        category_id: 2,
                        user_id: 2
                    }
                ]
            });
        }
        // Add other conditions for different types of queries as needed
    })
};

module.exports = mockPool;
