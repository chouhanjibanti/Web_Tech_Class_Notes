Event loop in jS :- how run the JS program

1. Stack :- it follow FILO and LIFO , [first in last out] [last in first out]
2. Queue :- pipe , FIFO [First in first out]
3. Event loop :- task taken and task given


Queue :- we have two type of queue:- 
1. Microtask Queue :- promises, queuemicrotask  - first priority
2. Macrotask Queue :- setTimeOut and setInterval , setImmediate - second priority


Event Loop in Javascript :-

Event Loop -> loops
Call stack -> FILO
Queue -> FIFO
web Apis -> times ,events

JavaScript has two queues:-

Micro task Queue :- Promises , queueMicroTask - first
Macro task Queue :- setTimeOut , setInterval - second

[ Call Stack ]
↑
| (if stack is empty)
[ Event Loop ]
↓
[ Microtask Queue ] (first priority)
↓
[ Macrotask Queue ] (after microtasks)

| Concept         | Description                                             |
| --------------- | ------------------------------------------------------- |
| **Call Stack**  | Executes code one function at a time (LIFO)             |
| **Web APIs**    | Browser handles async tasks (timers, events)            |
| **Event Queue** | Stores callbacks waiting to be executed                 |
| **Event Loop**  | Moves tasks from queue to stack when the stack is empty |