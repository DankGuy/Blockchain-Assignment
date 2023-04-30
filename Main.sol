//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "utils/Strings.sol";
import "User.sol";
import "Authentication.sol";
import "Farm.sol";
import "DistributionCenter.sol";
import "Retailer.sol";
import "EndConsumer.sol";

contract Main is User, Authentication, Farm, DistributionCenter, Retailer, EndConsumer{
    address[] public userList;
    address[] public farmList;
    address[] public DCList;
    address[] public retailerList;
    address[] public consumerList;

}