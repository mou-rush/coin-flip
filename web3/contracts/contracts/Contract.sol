// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function flipCoin(bool _guess) public payable {
        require(msg.value > 0, "Must send some ETH");

        // Generating a pseudo-random outcome (not secure for production)
        bool outcome = (block.timestamp % 2 == 0);

        if (_guess == outcome) {
            {/* Winner: sending back double the ETH*/}
            payable(msg.sender).transfer(msg.value * 2);
        }
        {/* Otherwise, the contract keeps the tokens  */}
    }

    {/* Allowing owner to withdraw funds from the contract */}
    function withdraw() public {
        require(msg.sender == owner, "Not the owner");
        payable(owner).transfer(address(this).balance);
    }
}
