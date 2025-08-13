#!/usr/bin/env python3
"""
Function to list schools having a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools where the 'topics' field
    contains the given topic.
    """
    return list(mongo_collection.find({"topics": topic}))
