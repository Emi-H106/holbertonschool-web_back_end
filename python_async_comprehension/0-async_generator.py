#!/usr/bin/env python3
"""
Asynchronously generates random floats between 0 and 10.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Asynchronously generates random floats between 0 and 10.
    Yields 10 random floats, each after a 1 second delay.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
