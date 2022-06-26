module.exports = (RED) => {
    function ReverseNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        node.on("input", (msg) => {
            msg.payload = msg.payload.toString().split("").reverse().join("");
            node.send(msg);
        });
    };
    RED.nodes.registerType("reverse", ReverseNode);
};
