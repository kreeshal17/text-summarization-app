# Text Summarization App

A full-stack application that uses Natural Language Processing (NLP) to automatically summarize text documents using TextRank algorithm with TF-IDF vectorization and PageRank scoring.

## 🚀 Features

- **Intelligent Text Summarization**: Extracts the most important sentences from any text
- **TextRank Algorithm**: Uses graph-based ranking similar to Google's PageRank
- **TF-IDF Vectorization**: Identifies key terms and their importance
- **REST API**: Flask-based backend with RESTful endpoints
- **Modern UI**: React + TypeScript frontend for a smooth user experience
- **CORS Enabled**: Seamless communication between frontend and backend

## 🛠️ Tech Stack

### Backend
- **Python 3.x**
- **Flask**: Web framework
- **NLTK**: Natural language processing
- **scikit-learn**: TF-IDF vectorization and cosine similarity
- **NetworkX**: Graph-based PageRank algorithm
- **Flask-CORS**: Cross-origin resource sharing

### Frontend
- **React**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Axios/Fetch**: HTTP requests

## 📋 Prerequisites

- Python 3.7+
- Node.js 14+
- npm or yarn

## 🔧 Installation

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd text-summarization-app
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install flask flask-cors nltk scikit-learn networkx
   ```

4. **Download NLTK data**
   ```python
   python -c "import nltk; nltk.download('punkt'); nltk.download('stopwords')"
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

##  Running the Application

### Start Backend Server

```bash
# From the root directory (where app.py is located)
python app.py
```

The Flask server will start on `http://localhost:5000`

### Start Frontend Development Server

```bash
# From the frontend directory
npm start
# or
yarn start
```

The React app will start on `http://localhost:3000`

## 📡 API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### 1. Health Check
```http
GET /home
```

**Response:**
```
hello moto
```

#### 2. Summarize Text
```http
POST /summarize
```

**Request Body:**
```json
{
  "text": "Your long text here that needs to be summarized..."
}
```

**Success Response (200):**
```json
{
  "answer": "Summarized text with the most important sentences..."
}
```

**Error Response (400):**
```json
{
  "error": "No text provided"
}
```

##  Testing with Postman

1. **Test Health Endpoint:**
   - Method: `GET`
   - URL: `http://localhost:5000/home`
   - Expected: `hello moto`

2. **Test Summarization:**
   - Method: `POST`
   - URL: `http://localhost:5000/summarize`
   - Headers: `Content-Type: application/json`
   - Body:
   ```json
   {
     "text": "Artificial intelligence is transforming the world. Machine learning algorithms can now process vast amounts of data. Deep learning has enabled breakthroughs in computer vision. Natural language processing helps computers understand human language. AI is being applied across many industries today. The future of AI looks promising with continuous advancements."
   }
   ```

##  Project Structure

```
project/
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.tsx       # Main App component
│   │   └── index.tsx     # Entry point
│   ├── package.json      # Node dependencies
│   └── tsconfig.json     # TypeScript configuration
└── venv/                 # Virtual environment (not in repo)
```

##  How It Works

1. **Text Preprocessing**: 
   - Removes special characters and converts to lowercase
   - Filters out stopwords and punctuation

2. **TF-IDF Vectorization**:
   - Converts sentences into numerical vectors
   - Identifies important terms based on frequency

3. **Similarity Matrix**:
   - Calculates cosine similarity between all sentence pairs
   - Creates a graph representation of sentence relationships

4. **PageRank Algorithm**:
   - Ranks sentences based on their importance in the graph
   - Selects top 5 sentences for the summary

5. **Summary Generation**:
   - Returns the most important sentences in their original form

## ⚙️ Configuration

### Adjust Summary Length

To change the number of sentences in the summary, modify line in `app.py`:

```python
summary_sentences = [s for _, s in ranked_sentences[:5]]  # Change 5 to desired number
```

### CORS Settings

To restrict CORS to specific origins, modify in `app.py`:

```python
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
```

##  Troubleshooting

### NLTK Data Not Found
```bash
python -c "import nltk; nltk.download('punkt'); nltk.download('stopwords')"
```

### Port Already in Use
```bash
# Change port in app.py
app.run(debug=True, port=5001)
```

### CORS Errors
Ensure Flask-CORS is installed and CORS(app) is called before routes

##  Future Enhancements

- [ ] Support for multiple summarization algorithms
- [ ] Adjustable summary length from frontend
- [ ] File upload support (PDF, DOCX, TXT)
- [ ] Multi-language support
- [ ] Save and export summaries
- [ ] User authentication
- [ ] Summary history

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributors

- Krishal karna - Initial work

## 🙏 Acknowledgments

- NLTK for natural language processing tools
- NetworkX for graph algorithms
- scikit-learn for machine learning utilities
- Flask for the web framework
- React team for the amazing frontend library
