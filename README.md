# reverse

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
](https://opensource.org/licenses/ISC)

A simple Node-RED node that reverses the string representation of `msg.payload`.

## Features

*   Reverses any payload by first converting it to a string.
*   Handles strings, numbers, booleans, and other data types.
*   Preserves the original message structure, only modifying the `msg.payload` property.
*   Zero dependencies for a lightweight installation.

## Installation

To install this node, you can either use the Node-RED Palette Manager or install it from the command line.

### Via Palette Manager

1.  Open the "Manage palette" menu in your Node-RED editor.
2.  Go to the "Install" tab.
3.  Search for `reverse`.
4.  Click the "install" button for this node.

### Via Command Line

1.  Navigate to your Node-RED user directory (e.g., `~/.node-red`).
2.  Run the following command:
    ```bash
    npm install reverse
    ```
3.  Restart your Node-RED instance.

## Usage

Find the `reverse` node in the `function` category of your node palette.

The node accepts any message and reverses its payload. It first converts the incoming `msg.payload` to a string before reversing it character-by-character.

### Example Flow

1.  Drag an `Inject` node, a `reverse` node, and a `Debug` node onto the workspace.
2.  Connect them in that order: `Inject` → `reverse` → `Debug`.
3.  Configure the `Inject` node to send a payload, for example:
    *   A string: `"hello world"`
    *   A number: `12345`
4.  Deploy the flow and click the `Inject` node's button.
5.  The debug sidebar will show the reversed payload:
    *   `"dlrow olleh"`
    *   `"54321"`

### Input

*   `msg.payload` (`any`): The data to be reversed. The node will automatically convert this value to a string.

### Output

*   `msg.payload` (`string`): The reversed string.

## Blog Post

For more context on the creation of this node, see the author's blog post:
https://fukuno.jig.jp/3621

## License

ISC License