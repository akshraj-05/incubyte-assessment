const readline = require('readline');
const { Position, Direction, SpaceCraft } = require('./src/spaceCraft');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for starting direction
rl.question('Enter starting direction (N/S/E/W/Up/Down): ', (startingDirection) => {
    // Ask user for starting position
    rl.question('Enter starting position (x y z): ', (positionInput) => {
        const [x, y, z] = positionInput.split(' ').map(Number);
        const startingPosition = new Position(x, y, z);

        // Create a new SpaceCraft instance
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        // Ask user for process command array
        rl.question('Enter process command array (e.g. fblrud): ', (commandInput) => {
            const commands = commandInput.split('');

            // Process commands
            spacecraft.processCommands(commands);

            // Print the final position and direction
            console.log('Final Position:', spacecraft.getCurrentPosition());
            console.log('Final Direction:', spacecraft.getCurrentDirection());

            // Close the readline interface
            rl.close();
        });
    });
});
