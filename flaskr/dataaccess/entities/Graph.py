class Graph:

    def __init__(self, self_id=None, name=None, dataid=None):
        self.id = self_id
        self.name = name
        self.dataid = dataid

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'dataid': self.dataid
        }

