import areaOfCircle from "../utils/some-function.js";
import {test, expect, describe} from "@jest/globals";

test('calculate area of a circle', function(){
    expect(areaOfCircle(2)).toBe(12)
})


