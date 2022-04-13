describe('Node.js request with digest auth', () => {
    test('Execute request and check output', async () => {
        // const consoleLogMock = jest.spyOn(console, 'log');
        console.log = jest.fn();

        // Execute the request.js file
        require('./request');

        // Wait for the request to finish
        await new Promise(r => setTimeout(r, 2000));

        const loggedMessages = console.log.mock.calls[0];
        expect(loggedMessages.length).toBe(1);

        const message = loggedMessages[0];

        expect(message.appName).toBe('MongoDB Atlas');
        expect(message?.apiKey?.publicKey).toBe(process.env.ATLAS_USER);

        console.log.mockRestore();
    });
});
