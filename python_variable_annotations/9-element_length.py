#!/usr/bin/env python3
"""
Module to return the length of each element in a list with type annotations.
"""

from typing import Iterable, Sequence, Tuple, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return a list of tuples containing each element and its length.
    """
    return [(i, len(i)) for i in lst]
