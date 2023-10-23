# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Certainly! Here's a point-wise summary of what the "CrowdFund" smart contract does:

1. **Contract Purpose**: The "CrowdFund" contract facilitates crowdfunding campaigns. Users can create campaigns, pledge funds to them, and claim or refund funds based on the campaign's outcome.

2. **Events**: The contract defines several events to log various activities within the crowdfunding campaigns. These events include "Launch," "Cancel," "Pledge," "Unpledge," "Claim," and "Refund."

3. **Campaign Structure**: The contract uses a struct called "Campaign" to represent each crowdfunding campaign. It stores information about the campaign's creator, fundraising goal, total pledged amount, start and end timestamps, and a boolean indicating whether the goal has been reached and funds have been claimed.

4. **Token**: The contract interacts with an ERC-20 token, which is provided as a constructor parameter and stored in the `token` variable. Users can pledge and receive funds in this token.

5. **Campaign Tracking**: The contract tracks campaigns using a unique identifier called "id." It also maintains a count to keep track of the total number of campaigns created.

6. **Campaign Mapping**: The "campaigns" mapping associates each campaign's ID with its corresponding struct, allowing easy access to campaign details.

7. **Pledge Tracking**: Funds pledged to campaigns are tracked using the "pledgedAmount" mapping. It maps campaign IDs to pledging addresses, recording the amount each address has pledged.

8. **Campaign Creation**: Users can create new campaigns by calling the "launch" function, providing the fundraising goal, start and end timestamps for the campaign. These campaigns are assigned a unique ID and are logged through the "Launch" event.

9. **Campaign Cancellation**: Campaign creators can cancel their campaigns using the "cancel" function. However, this is only possible if the campaign has not yet started. The campaign is deleted, and a "Cancel" event is logged.

10. **Pledging Funds**: Users can pledge funds to a campaign using the "pledge" function, specifying the campaign ID and the amount they want to pledge. The funds are transferred to the contract, and the "Pledge" event is logged.

11. **Unpledging Funds**: Users can unpledge funds from a campaign using the "unpledge" function. The pledged amount is returned to the user, and the "Unpledge" event is logged.

12. **Claiming Funds**: Campaign creators can claim the pledged funds using the "claim" function. This is only possible if the campaign has ended, the goal has been reached, and the funds have not been claimed previously. The pledged funds are transferred to the campaign creator, and the "Claim" event is logged.

13. **Refunding Funds**: If the campaign's goal is not reached, users who pledged funds can request refunds using the "refund" function. The pledged amount is returned to the user, and the "Refund" event is logged.

14. **Summary**: In essence, the "CrowdFund" contract allows users to create, pledge to, cancel, and manage crowdfunding campaigns in a decentralized manner. Campaign creators can claim funds if their goals are met, while supporters can receive refunds if the goals are not met. It provides transparency and automation for crowdfunding campaigns using an ERC-20 token.
