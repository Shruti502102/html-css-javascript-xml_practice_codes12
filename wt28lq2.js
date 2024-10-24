//q2
function exampleLet() {
    let x = 10;
    if (true) {
        let x = 20; // different variable
        console.log(x); // 20
    }
    console.log(x); // 10
}
//q3
exampleLet();
function exampleConst() {
    const y = 30;
    console.log(y); // 30
    
    // y = 40; // Uncommenting this line will cause an error because `y` is constant

    const obj = {name: "Alice"};
    obj.name = "Bob"; // This is allowed, as the reference is constant, not the content
    console.log(obj.name); // Bob
}

exampleConst();

