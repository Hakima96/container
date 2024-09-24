import { Wasmer } from "@wasmer/sdk";

let cowsay = Wasmer.fromRegistry("cowsay");
let instance = await cowsay.entrypoint.run({
  args: "\"Hello world\""
  });
let output = await instance.wait();
