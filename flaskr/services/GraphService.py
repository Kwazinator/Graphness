from flaskr.dataaccess.MenuItemDAO import MenuItemDAO
import json
import datetime
from dateutil.relativedelta import relativedelta
from flask import current_app
import re

class MenuItemService:

    def __init__(self):
        pass

    def get_menu_item_by_names(self, name):
        #maybe do some regex
        name = name.lower() #make lowercase
        return MenuItemDAO().get_menu_item_by_names(name)

    def get_menu_item_by_id(self, id):
        return MenuItemDAO().get_menu_item_by_id(id)

    def insert_menu_item(self, name, price, restaurant):
        result = MenuItemDAO().insert_menu_item(name,price,restaurant)
        if result == None:
            return 'Unable to add item to website'
        else:
            return 'Sucessfully added!'