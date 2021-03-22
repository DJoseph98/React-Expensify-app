const generateGreeting = (name) => `Hello ${name}`;

test('should be string', () => {
    const result = generateGreeting('Didier');
    expect(result).toBe('Hello Didier');
});


