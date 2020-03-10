from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify, make_response, current_app, session, send_file
)
from flaskr.services.GraphService import GraphService
import json
bp = Blueprint('index', __name__)

@bp.route('/')
def index():
    url_saved = session.get('url_saved')
    if url_saved is not None:
        session.clear()
        return redirect(url_for('index.index') + url_saved)

    query_string_query = request.args.get('query')
    query_string_search = request.args.get('search')
    #results = MenuItemService().get_menu_item_by_names('Burger')
    #print(results)
    #returnlist = list()
    #for item in results:
        #returnlist.append(item.serialize())
    return render_template('index.html',result=json.loads(json.dumps(returnlist)),test='steven is gay')