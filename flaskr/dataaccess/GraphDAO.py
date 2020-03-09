from flaskr.db import get_db
from flaskr.dataaccess.entities.Graph import Graph

class GraphDAO:

    def __init__(self):
        pass

    def get_graph_by_name(self, name):
        db = get_db()
        cursor = db.cursor()
        try:
            row = cursor.execute('SELECT * FROM graph WHERE name=?',(name,)).fetchall()
            graphlist = list()
            for item in row:
                graphlist.append(Graph(item[0],item[1],item[2]))
            return graphlist
        except Exception as e:
            print('error in get_graph_by_name')
            print(e)
            return None
        finally:
            pass

    def get_graph_by_id(self, id):
        db = get_db()
        cursor = db.cursor()
        try:
            row = cursor.execute('SELECT * FROM MenuItem WHERE id=?',(id,)).fetchone()
            return Graph(row[0],row[1],row[2],row[3])
        except Exception as e:
            print('error in get_menu_item_by_id')
            print(e)
            return None
        finally:
            pass


    def insert_menu_item(self, name, price, restaurant):
        db = get_db()
        cursor = db.cursor()
        try:
            row = cursor.execute('INSERT into MenuItems (name,price,restaurant) VALUES (?,?,?)', (name,price,restaurant))
            db.commit()
            #row becomes the primary key of the newly created item
        except Exception as e:
            print('error in insert_menu_item')
            print(e)
            return None
        finally:
            pass
