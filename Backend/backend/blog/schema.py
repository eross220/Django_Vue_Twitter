import graphene
from blog import queries

schema = graphene.Schema(query=queries.Query)

