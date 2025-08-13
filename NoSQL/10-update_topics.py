#!/usr/bin/env python3
"""
Function to update the topics of a school document
"""


def update_topics(mongo_collection, name, topics):
    """
    Updates the 'topics' field of all documents with the given school name.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
