from kitconcept import api
from plone.restapi.interfaces import ISerializeToJson
from plone.restapi.serializer.dxcontent import SerializeToJson
from portal_uft.content.campus import ICampus
from portal_uft.interfaces import IPORTAL_UFTLayer
from zope.component import adapter
from zope.interface import implementer


@implementer(ISerializeToJson)
@adapter(ICampus, IPORTAL_UFTLayer)
class CampusSerializer(SerializeToJson):
    """Custom serializer for Person content type."""

    def __call__(self, **kwargs):
        serialization = super().__call__(**kwargs)
        serialization["persons"] = [
            api.content.serialize(person, summary=True)
            for person in self.context.persons()
        ]
        return serialization
