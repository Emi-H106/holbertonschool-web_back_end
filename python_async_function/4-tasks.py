#!/usr/bin/env python3
"""
Concurrent coroutines example using asyncio and random module.
"""


import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list[float]:
    """
    Asynchronously waits for n random delays concurrently,
    each up to max_delay seconds.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)
    return delays
