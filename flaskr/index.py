from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify, make_response, current_app, session, send_file
)
from flaskr.services.GraphService import GraphService
import json
bp = Blueprint('index', __name__)

@bp.route('/')
def index():
    return render_template('index.html',test='steven is gay')

@bp.route('/about')
def about():
    return 'yolo'

@bp.route('/graph')
def graph():
    graph = GraphService().get_graph_item_by_names('richest people in the world')
    return 'graph: ' + str(graph[0].dataid)

@bp.route('/insertgraph')
def insertgraph():
    name = request.args.get('name')
    dataid = request.args.get('dataid')
    GraphService().insert_graph(name,dataid)
    return 'OK'