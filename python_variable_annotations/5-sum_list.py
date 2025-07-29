#!/usr/bin/env python3
"""
Module to sum a list of floating-point numbers with type annotations.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sum all elements in a list of floating-point numbers.
    """
    return sum(input_list)
