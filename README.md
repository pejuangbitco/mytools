<p align="center">A CLI to get log file in Linux.</p>
<br>


---

## Usage

```
~$ mytools --help
Usage: mytools <path_log_file> <options>

options:
-o | --output    Set output file.                               [path]

-t | --type      Set type of file output in json or text.       [string]

-h | --help      Show help.                                     [boolean]

```
<br>

## Installation

1. Clone the repository and then navigate to it.
2. Run ```npm install``` to install the dependencies.
3. Run ```npm install -g .``` to install the CLI. <br>
> :warning: **Be sure you have access** to write '/var/log/*' if you want use output file options
> :warning: **This might cause an error** which can be resolved easily by using ```sudo``` with the command
4. Now you are good to go and can use the CLI globally!

Type ```mytools``` or ```mytools -h``` to get started.

<br>

## License

MIT © ***mytools***
