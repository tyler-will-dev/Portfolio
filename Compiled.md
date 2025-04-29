# TryHackMe Write-Up: Compiled

## Overview
**Room:** Compiled  
**Goal:** Pull apart a 64-bit Linux ELF to extract the required password.

## Tools Used
- `strings` (Sysinternals or GNU `binutils`)
- `objdump` (GNU `binutils`)
- Any Linux VM or container (Ubuntu/Debian)
- *(Optional)* Ghidra or IDA Free for visual analysis

---

## 1. Initial Recon: `strings`

The first step was running `strings` against the binary. It immediately revealed a few interesting clues:

```
Password:
DoYouEven%sCTF
Correct!
Try again!
__dso_handle
_init
```

The format string `DoYouEven%sCTF` strongly hinted that the program uses `scanf` with `%s`, meaning it slices part of our input dynamically.

---

## 2. Digging Deeper: Locating the `scanf` Call

Next, I disassembled the `.text` section around `main` using:

```bash
objdump -d Compiled --no-show-raw-insn | sed -n '/<main>/,/<_fini>/p'
```

From the output, the logic inside `main` became clear:

- Print a prompt using `fwrite`
- Call `__isoc99_scanf("DoYouEven%sCTF", buf)`
- Compare `buf` with two strings:
  - `strcmp(buf, "__dso_handle")`
  - `strcmp(buf, "_init")`
- Branch based on comparison results:
  - If successful, print "Correct!"
  - Otherwise, print "Try again!"

This confirmed that the goal was for `buf` to match `_init`, but **not** match `__dso_handle`.

---

## 3. How `scanf("DoYouEven%sCTF", buf)` Actually Works

Here's what happens internally:

- `scanf` expects your input to match **DoYouEven** exactly.
- It then reads and captures characters into `buf` until it hits whitespace or mismatch.
- After `%s`, it expects to match **CTF** immediately.

If matching fails (for example, if after `%s` the next character is not `C`), scanning stops and `buf` contains whatever was captured.

In practice:

```
You type:    DoYouEven<payload>CTF
scanf captures: <payload>
```

---

## 4. Finding the Right Payload

We need a `<payload>` that satisfies:

```c
strcmp(payload, "__dso_handle") != 0
strcmp(payload, "_init") == 0
```

Clearly, the correct payload must be `_init`.

---

## 5. Final Password

Putting it all together:

You must enter:

```
DoYouEven_<redacted>
```

However, only the `_init` part gets captured by `scanf` and checked by the program logic.

Thus, the final password you submit is:

```
<redacted>
```

It matches the room hint (9 characters + underscore + 4 characters).

---

## 6. Submission & Validation

- Paste <redacted> into the "What is the password?" field.
- Submit it.
- Receive confirmation: **"Correct!"**

---

## Lessons Learned

- `scanf` format strings can be abused in CTFs to slice and capture only parts of your input.
- Static analysis (disassembling and looking at `movabs` + `strcmp` instructions) makes extracting expected values straightforward.
- Always verify how scanning and matching behave when using tricky format strings like `%s`.

---

✅ Challenge complete!
