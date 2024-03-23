from flask import Flask, jsonify, url_for, send_file
import os
from flask_cors import CORS
import base64
app = Flask(__name__)
CORS(app)

IMG_TYPE = (".jpeg", ".jpg", ".png")


@app.route('/entry')
def entry_return():
    test = {'test': 123}
    return jsonify(test)


CORS(app)


@app.get('/img')
def get_img():
    return send_file("1.jpg")


@app.get('/slider_src')
def get_url_for_slider() -> 'json':
    return jsonify([f'/slider/{src}' for src in os.listdir('slider') if src.endswith(IMG_TYPE)])


@app.get('/get_img/<path:src>')
def get_img_for_src(src: str) -> 'Response':
    if (os.path.exists(src) and src.endswith(IMG_TYPE)):
        return send_file(src)
    return "File not found", 404


# @app.get('/get_video/<test>')
# def get_video_for_src(test):
#     return send_file(f'video/{test}')


if __name__ == '__main__':
    app.run(debug=True)
