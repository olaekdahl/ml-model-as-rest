const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json());

// curl -X POST -H "Content-Type: application/json" --data @data.json http://localhost:3000/predict
app.post('/predict', (req, res) => {
    const input = req.body;

    const data = JSON.stringify(input)
    // Spawn a child process to execute the predict.py script
    const pythonScript = spawn('python', ['predict.py']);

    // Send the data to the predict.py script via stdin
    pythonScript.stdin.write(data);
    pythonScript.stdin.end();

    let predictionData = '';

    // Collect the predicted data from stdout of the predict.py script
    pythonScript.stdout.on('data', (data) => {
        predictionData += data.toString();
    });

    // Handle the completion of the predict.py script
    pythonScript.on('close', (code) => {
        if (code === 0) {
            // Parse the predicted data
            // const predictions = JSON.parse(predictionData);

            // Return the predictions as the response
            res.send(predictionData);
        } else {
            // Return an error response
            res.status(500).json({ error: 'Prediction failed' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
