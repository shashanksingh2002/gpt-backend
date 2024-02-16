# ChatGPT-FarmHelper Backend

Welcome to the gpt-backend repository! This backend is built using Express and Node.js, incorporating JOI for request validation and the OpenAI library for handling chat-based requests to GPT (Generative Pre-trained Transformer) based on your OpenAI account tier.

## Setup Instructions

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/shashanksingh2002/gpt-backend.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd gpt-backend
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Set Up Environment Variables:**
    - Copy the contents of the `.env.example` file and create a new file named `.env`.
    - Add your OpenAI API key and any other necessary environment variables.

5. **Start the Server:**
    ```bash
    npm start
    ```

## Usage

Once the server is running, you can make requests to the chat endpoint to interact with GPT:

- **Endpoint:** `/api/gpt`
- **Method:** POST
- **Body:**
  ```json
  {
    "model":"your gpt model name",
    "prompt": "Your message to GPT"
  }

## Customization

This system is not limited to farm-related queries. You can customize the behavior by changing the system prompt present in the constant folder. Modify the system prompt to suit your use case and make the GPT work however you want!

## OpenAI Account Tier

Ensure that your OpenAI account tier supports the features used in this backend. Adjust your account settings accordingly to meet the requirements.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. We appreciate your feedback and help in making this backend more robust.

Happy customizing with gpt-backend! 🤖🌐
