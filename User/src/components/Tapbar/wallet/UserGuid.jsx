import React from "react";
import NavPramotion from "../../pramotion/NavPramotion";
import userGuid from '../../../assets/userguid.jpg'
import userGuid2 from '../../../assets/userguid2.jpg'

const DepositIssueHelp = () => {
  return (
    <main className="course_main">
        <NavPramotion heading="User Guide" linkPath="/submitUTR"/>
      <div className="mx-3 bg-white text-base">
        <h2>
          <strong style={{ backgroundColor: "rgb(240, 102, 102)" }}>
            DEPOSIT ISSUE: NOT RECEIVED
          </strong>
        </h2>
        <p>
          <strong>Q:</strong> How can I report an issue regarding a deposit that
          hasn't been received on the DamanGames self-service center?
        </p>
        <p>
          <strong>A:</strong> To report a deposit not received on the DamanGames
          self-service center, follow these steps:
        </p>
        <ol>
          <li>
            Log in to your account at:{" "}
            <a
              href="https://damangames.bet/#/login"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://damangames.bet/#/login
            </a>
          </li>
          <li>Click on the Customer Service icon.</li>
          <li>Choose the option “Deposit Not Received.”</li>
          <li>Click on “Submit UTR” for the deposit transaction you have completed.</li>
          <li>Enter the UTR number from your deposit receipt.</li>
          <li>Provide the UPI ID of the recipient as shown on your deposit receipt.</li>
          <li>Upload a clear and detailed image of your deposit receipt.</li>
          <li>
            If in 3 days you still haven't received the deposit, provide your bank
            statement.
          </li>
          <li>Click “Confirm” to submit your request.</li>
        </ol>
        <img
          src={userGuid}
          alt="Deposit Not Received Example"
        />
        <p>
          <strong>Q:</strong> I’m unsure about where to find the UTR number and
          Receiver UPI ID. Can you help?
        </p>
        <p>
          <strong>A:</strong> You can locate the UTR number and Receiver UPI ID
          in the banking or wallet app you used for the deposit. Follow these
          steps:
        </p>
        <ol>
          <li>Open the banking or wallet app you used to make the deposit.</li>
          <li>Navigate to the transaction history or inbox section.</li>
          <li>Select the specific transaction related to your deposit to view the details.</li>
        </ol>
        <p>
          You can also refer to the example photo below for guidance on what to look
          for on your deposit receipt:
        </p>
        <ul>
          <li>Deposit Amount</li>
          <li>Receiver UPI ID</li>
          <li>UTR Number</li>
          <li>Date and Time of the Transaction</li>
        </ul>
        <p>
          Ensure these details are clearly visible and detailed to help our deposit
          department process your request more efficiently.
        </p>
        <img
          src={userGuid2}
          alt="Example Receipt"
        />
        <h2>STATUS ISSUE</h2>
        <p>
          <strong>Q:</strong> How can I check the status of my “Deposit Not
          Received” issue on the self-service center at DamanGames?
        </p>
        <p>
          <strong>A:</strong> To check the status of your issue, select the “Progress
          Query” option. This will allow you to review the status of all orders you
          have submitted through the self-service center.
        </p>
        <h2>SUCCESS STATUS</h2>
        <p>
          <strong>Q:</strong> I’ve checked and the status is marked as “Success”
          with a note saying, “Deposit successfully processed to your account with
          UTR: xxxx and Deposit Order: xxxx.” What does this mean?
        </p>
        <p>
          <strong>A:</strong> This indicates that our deposit team has reviewed and
          successfully processed your deposit into your DamanGames account. You
          should now check your DamanGames account to see if the balance has been
          updated.
        </p>
        <h2>REJECT STATUS</h2>
        <p>
          <strong>Q:</strong> What if my status is “Reject”? I need to understand
          if my deposit issue was rejected by the DamanGames deposit team.
        </p>
        <p>
          <strong>A:</strong> If your issue is marked as “Reject,” here’s what you
          need to know:
        </p>
        <ul>
          <li>
            <strong>Reject “UTR number incorrect, please contact bank”</strong>: This
            means there might be an issue with the UTR number provided. Contact your
            bank or wallet app to verify the UTR number.
          </li>
          <li>
            <strong>Reject “Deposit on queue for checking, please wait”</strong>: Your
            deposit has not yet been received by the DamanGames deposit team. Please
            wait patiently; there’s no need to resubmit the request. Our team will
            track and address it. You might also want to check with your bank regarding
            the UTR status.
          </li>
          <li>
            <strong>Reject “Provide clear and detailed proof of deposit”</strong>: The
            deposit proof you submitted is either incomplete or unclear. Ensure that
            your proof includes the deposit amount, UTR number, receiver's UPI ID, and
            the date and time of the transaction.
          </li>
          <li>
            <strong>Reject “ID account incorrect. Provide the correct ID”</strong>:
            Verify that the ID account submitted on the self-service center is
            correct. If it’s not, please correct it and resubmit.
          </li>
          <li>
            <strong>Reject “Provide correct deposit proof receipt”</strong>: Ensure that
            the deposit proof receipt you submitted is accurate and valid. It should
            be a legitimate proof of deposit.
          </li>
          <li>
            <strong>Reject “ID and receipt do not match”</strong>: Check that the
            deposit details (date, time, amount, and payment channel) on your
            DamanGames account match those on your deposit receipt.
          </li>
          <li>
            <strong>Reject “Order number does not match, check again”</strong>: The
            order number you submitted does not align with our records. This could mean
            there was an error in the ID or proof of deposit you provided. Please
            review and correct the information before resubmitting.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default DepositIssueHelp;
