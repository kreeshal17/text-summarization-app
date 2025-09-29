import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.tokenize import sent_tokenize
from sklearn.metrics.pairwise import cosine_similarity
from nltk.corpus import stopwords
from string import punctuation
import re
import networkx as nx
from flask import Flask,jsonify,request
from flask_cors import CORS




app=Flask(__name__)

CORS(app)





stop_words = stopwords.words("english") + list(punctuation)

# Preprocess function
def preprocess(sentence):
    sentence = re.sub(r'[^a-zA-Z]', " ", sentence)
    sentence = sentence.lower()
    sentence = " ".join([x for x in sentence.split() if x not in stop_words])
    return sentence

# Summarization function 
def summarize_text(text):
    sentences = sent_tokenize(text)
    cleaned_sentence = [preprocess(s) for s in sentences]
    vectored = TfidfVectorizer()
    v_matrix = vectored.fit_transform(cleaned_sentence)
    similarity = cosine_similarity(v_matrix, v_matrix)
    graph = nx.from_numpy_array(similarity)
    scores = nx.pagerank(graph, weight="weight")
    ranked_sentences = sorted(
        ((scores[i], s) for i, s in enumerate(sentences)),
        reverse=True
    )
    summary_sentences = [s for _, s in ranked_sentences[:5]]
    summary = " ".join(summary_sentences)
    return summary



   
    
@app.route("/home")
def welcome():
    return "hello moto"
    
@app.route("/summarize",methods=["POST"])
def summarise_api():
    data=request.get_json()
    text=data.get("text","")
    if not text:
        return jsonify({"error": "No text provided"}), 400
    answer=summarize_text(text)
    return jsonify({"answer":answer})
    
if __name__== "__main__":
    app.run(debug=True)       