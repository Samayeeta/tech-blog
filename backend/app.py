from flask import Flask, request, jsonify
from flask_cors import CORS
from firebase import db_reference  # Import Firebase Realtime Database reference from firebase.py

# Initialize Flask app
app = Flask(__name__)
CORS(app)

@app.route('/submit-blog', methods=['POST'])
def submit_blog():
    try:
        # Retrieve form data
        data = request.form
        
        # Extract form data
        new_post = {
            'firstName': data.get('firstName'),
            'lastName': data.get('lastName'),
            'email': data.get('email'),
            'title': data.get('title'),
            'content': data.get('content'),
            'tags': data.get('tags').split(',') if data.get('tags') else [],
            'difficulty': data.get('difficulty'),
            'file': None  # Set the file field to null as you requested
        }

        # Push the blog post to Firebase Realtime Database
        db_reference.push(new_post)

        return jsonify({'message': 'Blog post added successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@app.route('/blogs', methods=['GET'])
def get_blogs():
    try:
        blogs = db_reference.get()  # Retrieve all blogs
        
        if blogs:
            blog_list = []
            for key, blog in blogs.items():
                # Extract relevant fields
                blog_data = {
                    "id": key,  # Use the Firebase key as ID
                    "title": blog.get("title", ""),
                    "content": blog.get("content", ""),
                    "tags": blog.get("tags", []),
                    "email": blog.get("email", ""),
                    "firstName": blog.get("firstName", ""),
                    "lastName": blog.get("lastName", ""),
                }
                blog_list.append(blog_data)
            
            return jsonify({"status": "success", "data": blog_list}), 200
        else:
            return jsonify({"status": "success", "data": []}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/blogs/<string:blog_id>', methods=['GET'])
def get_blog_by_id(blog_id):
    try:
        blogs = db_reference.get()  # Retrieve all blogs from Firebase Realtime Database
        if blogs and blog_id in blogs:
            blog = blogs[blog_id]  # Get the blog using the Firebase key
            blog_data = {
                "id": blog_id,  # Use Firebase key as ID
                "title": blog.get("title", "").strip('"'),
                "content": blog.get("content", ""),
                "email": blog.get("email", ""),
                "firstName": blog.get("firstName", "").strip('"'),
                "lastName": blog.get("lastName", "").strip('"'),
            }
            return jsonify({"status": "success", "data": blog_data}), 200
        else:
            return jsonify({"status": "error", "message": "Blog not found"}), 404
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
