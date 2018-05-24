pragma solidity ^0.4.21;

contract Math {
    uint a;
    uint b;

    constructor() public {
        a = 0;
        b = 0;
    }

    function seta(uint _a) public {
        a = _a;
    }

    function setb(uint _b) public {
        b = _b;
    }

    function add() public view returns(uint) {
        return a+b;
    }
    function sub() public view returns(uint) {
        return a-b;
    }
}
