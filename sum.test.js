const {sum , fruits} = require("./sum") 
test('add 1 + 2 equal 3' , () => {
    expect(sum(1,4)).toBe(5)
})

test("check if array contains specific element" , () => {
    
    expect(fruits).toContain("strawberry")
    expect(fruits).toHaveLength(5)
})