import { greet } from "./Greeter"

describe('Greeter', () => {
    it('should greet us with Hello world', () => {
        const fn = jest.fn()
        
        greet(fn)

        expect(fn).toBeCalledWith('Hello world!')
    })
})