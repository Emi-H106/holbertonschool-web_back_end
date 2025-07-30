#!/usr/bin/env python3
"""
Concurrent coroutines example using asyncio and random module.
"""
import asyncio
import random


async def async_generator():
    """
    Asynchronously generates random floats between 0 and 10.
    Yields 10 random floats, each after a 1 second delay.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
