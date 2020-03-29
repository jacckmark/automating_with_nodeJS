// output is working a lot like console.log but we have to remember to put newline
// on the end of it
process.stdout.write(`Hello, I'm writing to standard output\n`);
process.stdout.write(`Currently working directory: ${process.cwd()}\n`);
process.stdout.write(
    `This script has been running for: ${process.uptime()} seconds\n`
);

process.stdout.write(
    `Write something then hit enter (I'm talking to you my beautiful end user!!!)\n`
);
// to get input from end user we have first to set the encoding (here utf-8)
process.stdin.setEncoding("utf8");
// we have to "listen" to user typing and then we can (after checking that it is not empty)
// output it back to user
process.stdin.on("readable", () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`You wrote: ${chunk}`);
        process.exit(0);
    }
});
