import { greet } from "./Greeter";

function main(): void {
  greet((message) => console.log(message));
}

main();
