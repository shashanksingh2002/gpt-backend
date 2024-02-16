<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatGPT-FarmHelper Backend</title>
</head>

<body>

    <h1>Welcome to the ChatGPT-FarmHelper backend repository!</h1>
    <p>This backend is built using Express and Node.js, incorporating JOI for request validation and the OpenAI library for handling chat-based requests to GPT (Generative Pre-trained Transformer) based on your OpenAI account tier.</p>

    <h2>Setup Instructions</h2>

    <ol>
        <li><strong>Clone the Repository:</strong>
            <pre><code>git clone https://github.com/your-username/ChatGPT-FarmHelper-Backend.git</code></pre>
        </li>
        <li><strong>Navigate to the Project Directory:</strong>
            <pre><code>cd ChatGPT-FarmHelper-Backend</code></pre>
        </li>
        <li><strong>Install Dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Set Up Environment Variables:</strong>
            <ul>
                <li>Copy the contents of the <code>env.example</code> file and create a new file named <code>.env</code>.</li>
                <li>Add your OpenAI API key and any other necessary environment variables.</li>
            </ul>
        </li>
        <li><strong>Start the Server:</strong>
            <pre><code>npm start</code></pre>
        </li>
    </ol>

    <h2>Usage</h2>

    <p>Once the server is running, you can make requests to the chat endpoint to interact with GPT:</p>

    <ul>
        <li><strong>Endpoint:</strong> <code>/api/gpt</code></li>
        <li><strong>Method:</strong> POST</li>
        <li><strong>Body:</strong>
            <pre><code>{
  "model": "The gpt model you want to use",
  "prompt": "user side prompt"
}</code></pre>
        </li>
    </ul>

    <h2>Customization</h2>

    <p>This system is not limited to farm-related queries. You can customize the behavior by changing the system prompt present in the constant folder. Modify the system prompt to suit your use case and make the GPT work however you want!</p>

    <h2>OpenAI Account Tier</h2>

    <p>Ensure that your OpenAI account tier supports the features used in this backend. Adjust your account settings accordingly to meet the requirements.</p>

    <h2>Contributing</h2>

    <p>Feel free to contribute to the project by submitting issues or pull requests. We appreciate your feedback and help in making this backend more robust.</p>

    <h2>License</h2>

    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

    <p>Happy customizing with ChatGPT-FarmHelper! 🤖🌐</p>

</body>

</html>
