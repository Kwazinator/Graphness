class Graph:

    def __init__(self, self_id=None, name=None, type=None):
        self.id = self_id
        self.name = name
        self.type = type

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type
        }

