boolean b1 = (5 == 5) || (4 == 4); // true OR true
boolean b2 = (5 == 5) || (4 == 3); // true OR false
boolean b3 = (5 == 3) || (4 == 3); // false OR false
println(b1); // true
println(b2); // true
println(b3); // false
println("-----");

boolean b4 = (5 == 5) && (4 == 4); // true AND true
boolean b5 = (5 == 5) && (4 == 3); // true AND false
boolean b6 = (5 == 3) && (4 == 3); // false AND false
println(b4); // true
println(b5); // false
println(b6); // false
println("-----");

println(!true); // false
println(!false); // true