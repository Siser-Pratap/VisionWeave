Image_Gen
Image_Gen is an AI-powered platform that allows users to generate images by simply providing text prompts. Built with the OpenAI API, this project enables users to explore creativity by creating, sharing, and downloading images.

Features
Image Generation: Convert prompts into images using AI.
Download and Share: Download generated images or share them within the platform.
Cloud Storage: Images are stored using Cloudinary for efficient access and sharing.
Tech Stack
Frontend: React, JavaScript, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB (for user data)
API Integration: OpenAI API for image generation
Cloud Storage: Cloudinary for image hosting
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/Siser-Pratap/Image_Gen.git
Navigate to the directory:
bash
Copy code
cd Image_Gen
Install dependencies for both client and server:
bash
Copy code
cd client
npm install
cd ../server
npm install
Configuration
OpenAI API Key: Obtain an API key from OpenAI and add it to your environment variables.
Cloudinary Configuration: Set up a Cloudinary account and add your Cloudinary details to the environment variables.
Running the Project
Start the Server:
bash
Copy code
cd server
npm start
Start the Client:
bash
Copy code
cd client
npm start
Usage
Access the platform at http://localhost:3000.
Enter a text prompt to generate an image.
Download or share the generated image.
Contributing
Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature suggestions.

License
This project is licensed under the MIT License.
