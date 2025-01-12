import React from "react";
import '../styles/Guildelines.css'

const Guildelines = () => {
  return (
  <div className="guidelineContainer">
    <div className="guidelineHeader">
      <h1> Guidelines </h1>
      <p>Ensuring Safe, Fair, and Sustainable Transactions for Buyers/Givers and Sellers/Receivers</p>
    </div>
    <div className="guidelineSellerGiver">
      <h2>For Sellers / Givers</h2>
      <ol>
        <li>Verification Required</li>
          <ul>
            <li>
            You must complete the verification process (NIN/BVN) to list items. This helps ensure trust and safety on the platform.
            </li>
          </ul>
        <li>
            Accurate Descriptions
        </li>
          <ul>
            <li>
            Clearly describe the true condition of the item, including any defects or damage.
            </li>
            <li>
             Use high-quality, recent photos to avoid misunderstandings.
            </li>
            <li>
            Listed or purchased should not be part of the Prohibited Items List (e.g., hazardous materials, restricted goods).
            </li>
          </ul>
        <li> Fair Pricing </li>
          <ul>
            <li>
            Set realistic prices based on the item’s condition, market value, and demand. If giving for free, ensure the item is still functional (where applicable).
            </li>
          </ul>
        <li> Public Meetups</li>
          <ul>
            <li>For exchanges requiring in-person meetups, choose public, well-lit, and busy locations for safety.</li>
            <li>Only share exact pickup location after buyer has paid or a a receiver has accepted to pickup</li>
          </ul>
        <li>No Hidden Charges</li>
          <ul>
          <li>Be upfront about any additional costs, such as delivery or handling fees, during negotiations.</li>
          </ul>
        <li>Return Responsibility</li>
          <ul>
            <li>
            If the item delivered doesn’t match the description or photos, you are required to accept a return and cover the return shipping costs.
            </li>
          </ul>
      </ol>
    </div>
    <div className="guidelineBuyerReceivers">
      <h2> For Buyers / Receivers </h2>
      <ol>
        <li>Verification Required </li>
        <p>All buyers must verify their accounts (BVN / NIN) before initiating transactions. This helps ensure trust and safety on the platform.</p>
        <li>Timely Payments</li>
        <p>Payments must be completed within 2 hours of initiating a transaction to avoid cancellations.</p>
        <li> Report Issues Promptly </li>
        <p> If an item is not as described or you encounter fraud, report it to ReUseNG within 24 hours for resolution.</p>
        <li>Resolve Disputes Amicably </li>
        <p>Attempt to resolve any disputes directly before involving ReUseNG’s support team</p>
        <li> Prohibited Items</li>
        <p>Ensure items listed or purchased are not part of the Prohibited Items List (e.g., hazardous materials, restricted goods).</p>
      </ol>
    </div>
  </div>
  )
}
export default Guildelines