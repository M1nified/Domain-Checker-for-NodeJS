# Domain Checker for NodeJS
Simple domain checker.
## Using
### Steps
##### 1 Setup
Save domain names in `targets.txt` file. Each domain name in one line.
It should look like this:
```text
google.pl
prowebject.com
somerandomdomain.com
```
##### 2 Run
Run `pinger.js` in terminal.
```bash
node pinger.js
```
##### 3 Finish
The result is stored in `score.txt`.

### Tips
Every result is appending to the end of `score.txt`, so make sure you removed it if you want to have new records only.
