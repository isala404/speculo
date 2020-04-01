from mongoengine import Document, StringField, ListField, BooleanField, connect


class Face(Document):
	face_id = Document.pk
	face_label = StringField(max_length=50)
	face_matrix = ListField(required=True)
	blacklisted = BooleanField()


connect(
	db='face',
	username='user',
	password='4313Samadhi',
	host='mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/speculo'
)

for x in Face.objects:
	print(x)


class Blacklister:
	def __init__(self, face_id):
		self.face_id = face_id
		
	def blacklist(self):
		pass