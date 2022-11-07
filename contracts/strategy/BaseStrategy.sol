//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../ceros/interfaces/IWETH.sol";
import "./IBaseStrategy.sol";

abstract contract BaseStrategy is
IBaseStrategy,
OwnableUpgradeable,
PausableUpgradeable,
ReentrancyGuardUpgradeable {

    address public strategist;
    address public destination;
    address public rewards;

    // IWETH public underlying;

    bool public depositPaused;

    event UpdatedStrategist(address strategist);
    event UpdatedRewards(address rewards);
    event UpdatedPerformanceFee(uint256 performanceFee);

    function __BaseStrategy_init(
        address destinationAddr,
        address rewardsAddr
        // address underlyingToken
    ) internal initializer {
        __Ownable_init();
        __Pausable_init();
        __ReentrancyGuard_init();
        strategist = msg.sender;
        destination = destinationAddr;
        rewards = rewardsAddr;
        // underlying = IWETH(underlyingToken);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyStrategist() {
        require(msg.sender == strategist);
        _;
    }

    modifier whenDepositNotPaused() {
        require(!depositPaused, "deposits are paused");
        _;
    }

    function _beforeDeposit(uint256 amount) internal virtual returns (bool) {
    }

    function balanceOfWant() public view returns(uint256) {
        return address(this).balance;
    }

    function balanceOfPool() public virtual view returns(uint256) {
        return address(destination).balance;
    }

    function balanceOf() public view returns(uint256) {
        return address(this).balance + address(destination).balance;
    }

    function pause() external onlyStrategist {
        depositPaused = true;
    }

    function unpause() external onlyStrategist {
        depositPaused = false;
    }

    function setStrategist(address newStrategist) external onlyOwner {
        require(newStrategist != address(0));
        strategist = newStrategist;
        emit UpdatedStrategist(newStrategist);
    }
    
    function setRewards(address newRewardsAddr) external onlyOwner {
        require(newRewardsAddr != address(0));
        rewards = newRewardsAddr;
        emit UpdatedRewards(newRewardsAddr);
    }
}
