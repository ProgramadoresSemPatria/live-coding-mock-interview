# Live Coding Mock Interview 4 - Blockchain Simulator
Implement a simple blockchain node simulator where multiple nodes reach consensus on a simple operation (like adding two numbers). Each node runs in its own process, and when a request is made, the nodes must communicate, reach consensus, and return the result.

## Features
- [ ] Implement the node process
- [ ] Implement a solution for handling requests in a decentralized way so that all nodes participate in the process
- [ ] Implement communication between the nodes or between brokers and nodes using any protocol you desire

## Bonus Features
- [ ] Log operations to a file or stdout
- [ ] Add a CLI flag (`--faulty`) to make a node faulty, returning a random result instead of the correct value

Example (basic):
```bash
for i in {1..5}; do
  ./node &
done

./master &

curl -d '{"num1": 1, "num2": 3}' <MASTER_IP> # Should return 4
```

Example (advanced):
```bash
for i in {1..5}; do
  if (( i % 2 == 0 )); then
    echo "Starting faulty node $i"
    ./node --faulty &
  else
    echo "Starting normal node $i"
    ./node &
  fi
done

./master &

curl -d '{"num1": 1, "num2": 3}' <MASTER_IP> # Should return 4
```