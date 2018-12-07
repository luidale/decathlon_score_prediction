from flask import Flask, render_template 
app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")
	
@app.route("/lingid")
def links():
    return render_template("links.html")

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
    #app.run(use_reloader=True)