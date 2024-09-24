"use strict";

var _sdk = require("@wasmer/sdk");
var cowsay = _sdk.Wasmer.fromRegistry("cowsay");
var instance = await cowsay.entrypoint.run({
  args: "\"Hello world\""
});
var output = await instance.wait();
