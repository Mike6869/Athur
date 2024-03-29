from flask import Flask, jsonify, url_for, send_file
import os
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

IMG_TYPE = (".jpeg", ".jpg", ".png")
VIDEO_TYPE = ("mp4")

CORS(app)

@app.get('/slider_src')
def get_url_for_slider() -> 'json':
    return jsonify([f'/slider/{src}' for src in os.listdir('slider') if src.endswith(IMG_TYPE)])

@app.get('/galery_preview_src')
def get_url_for_galery_preview() -> 'json':
    photo_sessions = []
    for photo_session in os.listdir('page_galery'):
        dict_photo_session = {}
        for name_file in ['main', 'left', 'right']:
            for type in IMG_TYPE:
                photo_src = f'page_galery/{photo_session}/{name_file}{type}'
                if(os.path.isfile(photo_src)): 
                    dict_photo_session[name_file] = '/' + photo_src
        dict_photo_session['name'] = ' '.join(photo_session.split('_'))
        photo_sessions.append(dict_photo_session)
    return jsonify(photo_sessions)

@app.get('/get/<path:src>')
def get_img_for_src(src: str) -> 'Response':
    if (os.path.exists(src) and (src.endswith(IMG_TYPE) or src.endswith(VIDEO_TYPE))):
        return send_file(src)
    return "File not found", 404


if __name__ == '__main__':
    app.run(debug=True)
