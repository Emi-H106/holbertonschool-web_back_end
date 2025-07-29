#!/usr/bin/env python3
"""
Module to sum a mixed list of integers and
floating-point numbers with type annotations.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sum all elements in a mixed list of integers and floating-point numbers.
    """
    return sum(mxd_lst)
