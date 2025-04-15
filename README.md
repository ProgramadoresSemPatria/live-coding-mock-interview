# Live Coding Mock Interview 9 – Rust Unix Utilities

Reimplement basic Unix utilities using Rust. The goal is to evaluate your familiarity with systems programming, idiomatic Rust, and CLI design. You will build a series of small CLI programs, each increasing in complexity.

**You may use any Rust standard or third-party crate. Shelling out to system binaries (e.g. `exec`, `Command::new("ls")`) is **not allowed**. Focus on clean, idiomatic, and functional Rust.**

## Tasks

### Task 1: `ls` – List Directory Contents

- [ ] Accept a path as input and list files and directories within it.
- [ ] Default to the current directory if no path is provided.

**Example:**
```bash
my_ls ./src
```

**Example Output:**
```
main.rs
lib.rs
utils
```

#### Bonus Goals
- [ ] `-a` flag: Show hidden files.
- [ ] `-l` flag: Show details (permissions, size, modified time).
- [ ] Sort results alphabetically.

---

### Task 2: `grep` – Search for Matching Lines

- [ ] Search a file for lines matching a text pattern.
- [ ] Print all matching lines.

**Example:**
```bash
my_grep error ./logs.txt
```

**Example Output:**
```
[ERROR] Failed to load config
[ERROR] Out of memory
```

#### Bonus Goals
- [ ] `-i` flag: Case-insensitive search.
- [ ] `-n` flag: Show line numbers.
- [ ] Support regex patterns (use `regex` crate).

---

### Task 3: `find` – Recursively Find Files by Name

- [ ] Recursively walk a given directory.
- [ ] Print all files whose names exactly match the input.

**Example:**
```bash
my_find ./src main.rs
```

**Example Output:**
```
./src/main.rs
./src/bin/main.rs
```

#### Bonus Goals
- [ ] Filter by file extension (e.g. `.rs`, `.txt`).
- [ ] Match by partial name or regex.
- [ ] `-d` flag: Include directories in results.
- [ ] Use multi-threading for traversal speed-up (optional).
